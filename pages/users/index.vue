<template>
  <div class="container">
    <div>users</div>
    <!-- {{ $store.getters['index/isLoggedin'] }} -->
    <!-- {{ token }} -->
    token：
    {{token}}
    <br />
    operator_type:
    {{operator_type}}
    <br />
    <nuxt-link to="/operator">Operatorへ</nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
      ...mapGetters(['token','operator_type'])
    } 
}
</script>

<style>
</style>