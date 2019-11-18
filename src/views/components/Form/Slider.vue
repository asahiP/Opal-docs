<template>
  <article>
    <h1>滑块</h1>
    <h2>基础用法</h2>
    <div class="wrapper">
      <o-slider />
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>禁用状态</h2>
    <div class="wrapper">
      <o-slider disabled/>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>隐藏Tips</h2>
    <div class="wrapper">
      <o-slider :has-tips="false"/>
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>间距</h2>
    <p>你可以指定滑块的拖拽间距</p>
    <div class="wrapper">
      <o-slider :step="10"/>
    </div>
    <o-code :text="demo4Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Slider extends Vue {

  demo1Code: string = `
    <template>
      <o-slider />
    </template>
  `

  demo2Code: string = `
    <template>
      <o-slider disabled/>
    </template>
  `

  demo3Code: string = `
    <template>
      <o-slider :has-tips="false"/>
    </template>
  `

  demo4Code: string = `
    <template>
      <o-slider :step="10"/>
    </template>
  `


  Props: any = {
    head: [
      { prop: 'name', label: 'Name', width: 150 },
      { prop: 'description', label: 'Description', width: 250 },
      { prop: 'required', label: 'Required', width: 100 },
      { prop: 'type', label: 'Type', width: 300 },
      { prop: 'default', label: 'Default', width: 100 },
    ],
    body: [
      { name: 'name', description: '原生name属性', required: 'false', type: 'String', default: `-` },
      { name: 'width', description: '滑块的宽度，单位为px', required: 'false', type: 'String | Number', default: `200` },
      { name: 'max', description: '最大值', required: 'false', type: 'Number', default: `100` },
      { name: 'min', description: '最小值', required: 'false', type: 'Number', default: `0` },
      { name: 'step', description: '步长', required: 'false', type: 'Number', default: `1` },
      { name: 'disabled', description: '是否禁用', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'hasTips', description: '是否显示tips', required: 'false', type: `Boolean`, default: 'true' },
    ]
  }
}
</script>

<style lang="scss" scoped>
.wrapper > * {
  margin-top: 20px;
}
</style>