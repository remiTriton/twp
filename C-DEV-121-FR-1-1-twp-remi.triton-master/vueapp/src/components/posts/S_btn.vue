<template>
  <div>
    <S_btn @click="submit" text-color="white" color="#418791"> More </S_btn>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
export default {
  name: "VButton",
  props: ["id"],
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>
