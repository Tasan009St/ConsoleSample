import Vuex from 'vuex'

export const state = () => ({
  token: null,
  email: null,
  operator_type: null,
  operator_menu: null,
  updated_at: null,
  operator_list_url: null
})

export const mutations = {
  SET_USER(state, response) {
    state.token = response.token
    state.operator_type = response.account.operator_type
    state.updated_at = response.account.updated_at
    if (response.account.operator_type == 'admin'){
    state.operator_menu = "アカウント管理"
    state.operator_list_url = 'true'
    }
  }
}
export const actions = {
  async login({ commit }, { username, password }) {
    console.log("LOGIN START")
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
      };
      commit('SET_USER', response)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  console.log("LOGIN END")
  },
  getCurrentUser({ commit }) {
          console.log("getCurrentUser START")
    try {
      const response_current = {
        token:
          'GETCURRENT76819d768290cccb255cb3df228ce51e91f4fd514282fbc13e2c1f663d03b9a2',
        account: {
          operator_id: 'yAVoyQiPzDK3ZtVzcqx7Jg',
          email: 'wallabee.dev@gmail.com',
          operator_type: 'admin',
          registered_at: '2019-08-07 12:26:59',
          updated_at: '2019-08-07 12:26:59',
          shop: null
        }
      };
      commit('SET_USER', response_current)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
      console.log(operator_menu)
      console.log(response_current)
      console.log("getCurrentUser END")
  }
}

export const getters = {
  token: state => state.token,
  operator_type: state => state.operator_type,
  operator_menu: state => state.operator_menu,
  updated_at: state => state.updated_at,
  operator_list_url: state => state.operator_list_url
}
