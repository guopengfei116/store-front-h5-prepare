<template>
  <article class="order">
      <v-title :title="title"></v-title>
  </article>
</template>

<script>
import Ctitle from '../common/title.vue';
export default {
  data() {
    return {
      title: '订单确认'
    };
  },
  components: {
    'v-title': Ctitle,
  }
}
</script>

<style>
</style>

