<template>
    <div class="reviews_wrapper" id="reviews">
        <h2 class="montserrat_medium">Відгуки </h2>
        <div class="slider">
            <Carousel :items-to-show="slidesToShow" :autoplay="3500" :wrap-around="true" :mouseDrag="true"
                :touchDrag="true" :pauseAutoplayOnHover="false" :transition="700">
                <Slide key="1">
                    <div class="carousel__item">
                        <div class="review-item-container">
                            <div class="name-wrapper">
                                <div class="avatar-wrap">
                                    <img loading="lazy" src="../assets/review1.webp" alt="Аватар кліента що залишив відгук">
                                </div>
                            </div>
                            <div class="review-text-container">
                                <p class="montserrat_medium" >Я просто в захваті від процедури у вашому салоні .  Пухнастий дуже пахне , та добре підстрижений . Дякую за чистку зубів &#128571;</p>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide key="2">
                    <div class="carousel__item">
                        <div class="review-item-container">
                            <div class="name-wrapper">
                                <div class="avatar-wrap">
                                    <img loading="lazy" src="../assets/review2.webp" alt="Аватар кліента що залишив відгук">
                                </div>
                            </div>
                            <div class="review-text-container">
                                <p class="montserrat_medium">
                                    Мій пудель виглядає просто неймовірно після породної стрижки! Він як справжній аристократ, виблискує своєю шикарною стрижкою і витонченим стилем. Дуже вдячний грумеру за чудову роботу та турботу про мого улюбленця. Впевнений, що тепер ми будемо завжди обирати цей салон для нашого пуделя!
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide key="3">
                    <div class="carousel__item">
                        <div class="review-item-container">
                            <div class="name-wrapper">
                                <div class="avatar-wrap">
                                    <img loading="lazy" src="../assets/review3.webp" alt="Аватар кліента що залишив відгук">
                                </div>
                            </div>
                            <div class="review-text-container">
                                <p class="montserrat_medium">
                                    Я відвідала грумінг зі своєю собакою і залишилась в захваті! Все там було так чисто і охайно, прям як у лікарні! Дівчата, які там працюють, були такі приємні і уважні до мого песика. Вони чудово підійшли до нього і зробили все, щоб він почував себе комфортно. Вся процедура пройшла дуже гладко, і я дуже задоволена результатом! Обов'язково прийду сюди ще!
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons v-if="isShowNavButtons === true">
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const slidesToShow = ref(3)
const isShowNavButtons = ref(true)


function getScreenSize() {

    if (window.innerWidth <= 820) {
        return 1
    } else if (window.innerWidth <= 1190) { 
        return 2
    } else { 
        return 3
    }
}

watchEffect(() => {
    slidesToShow.value = getScreenSize();
});

window.addEventListener('resize', () => {
    slidesToShow.value = getScreenSize();
});
</script>

<style lang="scss">
.reviews_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 35px;
}

// .carousel__slide {
//     padding: 5px;
// }

.carousel__viewport {
    perspective: 2000px;
    padding: 25px 0;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95) !important;
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95) !important;
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0deg) scale(1);
}
.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    background: #ffffff;
    border: 2px solid #d87501;
    border-radius: 50%;  width: var(--vc-nav-width);
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
    top: 50%;
    transform: translateY(-50%);
}

.carousel__item {
    border: 2px solid var(--orange_color);
    border-radius: 16px;
    margin: 0;
    height: 400px;

    @media screen and (max-width: 520px) {
        height: auto;
    }

    .review-item-container {
        padding: 15px 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;

        .name-wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-bottom: 15px;

            .avatar-wrap {
                margin-bottom: 15px;
                display: flex;
                justify-content: center;

                img {
                    width: 100px;
                }
            }

            .name {
                font-size: 1.5rem;
            }
        }
    }
}

@media screen and (max-width: 790px) {
    .carousel__item {
        margin: 25px 35px;
    }
}
@media screen and (max-width: 490px) {
    .carousel {
        margin: 25px 0;
    }
    .carousel__item {
        margin: 30px 20px;
    }
}
</style>