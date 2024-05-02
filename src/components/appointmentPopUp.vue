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
            <div :class="{ 'choose_appointment_wrapper': true, 'date_wrapper': step === 3, 'reverse': step === 4 }">
                <template v-if="step === 1">
                    <div class="choose_appointment">
                        <div class="choose_block">
                            <p>Ваш вихованець</p>
                            <span :class="emptyError === 'type' ? 'error' : ''">
                                <button class="montserrat_medium"
                                    :class="animalData.animalType === 'dogs' ? 'button_selected' : 'button'"
                                    @click="changeAnimalType('dogs')">Собака</button>
                                <button class="montserrat_medium"
                                    :class="animalData.animalType === 'cats' ? 'button_selected' : 'button'"
                                    @click="changeAnimalType('cats')">Кішка</button>
                            </span>
                        </div>
                        <div class="choose_breed" v-if="animalData.animalType !== ''">
                            <p class="montserrat_medium">Порода</p>
                            <div :class="{ 'error': emptyError === 'breed', 'brand_select': true }" ref="breedBlock">
                                <input type="text" v-model="searchTerm" @click="filterBreeds" @input="filterBreeds"
                                    required placeholder="Введіть назву породи" class="standard_input" />
                                <ul v-if="showDropdown">
                                    <li v-for="(breed, key) in filteredBreeds" :key="key" @click="selectBreed(breed)">
                                        {{ breed.name }}
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="auxiliary_block">
                        <img src="../assets/5.webp" alt="">
                    </div>
                </template>
                <template v-if="step === 2">
                    <div class="choose_appointment">
                        <span :class="emptyError === 'type' ? 'error' : ''">
                            <button class="montserrat_medium"
                                :class="changeServiceType === 'main' ? 'button_selected' : 'button', emptyError === 'service' ? 'error' : ''"
                                @click="changeServiceType = 'main'">Оберіть основну послугу</button>
                            <button class="montserrat_medium"
                                :class="changeServiceType === 'extra' ? 'button_selected' : 'button'"
                                @click="changeServiceType = 'extra'">Оберіть дотаткову послугу</button>
                        </span>
                        <div class="choose_block choose_service_block" v-if="changeServiceType === 'main'"
                            ref="serviceBlock">
                            <div :class="{ 'error': emptyError === 'service', 'service': true, 'main_service_wrapper': true }"
                                v-for="(item, key) in animalData.breed.services" :key="key"
                                @click="setMainService(item, key)">
                                <div class="main_service">
                                    <div class="service_name">
                                        <span :class="isChosen === key ? 'checkpoint_active' : 'checkpoint'"></span>
                                        <p>{{ item.serviceName }}</p>
                                    </div>
                                    <p>від {{ item.servicePrice }} грн</p>
                                </div>
                                <div class="includes_block" v-if="isChosen === key">
                                    <p class="montserrat_regular">Що входить:</p>
                                    <div class="service_list"
                                        v-for="(service, index) of generalServices[animalData.animalType].services[key].list"
                                        :key="index">
                                        <span>
                                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt"
                                                height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                                preserveAspectRatio="xMidYMid meet">

                                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                                    fill="#f6ae02" stroke="none">
                                                    <path d="M2945 3450 l-1020 -1020 -343 342 -342 343 -150 -150 -150 -150 490
                                -490 490 -490 1172 1172 1173 1173 -145 145 c-80 80 -147 145 -150 145 -3 0
                                -464 -459 -1025 -1020z" />
                                                    <path d="M1590 4250 c-262 -36 -517 -127 -728 -258 -221 -138 -424 -336 -564
                                -552 -465 -715 -366 -1664 236 -2266 370 -370 883 -560 1410 -523 578 41 1101
                                357 1408 851 138 222 227 480 259 753 18 149 4 452 -27 594 -5 22 -23 7 -193
                                -163 l-188 -188 -6 -131 c-26 -560 -412 -1060 -954 -1236 -204 -66 -468 -84
                                -673 -47 -573 104 -1022 553 -1126 1126 -24 130 -23 363 1 490 51 274 176 518
                                365 714 191 198 410 324 686 393 101 25 124 27 314 28 161 0 223 -4 290 -18
                                129 -28 261 -75 344 -122 l74 -42 145 156 c168 181 167 154 9 242 -156 87
                                -329 147 -537 186 -94 18 -448 26 -545 13z" />
                                                </g>
                                            </svg>
                                            <p class="text montserrat_regular">{{ service.serviceName }}</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="{ 'choose_block': true, 'choose_service_block': true, 'scrollable_service': true }"
                            v-else>
                            <div class="service"
                                v-for="(item, key) in generalServices[animalData.animalType].services.additionalBenefits.list"
                                :key="key" @click="setExtraService(item, key)">
                                <div class="service_name">
                                    <span
                                        :class="animalData.extraServices.findIndex(e => e.serviceName === item.serviceName) !== -1 ? 'checkpoint_active' : 'checkpoint'"></span>
                                    <p>{{ item.serviceName }}</p>
                                </div>
                                <p>від {{ item.servicePrice }} грн</p>
                            </div>
                        </div>
                    </div>
                    <div class="auxiliary_block">
                        <img src="../assets/6.webp" alt="">
                    </div>
                </template>
                <template v-if="step === 3">
                    <template v-if="outputOrder === false">
                        <div :class="{ 'error': emptyError === 'date', 'choose_appointment_date': true }">
                            <p class="montserrat_semibold">Оберіть бажану дату та час</p>
                            <Calendar @update:date="setDate" />
                        </div>
                    </template>
                    <template v-if="animalData.date === null && outputOrder === true">
                        <div :class="{ 'error': emptyError === 'date', 'choose_appointment_date': true }">
                            <p class="montserrat_semibold">Оберіть бажану дату</p>
                            <Calendar @update:date="setDate" />
                        </div>
                    </template>
                    <div class="line"></div>
                    <div :class="{ 'error': emptyError === 'time', 'auxiliary_block': true, 'time_block': true }">
                        <template v-if="animalData.date !== null && outputOrder === false">
                            <div :class="{ 'time': true, 'time_chosen': chosenTime === key }"
                                v-for="(item, key) in timeForAppointment" :key="key" @click="setTime(item, key)">
                                {{ item }}
                            </div>
                        </template>
                        <template v-if="animalData.date !== null && outputOrder === true">
                            <p class="montserrat_semibold">Оберіть бажаний час</p>
                            <div :class="{ 'time': true, 'time_chosen': chosenTime === key }"
                                v-for="(item, key) in timeForAppointment" :key="key" @click="setTime(item, key)">
                                {{ item }}
                            </div>
                        </template>
                    </div>
                </template>
                <template v-if="step === 4">
                    <div class="choose_appointment_data">
                        <p class="montserrat_semibold">Контактні данні</p>
                        <div class="user_data">
                            <span :class="{ 'error': emptyError === 'name' }">
                                <label for="userName" class="montserrat_medium">Ваше ім`я</label>
                                <input type="text" name="userName" v-model="animalData.userName" placeholder="Ім`я">
                            </span>
                            <span :class="{ 'error': emptyError === 'phone' }">
                                <label for="userPhone" class="montserrat_medium">Номер телефону</label>
                                <input type="phone" name="userPhone" v-model="animalData.userPhone"
                                    placeholder="Номер телефону">
                            </span>
                            <span :class="{ 'error': emptyError === 'petName' }">
                                <label for="petName" class="montserrat_medium">Кличка улюбленця</label>
                                <input type="text" name="petName" v-model="animalData.petName"
                                    placeholder="Кличка улюбленця">
                            </span>
                        </div>
                    </div>
                    <div class="line_date"></div>
                    <div class="auxiliary_block selected_block_wrapper" ref="selectedServices">
                        <div class="important_block">
                            <p class="montserrat_semibold">
                                <span style="color: red;">Зверніть увагу!</span> <br>
                                Дата, час та ціна остаточно узгоджується з оператором, та можуть відрізнятись від
                                обраних!
                            </p>
                        </div>
                        <div class="selected_breed">
                            <p class="montserrat_semibold">Порода:</p>
                            <p class="montserrat_medium">{{ animalData.breed.name }}</p>
                        </div>
                        <div class="selected_service">
                            <p class="montserrat_semibold">Основна послуга:</p>
                            <p class="montserrat_medium">
                                {{ animalData.mainService.serviceName }}
                                &nbsp;-&nbsp; від
                                {{ animalData.mainService.servicePrice }}
                                грн
                            </p>
                        </div>
                        <div class="selected__extra_service">
                            <p class="montserrat_semibold">Додаткові послуги:</p>
                            <p class="montserrat_medium" v-for="item in animalData.extraServices">
                                    {{ item.serviceName }}
                                    &nbsp;-&nbsp; від
                                    {{ item.servicePrice }}
                                    грн,
                                    <br>
                            </p>
                        </div>
                        <div class="selected_date">
                            <p class="montserrat_semibold">Дата та час:</p>
                            <p class="montserrat_medium">
                                {{ animalData.date.date }}
                                {{ monthNames[animalData.date.month - 1] }}
                                , o
                                {{ animalData.date.time }}
                            </p>
                        </div>
                    </div>
                </template>
                <template v-if="step === 5">
                    <div class="thanks_block">
                        <h3 class="montserrat_semibold">Дякуємо, що обрали <br><span class="neucha">GroomGuru</span>!
                        </h3>
                        <img src="../assets/8.webp" alt="">
                    </div>
                </template>
            </div>
            <div class="nav_button_block">
                <button class="nav_button" @click="prevBlock()" v-if="step <= 4"><span>&lt;</span> Назад</button>
                <button class="nav_button" @click="nextBlock()" v-if="step <= 3">Далі <span>&gt;</span></button>
                <button :class="{ 'send': true, 'buttonError': buttonError }" id="sendButton" @click="nextBlock()"
                    v-if="step === 4">{{
                    sendButtonText }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated, watchEffect } from 'vue';
