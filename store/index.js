import Vuex from 'vuex'

export const state = () => ({
  token: null,
  email: null,
  operator_type: null
})

export const mutations = {
  SET_USER(state, response) {
    state.token = response.token
    state.operator_type = response.account.operator_type

    //debug log
    console.log('state.token')
    console.log(state.token)
    console.log('state.operator_type')
    console.log(state.operator_type)
  }
}

// export const getters = {
//   getLoggedin: state => state.token,
//   getUsers: state => state.users
// }

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  //   nuxtServerInit({ commit }, { req }) {
  //     if (req.session && req.session.authUser) {
  //       commit('SET_USER', req.session.authUser)
  //     }
  //   },
  async login({ commit }, { username, password }) {
    try {
      const response = {
        token:
          '76819d768290cccb255cb3df228ce51e91f4fd514282fbc13e2c1f663d03b9a2',
        account: {
          operator_id: 'yAVoyQiPzDK3ZtVzcqx7Jg',
          email: 'wallabee.dev@gmail.com',
          operator_type: 'admin',
          registered_at: '2019-08-07 12:26:59',
          updated_at: '2019-08-07 12:26:59',
          shop: null
        }
      }
      console.log(response)
      commit('SET_USER', response)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  getCurrentUser({ commit }) {
    try {
      const response_current = {
        token:
          'GETCURRENT76819d768290cccb255cb3df228ce51e91f4fd514282fbc13e2c1f663d03b9a2',
        account: {
          operator_id: 'yAVoyQiPzDK3ZtVzcqx7Jg',
          email: 'wallabee.dev@gmail.com',
          operator_type: 'shop',
          registered_at: '2019-08-07 12:26:59',
          updated_at: '2019-08-07 12:26:59',
          shop: null
        }
      }
      console.log('response_current')
      console.log(response_current)
      commit('SET_USER', response_current)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  }
}

export const getters = {
  // user_token: state => {
  //   console.log('state.token')
  //   console.log(state.token)
  //   return state.token
  // }
  token: state => state.token,
  operator_type: state => state.operator_type
}
