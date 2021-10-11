<template>
  <div id="bobel">
    <div class="">
      <router-link :to="'crudCom'">
        <button type="button" class="btn btn-success btn-lg ">
          Comments
        </button></router-link
      >
      <router-link :to="'posts'">
        <button type="button" class="btn btn-danger btn-lg ">
          Posts
        </button></router-link
      >
      <router-link :to="'categories'"
        ><button type="button" class="btn btn-primary btn-lg ">
          Categories
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "navBarC",
};


</script>
