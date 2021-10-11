<template>
  <button type="button" class="btn btn-outline-danger btn-sm" @click="onClick">
    Delete
  </button>
</template>

<script>
export default {
  name: "DeleteCom",
  props: ["id"],

  data() {
    return {
      comment: {},
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("comments/deleteComment", this.id);
    },
  },
};
</script>
