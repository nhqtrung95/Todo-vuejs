// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import Vue from 'vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$serverURL = 'http://localhost/trello/public/items'
Vue.directive('dropzone', {
  bind: function (el, binding, vnode) {
    el.ondragover = function (event) {
      event.preventDefault()
    }
    el.ondrop = function (event) {
      let item = JSON.parse(event.dataTransfer.getData('item'))
      vnode.context.onDrop(item)
    }
  }
})
Vue.directive('draggable', {
  bind: function (el, binding) {
    el.setAttribute('draggable', true)
    el.ondragstart = function (event) {
      event.dataTransfer.setData('item', JSON.stringify(binding.value))
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
