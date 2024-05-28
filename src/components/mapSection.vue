<template>
    <div class="map_section_wrapper">
        <h2 class="neucha">У самому серці Аркадії</h2>
        <p class="montserrat_medium">Ми знаходимося за адресою Гагарінське плато 5б. Праворуч від нотаріуса, над відкритим паркінгом</p>
        <div class="social_media">
            <a href="https://www.tiktok.com/@groom.guru" target="_blank"><img loading="lazy" src="../assets/tt.webp" alt=""></a>
            <a href="https://www.instagram.com/groom__guru" target="_blank"><img loading="lazy" src="../assets/free-icon-instagram-15713420.png" alt=""></a>
            <a href="https://t.me/groomguru1" target="_blank"><img loading="lazy" src="../assets/Telegram.png" alt=""></a>
        </div>
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
.map_section_wrapper{
    margin-top: 300px;
    text-align: center;
    h2 {
        font-size: 5rem;
        margin-bottom: 15px;
    }
    p {
        margin-bottom: 35px;
        font-size: 1.2rem;
    }
    .social_media {
        display: flex;
        width: 100%;
        max-width: 300px;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin: 0 auto;

        a {
            margin: 0 10px;

            cursor: pointer;

            img {
                width: 35px;
                height: 35px;
            }
        }
    }
    .map_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    @media screen and (max-width: 1300px) {
        flex-direction: column;
    }

    .gallery_wrapper{
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
        flex: 1;
        width: 100%;
        max-width: 700px;
        margin: 0 15px;

        .show{
            display: none;
            margin-bottom: 25px;
        }
        iframe:focus {
            outline: none
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

.carousel__viewport {
    perspective: none;
}
.carousel__slide {
    opacity: 1;
    transform: none;
}
</style>
