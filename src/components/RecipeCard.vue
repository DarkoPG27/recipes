<template>
  <RouterLink :to="`/${recipe.id}`" class="cardContainer">
    <div class="recipeCard">
      <div className="card_top">
        <div className="icon">
          <div class="imageContainer">
            <img :src="recipe.image" alt="recipe_image" />
          </div>
        </div>
      </div>
      <div className="card_middle">
        <div className="card_title">{{ recipe.name }}</div>
      </div>
      <div className="card_bottom">
        <div className="card_text">{{ recipe.cuisine }} cuisine</div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  recipe: {
    type: Object,
  },
});
</script>

<style>
.cardContainer {
  text-decoration: none !important;
}
.recipeCard {
  display: flex;
  align-items: center;
  flex-direction: column !important;

  border-radius: 1rem;
  height: 250px;
  width: 250px;
  margin: 0.6rem 0.4rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 10px 20px 31px -5px rgba(0, 0, 0, 0.14) !important; /*  */
  filter: blur(0.4px);
  /*  background-color: #e3eef7; */
  background-color: rgb(228, 228, 228);
}

.card_top {
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
}

.card_middle {
  width: 100%;
  height: 20%;
}

.card_title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  font-weight: 700;
  color: rgb(51, 51, 51);
  transition: all 0.3s ease-in-out;
  font-family: poppins, Arial, sans-serif !important;
}

.card_bottom {
  width: 100%;
  height: 10%;
}

.card_text {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  word-wrap: break-word;
  font-size: 16px;
  color: rgb(112, 112, 112);
}

.imageContainer img {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  max-width: 165px;
  border-radius: 50%;
}

@media only screen and (max-width: 657px) {
  .recipeCard {
    border-radius: 1rem;
    height: 200px;
    width: 200px;
    margin: 0.6rem 0.4rem;
  }

  .card_title {
    font-size: 14px;
  }

  .card_text {
    font-size: 13px;
  }

  .imageContainer img {
    max-width: 130px;
    border-radius: 50%;
  }
}

@media only screen and (max-width: 657px) {
  .recipeCard {
    border-radius: 1rem;
    height: 200px;
    width: 200px;
    margin: 0.6rem 0.4rem;
  }

  .card_title {
    font-size: 14px;
  }

  .card_text {
    font-size: 13px;
  }

  .imageContainer img {
    max-width: 130px;
    border-radius: 50%;
  }
}

@media only screen and (max-width: 532px) {
  .recipeCard {
    border-radius: 1rem;
    height: 150px;
    width: 150px;
    margin: 0.6rem 0.4rem;
  }

  .card_title {
    font-size: 11px;
  }

  .card_text {
    font-size: 10px;
  }

  .imageContainer img {
    max-width: 100px;
  }
}

@media only screen and (max-width: 406px) {
  .recipeCard {
    border-radius: 1rem;
    height: 130px;
    width: 100px;
    margin: 0.6rem 0.4rem;
  }

  .card_title {
    font-size: 10px;
    word-break: keep-all;
  }

  .card_text {
    display: none;
  }

  .imageContainer img {
    max-width: 100px;
    border-radius: 1rem;
  }

  .card_middle {
    height: 30%;
  }

  .card_bottom {
    display: none;
  }
}

@media only screen and (max-width: 282px) {
  .recipeCard {
    border-radius: 1rem;
    height: 200px;
    width: 200px;
    margin: 0.6rem 0.4rem;
  }

  .card_title {
    font-size: 15px;
    word-break: keep-all;
  }

  .card_text {
    display: block;
    font-size: 13px;
  }

  .imageContainer img {
    max-width: 140px;
    border-radius: 50%;
  }

  .card_middle {
    height: 20%;
  }

  .card_bottom {
    display: block;
    height: 10%;
  }
}
</style>
