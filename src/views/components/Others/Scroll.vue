<template>
  <article>
    <h1>滚动条</h1>
    <o-tips danger>
      请注意！
      这是个不完善的组件！！！<br>
      这个组件包含以下已知的BUG：
      <ul style="margin-left: 15px">
        <li>容器大小与内容大小相差不足滚动条宽度时，会使组件对溢出状态作出错误判断，而导致滚动条不可用。</li>
        <li>在<code>特定情况下</code>，滚动条组件的嵌套会导致子滚动条无法向父滚动条传递滚动事件。</li>
      </ul>
    </o-tips>
    <h2>基础用法</h2>
    <p>滚动条组件的大小始终由父元素决定，直接设置在组件上的<code>Style</code>将会被忽略。</p>
    <div class="wrapper" style="width: 300px; height: 300px">
      <o-scroll>
        <div style="width: 3000px; height: 3000px; background: linear-gradient(45deg, black, red)"></div>
      </o-scroll>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>Methods</h2>
    <o-table :data="Methods"></o-table>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Scroll extends Vue {
  demo1Code: string = `
    <template>
      <div style="width: 300px; height: 300px">
        <o-scroll>
          <div style="width: 3000px; height: 3000px; background: linear-gradient(45deg, black, red)"></div>
        </o-scroll>
      </div>
    </template>
  `

  Methods: any = {
    head: [
      { prop: 'name', label: 'Name', width: 150 },
      { prop: 'description', label: 'Description', width: 400 },
      { prop: 'argument', label: 'Argument', width: 350 },
      { prop: 'return', label: 'Return', width: 200 },
    ],
    body: [
      {
        name: 'setScrollLeft',
        description: '设定滚动条X轴坐标，通过设置参数 newVal 为 Infinity可以滚动到最右侧，参数 sync 为false则不对滚动条进行同步只滚动内容',
        argument: 'newVal: Number, sync: Boolean',
        return: 'void',
      },
      {
        name: 'setScrollTop',
        description: '设定滚动条Y轴坐标，通过设置参数 newVal 为 Infinity可以滚动到最下侧，，参数 sync 为false则不对滚动条进行同步只滚动内容',
        argument: 'newVal: Number, sync: Boolean',
        return: 'void',
      },
    ]
  }

  Props: any = {
    head: [
      { prop: 'name', label: 'Name', width: 150 },
      { prop: 'description', label: 'Description', width: 200 },
      { prop: 'required', label: 'Required', width: 100 },
      { prop: 'type', label: 'Type', width: 350 },
      { prop: 'default', label: 'Default', width: 100 },
    ],
    body: [
      { name: 'hook', description: '滚动时调用的钩子', required: 'false', type: 'Function', default: `-` },
    ]
  }
}
</script>