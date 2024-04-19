<template>
    <div class="appointment_wrapper">
        <div class="appointment_block">
            <div class="title_block">
                <h2 class="neucha">Оформлення запису</h2>
                <div class="close" @click="$emit('close')">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="225.000000pt" height="225.000000pt"
                        viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#514f4f"
                            stroke="none">
                            <path d="M405 2239 c-19 -5 -95 -73 -212 -191 -172 -173 -182 -185 -188 -230
                                -13 -89 -6 -99 301 -408 l283 -285 -283 -285 c-307 -309 -314 -318 -301 -408
                                6 -45 15 -56 193 -234 168 -167 191 -187 228 -193 95 -15 104 -8 414 301 l285
                                283 285 -283 c309 -307 318 -314 408 -301 45 6 56 15 234 193 167 168 187 191
                                193 228 15 95 8 104 -301 414 l-283 285 283 285 c307 309 314 319 301 408 -6
                                45 -15 56 -193 234 -178 178 -189 187 -234 193 -89 13 -99 6 -408 -301 l-285
                                -284 -275 275 c-172 172 -290 283 -316 295 -43 21 -80 24 -129 9z" />
                        </g>
                    </svg>
                </div>
            </div>
            <div class="navigation_block">
                <div :class="step >= 1 ? 'breed_active' : 'breed'">
                    <svg :class="step >= 1 ? 'active' : ''" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M53 204 c-8 -22 10 -49 33 -49 21 0 33 40 17 56 -6 6 -8 -2 -5 -21 3
                                -23 0 -30 -12 -30 -22 0 -31 27 -16 45 9 11 9 15 1 15 -6 0 -14 -7 -18 -16z" />
                            <path d="M158 210 c30 -13 25 -45 -6 -44 -16 0 -20 -2 -12 -10 16 -16 45 7 45
                                35 0 18 -6 25 -25 26 l-25 3 23 -10z" />
                            <path d="M10 155 c-19 -23 -3 -55 28 -55 20 0 23 -3 14 -12 -16 -16 -15 -43 3
                                -58 20 -16 110 -16 130 0 18 15 19 42 3 58 -9 9 -6 12 14 12 33 0 48 35 25 58
                                -21 20 -47 0 -47 -36 l0 -25 -23 21 c-13 12 -29 22 -37 22 -8 0 -24 -10 -37
                                -22 l-23 -21 0 24 c0 24 -16 49 -31 49 -4 0 -12 -7 -19 -15z m38 -23 c2 -14
                                -2 -22 -12 -22 -19 0 -29 17 -22 36 8 22 30 12 34 -14z m177 2 c0 -10 -8 -20
                                -17 -22 -18 -3 -26 27 -11 42 12 11 28 0 28 -20z m-62 -33 c48 -51 35 -74 -43
                                -74 -54 0 -70 7 -70 29 0 21 51 74 70 74 8 0 27 -13 43 -29z" />
                        </g>
                    </svg>
                    <p class="montserrat_medium">
                        Порода
                    </p>
                </div>
                <div :class="step >= 2 ? 'service_active' : 'service'">
                    <svg :class="step >= 2 ? 'active' : ''" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M53 204 c-8 -22 10 -49 33 -49 21 0 33 40 17 56 -6 6 -8 -2 -5 -21 3
                                -23 0 -30 -12 -30 -22 0 -31 27 -16 45 9 11 9 15 1 15 -6 0 -14 -7 -18 -16z" />
                            <path d="M158 210 c30 -13 25 -45 -6 -44 -16 0 -20 -2 -12 -10 16 -16 45 7 45
                                35 0 18 -6 25 -25 26 l-25 3 23 -10z" />
                            <path d="M10 155 c-19 -23 -3 -55 28 -55 20 0 23 -3 14 -12 -16 -16 -15 -43 3
                                -58 20 -16 110 -16 130 0 18 15 19 42 3 58 -9 9 -6 12 14 12 33 0 48 35 25 58
                                -21 20 -47 0 -47 -36 l0 -25 -23 21 c-13 12 -29 22 -37 22 -8 0 -24 -10 -37
                                -22 l-23 -21 0 24 c0 24 -16 49 -31 49 -4 0 -12 -7 -19 -15z m38 -23 c2 -14
                                -2 -22 -12 -22 -19 0 -29 17 -22 36 8 22 30 12 34 -14z m177 2 c0 -10 -8 -20
                                -17 -22 -18 -3 -26 27 -11 42 12 11 28 0 28 -20z m-62 -33 c48 -51 35 -74 -43
                                -74 -54 0 -70 7 -70 29 0 21 51 74 70 74 8 0 27 -13 43 -29z" />
                        </g>
                    </svg>
                    <p class="montserrat_medium">
                        Послуга
                    </p>
                </div>
                <div :class="step >= 3 ? 'date_active' : 'date'">
                    <svg :class="step >= 3 ? 'active' : ''" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M53 204 c-8 -22 10 -49 33 -49 21 0 33 40 17 56 -6 6 -8 -2 -5 -21 3
                                -23 0 -30 -12 -30 -22 0 -31 27 -16 45 9 11 9 15 1 15 -6 0 -14 -7 -18 -16z" />
                            <path d="M158 210 c30 -13 25 -45 -6 -44 -16 0 -20 -2 -12 -10 16 -16 45 7 45
                                35 0 18 -6 25 -25 26 l-25 3 23 -10z" />
                            <path d="M10 155 c-19 -23 -3 -55 28 -55 20 0 23 -3 14 -12 -16 -16 -15 -43 3
                                -58 20 -16 110 -16 130 0 18 15 19 42 3 58 -9 9 -6 12 14 12 33 0 48 35 25 58
                                -21 20 -47 0 -47 -36 l0 -25 -23 21 c-13 12 -29 22 -37 22 -8 0 -24 -10 -37
                                -22 l-23 -21 0 24 c0 24 -16 49 -31 49 -4 0 -12 -7 -19 -15z m38 -23 c2 -14
                                -2 -22 -12 -22 -19 0 -29 17 -22 36 8 22 30 12 34 -14z m177 2 c0 -10 -8 -20
                                -17 -22 -18 -3 -26 27 -11 42 12 11 28 0 28 -20z m-62 -33 c48 -51 35 -74 -43
                                -74 -54 0 -70 7 -70 29 0 21 51 74 70 74 8 0 27 -13 43 -29z" />
                        </g>
                    </svg>
                    <p class="montserrat_medium">
                        Дата та час
                    </p>
                </div>
                <div :class="step >= 4 ? 'contact_active' : 'contact'">
                    <svg :class="step >= 4 ? 'active' : ''" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M53 204 c-8 -22 10 -49 33 -49 21 0 33 40 17 56 -6 6 -8 -2 -5 -21 3
                                -23 0 -30 -12 -30 -22 0 -31 27 -16 45 9 11 9 15 1 15 -6 0 -14 -7 -18 -16z" />
                            <path d="M158 210 c30 -13 25 -45 -6 -44 -16 0 -20 -2 -12 -10 16 -16 45 7 45
                                35 0 18 -6 25 -25 26 l-25 3 23 -10z" />
                            <path d="M10 155 c-19 -23 -3 -55 28 -55 20 0 23 -3 14 -12 -16 -16 -15 -43 3
                                -58 20 -16 110 -16 130 0 18 15 19 42 3 58 -9 9 -6 12 14 12 33 0 48 35 25 58
                                -21 20 -47 0 -47 -36 l0 -25 -23 21 c-13 12 -29 22 -37 22 -8 0 -24 -10 -37
                                -22 l-23 -21 0 24 c0 24 -16 49 -31 49 -4 0 -12 -7 -19 -15z m38 -23 c2 -14
                                -2 -22 -12 -22 -19 0 -29 17 -22 36 8 22 30 12 34 -14z m177 2 c0 -10 -8 -20
                                -17 -22 -18 -3 -26 27 -11 42 12 11 28 0 28 -20z m-62 -33 c48 -51 35 -74 -43
                                -74 -54 0 -70 7 -70 29 0 21 51 74 70 74 8 0 27 -13 43 -29z" />
                        </g>
                    </svg>
                    <p class="montserrat_medium">
                        Контакти
                    </p>
                </div>
            </div>
            <div class="choose_appointment_wrapper">
                <template v-if="step === 1">
                    <div class="choose_appointment">
                        <div class="choose_block">
                            <p>Ваш вихованець</p>
                            <span>
                                <button class="montserrat_medium"
                                    :class="animalData.animalType === 'dogs' ? 'button_selected' : 'button'"
                                    @click="changeAnimalType('dogs')">Собака</button>
                                <button class="montserrat_medium"
                                    :class="animalData.animalType === 'cats' ? 'button_selected' : 'button'"
                                    @click="changeAnimalType('cats')">Кішка</button>
                            </span>
                        </div>
                        <div class="choose_breed">
                            <p class="montserrat_medium">Порода</p>
                            <select class="montserrat_medium" name="" id="" placeholder="choose"
                                v-model="animalData.breed">
                                <option value="null" disabled> Choose anymal type</option>
                                <template v-for="(item, key) in breeds[animalData.animalType]" :key="key">
                                    <option :value="key">{{ item }}</option>
                                </template>
                            </select>
                        </div>
                    </div>
                    <div class="axiliary_block">
                        <img src="../assets/5.png" alt="">
                    </div>
                </template>
                <template v-if="step === 2">
                    <div class="choose_appointment">
                        <div class="choose_block choose_service_block">
                            <p>Оберіть послугу</p>
                            <div class="service"
                                v-for="(item, key) in services_by_breed[animalData.animalType][animalData.breed]"
                                :key="key">
                                <div class="service_name">
                                    <span class="checkpoint"></span>
                                    <p>{{ item.serviceName }}</p>
                                </div>
                                <p>{{ item.servicePrice }} грн</p>
                            </div>
                        </div>
                    </div>
                    <div class="axiliary_block">
                        <img src="../assets/6.png" alt="">
                    </div>
                </template>
                <!-- <div class="axiliary_block">
                    <template v-else-if="step === 2">
                        <img src="../assets/6.png" alt="">
                    </template>
                    <template v-else-if="step === 3">
                        <div class="time">

                        </div>
                    </template>
                    <template v-else>
                        <div class="summary_data">

                        </div>
                    </template>
                </div> -->
            </div>
            <button class="next" v-if="step === 1" @click="step++">Далі</button>
            <button class="next" v-else-if="step === 2" @click="step++">Далі</button>
            <button class="next" v-else-if="step === 3" @click="step++">Далі</button>
            <button class="send" v-else @click="step = 1">Перевірити запис</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { breeds } from '../data/breeds';
