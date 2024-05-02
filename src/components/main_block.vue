<template>
    <div class="main_wrapper">
        <div class="text_block">
            <h1 class="neucha">Грумінг-салон <br>GroomGuru</h1>
            <p class="montserrat_medium">Ми знайдемо підхід до Ваших пухнастих улюбленців</p>
            <button class="montserrat_medium" @click="$emit('open')">Записатись зараз</button>
        </div>
        <div class="img_block">
            <img fetchpriority="high" src="../assets/1.webp" alt="Стрижка собаки в салоні грумінгу в Одесі - Стрижка собаки в груминг-салоне в Одессе">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.main_wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    z-index: 1;


    .text_block {
        position: relative;
        z-index: 2;
        margin-top: 15%;

        h1 {
            font-size: 7rem;
        }

        p {
            margin: 20px 0 35px 0;
            font-size: 18px;
        }

        button {
            background-color: var(--yellow_color);
            border-radius: 25px;
            border-color: transparent;
            padding: 15px 35px;
            margin-top: 50px;
        }
    }

    .img_block {
        position: absolute;
        top: -61px;
        right: 0;
        z-index: 0;
        width: 100%;
        max-width: 750px;
    }
}

@media screen and (max-width: 781px) {
    .main_wrapper {

        .text_block {
            position: relative;
            z-index: 2;

            h1 {
                font-size: 5rem;
                margin-top: 15%;
                color: var(--dark_color);
            }

            p {
                color: white !important;
                padding-left: 10px;
            }
        }
    }
}
@media screen and (max-width: 449px) {
    .main_wrapper {
        .text_block {
            h1 {
                font-size: 3rem;
                margin-top: 0;
            }
        }
    }
}
</style>