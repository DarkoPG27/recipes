<script setup>
import Loader from "@/components/Loader.vue";
import { useRecipeStore } from "../stores/RecipesStore.js";
import { storeToRefs } from "pinia";
import RecipeCard from "@/components/RecipeCard.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const recipeStore = useRecipeStore();

const { recipes, loading } = storeToRefs(recipeStore);

/* fetch recipes */
recipeStore.getOneCuisine(route.params.id);

const cuisine = ref();

watch(
  () => route.params.id,
  async (newId) => {
    cuisine.value = await recipeStore.getOneCuisine(newId);
  }
);
</script>

<template>
  <div class="titleOfPage">{{ route.params.id }} cousine</div>
  <div class="homeContainer">
    <Loader :loading="loading" />
    <div v-if="!loading" class="recipe_container">
      <div v-for="recipe in recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </div>
    </div>
  </div>
</template>
