<template>
  <article>
    <h1>选择器</h1>
    <h2>基础用法</h2>
    <div class="wrapper">
      <o-select :datalist="datalist"/>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>含有禁用选项</h2>
    <div class="wrapper">
      <o-select :datalist="hasDisabled"/>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>禁用状态</h2>
    <div class="wrapper">
      <o-select :datalist="datalist" disabled/>
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>远程搜索</h2>
    <div class="wrapper">
      <o-select :datalist="fetchData"/>
    </div>
    <o-code :text="demo4Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
    <o-tips warning>
      <p>
        Opal没有对该组件的<code>远程搜索</code>进行防抖处理，你需要自行判断是否进行防抖处理
      </p>
    </o-tips>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Select extends Vue {

  datalist: any[] = [...Array(20).keys()].map(i => ({ value: '选项' + i }))

  demo1Code: string = `
    <template>
      <o-select :datalist="datalist"/>
    </template>
    <code>
      export default {
        data () {
          return { datalist: [...Array(20).keys()].map(i => ({ value: '选项' + i })) }
        }
      }
    </code>
  `.replace(/code/g, 'script')

  get hasDisabled (): any[] {
    return this.datalist.map(({ value }) => ({ value, disabled: Math.random() > 0.5 }))
  }

  demo2Code: string = `
    <template>
      <o-select :datalist="hasDisabled"/>
    </template>
    <code>
      export default {
        data () {
          return { datalist: [...Array(20).keys()].map(i => ({ value: '选项' + i })) }
        },
        computed: {
          hasDisabled () {
            return this.datalist.map(({ value }) => ({ value, disabled: Math.random() > 0.5 }))
          }
        }
      }
    </code>
  `.replace(/code/g, 'script')

  demo3Code: string = `
    <template>
      <o-select :datalist="datalist" disabled/>
    </template>
    <code>
      export default {
        data () {
          return { datalist: [...Array(20).keys()].map(i => ({ value: '选项' + i })) }
        }
      }
    </code>
  `.replace(/code/g, 'script')

  fetchData (): Promise<any> {
    let { datalist } = this
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(datalist)
      }, 1000)
    })
  }
  demo4Code: string = `
    <template>
      <o-select :datalist="fetchData"/>
    </template>
    <code>
      export default {
        data () {
          return { datalist: [...Array(20).keys()].map(i => ({ value: '选项' + i })) }
        },
        methods: {
          fetchData () {
            let { datalist } = this
            return new Promise((res, rej) => {
              setTimeout(() => {
                res(datalist)
              }, 1000)
            })
          }
        }
      }
    </code>
  `.replace(/code/g, 'script')


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
      { name: 'width', description: '选择器的宽度，单位为px', required: 'false', type: 'String | Number', default: `200` },
      { name: 'disabled', description: '是否禁用', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'placeholder', description: '选择器占位文本', required: 'false', type: 'String', default: `'请输入内容'` },
      { name: 'datalist', description: '自动完成的数据，数据类型应为包含 { value, disabled } 的数组， 或返回此类数组的Promise工厂函数', required: 'false', type: `Array | Function`, default: `-` },
    ]
  }
}
</script>