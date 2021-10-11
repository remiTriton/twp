<template>
  <div class="modal fade" tabindex="-1" id="CreatePost">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">+ Add Post</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <CreatePost />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreatePost from "@/components/posts/CreatePost.vue";


export default {
  name: "UpPosts",
  components: {CreatePost},
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    onClick() {
      this.$store.dispatch("post/CreatePost", {
        title: this.title,
        content: this.content,
        status: "publish",
      });
    },
    reload() {
      this.$router.go();
    },
  },
};
</script>
