<template>
  <nav class="navbar navbar-expand-lg">
    <RouterLink to="/"><div class="navbar-brand">All Recepies</div></RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-target="#navbarNav"
      aria-label="Toggle navigation"
      @click="toggleMenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      :class="openMenu ? 'show' : ''"
      id="navbarNav"
    >
      <b class="popular">POPULAR:</b>
      <ul class="navbar-nav">
        <RouterLink to="/cuisine/italian"
          ><div class="nav_item">Italian</div></RouterLink
        >
        <RouterLink to="/cuisine/asian"
          ><div class="nav_item">Asian</div></RouterLink
        >
        <RouterLink to="/cuisine/american"
          ><div class="nav_item">American</div></RouterLink
        >
        <RouterLink to="/cuisine/mexican"
          ><div class="nav_item">Mexican</div></RouterLink
        >
        <RouterLink to="/cuisine/mediterranean"
          ><div class="nav_item">Mediterranean</div></RouterLink
        >

        <RouterLink to="/cuisine/greek"
          ><div class="nav_item">Greek</div></RouterLink
        >
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";

import { ref } from "vue";

const openMenu = ref(false);

const toggleMenu = () => {
  openMenu.value = !openMenu.value;
};
</script>

<style>
navbar {
  height: 30%;
  display: flex;
  justify-content: space-between !important;
  align-items: center;
  padding: 1rem 0.2rem;
  transition: all 0.3s ease-in-out !important;
  /*   background-color: #e4e4e4; */
}

.navbar-collapse {
  justify-content: flex-end;
  transition: all 0.3s ease-in-out !important;
}

.navbar a {
  display: flex;
  align-items: center;
  padding: 0.4rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none !important;
  color: rgb(64, 63, 63) !important;
  transition: all 0.3s ease-in-out;
}

.nav_item {
  padding: 0.2rem 0.4rem;
  border: 1px solid #e4e4e4;
  transition: all 0.3s ease-in-out;
}

.navbar-nav {
  transition: all 0.3s ease-in-out;
}

.navbar-toggler,
.navbar-toggler:active,
.navbar-toggler {
  outline: none !important;

  border: none !important;
  color: #f6e6cd !important;
}

@media screen and (max-width: 1000px) {
  .popular {
    display: none;
  }
  .navbar-collapse {
    display: flex;
    justify-content: center !important;
    transition: all 0.3s ease-in-out;
  }

  .navbar-nav {
    width: 80%;
    transition: all 0.3s ease-in-out;
  }

  .nav_item {
    width: 100%;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
}
</style>
