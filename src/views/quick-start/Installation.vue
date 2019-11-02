<template>
  <article>
    <h1>安装</h1>
    <h2>npm 安装</h2>
    <o-code>
      <pre>
        $ npm install opal-ui --save
      </pre>
    </o-code>
    <h2>yarn 安装</h2>
    <o-code>
      <pre>
        $ yarn add opal-ui
      </pre>
    </o-code>
    <h2>引入 Opal</h2>
    <o-code>
      <pre>
        /** main.ts */
        
        import Vue from 'vue'
        import App from './App.vue'
        import router from './router'
        import store from './store'

        import Opal from 'opal-ui'

        Vue.config.productionTip = false
        Vue.use(Opal)

        new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app')
      </pre>
    </o-code>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Installation extends Vue {}
</script>