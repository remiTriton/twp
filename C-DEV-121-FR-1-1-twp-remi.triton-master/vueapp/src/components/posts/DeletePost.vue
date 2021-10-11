<template>

  <button @click="onDelete" type="button" class="btn btn-outline-danger btn-sm">
    Delete
  </button>
</template>

<script>
export default {
  name: "DeletePost",
  props: ["id"],
  data() {
    return {
      postIt: {},
    };
  },
  methods: {
    onDelete() {
      this.$store.dispatch("post/deletePost", this.id);
    },
  },
};
</script>
