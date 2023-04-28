<script>
import { store } from '../store';
export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
<footer>
    <div class="footer-sec">
        <div class="subscribe">
            <h2>Subscribe <span class="orange">&</span> Recive A Free eBook</h2>
            <p>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia
            lobortis.</p>
            <div class="input">
                <div class="email">Insert your email ...*</div>
                <button>SUBSCRIBE</button>
            </div>
            <h6>Cras porttitor pellentesque sem eu pretium.</h6>
        </div>
    </div>
    <div class="foot-img">
        <div class="img" v-for="(photo, index) in this.store.imgFooter" :key="index">
            <img :src=photo alt="image">
        </div>
    </div>
    <div class="foot-bot">
        <div class="social">
            <img src="../assets/avada-food-logo-mob-2x-200x87.png" alt="logo">
            <div class="icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i> 
            </div>
        </div>
        <div class="list">
            <div  v-for="(element, index) in this.store.list">{{ element }}</div>
        </div>
        <div class="contact">
            <h3>CONTACT</h3>
            <div class="place">
                <i class="fa-solid fa-location-dot"></i>
                775 New York Ave, Brooklyn, Kings, New York 11203
            </div>
            <div class="number">
                <i class="fa-solid fa-phone-flip"></i>
                + 0100-505-0000
            </div>
            <div class="email-info">
                <i class="fa-solid fa-envelope"></i>
                info@your-domain.com
            </div>
        </div>
        <div class="app">
            <h3>GET OUR APP!</h3>
            <img src="../assets/download-android-200x66.png" alt="download">
            <img src="../assets/download-app-store-200x66.png" alt="download">
        </div>
    </div>
</footer>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/variables.scss" as *;

.footer-sec { 
    background-image: url(../assets/subscribe-sec-bg.png);
    object-fit: contain;
    background-position: center;
    background-size: cover;

    .subscribe {
        @include margin;
        padding: 160px;

        .orange {
            color: #fc7525;
        }

        h6 {
            text-align: center;
        }

        h2 {
            color: #262628;
        }
    }

    .email {
        background-color: white;
        padding: 10px;
        color: #6a6b6c;
        border: 1px solid lightgray;
        margin: 30px 0;
    }
    button {
        @include button;
        height: 40px;
    }

    p, h6 {
        color: #6a6b6c;
    }
}

.img {
    height: 300px;
    display: inline-block;
    width: 23%;

    img {
        height: 100%;
    }
}

.foot-bot {
    @include margin;
    padding: 40px;
    display: flex;

    h3 {
        color: #fc7525;
    }
}

.social, .list, .contact {
    border-right: 1px dotted lightgray;
    margin: 0 30px;
    padding-right: 25px;
}

.icons {
    padding: 40px 10px;
    display: flex;
    gap: 25px;
    color: #979c9c;
    cursor: pointer;
}

.contact {
    margin: 0 30px;
    line-height: 30px;
}

.list {
    margin: 10px;
    line-height: 40px;
}

.app img {
    margin-top: 20px;
    cursor: pointer;
}

</style>