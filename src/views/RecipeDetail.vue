<script setup>
import Loader from "@/components/Loader.vue";
import { useRecipeStore } from "../stores/RecipesStore.js";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const route = useRoute();
const recipeStore = useRecipeStore();

const { recipes, loading } = storeToRefs(recipeStore);

/* fetch recipes */
recipeStore.getOneRecipe(route.params.id);
</script>

<template>
  <div v-if="loading" class="loaderScreen">
    <Loader :loading="loading" />
  </div>

  <div v-if="!loading" class="recipeDetailcontainer">
    <div class="recipeTitle">{{ recipes.name }}</div>
    <div class="recipeTop">
      <div class="leftScreen">
        <img :src="recipes.image" />
      </div>

      <div class="rightScreen">
        <div>
          <div class="ingredients" id="ingredients">
            <hr />
            <label>Ingredients</label>
            <hr />
            <li
              v-for="ingredient in recipes.ingredients"
              :key="ingredient"
              class="ingredientsItem"
            >
              {{ ingredient }}
            </li>
          </div>
          <div class="otherInfo" id="otherInfoLeft">
            <hr />
            <Label>Other Info</Label>
            <hr />

            <div>
              Prep Time minutes: <span>{{ recipes.prepTimeMinutes }}</span>
            </div>
            <div>
              Cook Time minutes: <span>{{ recipes.cookTimeMinutes }}</span>
            </div>
            <div>
              Servings: <span>{{ recipes.servings }}</span>
            </div>

            <div>
              Difficulty:<span>{{ recipes.difficulty }}</span>
            </div>
            <div>
              Cuisine: <span>{{ recipes.cuisine }}</span>
            </div>
            <div>
              Callories Per Serving:
              <span> {{ recipes.caloriesPerServing }}</span>
            </div>
            <div class="list">
              Tags:
              <p v-for="tag in recipes.tags" :key="tag">
                # <span>{{ tag }}</span>
              </p>
            </div>

            <div>
              Rating: <span>{{ recipes.rating }}</span>
            </div>
            <div>
              Review count: <span>{{ recipes.reviewCount }}</span>
            </div>
            <div class="list">
              Meal type:
              <p v-for="meal in recipes.mealType" :key="meal">
                <span> {{ meal }}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div id="instructions">
            <div class="instructions">
              <hr />
              <label>instructions</label>
              <hr />
              <li
                v-for="instruction in recipes.instructions"
                :key="instruction"
                class="instructionsItems"
              >
                {{ instruction }}
              </li>
            </div>
          </div>
          <div class="otherInfo" id="otherInfoRight">
            <hr />
            <Label>Other Info</Label>
            <hr />
            <div>
              Prep Time minutes: <span>{{ recipes.prepTimeMinutes }}</span>
            </div>
            <div>
              Cook Time minutes: <span>{{ recipes.cookTimeMinutes }}</span>
            </div>
            <div>
              Servings: <span>{{ recipes.servings }}</span>
            </div>

            <div>
              Difficulty:<span>{{ recipes.difficulty }}</span>
            </div>
            <div>
              Cuisine: <span>{{ recipes.cuisine }}</span>
            </div>
            <div>
              Callories Per Serving:
              <span> {{ recipes.caloriesPerServing }}</span>
            </div>
            <div class="list">
              Tags:
              <p v-for="tag in recipes.tags" :key="tag">
                # <span>{{ tag }}</span>
              </p>
            </div>

            <div>
              Rating: <span>{{ recipes.rating }}</span>
            </div>
            <div>
              Review count: <span>{{ recipes.reviewCount }}</span>
            </div>
            <div class="list">
              Meal type:
              <p v-for="meal in recipes.mealType" :key="meal">
                <span> {{ meal }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<style>
#otherInfoRight {
  display: none;
}
.loaderScreen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.recipeDetailcontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  min-height: calc(100vh - 85px);
  background-color: #faedda79;
  padding-top: 2rem;
  height: calc(100vh - 230px);
  overflow-x: hidden;
  overflow-y: auto;
  /*  background-image: linear-gradient(
      rgba(82, 80, 80, 0.3),
      rgba(255, 255, 255, 0.8)
    ),
    url("./../assets/images/bgrecipedetail.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
}

.recipeTitle {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: rgb(3, 3, 3);
  /*  text-shadow: rgb(179, 179, 179) 1px 0 10px; */
  transition: all 0.3s ease-in-out;
}

.recipeTop img {
  height: 450px;
  border-radius: 0% 10% 0 10%;
}

.recipeTop {
  display: flex;
  width: 90%;
  height: 100%;
  padding-top: 1rem;
  justify-content: flex-start;
}

.rightScreen {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  word-wrap: break-word;
}

.ingredients,
.instructions,
.otherInfo {
  padding: 0 1rem;
}

.ingredients label,
.instructions label {
  text-transform: uppercase;
  font-weight: 600;
}

.otherInfo label {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
}

.ingredientsItem,
.instructions {
  text-transform: lowercase;
}

.otherInfo {
  width: 100%;
  padding: 0 1rem;
  text-transform: uppercase;
}

.otherInfo span {
  font-weight: 600;
}

.list {
  display: flex;
}

@media only screen and (max-width: 1465px) {
  .recipe_container > div {
    flex-basis: 25%;
  }
}

@media only screen and (max-width: 1175px) {
  .rightScreen {
    display: table;
  }

  #otherInfoRight {
    display: block;
  }

  #otherInfoLeft {
    display: none;
  }

  .recipe_container > div {
    flex-basis: 33%;
  }

  .rightScreen {
    flex-direction: column;
  }
}

@media only screen and (max-width: 885px) {
  .recipeTop {
    display: flex;
    flex-direction: column;
  }

  .recipeTop img {
    width: 100%;
    height: fit-content;
    border-radius: 0% 10% 0 10%;
  }
  .rightScreen {
    flex-direction: row;
  }

  .recipe_container > div {
    flex-basis: 50%;
  }
}

@media only screen and (max-width: 660px) {
  .recipeTitle {
    font-size: 1.5rem;
  }
  .rightScreen {
    flex-direction: column;
  }
}

@media only screen and (max-width: 614px) {
  .recipe_container > div {
    flex-basis: 80%;
  }
}

@media only screen and (max-width: 390px) {
  .recipeTitle {
    font-size: 1.2rem;
  }
}
</style>
