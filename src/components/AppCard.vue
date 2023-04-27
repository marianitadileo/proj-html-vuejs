<script>

export default {
    name: "AppCard",
    props: {
        imagine: String, 
        title: String,
        date: String
    }
}
</script>

<template>
    <div>
        <div class="card">
            <img :src=imagine alt="image">
            <div>
                <h3> {{ title }}</h3>
                <span> {{ date }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 280px;
    text-align: center;
    color: #262628;
    

    img {
        width: 100%;
    }
  
}

</style>