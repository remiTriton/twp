<template>
  <div>
    <form @submit.prevent="onSubmit" class="formulaire">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >New Comment</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="content"
          placeholder="Your comment"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"></label>
        <select v-model="post" placeholder="Choose a post" class="form-select">
          <option value="" disabled>Choose a post</option>

          <option v-for="post in poste" :key="post.id" v-bind:value="post.id">
            {{ post.title.rendered }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-success">Add</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "addComment",
  data() {
    return {
      content: "",
      post: "",
    };
  },
  created() {
    this.$store.dispatch("post/fetchPosts");
  },
  computed: {
    // create a readonly variable to wrapp store context
    poste() {
      return this.$store.state.post.poste;
    },
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch("comments/addComment", {
        content: this.content,
        post: this.post,
      });
      this.$router.go();
    },
  },
};
</script>
<style scoped>
.mb-3 {
  margin-right: 30%;
  margin-left: 30%;
}

.btn {
  margin-top: 5%;
}
</style>
