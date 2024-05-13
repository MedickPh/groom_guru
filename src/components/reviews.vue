<template>
    <div class="reviews_wrapper" id="reviews">
        <h2>Відгуки</h2>
        <div class="slider">
            <Carousel :items-to-show="slidesToShow" :autoplay="3500" :wrap-around="true" :mouseDrag="true"
                :touchDrag="true" :pauseAutoplayOnHover="false" :transition="700">
                <Slide v-for="item in reviews" :key="item">
                    <div class="carousel__item">
                        <div class="review-item-container">
                            <div class="name-wrapper">
                                <div class="avatar-wrap">
                                    <img loading="lazy" src="../assets/avatar.svg" alt="Аватар кліента що залишив відгук">
                                </div>
                                <div class="name neucha">
                                    <span>{{ item.name }}</span>
                                </div>
                            </div>
                            <div class="review-text-container">
                                <p class="montserrat_medium">{{ item.text }}</p>
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
import { reviews } from '../data/reviews';
const slidesToShow = ref(3)
const isShowNavButtons = ref(true)


function getScreenSize() {

    if (window.innerWidth <= 790) {
        return 1
    } else if (window.innerWidth <= 970) { 
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

<style scoped lang="scss">
.reviews_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
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
    transform: rotateY(0) scale(1.1);
}
.carousel__prev {
    left: -20px;
    border: 1px solid var(--orange_color);
    border-radius: 50%;
    color: var(--orange_color);
}

.carousel__item {
    border: 2px solid var(--orange_color);
    border-radius: 16px;
    margin: 25px 10px;

    .review-item-container {
        padding: 15px 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;

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
        margin: 20px;
    }
}
</style>