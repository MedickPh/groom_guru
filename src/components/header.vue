<template>
    <div class="header_wrapper" id="header">
        <div class="header_block">
            <div class="img_block">
                <img loading="lazy" fetchpriority="low" src="/src/assets/GroomGuru.png" alt="Company logo">
            </div>
            <div class="contacts_block montserrat_medium">
                <div class="address">
                    <svg width="102" height="162" viewBox="0 0 102 162" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M27.5958 120.849C20.9996 122.189 12.5714 124.547 5.89444 130.952C2.54712 134.168 0.878113 138.021 1.20169 141.806C1.51148 145.436 3.66617 148.776 7.26881 151.209C11.1302 153.83 15.3871 155.815 19.8772 157.089C29.6068 159.807 39.6601 161.191 49.7622 161.207C57.3009 161.203 64.8192 160.424 72.1982 158.881C79.3523 157.39 87.632 155.139 94.7599 149.757C98.2037 147.158 100.23 143.963 100.621 140.516C101.015 137.037 99.7388 133.431 96.9271 130.08C93.0042 125.403 87.8171 122.195 81.0693 120.272C78.5444 119.55 75.921 119.068 73.3842 118.6C72.5507 118.446 71.7178 118.293 70.8849 118.13C71.9055 116.539 72.9307 114.954 73.9605 113.376C76.5622 109.372 79.2532 105.231 81.7302 101.058C89.1364 88.5795 97.8591 71.7897 99.5826 52.5642C101.399 32.303 95.0145 17.7991 80.0638 8.22578C69.6937 1.58496 58.122 -0.648498 45.6752 1.59158C26.8567 4.97632 14.5588 15.9805 9.12306 34.2989C5.88275 45.2216 7.06875 56.2665 8.46672 64.6696C10.756 78.4575 15.9286 92.2543 25.2401 109.405C26.6919 112.08 28.2257 114.63 29.8501 117.329C30.4159 118.268 30.983 119.214 31.5514 120.168L30.8295 120.285C29.7019 120.466 28.6426 120.637 27.5958 120.849ZM51.7895 127.563C51.3568 128.123 50.9212 128.686 50.4828 129.255C41.7279 121.787 36.1235 112.24 31.3723 103.015C25.2578 91.1438 18.7232 76.8586 16.6217 60.9068C14.8246 47.255 16.1694 37.1774 20.983 28.221C26.9629 17.0955 38.8498 10.0695 52.7806 9.42563C53.4627 9.39413 54.1411 9.37824 54.8153 9.37824C67.6341 9.37824 78.9684 15.0413 85.4208 24.7656C89.5275 30.9582 91.341 38.1747 91.131 47.475C90.8947 57.8307 88.0317 68.5074 82.1214 81.0723C75.4517 95.2564 66.7415 108.917 55.4939 122.834C54.239 124.385 53.0491 125.928 51.7895 127.563ZM34.7451 125.964C35.4474 125.995 36.1163 126.272 36.6354 126.747C40.5985 131.286 45.5055 134.904 51.0132 137.349C53.4239 138.412 55.5707 137.76 57.3888 135.412L58.6273 133.808C60.3049 131.63 62.0403 129.378 63.8472 127.264C64.3824 126.598 65.1522 126.161 65.9987 126.045C72.1936 126.548 78.7071 127.494 84.3654 130.981C86.7506 132.502 88.8876 134.381 90.7011 136.553C91.0949 136.944 91.404 137.412 91.6107 137.928C91.8175 138.443 91.9173 138.995 91.9035 139.55C91.8083 140.115 91.5989 140.655 91.2885 141.136C90.978 141.618 90.5731 142.032 90.0979 142.353C87.9549 144.058 85.6053 145.486 83.1033 146.602C73.7131 150.772 62.8882 152.85 49.0395 153.14C38.9923 152.77 29.2043 152.177 19.9158 149.047C16.8881 148.059 14.0059 146.671 11.3454 144.921C9.48011 143.663 8.44762 142.193 8.36033 140.668C8.27763 139.231 9.05342 137.771 10.603 136.446C13.9412 133.59 17.6803 131.24 21.7011 129.47C24.9119 128.071 28.4949 127.296 31.9603 126.547C32.809 126.364 33.6577 126.18 34.5004 125.987C34.5809 125.971 34.6629 125.963 34.7451 125.964Z" />
                        <path
                            d="M71.6559 44.1069C71.6559 43.927 71.6631 43.7473 71.6677 43.5681C71.6999 42.7805 71.6894 41.9917 71.6349 41.2053C71.4085 38.1778 70.4226 35.2566 68.7674 32.7113C67.1127 30.1662 64.8425 28.0794 62.1672 26.6444C59.5673 25.2742 56.6602 24.5922 53.7222 24.6635C50.7844 24.7349 47.9135 25.5573 45.3833 27.0521C39.4106 30.4401 35.6617 36.1457 34.5433 43.5518C33.0908 53.1685 39.9252 62.579 49.7769 64.529C51.1036 64.7941 52.453 64.9289 53.8061 64.9318C62.0976 64.9318 68.8665 59.6438 70.9274 51.0923C71.2463 49.6527 71.4885 48.197 71.6526 46.7316C71.7393 46.072 71.8246 45.4125 71.925 44.7562C71.9388 44.6664 71.9342 44.5746 71.9112 44.4866C71.8889 44.3987 71.8489 44.3162 71.7937 44.244C71.7543 44.1921 71.7077 44.1459 71.6559 44.1069ZM64.2051 44.9052L64.1913 45.1802C64.1775 45.4768 64.1585 45.8771 64.1257 46.2775C63.7812 50.4453 62.2557 53.6883 59.7144 55.6547C57.4546 57.4038 54.4993 58.0227 51.1625 57.4477C49.4206 57.0842 47.7699 56.3732 46.3093 55.357C44.8486 54.3408 43.6079 53.0401 42.6614 51.5333C41.7984 50.1604 41.244 48.6166 41.0368 47.0082C40.8296 45.3998 40.9747 43.7654 41.4617 42.2187C42.7186 37.9282 44.5755 33.7833 49.6102 32.5139C50.8258 32.2002 52.0755 32.0378 53.3309 32.0303C55.7094 31.9733 58.0361 32.7298 59.9263 34.1746C62.7512 36.4088 64.2707 40.22 64.2051 44.9023V44.9052Z" />
                    </svg>
                    <a href="https://maps.app.goo.gl/KU8TCKjJE49ia59Y8"
                        target="_blank">Одеса, Гагарінське плато 5б</a>
                </div>
                <div class="phone">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="612px" height="612px"
                        viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                        <g>
                            <g id="Phone">
                                <g>
                                    <path
                                        d="M559.959,383.188l-99.145-50.93c-24.27-12.508-55.653-8.243-75.772,10.251l-11.571,10.595
                                            c-11.226,10.328-28.726,12.719-42.323,5.681c-33.813-17.404-60.856-44.446-78.279-78.183c-7.133-13.847-4.857-30.83,5.718-42.305
                                            l10.615-11.551c11.379-12.374,17.633-28.439,17.633-45.211c0-10.557-2.563-21.114-7.401-30.524l-50.987-99.067
                                            C211.942,19.928,179.333,0,143.359,0c-21.152,0-41.195,6.771-57.949,19.565L55.27,42.553
                                            c-47.334,36.07-66.785,98.36-48.444,154.989c61.085,188.382,209.132,340.311,396.021,406.426
                                            c15.09,5.336,30.868,8.032,46.876,8.032c37.428,0,73.918-15.204,100.139-41.769l34.521-34.903
                                            c17.824-18.016,27.616-41.846,27.616-67.109C611.999,432.244,592.051,399.674,559.959,383.188z M543.531,495.051l-34.501,34.903
                                            c-22.147,22.414-57.223,30.504-87.058,19.947C251.817,489.734,117.024,351.384,61.409,179.871
                                            c-10.844-33.526,0.65-70.38,28.668-91.743l30.16-23.007c6.675-5.087,14.669-7.784,23.122-7.784
                                            c14.382,0,27.444,7.975,34.042,20.846l50.968,99.067c0.688,1.339,1.052,2.792,1.052,4.303c0,3.06-1.377,5.183-2.543,6.445
                                            l-10.595,11.532c-26.737,29.07-32.532,72.197-14.42,107.33c22.874,44.407,58.522,79.98,102.988,102.892
                                            c34.521,17.786,78.853,11.801,107.406-14.401l11.59-10.633c1.874-1.722,6.731-3.52,10.748-1.473l99.144,50.93
                                            c12.891,6.617,20.885,19.66,20.885,34.043C554.604,478.297,550.665,487.821,543.531,495.051z" />
                                </g>
                            </g>
                        </g>

                    </svg>
                    <a href="tel:+380963126112">+380 96 312 61 12</a>
                </div>
            </div>
            <div class="menu-button" @click="isShowMobileMenu = true" v-if="isShowMobileMenu === false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                    width="50px" height="50px">
                    <g fill="#d87501" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(5.12,5.12)">
                            <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                        </g>
                    </g>
                </svg>
            </div>

        </div>
        <div class="menu">
            <p class="montserrat_medium" @click="emit('scroll:to', 'services')">
                Послуги салону
            </p>
            <p class="montserrat_medium" @click="emit('scroll:to', 'benefits')">
                Чому ми?
            </p>
            <p class="montserrat_medium" @click="emit('scroll:to', 'reviews')">
                Відгуки
            </p>
            <p class="montserrat_medium" @click="emit('scroll:to', 'consultation')">
                Контакти
            </p>
        </div>
        <transition name="fade">
            <div class="mobile_menu" v-if="isShowMobileMenu === true">
                <div class="close_button" v-if="isShowMobileMenu === true" @click="isShowMobileMenu = false">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40.000000pt" height="40.000000pt"
                        viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M405 2239 c-19 -5 -95 -73 -212 -191 -172 -173 -182 -185 -188 -230
                                -13 -89 -6 -99 301 -408 l283 -285 -283 -285 c-307 -309 -314 -318 -301 -408
                                6 -45 15 -56 193 -234 168 -167 191 -187 228 -193 95 -15 104 -8 414 301 l285
                                283 285 -283 c309 -307 318 -314 408 -301 45 6 56 15 234 193 167 168 187 191
                                193 228 15 95 8 104 -301 414 l-283 285 283 285 c307 309 314 319 301 408 -6
                                45 -15 56 -193 234 -178 178 -189 187 -234 193 -89 13 -99 6 -408 -301 l-285
                                -284 -275 275 c-172 172 -290 283 -316 295 -43 21 -80 24 -129 9z" />
                        </g>
                    </svg>
                </div>
                <p class="montserrat_medium" @click="emit('scroll:to', 'services'), isShowMobileMenu = false">
                    Послуги салону
                </p>
                <p class="montserrat_medium" @click="emit('scroll:to', 'benefits'), isShowMobileMenu = false">
                    Чому ми?
                </p>
                <p class="montserrat_medium" @click="emit('scroll:to', 'reviews'), isShowMobileMenu = false">
                    Відгуки
                </p>
                <p class="montserrat_medium" @click="emit('scroll:to', 'consultation'), isShowMobileMenu = false">
                    Контакти
                </p>
                <a href="https://maps.app.goo.gl/KU8TCKjJE49ia59Y8"
                    target="_blank" class="montserrat_medium">
                    <svg width="102" height="162" viewBox="0 0 102 162" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M27.5958 120.849C20.9996 122.189 12.5714 124.547 5.89444 130.952C2.54712 134.168 0.878113 138.021 1.20169 141.806C1.51148 145.436 3.66617 148.776 7.26881 151.209C11.1302 153.83 15.3871 155.815 19.8772 157.089C29.6068 159.807 39.6601 161.191 49.7622 161.207C57.3009 161.203 64.8192 160.424 72.1982 158.881C79.3523 157.39 87.632 155.139 94.7599 149.757C98.2037 147.158 100.23 143.963 100.621 140.516C101.015 137.037 99.7388 133.431 96.9271 130.08C93.0042 125.403 87.8171 122.195 81.0693 120.272C78.5444 119.55 75.921 119.068 73.3842 118.6C72.5507 118.446 71.7178 118.293 70.8849 118.13C71.9055 116.539 72.9307 114.954 73.9605 113.376C76.5622 109.372 79.2532 105.231 81.7302 101.058C89.1364 88.5795 97.8591 71.7897 99.5826 52.5642C101.399 32.303 95.0145 17.7991 80.0638 8.22578C69.6937 1.58496 58.122 -0.648498 45.6752 1.59158C26.8567 4.97632 14.5588 15.9805 9.12306 34.2989C5.88275 45.2216 7.06875 56.2665 8.46672 64.6696C10.756 78.4575 15.9286 92.2543 25.2401 109.405C26.6919 112.08 28.2257 114.63 29.8501 117.329C30.4159 118.268 30.983 119.214 31.5514 120.168L30.8295 120.285C29.7019 120.466 28.6426 120.637 27.5958 120.849ZM51.7895 127.563C51.3568 128.123 50.9212 128.686 50.4828 129.255C41.7279 121.787 36.1235 112.24 31.3723 103.015C25.2578 91.1438 18.7232 76.8586 16.6217 60.9068C14.8246 47.255 16.1694 37.1774 20.983 28.221C26.9629 17.0955 38.8498 10.0695 52.7806 9.42563C53.4627 9.39413 54.1411 9.37824 54.8153 9.37824C67.6341 9.37824 78.9684 15.0413 85.4208 24.7656C89.5275 30.9582 91.341 38.1747 91.131 47.475C90.8947 57.8307 88.0317 68.5074 82.1214 81.0723C75.4517 95.2564 66.7415 108.917 55.4939 122.834C54.239 124.385 53.0491 125.928 51.7895 127.563ZM34.7451 125.964C35.4474 125.995 36.1163 126.272 36.6354 126.747C40.5985 131.286 45.5055 134.904 51.0132 137.349C53.4239 138.412 55.5707 137.76 57.3888 135.412L58.6273 133.808C60.3049 131.63 62.0403 129.378 63.8472 127.264C64.3824 126.598 65.1522 126.161 65.9987 126.045C72.1936 126.548 78.7071 127.494 84.3654 130.981C86.7506 132.502 88.8876 134.381 90.7011 136.553C91.0949 136.944 91.404 137.412 91.6107 137.928C91.8175 138.443 91.9173 138.995 91.9035 139.55C91.8083 140.115 91.5989 140.655 91.2885 141.136C90.978 141.618 90.5731 142.032 90.0979 142.353C87.9549 144.058 85.6053 145.486 83.1033 146.602C73.7131 150.772 62.8882 152.85 49.0395 153.14C38.9923 152.77 29.2043 152.177 19.9158 149.047C16.8881 148.059 14.0059 146.671 11.3454 144.921C9.48011 143.663 8.44762 142.193 8.36033 140.668C8.27763 139.231 9.05342 137.771 10.603 136.446C13.9412 133.59 17.6803 131.24 21.7011 129.47C24.9119 128.071 28.4949 127.296 31.9603 126.547C32.809 126.364 33.6577 126.18 34.5004 125.987C34.5809 125.971 34.6629 125.963 34.7451 125.964Z" />
                        <path
                            d="M71.6559 44.1069C71.6559 43.927 71.6631 43.7473 71.6677 43.5681C71.6999 42.7805 71.6894 41.9917 71.6349 41.2053C71.4085 38.1778 70.4226 35.2566 68.7674 32.7113C67.1127 30.1662 64.8425 28.0794 62.1672 26.6444C59.5673 25.2742 56.6602 24.5922 53.7222 24.6635C50.7844 24.7349 47.9135 25.5573 45.3833 27.0521C39.4106 30.4401 35.6617 36.1457 34.5433 43.5518C33.0908 53.1685 39.9252 62.579 49.7769 64.529C51.1036 64.7941 52.453 64.9289 53.8061 64.9318C62.0976 64.9318 68.8665 59.6438 70.9274 51.0923C71.2463 49.6527 71.4885 48.197 71.6526 46.7316C71.7393 46.072 71.8246 45.4125 71.925 44.7562C71.9388 44.6664 71.9342 44.5746 71.9112 44.4866C71.8889 44.3987 71.8489 44.3162 71.7937 44.244C71.7543 44.1921 71.7077 44.1459 71.6559 44.1069ZM64.2051 44.9052L64.1913 45.1802C64.1775 45.4768 64.1585 45.8771 64.1257 46.2775C63.7812 50.4453 62.2557 53.6883 59.7144 55.6547C57.4546 57.4038 54.4993 58.0227 51.1625 57.4477C49.4206 57.0842 47.7699 56.3732 46.3093 55.357C44.8486 54.3408 43.6079 53.0401 42.6614 51.5333C41.7984 50.1604 41.244 48.6166 41.0368 47.0082C40.8296 45.3998 40.9747 43.7654 41.4617 42.2187C42.7186 37.9282 44.5755 33.7833 49.6102 32.5139C50.8258 32.2002 52.0755 32.0378 53.3309 32.0303C55.7094 31.9733 58.0361 32.7298 59.9263 34.1746C62.7512 36.4088 64.2707 40.22 64.2051 44.9023V44.9052Z" />
                    </svg>
                    <span>Одеса, Гагарінське плато 5б</span></a>
                <a href="tel:+380963126112" class="montserrat_medium">
                    <svg version="1.1" id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="612px" height="612px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;"
                        xml:space="preserve">
                        <g>
                            <g id="Phone">
                                <g>
                                    <path
                                        d="M559.959,383.188l-99.145-50.93c-24.27-12.508-55.653-8.243-75.772,10.251l-11.571,10.595
                                            c-11.226,10.328-28.726,12.719-42.323,5.681c-33.813-17.404-60.856-44.446-78.279-78.183c-7.133-13.847-4.857-30.83,5.718-42.305
                                            l10.615-11.551c11.379-12.374,17.633-28.439,17.633-45.211c0-10.557-2.563-21.114-7.401-30.524l-50.987-99.067
                                            C211.942,19.928,179.333,0,143.359,0c-21.152,0-41.195,6.771-57.949,19.565L55.27,42.553
                                            c-47.334,36.07-66.785,98.36-48.444,154.989c61.085,188.382,209.132,340.311,396.021,406.426
                                            c15.09,5.336,30.868,8.032,46.876,8.032c37.428,0,73.918-15.204,100.139-41.769l34.521-34.903
                                            c17.824-18.016,27.616-41.846,27.616-67.109C611.999,432.244,592.051,399.674,559.959,383.188z M543.531,495.051l-34.501,34.903
                                            c-22.147,22.414-57.223,30.504-87.058,19.947C251.817,489.734,117.024,351.384,61.409,179.871
                                            c-10.844-33.526,0.65-70.38,28.668-91.743l30.16-23.007c6.675-5.087,14.669-7.784,23.122-7.784
                                            c14.382,0,27.444,7.975,34.042,20.846l50.968,99.067c0.688,1.339,1.052,2.792,1.052,4.303c0,3.06-1.377,5.183-2.543,6.445
                                            l-10.595,11.532c-26.737,29.07-32.532,72.197-14.42,107.33c22.874,44.407,58.522,79.98,102.988,102.892
                                            c34.521,17.786,78.853,11.801,107.406-14.401l11.59-10.633c1.874-1.722,6.731-3.52,10.748-1.473l99.144,50.93
                                            c12.891,6.617,20.885,19.66,20.885,34.043C554.604,478.297,550.665,487.821,543.531,495.051z" />
                                </g>
                            </g>
                        </g>

                    </svg><span> +380 96 312 61 12</span></a>
                    <div class="social_media">
                        <a href="https://www.tiktok.com/@groom.guru" target="_blank"><img loading="lazy" src="../assets/tt.webp" alt=""></a>
                        <a href="https://www.instagram.com/groom__guru" target="_blank"><img loading="lazy" src="../assets/free-icon-instagram-15713420.png" alt=""></a>
                        <a href="https://t.me/groomguru1" target="_blank"><img loading="lazy" src="../assets/Telegram.png" alt=""></a>
                    </div>
            </div>
        </transition>

    </div>
