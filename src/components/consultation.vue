<template>
    <div class="consultation" id="consultation">
        <h2 class="neucha">Отримайте безкоштовну консультацію</h2>
        <div class="consultation_wrapper">
            <img loading="lazy" src="../assets/3.webp" alt="Професійний догляд за улюбленцем в Одесі - Профессиональный уход за питомцем в Одессе">
            <form method="post" class="consultation_form" @submit="sendConsultationLead($event)">
                <span>
                    <label for="name" class="montserrat_medium">Ваше ім`я</label>
                    <input type="text" :class="{'error': emptyError === 'name'}" name="name" placeholder="Ім`я" required v-model="leadData.name" autocomplete="name">
                </span>
                <span>
                    <label for="phone" class="montserrat_medium">Номер телефону</label>
                    <input type="phone" :class="{'error': emptyError === 'phone'}" name="phone" autocomplete="tel" placeholder="Номер телефону" required v-model="leadData.phone" >
                </span>
                <!-- <span>
                    <label for="email" class="montserrat_medium">E-mail</label>
                    <input type="email" :class="{'error': emptyError === 'email'}" name="email" autocomplete="email" placeholder="E-mail" required v-model="leadData.email">
                </span> -->
                <span class="desc">
                    <label for="desc" class="montserrat_medium">Ваше запитання</label>
                    <textarea name="desc" cols="30" rows="10" placeholder="Ваше запитання"
                        v-model="leadData.text"></textarea>
                </span>
                <button type="submit" :class="{ 'buttonError': sendError }" id="sendButton">{{ sendButtonText
                    }}</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { sendMessageToTelegramBot } from '../methods/sendLead.js';
import { deleteError } from '../methods/deleteError.js'
import validator from 'validator';

const leadData = ref({
    name: null,
    phone: null,
    // email: null,
    text: null
})

const sendButtonText = ref('Отримати консультацію')
const sendError = ref(false)
const emptyError = ref('')
const isValidEmail = ref(false);
const isValidPhone = ref(false)

// const validateEmail = () => {
//     isValidEmail.value = validator.isEmail(leadData.value.email);
// };

const validatePhone = () => {
    isValidPhone.value = validator.isMobilePhone(leadData.value.phone.trim(), 'uk-UA')
}

async function sendConsultationLead() {
    event.preventDefault()
    const button = document.getElementById('sendButton')
    const data = leadData.value
    // validateEmail()
    validatePhone()

    if (data.name === null || data.name.length <= 1) {
        emptyError.value = 'name';
        deleteError(emptyError)
        return
    } else if (!isValidPhone.value) {
        emptyError.value = 'phone';
        deleteError(emptyError)
        return
    }
    // } else if (!isValidEmail.value) {
    //     emptyError.value = 'email';
    //     deleteError(emptyError)
    //     return
    // }
    button.disabled = true;

    try {
        const newMessage = `Заявка на консультацію \n${data.name} \n${data.phone} ${data.text === null? '': `\n${data.text}`} \n${window.location.href}`
        await sendMessageToTelegramBot(newMessage)
        sendButtonText.value = 'Відправлено!'
        gtag('event', 'form_submission', {
            event_category: 'Form',
            event_label: 'Consultation Form',
            form_name: 'Consultation Form'
            });
        ttq.track('Contact')
        fbq('track', 'CompleteRegistration')
        setTimeout(() => {
            button.disabled = false;
            sendButtonText.value = 'Отримати консультацію'
        }, 5000);
    } catch (error) {
        sendButtonText.value = 'Щось пішло не так, спробуйте ще раз'
        sendError.value = true
        button.disabled = false;
        setTimeout(() => {
            sendButtonText.value = 'Отримати консультацію'
            sendError.value = false
        }, 3000);
        console.log(error);
    }
}
</script>

<style scoped lang="scss">
.consultation {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 15px;

    h2 {
        font-size: 4rem;
        margin-bottom: 30px;
        text-align: center;
    }

    .consultation_wrapper {
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        width: 100%;

        img {
            width: 100%;
            max-width: 700px;
            position: absolute;
            top: 40px;
            left: 125px;
        }

        .consultation_form {
            padding: 15px 25px;
            width: 100%;
            max-width: 500px;
            border: 2px solid var(--orange_color);
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
            z-index: 1;
            position: relative;
            background-color: #fff;
            font-size: 1.2rem;

            span {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                margin: 20px 0;

                input,
                textarea {
                    border: 2px solid var(--yellow_color);
                    border-radius: 16px;
                    padding: 10px;
                    margin-top: 10px;
                }

                .error {
                    border: 2px solid red !important;
                }
            }

            button {
                text-transform: uppercase;
                font-weight: 600;
                border: 1px solid var(--orange_color);
                border-radius: 15px;
                padding: 10px 25px;
                background-color: var(--yellow_color);
                margin-top: 15px;
            }

            button:hover {
                background-color: var(--orange_color);
                transition: 0.7s;
            }

            .buttonError {
                background-color: #ff3f3f !important;
            }
        }
    }
}

@media screen and (max-width: 980px) {
    .consultation .consultation_wrapper img {
        max-width: 500px;
        left: 0;
    }
}

@media screen and (max-width: 760px) {
    .consultation .consultation_wrapper {
        justify-content: center;

        img {
            display: none;
        }
    }
}


@media screen and (max-width: 760px) {
    .consultation h2 {
        font-size: 3rem;
    }
}
</style>