<template>
  <article>
    <h1>步进器</h1>
    <h2>基础用法</h2>
    <div class="wrapper">
      <o-stepper />
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>禁用状态</h2>
    <div class="wrapper">
      <o-stepper disabled/>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>指定步进</h2>
    <div class="wrapper">
      <o-stepper :step="5"/>
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>精度</h2>
    <div class="wrapper">
      <o-stepper :step="0.01" :precision="2"/>
    </div>
    <o-code :text="demo4Code" lang="html"></o-code>
    <h2>单边按钮</h2>
    <div class="wrapper">
      <o-stepper single/>
    </div>
    <o-code :text="demo5Code" lang="html"></o-code>
    <h2>有限区间</h2>
    <div class="wrapper">
      <o-stepper :max="10" :min="0"/>
      <o-stepper :max="10" :min="0" single/>
    </div>
    <o-code :text="demo6Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Stepper extends Vue {

  demo1Code: string = `
    <template>
      <o-stepper />
    </template>
  `

  demo2Code: string = `
    <template>
      <o-stepper disabled/>
    </template>
  `

  demo3Code: string = `
    <template>
      <o-stepper :step="5"/>
    </template>
  `

  demo4Code: string = `
    <template>
      <o-stepper :step="0.01" :precision="2"/>
    </template>
  `

  demo5Code: string = `
    <template>
      <o-stepper single/>
    </template>
  `

  demo6Code: string = `
    <template>
      <o-stepper :max="10" :min="0"/>
      <o-stepper :max="10" :min="0" single/>
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
      { name: 'width', description: '步进器的宽度，单位为px', required: 'false', type: 'String | Number', default: `200` },
      { name: 'max', description: '最大值', required: 'false', type: 'Number', default: `Infinity` },
      { name: 'min', description: '最小值', required: 'false', type: 'Number', default: `-Infinity` },
      { name: 'step', description: '步长', required: 'false', type: 'Number', default: `1` },
      { name: 'precision', description: '精度', required: 'false', type: 'Number', default: `0` },
      { name: 'disabled', description: '是否禁用', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'single', description: '是否单边按钮', required: 'false', type: `Boolean`, default: 'false' },
    ]
  }
}
</script>