import { services_by_breed } from '../data/services_by_breed.js'
import Calendar from './calandar.vue'
import { sendMessageToTelegramBot } from '../methods/sendLead'
import { deleteError } from '../methods/deleteError.js'
import { generalServices } from '../data/general_services.js'
import validator from 'validator';

const step = ref(1)
const showDropdown = ref(false);
const searchTerm = ref('')
const changeServiceType = ref('main')
const isChosen = ref(null)
const chosenTime = ref(null)
const timeForAppointment = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
const monthNames = [
    'Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня',
    'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'
];
const animalData = ref({
    animalType: '',
    breed: '',
    mainService: null,
    extraServices: [],
    date: null,
    userName: '',
    userPhone: 380,
    petName: ''
})
const sendButtonText = ref('Записатись');
const buttonError = ref(false);
const emptyError = ref('');
const breedBlock = ref(null);
const serviceBlock = ref(null);
const selectedServices = ref(null);
const outputOrder = ref(false);
const isValidPhone = ref(false);


const filterBreeds = () => {
    let filteredBreeds;
    const animalType = animalData.value.animalType;
    const animalBreeds = services_by_breed[animalType];
    if (searchTerm.value.trim() === '') {
        showDropdown.value = true;
        filteredBreeds = Object.values(animalBreeds)
        return filteredBreeds
    }

    filteredBreeds = Object.values(animalBreeds).filter(breed => {
        return breed.name.toLowerCase().includes(searchTerm.value.toLowerCase());
    });

    showDropdown.value = true;
    return filteredBreeds;
};

