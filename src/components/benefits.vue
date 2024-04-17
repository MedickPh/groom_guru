<template>
    <div class="benefits_wrapper">
        <h2 class="neucha">
            Чому обирають GroomGuru?
        </h2>
        <div class="benefits_block">
            <div class="img_wrapper">
                <img src="../assets/2.png" alt="Picture with happy dog and cool cat">
            </div>
            <div class="text_wrapper">
                <h3 class="montserrat_medium">
                    GroomGuru - комфортний і просторий салон краси для собак та котиків
                </h3>
                <p class="montserrat_regular">
                    Ми використовуємо тільки якісну косметику та професійне обладнання для догляду за тваринами. Наші
                    грумери - сертифіковані спеціалісти з великим досвідом роботи, які точно знайдуть підхід до Вашого
                    улюбленця!
                </p>
                <div class="benefits_point">
                    <span>
                        <img src="../assets/1 иконка.png" alt="">
                        <p class="neucha">Професійний <br> догляд</p>
                    </span>
                    <span>
                        <img src="../assets/2 иконка.png" alt="">
                        <p class="neucha">Комфортна зона <br> очікування</p>
                    </span>
                    <span>
                        <img src="../assets/3 иконка.png" alt="">
                        <p class="neucha">Сертифіковані <br> грумери</p>
                    </span>
                    <span>
                        <img src="../assets/4 иконка.png" alt="">
                        <p class="neucha">Чистота та <br> дезифукція</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.benefits_wrapper {
    margin-top: 300px;

    h2 {
        font-size: 3rem;
        text-align: center;
    }

    .benefits_block {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-top: 15px;

        .img_wrapper {
            width: 100%;
            max-width: 500px;
        }

        .text_wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            max-width: 615px;

            h3 {
                font-size: 45px;
            }

            p {
                font-size: 24px;
                margin: 25px 0;
            }

            .benefits_point {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: space-between;
                height: 100%;
                max-height: 250px;

                span {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    align-items: center;
                    width: 230px;

                    img {
                        width: 50px;
                        height: 50px;
                    }

                    p {
                        margin-left: 15px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1166px) {
    .benefits_wrapper {

        .benefits_block {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;


            .img_wrapper {
                margin-bottom: 50px;
            }

            .text_wrapper {
                text-align: center;

                .benefits_point {
                    align-content: space-between;

                }
            }
        }
    }
}
@media screen and (max-width: 629px) {
    .benefits_wrapper{
        margin-top: 125px;
    }
}
@media screen and (max-width: 480px) {
    .benefits_wrapper {
        .benefits_block {
            .text_wrapper {
                h3 {
                    font-size: 2rem;
                }
                p {
                    font-size: 17px;
                }
                .benefits_point {
                    flex-wrap: nowrap;
                    align-items: center;
                    max-height: 100%;
                    span {
                        p {
                            font-size: 24px;
                            width: 150px;
                        }
                    }
                }
            }
        }
    }
}
</style>