<template>
  <div>
    <form @submit.prevent="login">
      <b-form-input v-model="email" placeholder="メールアドレス"></b-form-input>
      <b-form-input v-model="password" placeholder="パスワード"></b-form-input>
      <div class="login-btn">
        <button type="submit">ログイン</button>
      </div>
    </form>
    token：
    {{token}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


  export default {
    data() {
      return {
        error: null,
        email: "",
        password: ""     
        }
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password
          })
        //   this.$router.push("/users")
        } catch(e) {
          this.error = e.message
        }
      }
    },
  computed: {
    // ...mapGetters({
    //   token: 'index/token'
    // })
      ...mapGetters(['token'])
  } 
  }
</script>