const selectBreed = (breed) => {
    searchTerm.value = breed.name
    animalData.value.breed = breed
    showDropdown.value = false;
};

const changeAnimalType = (type) => {
    animalData.value.animalType = type
}

const setMainService = (item, key) => {
    isChosen.value = key
    animalData.value.mainService = item;
}

const setExtraService = (item, key) => {
    const data = animalData.value.extraServices;
    if (data !== null) {
        const index = data.findIndex(e => e.serviceName === item.serviceName)
        if (index !== -1) {
            animalData.value.extraServices.splice(index, 1)
        } else {
            animalData.value.extraServices.push(item)
        }
    } else {
        animalData.value.extraServices.push(item)
    }
}

const setDate = (data) => {
    animalData.value.date = data
}

const setTime = (item, key) => {
    chosenTime.value = key
    animalData.value.date.time = item
}

const getScreenSize = () => {
    if (window.innerWidth <= 1050) {
        return true
    } else {
        return false
    }
}

watchEffect(() => {
    outputOrder.value = getScreenSize();
});

window.addEventListener('resize', () => {
    outputOrder.value = getScreenSize();
});


const prevBlock = () => {
    const data = animalData.value
    switch (step.value) {
        case 2:
            data.animalType = '';
            data.breed = '';
            searchTerm.value = '';
            step.value--;
            return
        case 3:
            data.mainService = null
            data.extraServices = []
            isChosen.value = null
            changeServiceType.value = 'main'
            step.value--;
            return
        case 4:
            data.date = null;
            chosenTime.value = null
            step.value--;
            return
        default:
            break;
    }
}

