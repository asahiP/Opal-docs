<template>
  <article>
    <h1>表格</h1>
    <h2>基础用法</h2>
    <o-tips>
      你可以使用 <code>插槽</code> 来代替 <code>data</code> 属性，使用方法与原生 <code>table</code> 标签相同。
    </o-tips>
    <div class="wrapper">
      <o-table :data="demo1"/>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>带斑马纹表格</h2>
    <div class="wrapper">
      <o-table :data="demo1" stripe/>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>带边框表格</h2>
    <div class="wrapper">
      <o-table :data="demo1" border/>
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>可排序表格</h2>
    <div class="wrapper">
      <o-table :data="demo2"/>
    </div>
    <o-code :text="demo4Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TableDoc extends Vue {

  demo1: any = {
    head: [
      { prop: 'date', label: '日期', width: 200 },
      { prop: 'name', label: '姓名', width: 200 },
      { prop: 'address', label: '地址', width: 500 },
    ],
    body: [...Array(10).keys()].map(i => (
      { name: '王立新', date: `2019-09-${10 + i}`, address: `杭州市萧山区万盈路 ${300 + i}号`, }
    ))
  }
  demo1Code: string = `
    <template>
      <o-table :data="demo1"/>
    </template>
    <code>
      export default {
        data () {
          return {
            demo1: {
              head: [
                { prop: 'date', label: '日期', width: 200 },
                { prop: 'name', label: '姓名', width: 200 },
                { prop: 'address', label: '地址', width: 500 },
              ],
              body: [...Array(10).keys()].map(i => (
                { name: '王立新', date: \`2019-09-\${10 + i}\`, address: \`杭州市萧山区万盈路 \${300 + i}号\`, }
              ))
            }
          }
        }
      }
    </code>
  `.replace(/code/g, 'script')

  demo2Code: string = this.demo1Code.replace('<o-table :data="demo1"/>', '<o-table :data="demo1" stripe/>')
  demo3Code: string = this.demo1Code.replace('<o-table :data="demo1"/>', '<o-table :data="demo1" border/>')

  demo2: any = {
    head: [
      { prop: 'date', label: '日期', width: 200 },
      { prop: 'name', label: '姓名', width: 200 },
      { prop: 'address', label: '地址', width: 500 },
    ].map(item => ({ ...item, sortable: true })),
    body: [...Array(10).keys()].map(i => (
      { name: '王立新', date: `2019-09-${Math.floor(Math.random() * 10) + 10}`, address: `杭州市萧山区万盈路 ${Math.floor(Math.random() * 50) + 300}号`, }
    ))
  }

  demo4Code: string = `
    <template>
      <o-table :data="demo2"/>
    </template>
    <code>
      export default {
        data () {
          return {
            demo2: {
              head: [
                { prop: 'date', label: '日期', width: 200 },
                { prop: 'name', label: '姓名', width: 200 },
                { prop: 'address', label: '地址', width: 500 },
              ].map(item => ({ ...item, sortable: true })),
              body: [...Array(10).keys()].map(i => (
                { name: '王立新', date: \`2019-09-\${Math.floor(Math.random() * 10) + 10}\`, address: \`杭州市萧山区万盈路 \${Math.floor(Math.random() * 50) + 300}号\`, }
              ))
            }
          }
        }
      }
    </code>
  `.replace(/code/g, 'script')

  Props: any = {
    head: [
      { prop: 'name', label: 'Name', width: 150 },
      { prop: 'description', label: 'Description', width: 200 },
      { prop: 'required', label: 'Required', width: 100 },
      { prop: 'type', label: 'Type', width: 350 },
      { prop: 'default', label: 'Default', width: 100 },
    ],
    body: [
      { name: 'width', description: '表格的宽，单位为px', required: 'false', type: 'String | Number', default: `-` },
      { name: 'height', description: '表格的高，单位为px', required: 'false', type: 'String | Number', default: `-` },
      { name: 'border', description: '是否显示边框', required: 'false', type: 'Boolean', default: 'false' },
      { name: 'stripe', description: '是否显示斑马纹', required: 'false', type: 'Boolean', default: 'false' },
      { name: 'data', description: '表格数据', required: 'false', type: `{ head: [{ prop, label, sortable, width }, ...], body }`, default: `-` },
    ]
  }
}
</script>