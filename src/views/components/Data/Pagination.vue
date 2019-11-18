<template>
  <article>
    <h1>分页</h1>
    <h2>基础用法</h2>
    <h3>总页数小于显示页数</h3>
    <div class="wrapper">
      <o-pagination v-model="demo1" :total="5" :length="7"/>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h3>总页数大于显示页数</h3>
    <div class="wrapper">
      <o-pagination v-model="demo2" :total="15" :length="7"/>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>图标箭头</h2>
    <div class="wrapper">
      <o-pagination v-model="demo3" :total="5" :length="7" icon/>
      <br>
      <o-pagination v-model="demo4" :total="15" :length="7" icon/>
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>小型分页</h2>
    <div class="wrapper">
      <o-pagination v-model="demo5" :total="5" :length="7" small/>
      <br>
      <o-pagination v-model="demo6" :total="15" :length="7" small/>
      <br>
      <o-pagination v-model="demo7" :total="5" :length="7" small icon/>
      <br>
      <o-pagination v-model="demo8" :total="15" :length="7" small icon/>
    </div>
    <o-code :text="demo5Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Pagination extends Vue {
  demo1: number = 1
  demo1Code: string = `
    <template>
      <o-pagination v-model="demo1" :total="5" :length="7"/>
    </template>
  `

  demo2: number = 1
  demo2Code: string = `
    <template>
      <o-pagination v-model="demo2" :total="15" :length="7"/>
    </template>
  `

  demo3: number = 1
  demo4: number = 1
  demo3Code: string = `
    <template>
      <o-pagination v-model="demo3" :total="5" :length="7" icon/>
      <br>
      <o-pagination v-model="demo4" :total="15" :length="7" icon/>
    </template>
  `

  demo5: number = 1
  demo6: number = 1
  demo7: number = 1
  demo8: number = 1
  demo5Code: string = `
    <template>
      <o-pagination v-model="demo5" :total="5" :length="7" small/>
      <br>
      <o-pagination v-model="demo6" :total="15" :length="7" small/>
      <br>
      <o-pagination v-model="demo7" :total="5" :length="7" small icon/>
      <br>
      <o-pagination v-model="demo8" :total="15" :length="7" small icon/>
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
      { name: 'total', description: '总页数', required: 'false', type: 'Number', default: `1` },
      { name: 'length', description: '显示页数', required: 'false', type: 'Number', default: `5` },
      { name: 'small', description: '是否小型分页', required: 'false', type: 'Boolean', default: 'false' },
      { name: 'icon', description: '是否图标箭头', required: 'false', type: 'Boolean', default: 'false' },
    ]
  }
}
</script>