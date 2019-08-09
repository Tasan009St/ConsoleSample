<template>
  <div class="container">
    <div>users</div>
    <!-- {{ $store.getters['index/isLoggedin'] }} -->
    <!-- {{ token }} -->
    {{ token}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
      ...mapGetters(['token'])
    } 
}
</script>

<style>
</style>