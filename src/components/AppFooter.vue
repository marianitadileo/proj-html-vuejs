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

    .input {
      display: flex;
      justify-content: space-between;
        
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
</style>