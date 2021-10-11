<template>
  <router-link :to="`/formu/${id}`">
    <v-btn text-color="white" color="black"> More Categories </v-btn>
  </router-link>
</template>

<script>
export default {
  name: "getCat",
  props: ["id"],
};
</script>