</template>
<script setup>
import { ref, defineEmits,onMounted } from 'vue'

const isShowMobileMenu = ref(false)
const emit = defineEmits()

</script>
<style scoped lang="scss">
.header_wrapper {
    position: relative;
    z-index: 2;

    .header_block {
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-wrap: nowrap;
        justify-content: space-between;

        .img_block {
            max-width: 200px;
        }

        .contacts_block {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            width: 100%;
            max-width: 500px;

            div {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;

                svg {
                    width: 100%;
                    height: 100%;
                    max-width: 25px;
                    max-height: 25px;
                    fill: var(--yellow_color);
                    margin-right: 10px;
                }
            }

            .address {
                width: 100%;
                max-width: 350px;
            }

            .phone {
                width: 100%;
                max-width: 190px
            }

        }
    }

    .menu {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        border: 2px solid var(--yellow_color);
        border-radius: 16px 16px 32px 32px;
        padding: 15px 30px;
        margin-top: 25px;
        background-color: rgb(255 255 255 / 78%);

        p {
            font-size: 18px;
        }

        p:hover {
            cursor: pointer;
            color: var(--orange_color);
        }
    }

    .menu-button {
        display: none;
    }
}

@media screen and (max-width: 700px) {
    .header_wrapper {
        margin-bottom: 70px;
        position: relative;
        height: 50px;

        .header_block {
            .contacts_block {
                display: none;
            }
        }

        .menu {
            display: none;
        }

        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 1s;
        }

        .fade-enter-from,
        .fade-leave-to {
            opacity: 0;
        }

        .mobile_menu {
            height: 100vh;
            width: 100%;
            max-width: 700px;
            position: fixed;
            top: 0;
            right: 0px;
            background-color: white;
            z-index: 3;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: space-between;
            padding-bottom: 50px;

            .close_button {
                text-align: end;
                margin: 10px;
            }

            p, a {
                border: 2px solid var(--yellow_color);
                border-radius: 15px;
                margin: 0 auto;
                width: 250px;
                padding: 10px 15px;
            }

            a {
                color: black;
                display: flex;
                justify-content: center;
                svg {
                    width: 100%;
                    height: 100%;
                    max-width: 25px;
                    max-height: 25px;
                    fill: var(--yellow_color);
                    margin-right: 10px;
                }
            }

            .social_media {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                a {
                    border: none;
                    img{
                        width: 35px;
                    }
                }
            }
        }

        .menu-button {
            display: inline-block;
            width: 35px;
            height: 35px;
            position: relative;
            cursor: pointer;

            svg {
                width: 35px;
                height: 35px;
            }
        }

        .close_button {
            svg {
                width: 35px;
                height: 35px;
                fill: var(--orange_color);
            }
        }

    }





}
</style>