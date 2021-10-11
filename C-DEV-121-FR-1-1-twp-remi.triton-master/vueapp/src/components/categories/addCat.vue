<template>
  <btn @click="onSubmit" type="button" >Add a Category</btn>
</template>

<script>
export default {
  name: "addCat",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch("category/addCat", {
        name: this.name,
      });
      this.$router.go();
    },
  },
};
</script>
