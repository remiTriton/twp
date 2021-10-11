<template>
  <div>
    <navBarC />
    <div>
      <table class="table table-striped table-dark" style="background-color: #131313;opacity: 0.7;color: white">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Categories</th>
            <th scope="col">Delete</th>
            <th scope="col">Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categoriesList" :key="category.id">
            <modifyCat :category="category" />
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td><deleteCat :id="category.id"/></td>
            <td>
              <button
                type="button"
                class="btn btn-outline-info btn-sm"
                data-bs-toggle="modal"
                :data-bs-target="'#updateModifyCat' + category.id"
              >
                Modify
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="categories" required="required"/><button class="btn btn-success" @click="addCat">
          Add a Category
        </button>
      </form>
    </div>
  </div>

</template>

<script>
import modifyCat from "@/components/categories/modifyCat.vue";
import deleteCat from "@/components/categories/deleteCat.vue";
import navBarC from "@/components/crudBar.vue";
export default {
  name: "crudCategory",
  data() {
    return {
      categories: "",
    };
  },
  components: { modifyCat, deleteCat, navBarC },
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
    addCat() {
      this.$store.dispatch("category/addCat", {
        name: this.categories,
      });
    },
  },
};
</script>
