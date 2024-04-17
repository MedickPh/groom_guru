<template>
    <div class="footer_wrapper">
        <img src="../assets/GroomGuru.png" alt="">
        <div class="menu">
            <p class="montserrat_medium">
                Послуги салону
            </p>
            <p class="montserrat_medium">
                Чому ми?
            </p>
            <p class="montserrat_medium">
                Відгуки
            </p>
            <p class="montserrat_medium">
                Контакти
            </p>
        </div>
        <div class="social_media">
            <a href="#"><img src="../assets/free-icon-facebook-733547.png" alt=""></a>
            <a href="#"><img src="../assets/free-icon-instagram-15713420.png" alt=""></a>
            <a href="#"><img src="../assets/Telegram.png" alt=""></a>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped lang="scss">
.footer_wrapper {
    margin-top: 300px;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid var(--yellow_color);

    img {
        max-width: 200px;
    }

    .menu {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;

        p {
            margin: 0 10px;
        }
    }

    .social_media {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        a {
            margin: 0 10px;
            pointer-events: none;

            img {
                width: 35px;
                height: 35px;
            }
        }
    }
}

@media screen and (max-width: 980px) {
    .footer_wrapper {
        margin-top: 50px;
    }

}

@media screen and (max-width: 850px) {
    .footer_wrapper .menu {
        display: none;
    }

}

@media screen and (max-width: 430px) {
    .footer_wrapper {
        justify-content: center;
        .social_media {
            display: none;
        }
    }

}
</style>