const nextBlock = () => {
    const data = animalData.value
    
    switch (step.value) {
        case 1:
            if (data.animalType === '') {
                emptyError.value = 'type';
                deleteError(emptyError)
                return
            } else if (data.breed === '') {
                emptyError.value = 'breed'
                deleteError(emptyError)
                return
            } else {
                step.value++
                return
            }
        case 2:
            if (data.mainService === null) {
                emptyError.value = 'service';
                deleteError(emptyError)
                return
            } else {
                step.value++
                return
            }
        case 3:
            if (data.date === null) {
                emptyError.value = 'date';
                deleteError(emptyError)
                return
            } else if (!data.date.time) {
                emptyError.value = 'time'
                deleteError(emptyError)
                return
            } else {
                step.value++
                return
            }
        case 4:
            validatePhone()
            if (data.userName === '') {
                emptyError.value = 'name';
                deleteError(emptyError)
                return
            } else if (!isValidPhone) {
                emptyError.value = 'phone'
                deleteError(emptyError)
                return
            } else if (data.petName === '') {
                emptyError.value = 'petName'
                deleteError(emptyError)
                return
            } else {
                sendLeadWrapper()
                return
            }
        default:
            break;
    }
}


const validatePhone = () => {
    isValidPhone.value = validator.isMobilePhone(animalData.value.userPhone, 'uk-UA')
}

async function sendLeadWrapper() {
    const button = document.getElementById('sendButton')
    button.disabled = true;
    try {
        const data = animalData.value
        const extraServices = data.extraServices.map(service => service.serviceName + ' за ' + service.servicePrice + 'грн').join(', ');
        const message = `Привіт! Я ${data.animalType === 'dogs' ? 'песик' : 'котик'} на імя "${data.petName}" породи ${data.breed.name}. \nХочу прийти до вас ${data.date.date} ${monthNames[data.date.month]} о ${data.date.time} на процедуру "${data.mainService.serviceName}".\nНа сайті вказано що це вартує від ${data.mainService.servicePrice} грн. ${extraServices !== ''? `Також цікавлять такі додаткові послуги ${extraServices}`: ''} \nЗв\`яжіться будь-ласка з моїм власником для уточнення всіх данних.\nЙого/Її звати "${data.userName}", ось телефон - ${data.userPhone}. \nДо зустрічі!`
        await sendMessageToTelegramBot(message)
        step.value++
    } catch (error) {
        sendButtonText.value = 'Щось не так, спробуйте ще';
        buttonError.value = true
        setTimeout(() => {
            button.disabled = false;
            buttonError.value = false
            sendButtonText.value = 'Записатись'
        }, 3000);
        console.log(error);
    }
}

