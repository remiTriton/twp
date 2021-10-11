<template>
  <div>
    <PostCrud />
  </div>
</template>

<script>
import PostCrud from "@/components/posts/PostCrud.vue";

export default {
  name: "Post",
  components: {
    PostCrud,
  },
};
</script>
