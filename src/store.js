import { reactive } from 'vue';

export const store = reactive(
    {
       cardArray: [
        {
            imagine: "./src/assets/single-post-img3-400x263.jpg",
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            date:  "By admin | March 25th, 2019"
        },
        {
            imagine: "./src/assets/fi-roundup-400x263.jpg",
            title: "Roundup: My New Favourite Recipes For Healthy Living",
            date:  "By admin | March 25th, 2019"
        },
        {
            imagine: "./src/assets/fi-toasts-400x263.jpg",
            title: "Why These Toasts with Tea are My New Favorite",
            date:  "By admin | March 25th, 2019"
        }
       ],
       cardCol: [ "./src/assets/Mixed-fruits-460x295.jpg", "./src/assets/r-rachel-park-366508-unsplash-min-460x295.jpg", "./src/assets/r-michelle-tsang-500721-unsplash-min-460x295.jpg", "./src/assets/quick-summer-drink-460x295.jpg", "./src/assets/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg", "./src/assets/perfect-cosmopolitan-460x295.jpg", "./src/assets/fi2x-6-460x295.jpg", "./src/assets/r-brooke-lark-96398-unsplash-min-460x295.jpg" ],

       cardCollection: [{
            img: "./src/assets/drinks-recipes.png",
            txt: "DRINKS"
       },
       {
            img: "./src/assets/soups-recipes.png",
            txt: "SOUPS"
       },
       {
            img: "./src/assets/baking-recipes.png",
            txt: "BAKERY"
       },
       {
            img: "./src/assets/dinner-recipes.png", 
            txt: "DINNER"
       },
       {
            img: "./src/assets/healthy-recipes.png",
            txt: "HEALTY"
       },
       {
            img: "./src/assets/staff-picks.png",
            txt: "STAFF PICKS"
       },
       {
            img:"./src/assets/premium-recipes.png", 
            txt: "APPETISERS"
       },
       {
            img: "./src/assets/quick-easy-recipes.png",
            txt: "QUICK & EASY"
       }],
       cardArray2: [
        {
            imagine: "./src/assets/fi-roundup-400x263.jpg",
            title: "Roundup: My New Favourite Recipes For Healthy Living",
            date:  "By admin | March 25th, 2019"
        },
        {
            imagine: "./src/assets/fi-korean-food-800x527.jpg",
            title: "Meal Prep: Korean Bibimbap with Kimchi",
            date:  "By admin | March 25th, 2019"
        },
        {
            imagine: "./src/assets/fi-toasts-800x527.jpg",
            title: "Why These Toasts with Tea are My New Favorite",
            date:  "By admin | March 25th, 2019"
        },
        {
            imagine: "./src/assets/fi-street-food-800x527.jpg",
            title: "Exploring Street Food in Bangkok",
            date:  "By admin | March 25th, 2019"
        },
        {
            imagine: "./src/assets/fi-organic-breakfast-1200x790.jpg",
            title: "Organic Choices For Healthier Living",
            date:  "By admin | March 25th, 2019"
        },
        {
            imagine: "./src/assets/fi-water-side-rest-800x527.jpg",
            title: "5 Waterside Restaurants in Instanbul for Special Events",
            date:  "By admin | March 25th, 2019"
        },
       ],
       cardCircle: [
        {
            imagine: "./src/assets/single-post-img3-400x263.jpg",
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            date:  "March 25th, 2019"
        },
        {
            imagine: "./src/assets/singapore-featured-image-400x263.jpg",
            title: "City Guide: Singapore",
            date: "February 27th, 2019"
        },
        {
            imagine: "./src/assets/slide1-bg-150x150.jpg",
            title: "6 Nutritional Tips to Help Burn Fat",
            date: "February 28th, 2019"
        }
       ],
       imgFooter: ["./src/assets/Yogurt-Nan-600x395.jpg", "./src/assets/Mixed-fruits-460x295.jpg", "./src/assets/r-rachel-park-366508-unsplash-min-460x295.jpg", "./src/assets/r-michelle-tsang-500721-unsplash-min-460x295.jpg"],
       list: [ "Recipes", "Places", "Blog", "About", "Contact"],
    
    }
)