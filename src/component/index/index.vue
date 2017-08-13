<template>
  <article class="index">
      <v-swipe></v-swipe>
      <v-nav></v-nav>
  </article>
</template>

<script>
import Cswipe from './swipe.vue';
import Cnav from './nav.vue';
export default {
  components: {
    'v-swipe': Cswipe,
    'v-nav': Cnav
  }
}
</script>

<style>

</style>