const filteredBreeds = computed(filterBreeds);

onMounted(() => {
    updateOverflowClass();
    window.addEventListener('resize', updateOverflowClass);
});

onUpdated(() => {
    updateOverflowClass();
});

const updateOverflowClass = () => {
    if (breedBlock.value) {
        if (breedBlock.value.scrollHeight > 200) {
            breedBlock.value.classList.add('scrollable');
        } else {
            breedBlock.value.classList.remove('scrollable');
        }
    } else if (serviceBlock.value) {
        if (serviceBlock.value.scrollHeight > 300) {
            serviceBlock.value.classList.add('scrollable_service');
        } else {
            serviceBlock.value.classList.remove('scrollable_service');
        }
    }else if(selectedServices.value) {
        if (selectedServices.value.scrollHeight > 300) {
            selectedServices.value.classList.add('scrollable_selected_service');
        } else  {
            selectedServices.value.classList.remove('scrollable_selected_service');
        }
    }
};

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
        margin: 0 15px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        .title_block {
            display: flex;
            justify-content: center;
            position: relative;
            margin-bottom: 25px;

            @media screen and (max-width: 650px) {
                margin: 0;

            }

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

            @media screen and (max-width: 650px) {
                display: none;
            }

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
            justify-content: space-between;
            padding: 25px 50px;
            height: 100%;
            min-height: 500px;

            @media screen and (max-width: 1050px) {
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 0;
                margin-top: 15px;
                .choose_appointment {
                    .choose_service_block {
                        .main_service_wrapper {
                            text-align: left;
                        }
                    }
                }
            }

            .choose_appointment {
                width: 100%;
                padding: 0 25px 0 0;
                font-size: 1.2rem;

                @media screen and (max-width: 650px) {
                    padding: 0;
                }

                span {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: space-evenly;

                    .button {
                        border: 1px solid var(--yellow_color);
                        border-radius: 16px;
                        padding: 10px 35px;
                        background-color: transparent;
                        margin-bottom: 10px;
                    }

                    .button_selected {
                        border: 2px solid var(--orange_color);
                        border-radius: 16px;
                        padding: 10px 35px;
                        color: var(--yellow_color);
                        background-color: transparent;
                        margin-bottom: 10px;
                    }
                }

                .choose_service_block {
                    .service {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: space-between;
                        align-items: center;
                        border-radius: 10px;
                        padding: 5px 10px;
                        margin: 5px;

                        .service_name {
                            display: flex;
                            flex-direction: row;
                            flex-wrap: nowrap;
                            align-items: center;
                            text-align: left;

                            .checkpoint {
                                width: 20px;
                                height: 20px;
                                min-width: 20px;
                                border: 1px solid var(--yellow_color);
                                border-radius: 50%;
                                margin-right: 15px;
                            }

                            .checkpoint_active {
                                width: 20px;
                                height: 20px;
                                min-width: 20px;
                                border: 1px solid var(--orange_color);
                                border-radius: 50%;
                                margin-right: 15px;
                                background-color: var(--yellow_color);
                            }

                            p {
                                max-width: 100%;
                                margin-right: 5px;
                            }
                        }

                        p {
                            width: 100%;
                            max-width: 100px;
                            min-width: 100px;
                        }

                        .includes_block {
                            .service_list {
                                display: flex;
                                flex-direction: row;
                                justify-content: space-between;
                                margin-bottom: 10px;

                                span {
                                    display: flex;
                                    flex-direction: row;
                                    width: 100%;
                                    margin: 0;

                                    svg {
                                        width: 25px;
                                        height: 25px;
                                        margin-right: 5px;
                                    }

                                    p {
                                        width: 100%;
                                        max-width: 100%;
                                        font-size: 1rem;
                                    }
                                }
                            }
                        }
                    }

                    .main_service_wrapper {
                        flex-direction: column;
                        align-items: flex-start;

                        .main_service {
                            display: flex;
                            flex-direction: row;
                            flex-wrap: nowrap;
                            justify-content: space-between;
                            align-items: center;
                            width: 100%;

                            .service_name {
                                display: flex;
                                flex-direction: row;
                                flex-wrap: nowrap;
                                align-items: center;
                                text-align: left;

                                .checkpoint {
                                    width: 20px;
                                    height: 20px;
                                    min-width: 20px;
                                    border: 1px solid var(--yellow_color);
                                    border-radius: 50%;
                                    margin-right: 15px;
                                }

                                .checkpoint_active {
                                    width: 20px;
                                    height: 20px;
                                    min-width: 20px;
                                    border: 1px solid var(--orange_color);
                                    border-radius: 50%;
                                    margin-right: 15px;
                                    background-color: var(--yellow_color);
                                }

                                p {
                                    width: 100%;
                                    max-width: 100%
                                }
                            }
                        }
                    }

                    .service:hover {
                        background-color: #f6ad024d;
                    }
                }

                

                .choose_block {
                    width: 100%;

                    span {
                        flex-direction: row;
                        margin: 15px 0;
                    }
                }

                .choose_breed {

                    .brand_select {
                        border: 2px solid var(--orange_color);
                        background-color: rgb(255, 255, 255);
                        border-radius: 8px;
                        width: 100%;
                        max-width: 280px;
                        margin-top: 15px;
                        padding: 0 10px;
                        display: flex;
                        flex-direction: column;
                        position: absolute;

                        input {
                            outline: none;
                            border: transparent;
                            width: 100%;
                            padding: 5px 10px;
                        }

                        ul {
                            list-style-type: none;
                            text-align: left;
                            padding: 5px 0;
                            margin: 0;
                        }

                        li {
                            cursor: pointer;
                            padding: 0 10px;
                        }

                        li:hover {
                            background-color: var(--yellow_color);
                            border-radius: 8px;
                        }
                    }

                    .scrollable {
                        height: 100%;
                        max-height: 200px;
                        overflow-y: scroll;
                        -ms-overflow-style: none;
                        scrollbar-width: none;

                        ::-webkit-scrollbar {
                            width: 0px;
                            background: transparent;
                        }
                    }


                    @media screen and (max-width: 1050px) {
                        .brand_select {
                            margin-top: 40px;
                        }
                    }
                }

                @media screen and (max-width: 1050px) {
                    .choose_breed {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
                }
            }

            .choose_appointment_date {
                width: 100%;
                max-width: 400px;
                padding: 15px 25px;
                font-size: 1.2rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
            }

            .choose_appointment_data {
                width: 100%;
                max-width: 300px;
                padding: 15px 25px;
                font-size: 1.2rem;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                margin-bottom: 15px;

                p {
                    font-size: 1.25rem;
                    margin-bottom: 15px;
                }

                span {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    margin: 20px 0;

                    @media screen and (max-width: 650px) {
                        margin: 5px 0;
                    }

                    input {
                        border: 1px solid var(--yellow_color);
                        border-radius: 16px;
                        padding: 10px;
                        margin-top: 10px;
                    }
                }

                @media screen and (max-width: 1050px) {
                    padding: 0;
                    margin-top: 15px;

                    p {
                        margin: 0;
                    }
                }
            }

            .line {
                width: 2px;
                height: 300px;
                border: 1px solid var(--orange_color);
            }

            .line_date {
                width: 2px;
                height: 400px;
                border: 1px solid var(--orange_color);
            }

            .auxiliary_block {
                img {
                    max-width: 450px;
                }
            }

            @media screen and (max-width: 1050px) {
                .auxiliary_block {
                    img {
                        display: none;
                    }
                }

                .line,
                .line_date {
                    display: none
                }
            }

            .selected_block_wrapper {
                width: 100%;
                max-width: 300px;
                height: 100%;
                max-height: 400px;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                padding: 15px 25px;


                div {
                    margin: 10px 0;

                    .montserrat_medium {
                        margin: 10px 0 0 5px;
                    }
                }

                @media screen and (max-width: 1050px) {
                    max-width: 100%;
                    padding: 5px;
                    max-height: 250px;
                    border: 1px solid var(--yellow_color);
                    border-radius: 5px;

                    div {
                        margin: 10px 0;

                        .montserrat_medium {
                            margin: 0;
                        }
                    }
                }
            }

            .time_block {
                width: 100%;
                max-width: 300px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;

                p {
                    width: 100%;
                    margin-bottom: 15px;
                    text-align: center;
                }

                .time {
                    padding: 10px 15px;
                    margin: 10px;
                    border: 2px solid #02020280;
                    border-radius: 15px;
                    cursor: pointer;
                }

                .time_chosen {
                    border: 2px solid var(--orange_color);
                }
            }

            .thanks_block {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                align-items: center;

                h3 {
                    margin-bottom: 15px;
                    font-size: 2.5rem;
                    text-align: center;

                    span {
                        font-weight: 600;
                    }
                }
            }
        }

        .date_wrapper {
            align-items: center;
            justify-content: space-evenly
        }

        .nav_button_block {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            width: 100%;
            max-width: 350px;
            margin: 0 auto;

            .nav_button {
                width: 100px;
                font-size: 1.2rem;
                background-color: transparent;
                position: relative;
                padding: 10px 10px;
                border: 2px solid var(--orange_color);
                border-radius: 10px;

                span {
                    color: var(--orange_color);
                }
            }

            .send {
                padding: 10px 15px;
                border: 2px solid var(--orange_color);
                border-radius: 15px;
                background-color: var(--yellow_color);
                font-size: 1.2rem;
            }
        }

        button:hover {
            cursor: pointer;
        }

        @media screen and (max-width: 650px) {
            padding: 15px 10px;

            .choose_appointment_wrapper {
                .choose_appointment {
                    .choose_service_block {
                        .service {
                            font-size: 1rem;

                            .service_name {
                                text-align: left;
                            }
                        }

                        .main_service_wrapper {
                            .includes_block {
                                text-align: left;
                            }
                        }
                    }

                    span {

                        .button,
                        .button_selected {
                            padding: 10px 15px;
                        }
                    }
                }

                .choose_appointment_date {
                    padding: 15px 0;
                }

                .time_block {
                    .time {
                        padding: 5px 10px;
                    }
                }
            }

            .reverse {
                flex-direction: column-reverse;
            }
        }
    }
}

.active {
    fill: var(--orange_color);
}

.error {
    border: 2px solid red !important;
    padding: 10px !important;
    border-radius: 10px;
}

.buttonError {
    background-color: #ff3f3f !important;
}

.scrollable_service {
    height: 100%;
    max-height: 300px;
    overflow-y: scroll;
    position: relative;

   

} 
@media screen and (min-width: 1050px) {
    .scrollable_service{
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::after {
            content: ">>";
            position: sticky;
            left: 100%;
            bottom: 0px;
            display: block;
            width: 25px;
            height: 25px;
            color: var(--orange_color);
            rotate: 90deg;
        }

        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    }
}
.scrollable_selected_service {
    height: 100%;
    max-height: 300px;
    overflow-y: scroll;
    position: relative;

   

} 
@media screen and (min-width: 1050px) {
    .scrollable_selected_service{
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::after {
            content: ">>";
            position: sticky;
            left: 100%;
            bottom: -20px;
            display: block;
            width: 25px;
            height: 25px;
            color: var(--orange_color);
            rotate: 90deg;
        }

        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
    }
}
</style>