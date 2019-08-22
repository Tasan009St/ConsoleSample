<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">観光案内管理画面</div>
      <div class="navbar-burger" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- navbar-brand END -->
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-end">
        <span class="navbar-item">xxx1231231231231fffffbbbbxx@gmail.com</span>
        <nuxt-link to="/about" class="navbar-item">パスワード変更</nuxt-link>
        <nuxt-link to="/about" class="navbar-item">ログアウト</nuxt-link>
        <span v-if="operator_list_url == 'true'">
        <nuxt-link to= "/operator" class="navbar-item">{{ operator_menu }}</nuxt-link>
        </span>
      </div>
    </div>
    <!-- navbar-menu END -->
  </nav>
</template>


<script>
export default {
     data(){
      return{
        operator_console: 'アカウント管理',
        menu: true
      }
    },
        props: ['operator_menu', 'operator_list_url'],
    // props:['operator_list_url']
}
</script>