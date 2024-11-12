import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => ({
    recipes: [],
    loading: false,
    groupedData: {},
  }),
  getters: {},
  actions: {
    async getAllRecipes() {
      this.loading = true;
      const res = await fetch("https://dummyjson.com/recipes?limit=50");
      const data = await res.json();

      this.recipes = data;
      this.loading = false;
    },

    async getOneRecipe(id) {
      this.loading = true;
      const res = await fetch("https://dummyjson.com/recipes/" + id);
      const data = await res.json();

      this.recipes = data;
      this.loading = false;
    },

    async getOneCuisine(cuisineId) {
      let firstLetter = cuisineId.slice(0, 1).toUpperCase();
      let restLetters = cuisineId.slice(1);
      let word = await (firstLetter + restLetters);
      this.loading = true;
      const res = await fetch("https://dummyjson.com/recipes?limit=50");
      const data = await res.json();
      const cusine = data.recipes.filter((t) => t.cuisine === word);

      this.recipes = cusine;
      this.loading = false;
    },
  },
});
