<template>
  <div>
    <crudCategory />
  </div>
</template>

<script>
// @ is an alias to /src
import crudCategory from "@/components/categories/crudCategory.vue";

export default {
  name: "category",
  components: {
    crudCategory,
  },
};
</script>
