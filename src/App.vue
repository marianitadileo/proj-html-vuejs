<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      menu: [ "Home", "Recipes", "Places", "Blog", "About", "Contact"], 
      store
    }
  }
}
</script>

<template>
<AppHeader :menuList="this.menu"/>
<AppMain/>
<AppFooter /> 
</template>

<style></style>