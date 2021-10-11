<template>
  <div>
    <tete/>
    <router-view></router-view>
  </div>
</template>

<script>
import tete from "@/components/tete.vue";
export default {
  name: "Home",
  components: {tete,}
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F4F4F4;
  background: url('/assets/backo.jpg') no-repeat center fixed; 
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisée */
  
}

#bobel {
  position: static;
  margin-bottom: 30px;
}


</style>
