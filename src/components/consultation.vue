<template>
    <div class="consultation">
        <h2 class="neucha">Отримайте безкоштовну консультацію</h2>
        <div class="consultation_wrapper">
            <img src="../assets/3.png" alt="">
            <form method="post" class="consultation_form">
                <span>
                    <label for="name" class="montserrat_medium">Ваше ім`я</label>
                    <input type="text" name="name" placeholder="Ім`я">
                </span>
                <span>
                    <label for="phone" class="montserrat_medium">Номер телефону</label>
                    <input type="phone" name="phone" placeholder="Номер телефону">
                </span>
                <span>
                    <label for="email" class="montserrat_medium">E-mail</label>
                    <input type="email" name="email" placeholder="E-mail">
                </span>
                <span class="desc">
                    <label for="desc" class="montserrat_medium">Ваше запитання</label>
                    <input type="phone" name="desc" placeholder="Ваше запитання">
                </span>
                <button type="submit">Отримати консультацію</button>
            </form>
        </div>
    </div>
</template>

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

            span {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                margin: 20px 0;

                input {
                    border: 1px solid var(--yellow_color);
                    border-radius: 16px;
                    padding: 10px;
                    margin-top: 10px;
                }
            }

            .desc {
                input {
                    height: 200px;
                    padding-top: 20px;
                }

                input::placeholder {
                    text-align: left;
                    /* Выравнивание текста по левому краю */
                    position: absolute;
                    /* Позиционирование абсолютно */
                    top: 10px;
                    /* Отступ сверху */
                    left: 10px;
                    /* Отступ слева */
                    color: gray;
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