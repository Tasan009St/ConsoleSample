<template>
  <div class="container">
    <div>operator</div>
    <!-- {{ $store.getters['index/isLoggedin'] }} -->
    <!-- {{ token }} -->
    token：
    {{token}}
    <br />
    operator_type:
    {{operator_type}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['token','operator_type'])
  },
  async created() {
    console.log("created");

    try {
        await this.$store.dispatch("getCurrentUser", {
        })
        this.$router.push("/operator")
      } catch(e) {
        this.error = e.message
      }
  },
      computed: {
      ...mapGetters(['token','operator_type', 'operator_menu', 'updated_at'])
    } 
}
</script>