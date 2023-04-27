<script>
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    name: "AppMain",
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main> 
        <!-- 1 SECTION  -->
        <section class="first-sec">
            <div class="food-journal">
                <div class="cont-title"> 
                    <hr class="left-dotted"/> 
                    <h2>FOODIE JOURNAL</h2>
                    <hr class="right-dotted"/>
                </div>
              
                <div class="card-section">
                    <AppCard v-for="(element, index) in this.store.cardArray" :imagine="element.imagine" :title="element.title" :date="element.date" :key="index"/>
                </div>
            </div>
        </section>

         <!-- 2 SECTION  -->
        <section class="second-sec">
            <div>
                <div class="title-section">
                    <h3>POPULAR RECIPES</h3>
                    <p> Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse <br>
                        maximus lacus non nunc lacinia lobortis.
                    </p>
                </div>
                <div class="container">
                    <div class="container-left">
                        <div class="card">
                            <img src="../assets/Yogurt-Nan-600x395.jpg" alt="image">
                            <div class="text">
                                <h3>Lunch Favourite with Salad, Naan And Beans</h3>
                                <h5>Bakery, Featured, Healthy, Latest Recipes, Staff Picks</h5>
                                <p>Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci
                                    varius natoque penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus. Donc tincidunt posuere ornare. Phasellus placerat odio
                                    non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor,
                                    diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id
                                </p>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div class="container-right">
                        <div v-for="(photo, index) in this.store.cardCol" :key="index">
                            <img class="right-cont-img" :src=photo alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3 SECTION  -->
        <section class="third-section">
            <div class="title-section">
                <h3>CULINARY COLLECTION</h3>
                <p> Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse <br>
                    maximus lacus non nunc lacinia lobortis.
                </p>
            </div>
            <div class="card-collection">
                
            </div>
        </section>

        <!-- 4 SECTION  -->
        <section>
            <div class="flex">
                <div class="title-section">
                    <h3>FARM TO TABLE</h3>
                    <p> Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse <br>
                        maximus lacus non nunc lacinia lobortis.
                    </p>
                </div>
                <button>READ OUR BLOG</button>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/variables.scss" as *;

main {
    background-color: #f6f7f1;
}

.card-section {
    display: flex;
    justify-content: space-around;
}

.food-journal {
    @include margin;
    background-color: white;
    transform: translateY(-15%);
    padding-bottom: 15px;

    .cont-title{
        display: flex;
        align-items: center;
        padding: 0px 24px;
    }
    .left-dotted, .right-dotted { 
        border-top: 3px dotted lightgray;
        width: 20px;
        flex: 1;
    }

    h2 {
        text-align: center;
        color: #262628;
        padding: 20px;
    }
}
.title-section {
    text-align: center;
    color: #39403e;
    margin: 100px 0 50px;
    @include margin;
    h3 {
        margin-bottom: 25px;
    }
}
.container {
    width: 100%;
    @include margin;
    display: flex;
    margin-top: 50px;


    .container-left {
        background-color: white;
        margin-right: 20px;
        flex: 1;

    
        img {
            width: 100%;
        }
        .text {
            padding: 15px 20px 20px 20px;
        }
        .text p {
            border-top: 1px dotted lightgray;
            padding-top: 20px;
            margin: 20px 10px 20px 0
        }
       
    }
    .container-right {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;

        .right-cont-img {
        height: 100%;
        width: 200px;
}
    }
}

button {
    @include button;
}

.flex {
    display: flex;
    justify-content: space-between;
    @include margin;
}
</style>