<template>
  <div class="modal fade" tabindex="-1" :id="'updatePost' + post.id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modifier {{ post.title.rendered }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >TITLE</label
              >
              <input
                type="Title"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="title"
                v-model="title"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >POST</label
              >
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
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="reload"
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary" @click="onClick">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdatePost",
  props: ["post"],
  data() {
    return {
      title: this.post.title.rendered,
      content: this.post.content.rendered,
      cat: "",
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("post/UpdatePost", {
        id: this.post.id,
        title: this.title,
        content: this.content,
        status: "publish",
        categories: this.categories,
      });
    },
    reload() {
      this.$router.go();
    },
  },

  created() {
    this.$store.dispatch("category/fetchCategoriesList");
  },
  computed: {
    // create a readonly variable to wrapp store context
    categoriesList() {
      return this.$store.state.category.categoriesList;
    },
}
};
</script>
