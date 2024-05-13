<template>
    <div class="maps-wrapper">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.7485037702454!2d30.7619655!3d46.433864199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6338b1264eb67%3A0xed9845556a22054d!2z0JPQsNCz0LDRgNC40L3RgdC60L7QtSDQn9C70LDRgtC-LCA10JEsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1715608968021!5m2!1sru!2sua"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</template>
<style lang="scss">
.maps-wrapper {
    max-width: 100%;
    width: 100%;
    margin-top: 300px;

    iframe {
        width: 100%;
        box-sizing: border-box;
        font-size: 20px;
    }
}
@media screen and (max-width: 781px) {
    .maps-wrapper{
        margin-top: 350px
    }
}
@media screen and (max-width: 600px) {
    .maps-wrapper {
        margin-top: calc(47vw - 100px);;
    }
}
</style>
