import Vue from 'vue'

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    //do something to validate
    console.log('before each')
    return next()
  })
}
