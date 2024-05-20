<template>
    <div class="map_section_wrapper">
        <h2 class="neucha">Як нас знайти?</h2>
        <div class="map_section">
            <div class="gallery_wrapper">
            <Carousel :items-to-show="slidesToShow" :autoplay="2500" :wrap-around="true" :mouseDrag="true"
                :touchDrag="true" :pauseAutoplayOnHover="false" :transition="700">
                <Slide key="1">
                    <div class="img1"></div>
                </Slide>
                <Slide key="2">
                    <div class="img2"></div>
                </Slide>
                <Slide key="3">
                    <div class="img3"></div>
                </Slide>
                <Slide key="4">
                    <div class="img4"></div>
                </Slide>
                <Slide key="5">
                    <div class="img5"></div>
                </Slide>
                <Slide key="6">
                    <div class="img6"></div>
                </Slide>
                <Slide key="7">
                    <div class="img7"></div>
                </Slide>
            </Carousel>
        </div>
        <div class="maps-wrapper">
            <h2 class="neucha show">Ми на мапі</h2>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.7485037702454!2d30.7619655!3d46.433864199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6330010d3069d%3A0x93955972c75d1bc4!2sGroomGuru!5e0!3m2!1sru!2sua!4v1716230834406!5m2!1sru!2sua" 
            width="600"
            height="500"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const slidesToShow = ref(1)



</script>

<style lang="scss" scoped>
.carousel__viewport {
    perspective: none;
}
.carousel__slide {
    opacity: 1;
    transform: none;
}

.map_section_wrapper{
    margin-top: 300px;
    text-align: center;
    h2 {
        font-size: 5rem;
        margin-bottom: 25px;
        
    }
    .map_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    @media screen and (max-width: 1300px) {
        flex-direction: column;
    }

    .gallery_wrapper, .maps-wrapper {
        flex: 1;
        width: 100%;
        max-width: 500px;
        margin: 0 15px;
    }

    .gallery_wrapper {
        div {
            border: 2px solid var(--orange_color);
            border-radius: 15px;
            width: 500px;
            height: 500px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }

        .img1 {
            background-image: url('../assets/carousel_1.webp');
        }
        .img2 {
            background-image: url('../assets/carousel_2.webp');
        }
        .img3 {
            background-image: url('../assets/carousel_3.webp');
        }
        .img4 {
            background-image: url('../assets/carousel_4.webp');
        }
        .img5 {
            background-image: url('../assets/carousel_5.webp');
        }
        .img6 {
            background-image: url('../assets/carousel_6.webp');
        }
        .img7 {
            background-image: url('../assets/carousel_7.webp');
        }
    }

    .maps-wrapper {
        .show{
            display: none;
        }
        
        @media screen and (max-width: 1300px) {
            margin-top: 35px;

            .show{
                display: block;
            }
        }

        iframe {
            width: 100%;
        }
    }
}
}
@media screen and (max-width: 781px) {
    .map_section_wrapper {
            margin-top: 350px;
            h2 {
                font-size: 3rem;
            }
    }
}
@media screen and (max-width: 600px) {
    .map_section_wrapper {
        margin-top: calc(47vw - 100px);
        
        .map_section {
            .gallery_wrapper {
                div {
                    width: 300px;
                    height: 300px;
                }
            }
        }
    }
}
</style>
