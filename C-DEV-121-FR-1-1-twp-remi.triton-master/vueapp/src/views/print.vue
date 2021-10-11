<template>
<div>
  <div v-if="post.id">>
    <container >
      <div>{{ post.title.rendered }}</div>
      <div>{{ removetags(post.content.rendered) }}</div>
      <div v-for="com in commentList" :key="com.id">
      <div v-if="com.post === post.id">{{removetags(com.content.rendered)}}</div></div>
              <addComment />

    </container>
  </div>

  </div>
</template>

<script>

import striptags from "striptags";

import addComment from "./addComment.vue";

export default {
  name: "Print",
  props: ["id"],
  components : addComment,
    data() {
    return {
      com: "",
    };
     },
  created() {
    this.$store.dispatch("post/fetchPosts");
    this.$store.dispatch("comments/fetchcommentList");
  },

  computed: {
    commentList() {
      return this.$store.state.comments.commentList;
    },
    poste() {
      return this.$store.state.post.poste;
    },
  },
    methods: {
    removetags(str) {
      return striptags(str);
    },
  },
};
</script>
