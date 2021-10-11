<template>
  <div class="modal fade" tabindex="-1" :id="'updateCom' + com.id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modifier {{ com.content.rendered }}</h5>
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
                >Comment :
              </label>
              <input
                type="Title"
                class="form-control"
                id="exampleFormControlInput1"
                v-model="content"
              />
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
            Submit changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var striptags = require("striptags");

export default {
  name: "updateCom",
  props: ["com"],
  data() {
    return {
      content: this.com.content.rendered,
      id: this.com.id,
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("comments/updateCom", {
        id: this.id,
        content: this.content,
      });
    },
    removetags(str) {
      return striptags(str);
    },
    reload() {
      this.$router.go();
    },
  },
};
</script>
