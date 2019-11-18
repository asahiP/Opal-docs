<template>
  <article>
    <h1>复选框</h1>
    <h2>基础用法</h2>
    <div class="wrapper">
      <o-checkbox v-model="demo1" :price="'选项A'"/>
      <o-checkbox v-model="demo1" :price="'选项B'"/>
      <o-checkbox v-model="demo1" :price="'选项C'"/>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>禁用状态</h2>
    <div class="wrapper">
      <o-checkbox v-model="demo2" :price="'选项A'" disabled/>
      <o-checkbox v-model="demo2" :price="'选项B'"/>
      <o-checkbox v-model="demo2" :price="'选项C'"/>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>插槽与Price</h2>
    <p>你可以使用插槽来覆盖Price</p>
    <div class="wrapper">
      <p style="margin-bottom: 10px;">选中选项的Price <code v-text="demo3" style="display: inline-block; min-width: 30px; height: 24px; line-height: 24px; text-align: center;"></code></p>
      <o-checkbox v-model="demo3" :price="'选项A'">AAA</o-checkbox>
      <o-checkbox v-model="demo3" :price="'选项B'">BBB</o-checkbox>
      <o-checkbox v-model="demo3" :price="'选项C'">CCC</o-checkbox>
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>不同尺寸</h2>
    <div class="wrapper">
      <o-checkbox v-model="demo4" :price="'通常选项'" size="normal"/>
      <o-checkbox v-model="demo4" :price="'大选项'" size="large"/>
    </div>
    <o-code :text="demo4Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Checkbox extends Vue {

  demo1: string[] = ['选项A']
  demo1Code: string = `
    <template>
      <o-checkbox v-model="demo1" :price="'选项A'"/>
      <o-checkbox v-model="demo1" :price="'选项B'"/>
      <o-checkbox v-model="demo1" :price="'选项C'"/>
    </template>
  `

  demo2: string[] = ['选项A']
  demo2Code: string = `
    <template>
      <o-checkbox v-model="demo2" :price="'选项A'" disabled/>
      <o-checkbox v-model="demo2" :price="'选项B'"/>
      <o-checkbox v-model="demo2" :price="'选项C'"/>
    </template>
  `

  demo3: string[] = ['选项A']
  demo3Code: string = `
    <template>
      <o-checkbox v-model="demo3" :price="'选项A'">AAA</o-checkbox>
      <o-checkbox v-model="demo3" :price="'选项B'">BBB</o-checkbox>
      <o-checkbox v-model="demo3" :price="'选项C'">CCC</o-checkbox>
    </template>
  `

  demo4: string[] = ['选项A']
  demo4Code: string = `
    <template>
      <o-checkbox v-model="demo4" :price="'通常选项'" size="normal"/>
      <o-checkbox v-model="demo4" :price="'大选项'" size="large"/>
    </template>
  `

  Props: any = {
    head: [
      { prop: 'name', label: 'Name', width: 150 },
      { prop: 'description', label: 'Description', width: 200 },
      { prop: 'required', label: 'Required', width: 100 },
      { prop: 'type', label: 'Type', width: 350 },
      { prop: 'default', label: 'Default', width: 100 },
    ],
    body: [
      { name: 'name', description: '原生name属性', required: 'false', type: 'String', default: `-` },
      { name: 'price', description: 'Checkbox的值', required: 'false', type: 'String | Number | Boolean', default: '-' },
      { name: 'size', description: 'Checkbox的大小', required: 'false', type: `'normal' | 'large'`, default: `'normal'` },
      { name: 'disabled', description: '是否禁用', required: 'false', type: `Boolean`, default: 'false' },
    ]
  }
}
</script>