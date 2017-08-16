<template>
  <main>
      <v-header></v-header>
      <lg-preview></lg-preview>
      <router-view></router-view>
      <v-footer></v-footer>
  </main>
</template>

<script>
import Cheader from './home/header.vue';
import Cfooter from './home/footer.vue';
export default {
  components: {
    'v-header': Cheader,
    'v-footer': Cfooter
  }
}
</script>

<style>

</style>

