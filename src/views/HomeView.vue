<script setup>
import RecipeCard from "../components/RecipeCard.vue";
import { useRecipeStore } from "../stores/RecipesStore.js";
import { storeToRefs } from "pinia";
import Loader from "../components/Loader.vue";

const recipeStore = useRecipeStore();

const { recipes, loading } = storeToRefs(recipeStore);

/* fetch recipes */
recipeStore.getAllRecipes();
</script>

<template>
  <div class="titleOfPage">All Recipes</div>
  <div class="homeContainer">
    <Loader :loading="loading" />

    <div v-if="!loading" class="recipe_container">
      <div v-for="recipe in recipes.recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<style>
.homeContainer {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 133px);
  display: flex;
  justify-content: center;
  align-items: start;
  align-content: center;
  background-color: #faedda;
  padding-top: 2rem;
  /* background-image: url("./../assets/images/bghomepage.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

  height: calc(100vh - 230px);
  overflow-x: hidden;
  overflow-y: auto;
}

.titleOfPage {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #faedda;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
}

.recipe_container {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.recipe_container > div {
  flex-basis: calc(20%);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.recipe_container > div > div {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

@media only screen and (max-width: 1465px) {
  .recipe_container > div {
    flex-basis: 25%;
  }
}

@media only screen and (max-width: 1175px) {
  .recipe_container > div {
    flex-basis: 33%;
  }
}

@media only screen and (max-width: 885px) {
  .cardContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .titleOfPage {
    font-size: 1.5rem;
  }

  .recipe_container > div {
    flex-basis: 50%;
  }
}

@media only screen and (max-width: 614px) {
  .recipe_container > div {
    flex-basis: 80%;
  }
  .titleOfPage {
    font-size: 1.2rem;
  }
}
</style>
