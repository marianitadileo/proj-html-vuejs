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
            <div class="parag-title">
                <h3>CULINARY COLLECTION</h3>
                <p> Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse <br>
                    maximus lacus non nunc lacinia lobortis.
                </p>
            </div>
            <div class="card-collection">
                <div class="culinary-card-wrapper" v-for="(element, index) in this.store.cardCollection" :key="index">
                    <img class="culinary-card" :src=element.img alt="image">
                    <h6>{{ element.txt }}</h6>
                </div>
            </div>
        </section>

        <!-- 4 SECTION  -->
        <section>
            <div class="s4-title">
                <div>
                    <h3 class="s4-h3">FARM TO TABLE</h3>
                    <p> Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse <br>
                        maximus lacus non nunc lacinia lobortis.
                    </p>
                </div>
                <button class="s4-button">
                    <i class="fa-solid fa-book-open-reader"></i> READ OUR BLOG</button>
            </div>
            <div class="s4-container">
                <div class="s4-left">
                    <div class="card">
                        <img class="s4-left-img" src="../assets/single-post-img3-1200x790.jpg" alt="image">
                        <div class="text-bigcard">
                            <h3>Food Corner: Top Japanese Restaurants for Sushi</h3>
                            <h5>By admin | March 25th, 2019</h5>
                            <p>Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et
                                magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus
                                placerat odio non feugiat sollicitudin. Integer vitae elementum ex.
                            </p>
                            <div class="read">
                                <h6>Read More &#8827;</h6>
                                <i class="fa-regular fa-comments"> 0</i>
                            </div>
                        </div>
                    </div>
                    <div class="s4-array">
                        <div class="s4-card" v-for="element in this.store.cardArray2">
                            <img :src=element.imagine alt="image">
                            <div class="text-s4">
                                <h3>{{ element.title }}</h3>
                                <div class="date">{{ element.date }}</div>
                            </div>
                        </div>
                    </div>
                    <button class="special-butt">LOAD MORE POSTS</button>
                </div>
                <div class="s4-right">
                    <div class="photo-right">
                        <img src="../assets/ad-bg.jpg" alt="image">
                        <h3>VIEW OUR <br> LATEST <br> RECIPES</h3>
                    </div>
                    <div class="singapore">
                        <img src="../assets/singapore-featured-image-400x263.jpg" alt="image">
                        <h4>City Guide: Singapore</h4>
                        <button><i class="fa-solid fa-earth-americas"></i> VIEW ALL CITY GUIDES</button>
                    </div>
                    <div class="s4-bottom">
                        <div class="elements">
                            <hr>
                            <div class="search">
                                <i class="fa-solid fa-magnifying-glass"></i>  Search...
                            </div>
                            <p>Follow us</p>
                        </div>
                        <div class="socials">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-pinterest"></i>
                        </div>
                        <div class="popular-recent">
                            <div class="popular">Popular</div>
                            <div class="recent">Recent</div>
                        </div>
                    </div>
                    <div>
                        <div class="card-radius" v-for="element in this.store.cardCircle">
                            <img class="radius" :src=element.imagine alt="image">
                            <div class="text-circle">
                                <h3>{{ element.title }}</h3>
                                <div class="date-circle">{{ element.date }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="twitter">
                        <div class="tweets-top">
                            <div>Tweets
                                <span class="blue">by @Theme_Fusion</span>
                            </div>
                            <img src="../assets/image.svg" alt="image">
                        </div>
                        <div class="tweets-mid">
                            <div class="card-tweet">
                                <img src="../assets/3a74ce3d0532b7773b174c45ca3bd05a_normal.png" alt="logo">
                                <div class="mex-tweet">
                                    <h5>ThemeFusion</h5>
                                    <h6>@Theme_Fusion</h6>
                                    <p>Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured just for you, & launch your site in seconds with <span class="blue">#avada</span>  on WP Engine hosting & get 30% Off this Black Friday <span class="blue">bit.ly/3kLLE2 #BlackFriday2020</span></p>
                                </div>
                                <img src="../assets/image (1).svg" alt="logo">
                            </div>
                        </div>
                        <img  class="off" src="../assets/En2TRxLW4AEiWUN.jpeg"> 
                        <div class="tweets-bot">
                            <div class="icon-bot">
                                <img src="../assets/image (2).svg">
                                <img src="../assets/image (3).svg">
                            </div>
                            <div>21h</div>
                        </div>
                    </div>
                </div>
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

// SECTION 1
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

// SECTION 2 
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

            p {
            border-top: 1px dotted lightgray;
            padding-top: 20px;
            margin: 20px 10px 20px 0;
            color: #6a6b6c;
            }

            h3 {
                color: #262628;
            }

            h5 {
                color: #39403e;
            }
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

// SECTION 3 
.parag-title{
    padding-top: 120px;
    color: #39403e;
    text-align: center;
    @include margin;

    h3 {
        padding-bottom: 20px;
    }
}

.card-collection{
    display: flex;
    flex-wrap: wrap; 
    width: 100%;
    gap: 30px;
    width: 65%;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 50px;

    .culinary-card-wrapper{
        background-color: white;
        width: 220px;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 10px;
        box-shadow: 5px 5px 5px 5px #e5e5e3;
    }
    .culinary-card{
        height: 60px;
        margin-bottom: 10px;    
    }
}

button {
    @include button;
}

// SECTION 4 
.s4-title {
    display:flex;
    justify-content: space-between;
    @include margin;
    margin-top: 100px;
    .s4-button {
        height: 40px;
    }
    .s4-h3 {
        padding-bottom: 20px;
    }
}

// left-side
.s4-container {
    display: flex;
    width: 100%;
    @include margin;
    margin-top: 50px;
    .s4-left {
        width: 60%;

        .card {
            background-color: white;

            .text-bigcard {
                padding: 20px;

                h5 {
                    padding: 10px 0 20px 0;
                    border-bottom: 1px dotted lightgray;
                    color: #39403e;
                }

                p {
                    padding-top: 15px;
                    color: #6a6b6c;
                }

                .read {
                    display: flex;
                    justify-content: space-between;
                    padding: 15px 0;
                }
            }
        }
        .s4-left-img {
            width: 100%;
            height: 450px;
        }
        .s4-array {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 40px;
        }
        .s4-card {
            width: 45%;
            margin-bottom: 40px;
            background-color: white;
        }

        img {
            width: 100%;
        }

        .text-s4 {
            padding: 20px;
            text-align: center;
            font-size: 0.8rem;

            .date {
                padding-top: 10px;
            }
        }

        .special-butt {
            width: 100%;
            color: #39403e;
            background-color: #f0eeeb;
        }
    }

    // right-side 
    .s4-right {
        width: 40%;
        margin-left: 35px;

        .photo-right {
            text-align: center;
            position: relative;
            

            img {
                width: 100%;
                height: 380px;
            }

            h3 {
                position: absolute;
                top: 150px;
                left: 140px;
                text-align: center;
                line-height: 30px;
            }
        }
    }

    .singapore {
        position: relative;
        img {
            width: 100%;

        }

        h4 {
            color: white;
            background-color: rgb(38, 38, 40, 0.8);
            position: absolute;
            bottom: 110px;
            padding: 10px;  
        }

        button {
            width: 100%;
            margin-bottom: 15px;
        }
    }

    .s4-bottom {
        .elements {
           padding: 15px 0;

           .search {
            background-color: white;
            padding: 10px;
            color: #6a6b6c;
            border: 1px solid lightgray;
            margin: 30px 0;
            }

            p {
                color: #fc7525;
            }
        }

        .socials {
           
            i {
                background-color: #f0eeeb;
                padding: 5px 10px;
                margin-right: 5px;
                border: 1px solid #f6f7f1;
                border-radius: 5px;
                cursor: pointer;
                color: #6a6b6c;
            }
        }

       .popular-recent {
        display: flex;
        padding-top: 40px;

        .popular, .recent {
            padding: 15px 50px;
            color: #262628;
            border: 1px solid lightgray;
        }

        .popular {
            background-color: white;
        }
       }
    }

    .card-radius {
        display: flex;
        margin: 20px 0;

        .radius {
            width: 12%;
            height: 50px;
            border-radius: 100%;
            margin-right: 10px;
        }

        .text-circle {
            padding: 5px;
          
            h3 {
                padding-bottom: 5px;
            }
        }
    }

    .tweets-top {
        display: flex;
        justify-content: space-between;
    }

    .twitter {
        background-color: white;
        padding: 20px;
    }

    .off {
        width: 100%;
        margin-top: 20px;
    }

    .blue {
        color: #0942ad;
    }

    .card-tweet {
        display: flex;
        justify-content: space-around;

        img {
            width: 10%;
            height: 25px;
            margin: 10px
        }

        h6 {
            color: #979c9c;
        }
    }

    .tweets-mid {
        margin-top: 15px;
    }

    .tweets-bot {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }

    .icon-bot img {
        margin-right: 10px;
    }
}
</style>