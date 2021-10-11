<template>
  <button class="btn btn-outline-danger btn-sm" @click="ondelete">
    Delete Category
  </button>
</template>

<script>
export default {
  name: "deleteCat",
  props: ["id"],
  data() {
    return {
      postit: {},
    };
  },
  methods: {
    ondelete() {
        this.$store.dispatch("category/deleteCat", this.id);
      
    },
  },
};
</script>
