<template>
  <article>
    <h1>全局配置</h1>
    <h2>示例</h2>
    <o-code>
      <pre>
        import Vue from 'vue'
        import App from './App.vue'
        import router from './router'
        import store from './store'

        import Opal from 'opal-ui'

        Vue.config.productionTip = false
        Vue.use(Opal, {
          Alert: {
            alias: '$msg',
          },
          Scroll: {
            autoHidden: false,
            minSize: 80,
          },
          Image: {
            useViewer: false,
          }
        })

        new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app')
      </pre>
    </o-code>
    <h2>可选配置</h2>
    <o-table>
      <thead><tr><th>Component</th><th>Property Name</th><th>Description</th><th>Type</th><th>Default Value</th></tr></thead>
      <tbody><tr><td>Alert</td><td>alias</td><td>$alert方法的别名</td><td>String</td><td>-</td></tr><tr><td>Confirm</td><td>alias</td><td>$confirm方法的别名</td><td>String</td><td>-</td></tr><tr><td>Image</td><td>useViewer</td><td>启用大图模式</td><td>Boolean</td><td>true</td></tr><tr><td>&nbsp;</td><td>alias</td><td>$lazy方法的别名</td><td>String</td><td>-</td></tr><tr><td>Toast</td><td>duration</td><td>通知存活时间，单位毫秒</td><td>Number</td><td>4000</td></tr><tr><td>&nbsp;</td><td>alias</td><td>$toast方法的别名</td><td>String</td><td>-</td></tr><tr><td>Scroll</td><td>enableScroll</td><td>启用滚动条</td><td>&#39;x&#39; | &#39;y&#39; | &#39;both&#39;</td><td>&#39;both&#39;</td></tr><tr><td>&nbsp;</td><td>autoHidden</td><td>自动隐藏滚动条</td><td>Boolean</td><td>true</td></tr><tr><td>&nbsp;</td><td>minSize</td><td>最小滑块大小</td><td>Number</td><td>50</td></tr><tr><td>&nbsp;</td><td>barStyle</td><td>滚动条样式</td><td>CSSStyleDeclaration</td><td>-</td></tr><tr><td>&nbsp;</td><td>sliderStyle</td><td>滑块样式</td><td>CSSStyleDeclaration</td><td>-</td></tr></tbody>
    </o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Configuration extends Vue {

}
</script>