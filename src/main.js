import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import bui from '../components'
import "../components/style/index.js"

// import bui from '../dist/bui-vue.common'

// import bui from 'bui-vue'
// import "bui-vue/components/style/index.js"
Vue.use(bui)

new Vue({
  render: h => h(App),
}).$mount('#app')
