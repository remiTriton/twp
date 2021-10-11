<template>
  <div class="modal fade" tabindex="-1" :id="'updateModifyCat' + category.id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modifier {{ category.name }}</h5>
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
                >NAME</label
              >
              <input
                type="Title"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="title"
                v-model="name"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
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
  name: "modifyCat",
  props: ["category"],
  data() {
    return {
      name: this.category.name,
      id: this.category.id,
    };
  },

  methods: {
    async onClick() {
      await this.$store.dispatch("category/updateModifyCat", {
        name: this.name,
        id: this.id,
      });
    },
  },
};
</script>