import { services_by_breed } from '../data/services_by_breed.js'


const step = ref(1)
const animalData = ref({
    animalType: '',
    breed: null
})
const selectedService = ref()

const changeAnimalType = (type) => {
    animalData.value.animalType = type
}




</script>


<style scoped lang="scss">
.appointment_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #02020280;
    z-index: 2;

    .appointment_block {
        width: 100%;
        max-width: 1000px;
        border: 2px solid var(--yellow_color);
        border-radius: 32px;
        padding: 15px 25px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        .title_block {
            display: flex;
            justify-content: center;
            position: relative;
            margin-bottom: 25px;

            .close {
                position: absolute;
                top: 0;
                right: 0;

                svg {
                    width: 15px;
                    height: 15px;
                }
            }

            .close:hover {
                cursor: pointer;
            }
        }

        .navigation_block {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 650px;
            margin: 0 auto;

            div {
                text-align: center;
                position: relative;
                width: 100px;
            }

            .breed::after {
                content: '';
                position: absolute;
                top: 20px;
                right: -35px;
                height: 2px;
                width: 70px;
                background-color: rgb(107, 107, 107);
            }

            .breed_active::after {
                content: '';
                position: absolute;
                top: 20px;
                right: -35px;
                height: 2px;
                width: 70px;
                background-color: var(--orange_color);
            }

            .service::after {
                content: '';
                position: absolute;
                top: 20px;
                right: -35px;
                height: 2px;
                width: 70px;
                background-color: rgb(107, 107, 107);
            }

            .service::before {
                content: '';
                position: absolute;
                top: 20px;
                left: -35px;
                height: 2px;
                width: 70px;
                background-color: rgb(107, 107, 107);
            }

            .service_active::after {
                content: '';
                position: absolute;
                top: 20px;
                right: -35px;
                height: 2px;
                width: 70px;
                background-color: var(--orange_color);
            }

            .service_active::before {
                content: '';
                position: absolute;
                top: 20px;
                left: -35px;
                height: 2px;
                width: 70px;
                background-color: var(--orange_color);
            }

            .date::after {
                content: '';
                position: absolute;
                top: 20px;
                right: -35px;
                height: 2px;
                width: 70px;
                background-color: rgb(107, 107, 107);
            }

            .date::before {
                content: '';
                position: absolute;
                top: 20px;
                left: -35px;
                height: 2px;
                width: 70px;
                background-color: rgb(107, 107, 107);
            }

            .date_active::after {
                content: '';
                position: absolute;
                top: 20px;
                right: -35px;
                height: 2px;
                width: 70px;
                background-color: var(--orange_color);
            }

            .date_active::before {
                content: '';
                position: absolute;
                top: 20px;
                left: -35px;
                height: 2px;
                width: 70px;
                background-color: var(--orange_color);
            }

            .contact::before {
                content: '';
                position: absolute;
                top: 20px;
                left: -35px;
                height: 2px;
                width: 70px;
                background-color: rgb(107, 107, 107);

            }

            .contact_active::before {
                content: '';
                position: absolute;
                top: 20px;
                left: -35px;
                height: 2px;
                width: 70px;
                background-color: var(--orange_color);

            }
        }



        .choose_appointment_wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            padding: 25px 50px;

            .choose_appointment {
                width: 100%;
                padding: 15px 25px;
                font-size: 1.2rem;

                .choose_service_block {
                    height: 100%;
                    max-height: 500px;
                    overflow-y: scroll;
                }

                /* Стили для полосы прокрутки в Firefox */
                .choose_service_block {
                    scrollbar-width: thin;
                    scrollbar-color: var(--yellow_color) #f1f1f1;
                }

                /* Стили для полосы прокрутки в WebKit браузерах (Chrome, Safari) */
                .choose_service_block::-webkit-scrollbar {
                    width: 12px;
                    
                }

                .choose_service_block::-webkit-scrollbar-track {
                    background-color: var(--yellow_color);
                }

                .choose_service_block::-webkit-scrollbar-thumb {
                    background-color: var(--yellow_color);
                    border-radius: 6px;
                }

                .choose_service_block::-webkit-scrollbar-thumb:hover {
                    background-color: var(--yellow_color);;
                }


                .choose_block {

                    width: 100%;


                    span {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: space-evenly;
                        margin: 15px 0;

                        .button {
                            border: 1px solid var(--yellow_color);
                            border-radius: 16px;
                            padding: 10px 35px;
                            background-color: transparent
                        }

                        .button_selected {
                            border: 2px solid var(--orange_color);
                            border-radius: 16px;
                            padding: 10px 35px;
                            color: var(--yellow_color);
                            background-color: transparent
                        }
                    }
                }

                .choose_breed {

                    select {
                        width: 100%;
                        border: 1px solid var(--orange_color);
                        border-radius: 10px;
                        padding: 5px 10px;
                    }
                }
            }


            .axiliary_block {

                img {
                    max-width: 450px;
                }
            }
        }

        .next {
            border: none;
            width: 100px;
            margin: 0 auto;
            font-size: 1.2rem;
            background-color: transparent
        }

        .send {
            width: 200px;
            padding: 10px;
            border: 2px solid var(--orange_color);
            border-radius: 15px;
            background-color: var(--yellow_color);
            margin: 0 auto;
            font-size: 1.2rem;
        }

        button:hover {
            cursor: pointer;
        }
    }
}

.active {
    fill: var(--orange_color);
}
</style>