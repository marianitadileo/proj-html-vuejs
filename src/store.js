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
       cardCol: [ "./src/assets/Mixed-fruits-460x295.jpg", "./src/assets/r-rachel-park-366508-unsplash-min-460x295.jpg", "./src/assets/r-michelle-tsang-500721-unsplash-min-460x295.jpg", "./src/assets/quick-summer-drink-460x295.jpg", "./src/assets/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg", "./src/assets/perfect-cosmopolitan-460x295.jpg", "./src/assets/fi2x-6-460x295.jpg", "./src/assets/r-brooke-lark-96398-unsplash-min-460x295.jpg" ] 
    }
)