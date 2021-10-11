<template>
   <div>
      <UpPosts />
      <div class="container">
      <form class="add" @submit.prevent="onSubmit">
         <input type="text" v-model="categories" required="required"/>
         <button class="btn btn-success" style="background-color: #131313;opacity: 0.7;color: white;font-size: large;" @click="addCat">
            Add a Category
         </button>
      </form>
         <div class="row">
         
            <div class="col-2" v-for="category in categoriesList" :key="category.id">
               <h2 class="mb-3">{{category.name}}</h2>
               <ul class="list-group list-group-flush">
                  <div v-for="post in poste" :key="post.id">
                     <li class="list-group-item mb-2" 
                           v-if="post.categories == category.id"
                           style="background-color: #131313;opacity: 0.7;color: white;font-size: large;">
                        <router-link :to="`/print/${post.id}`">
                           <div class="in1">{{post.title.rendered}}</div>
                        </router-link>   
                     </li>
                  </div>
                  <form>
                     <button type="button" class="btn btn-success mt-5 mb-3"  data-bs-toggle="modal" data-bs-target="#CreatePost">+ Add Post</button>
                  </form>
               </ul>
            </div>
         </div>
      </div>
      
   </div>
</template>


<script>
import UpPosts from "@/components/posts/UpPosts.vue";

export default {
  name: "Home",
  components: { UpPosts },
    props: ["id"],
 
  created() {
    this.$store.dispatch("category/fetchCategoriesList");
    this.$store.dispatch("post/fetchPosts");
  },

  computed: {
    // create a readonly variable to wrapp store context
    categoriesList() {
      return this.$store.state.category.categoriesList;
    },
    poste() {
      return this.$store.state.post.poste;
    },
  },
    methods: {
    addCat() {
      this.$store.dispatch("category/addCat", {
        name: this.categories,
      });
    },
    }}
</script>


<style scoped>
.card {
  margin-left: 40px;
  height: auto;
  width: auto;
  border-radius: 5%;
}

h5{
 font-size: xxx-large;
 font: bold;
 color: white;
}

.in1{
background-color:grey;
}

ul{
list-style-type: none;
display: flex;
}

a{
color: white;
}

.add{
margin-left: 70%;
margin-top: 10px;
}

</style>

