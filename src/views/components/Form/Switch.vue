<template>
  <article>
    <h1>开关</h1>
    <h2>基础用法</h2>
    <div class="wrapper">
      <o-switch />
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>禁用状态</h2>
    <div class="wrapper">
      <o-switch disabled/>
      <o-switch checked disabled/>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>文字描述</h2>
    <div class="wrapper">
      <o-switch prefix="关" suffix="开" />
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SwitchDoc extends Vue {

  demo1Code: string = `
    <template>
      <o-switch />
    </template>
  `

  demo2Code: string = `
    <template>
      <o-switch disabled/>
      <o-switch checked disabled/>
    </template>
  `

  demo3Code: string = `
    <template>
      <o-switch prefix="关" suffix="开" />
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
      { name: 'disabled', description: '是否禁用', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'checked', description: '开关状态，v-model 绑定值', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'prefix', description: 'Switch 关闭状态文本', required: 'false', type: `String`, default: '-' },
      { name: 'suffix', description: 'Switch 打开状态文本', required: 'false', type: `String`, default: '-' },
    ]
  }
}
</script>