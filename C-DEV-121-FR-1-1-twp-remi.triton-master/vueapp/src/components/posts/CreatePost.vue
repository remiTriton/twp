<template>
  <div>
    <form @submit.prevent="CreatePost">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">TITLE</label>
        <input
          type="Title"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="title"
          v-model="title"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">POST</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="content"
        ></textarea>
        <label for="exampleFormControlInput1" class="form-label"></label>
        <select v-model="categories" placeholder="Choose a post" class="form-select">
          <option value="" disabled>Choose a category</option>
          <option
            v-for="cat in categoriesList"
            :key="cat.id"
            v-bind:value="cat.id"
          >
            {{ cat.name }}
          </option>
        </select>
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  components: {},
  data() {
    return {
      title: "",
      content: "",
      cat: "",
    };
  },
  created() {
    this.$store.dispatch("category/fetchCategoriesList");
  },
  computed: {
    // create a readonly variable to wrapp store context
    categoriesList() {
      return this.$store.state.category.categoriesList;
    },
  },
  methods: {
    async CreatePost() {
      await this.$store.dispatch("post/CreatePost", {
        title: this.title,
        content: this.content,
        status: "publish",
        categories: this.categories,
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
