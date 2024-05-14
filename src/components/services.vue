<template>
    <div class="services_wrapper" id="services">
        <div class="header">
            <h2 class="neucha">Наші послуги</h2>
            <div class="animal_type">
                <button :class="animalType === 'dogs' ? 'active' : ''" @click="changeAnimalType('dogs')">Собака</button>
                <button :class="animalType === 'cats' ? 'active' : ''" @click="changeAnimalType('cats')">Кішка</button>
            </div>
            <button type="button" class="carousel__prev" aria-label="Navigate to previous slide" @click="prevService()">
                    <svg class="carousel__icon" viewBox="0 0 24 24" role="img" aria-label="Arrow pointing to the left">
                        <title>Arrow pointing to the left</title>
                        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                    </svg>
                </button>
            <div class="services_menu montserrat-regular" id="menu">
                <button :class="activeService === key ? 'active_button' : ''" :id="key"
                    v-for="(item, key) of generalServices[animalType]['allServices']" :key="key"
                    @click="changeServiceList(key)">
                    {{ item }}
                </button>
            </div>
            <button type="button" class="carousel__next" aria-label="Navigate to next slide" @click="nextService()">
                <svg class="carousel__icon" viewBox="0 0 24 24" role="img" aria-label="Arrow pointing to the right">
                    <title>Arrow pointing to the right</title>
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                </svg>
            </button>
        </div>

        <div class="services_block">
            <div class="services">
                <div class="service_list"
                    v-for="item of generalServices[animalType]['services'][activeService]['list']">
                    <span>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt"
                            viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#f6ae02"
                                stroke="none">
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
                        <p class="text montserrat-regular">{{ item.serviceName }}</p>
                    </span>
                    <p class="price montserrat-regular" v-if="item.servicePrice !== null">- {{ item.servicePrice }} грн.</p>
                </div>
                <div class="price_block" v-if="generalServices[animalType]['services'][activeService]['pricing']"
                    v-for="item of generalServices[animalType]['services'][activeService]['pricing']">
                    <p class="montserrat-regular">{{ item.title }}</p>
                    <p class="montserrat-regular">{{ item.price }}</p>
                </div>
                <button @click="$emit('open')">Записатись зараз</button>
            </div>
            <img loading="lazy" src="../assets/4.webp" alt="Догляд за шерстю в салоні грумінгу для тварин - Уход за шерстью в груминг-салоне для животных">
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { generalServices } from '../data/general_services'

const animalType = ref('dogs')
const activeService = ref('hygiene')
const services = ref(Object.keys(generalServices[animalType.value]['allServices']))

const changeAnimalType = (type) => {
    animalType.value = type
    activeService.value = 'hygiene'
}

const changeServiceList = (item) => {
    activeService.value = item
    
}

const nextService = () => {
    const currentService = activeService.value;
    const currentServiceIndex = services.value.indexOf(currentService) 
    if (currentServiceIndex < services.value.length-1) {
        activeService.value = services.value[currentServiceIndex +1]
        scrollActiveButtonIntoView()
    }
}

const prevService = () => {
    const currentService = activeService.value;
    const currentServiceIndex = services.value.indexOf(currentService) 
    if (currentServiceIndex >=1) {
        activeService.value = services.value[currentServiceIndex -1]
        scrollActiveButtonIntoView()
    }
}

watch(animalType, (newValue) => {
    services.value = Object.keys(generalServices[animalType.value]['allServices']);
    scrollActiveButtonIntoView()
});


onMounted(() => {
    scrollActiveButtonIntoView()
});
function scrollActiveButtonIntoView() {
    const activeButton = document.getElementById(activeService.value);
    if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

</script>

<style scoped lang="scss">
.services_wrapper {
    margin-top: 50px;

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        h2 {
            font-size: 5rem;
            margin-bottom: 50px;
            text-align: center;
        }

        .animal_type {
            width: 100%;
            text-align: right;

            button {
                border: none;
                font-size: 1.45rem;
                margin-right: 15px;
                font-weight: 600;
                background: transparent;
            }

            .active {
                color: var(--orange_color)
            }
        }

        .carousel__prev, .carousel__next{
                box-sizing: border-box;
                background: #ffffff;
                border: 2px solid #d87501;
                border-radius: 50%;
                width: var(--vc-nav-width);
                height: var(--vc-nav-height);
                text-align: center;
                font-size: var(--vc-nav-height);
                padding: 0;
                color: #d87501;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                cursor: pointer;
                margin: 0 10px;
                top: auto;
                bottom: 15px;
                transform: translateY(-50%);

                @media screen and (max-width: 600px) {
                    bottom: 10px;
                }
            }

            .carousel__next {
                right: -10px;

                @media screen and (max-width: 600px) {
                    right: -20px;
                }
            }

            .carousel__prev {
                left: -10px;

                @media screen and (max-width: 600px) {
                    left: -20px;
                }
            }

        .services_menu {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;
            margin: 15px 0;
            padding: 0 25px;


            button {
                border: none;
                padding: 10px 15px;
                margin: 5px 10px;
                font-size: 1.45rem;
                background: transparent;
            }

            @media screen and (max-width: 600px) {
                button {
                    margin: 0;
                }
            }

            .active_button {
                border: 1px solid var(--yellow_color);
                border-radius: 15px;
                color: var(--yellow_color);
            }
        }
    }

    .services_block {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        .services {
            width: 100%;
            padding: 25px;

            @media screen and (max-width: 600px) {
                padding: 25px 0;
            }

            .service_list {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: 10px;

                span {
                    display: flex;
                    flex-direction: row;
                    width: 100%;

                    svg {
                        width: 25px;
                        height: 25px;
                    }

                    p {
                        width: 100%;
                        max-width: 100%;
                        font-size: 1.25rem;
                    }
                }

                p {
                    width: 100%;
                    min-width: 100px;
                    max-width: 100px;
                    margin-left: 25px;
                    font-size: 1.25rem;
                }
            }

            .price_block {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 1.5rem;
                margin-bottom: 10px;
                border-bottom: 1px solid var(--yellow_color);
                :last-child {
                    margin-left: 10px;
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
        }

        img {
            width: 100%;
            max-width: 550px;
            height: 100%;
            max-height: 610px;
        }
    }
}

@media screen and (max-width: 980px) {
    .services_wrapper .services_block img {
        display: none;
    }

    .services_wrapper .header .services_menu {
        overflow-x: scroll;
        width: 90%;
        padding: 0 10px;
    }

    .services_wrapper .header .services_menu #additionalBenefits {
        width: 100%;
        min-width: 250px;
        max-width: 250px
    }

    .services_wrapper .services_block .services {
        .price_block{
            font-size: 1rem;
        }
        .service_list {
                p {
                    margin-left: 10px;
                    font-size: 1rem
                }
                span p {
                    font-size: 1rem;
                    margin-left: 0;
                }
        }
    }
}
</style>