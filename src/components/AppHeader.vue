<script>

export default {
    name: "AppHeader",
    props: {
        menuList: Array
    }
}
</script>

<template>
<header>
    <div class="header-top">
        <div class="left">
            <span>Download App</span>
            <span id="ios">iOS</span>
            <span>Advertise with us</span>
        </div>
        <div class="right">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
        </div>
    </div>
    <div class="logo">
        <img src="../assets/avada-food-logo.png" alt="logo">
    </div>
    <div class="menu">
        <div class="element" v-for="(element, i) in this.menuList">{{ element }}</div>
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <!-- JUMBOTRON -->
    <div class="jumbotron">
        <div class="today">TODAY'S PICK</div>
        <div class="title-page">
            <h1>Food Corner: Top Japanese <br> Restaurants for Sushi</h1>
            <h5>March 25, 2019</h5>
        </div>
    </div>

</header>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/variables.scss" as *;

.header-top {
    display: flex;
    justify-content: space-between;
    @include margin;
    cursor: pointer;
    color: #6a6b6c;
    margin-top: 20px;
   
    .right {
    display: flex;
    gap: 25px;
    color: #979c9c;
    }
    .left {
        display: flex;
        gap: 5px;
        align-items: center;
        font-size: 0.7rem;
    }

    #ios {
        background-color: #fc7525;
        padding: 2px 5px;
        color: white;
        border-radius: 20%;
        margin-right: 30px;
    }
}
.logo {
    text-align: center;
    margin-top: 15px;
}

.menu {
    display: flex;
    gap: 45px;
    justify-content: center;
    margin: 25px;
    cursor: pointer;
}

.element:hover {
    border-bottom: 2px solid #fc7525;
}

// Jumbo 
.jumbotron {
    height: 500px;
    background-image: url(../assets/single-post-img3-1200x790.jpg);
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .title-page {
        background-color: white;
        text-align: center;
        padding: 70px 65px 45px 65px;
        border-radius: 10px;
       

        h1 {
            color: #39403e;
           font-size: 2.8rem;
        }

        h5 {
            margin-top: 25px;
            color: #6a6b6c;
            font-size: 1.1rem;
        }
    }
    .today {
        color: white;
        background-color: #fc7525;
        padding: 10px 20px;
        border-radius: 8px;
        position: absolute;
        top: 95px;
        font-weight: bold;
    }
}
</style>