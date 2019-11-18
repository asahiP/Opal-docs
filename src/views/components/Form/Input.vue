<template>
  <article>
    <h1>输入框</h1>
    <h2>基础用法</h2>
    <div class="wrapper">
      <o-input v-model="demo1" />
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>禁用状态</h2>
    <div class="wrapper">
      <o-input v-model="demo2" disabled/>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>可清空 & 密码框</h2>
    <div class="wrapper">
      <o-input v-model="demo3" clearable/>
      <o-input v-model="demo3" password/>
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>带Icon的输入框</h2>
    <div class="wrapper">
      <o-input v-model="demo4" prefix="o-icon-success"/>
      <o-input v-model="demo4" suffix="o-icon-error"/>
      <o-input v-model="demo4" prefix="o-icon-success" suffix="o-icon-error"/>
    </div>
    <o-code :text="demo4Code" lang="html"></o-code>
    <o-tips warning>
      <p>
        <code>clearable</code> & <code>password</code> 状态会被 <code>suffix</code>覆盖，<br>
        三个状态的优先度为： <code>suffix</code> > <code>password</code> > <code>clearable</code>
      </p>
    </o-tips>
    <h2>自动完成</h2>
    <div class="wrapper">
      <o-input v-model="demo5" :datalist="demo5Datalist"/>
    </div>
    <o-code :text="demo5Code" lang="html"></o-code>
    <h2>远程搜索</h2>
    <div class="wrapper">
      <o-input v-model="demo6" :datalist="demo6Datalist"/>
    </div>
    <o-code :text="demo6Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Input extends Vue {

  demo1: string = ''
  demo1Code: string = `
    <template>
      <o-input v-model="demo1" />
    </template>
  `

  demo2: string = ''
  demo2Code: string = `
    <template>
      <o-input v-model="demo2" disabled/>
    </template>
  `

  demo3: string = ''
  demo3Code: string = `
    <template>
      <o-input v-model="demo3" clearable/>
      <o-input v-model="demo3" password/>
    </template>
  `

  demo4: string = ''
  demo4Code: string = `
    <template>
      <o-input v-model="demo4" prefix="o-icon-success"/>
      <o-input v-model="demo4" suffix="o-icon-error"/>
      <o-input v-model="demo4" prefix="o-icon-success" suffix="o-icon-error"/>
    </template>
  `

  demo5: string = ''
  demo5Code: string = `
    <template>
      <o-input v-model="demo5" :datalist="demo5Datalist"/>
    </template>
    <code>
      export default {
        data () {
          return { demo5: '' }
        },
        methods: {
          demo5Datalist () {
            let { demo5 } = this
            return new Promise((res, rej) => {
              let demo = []

              for (let i = 0; i < 10; i++) {
                demo.push({ value: demo5 + i })
              }

              res(demo)
            })
          }
        }
      }
    </code>
  `.replace(/code/g, 'script')

  demo5Datalist (): Promise<any[]> {
    let { demo5 } = this
    return new Promise((res, rej) => {
      let demo = []

      for (let i = 0; i < 10; i++) {
        demo.push({ value: demo5 + i })
      }

      res(demo)
    })
  }

  demo6: string = ''
  demo6Code: string = `
    <template>
      <o-input v-model="demo6" :datalist="demo6Datalist"/>
    </template>
    <code>
      export default {
        data () {
          return { demo6: '' }
        },
        methods: {
          demo6Datalist () {
            let { demo6 } = this
            return new Promise((res, rej) => {
              setTimeout(() => {
                let demo = []

                for (let i = 0; i < 10; i++) {
                  demo.push({ value: demo6 + i })
                }

                res(demo)
              }, 1000)
            })
          }
        }
      }
    </code>
  `.replace(/code/g, 'script')

  demo6Datalist (): Promise<any[]> {
    let { demo6 } = this
    return new Promise((res, rej) => {
      setTimeout(() => {
        let demo = []

        for (let i = 0; i < 10; i++) {
          demo.push({ value: demo6 + i })
        }

        res(demo)
      }, 1000)
    })
  }

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
      { name: 'width', description: '输入框的宽度，单位为px', required: 'false', type: 'String | Number', default: `200` },
      { name: 'disabled', description: '是否禁用', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'placeholder', description: '输入框占位文本', required: 'false', type: 'String', default: `'请输入内容'` },
      { name: 'password', description: '是否为密码框', required: 'false', type: `Boolean`, default: `false` },
      { name: 'clearable', description: '是否可清除', required: 'false', type: `Boolean`, default: `false` },
      { name: 'datalist', description: '自动完成的数据，数据类型应为包含 { value, disabled } 的数组， 或返回此类数组的Promise工厂函数', required: 'false', type: `Array | Function`, default: `-` },
      { name: 'prefix', description: '输入框头部图标', required: 'false', type: `String`, default: `-` },
      { name: 'suffix', description: '输入框尾部图标	', required: 'false', type: `String`, default: `-` },
      { name: 'matched', description: '是否匹配规则', required: 'false', type: `Boolean`, default: `false` },
      { name: 'mismatched', description: '是否与规则不匹配', required: 'false', type: `Boolean`, default: `false` },
      { name: 'maxlength', description: '原生属性，最大输入长度', required: 'false', type: `Number`, default: `-` },
      { name: 'minlength', description: '原生属性，最小输入长度', required: 'false', type: `Number`, default: `-` },
      { name: 'delay', description: '自动完成函数的防抖延迟，单位为ms', required: 'false', type: `Number`, default: `300` },
      { name: 'filter', description: '是否启用过滤，过滤样本为输入框的值', required: 'false', type: `Boolean`, default: `true` },
    ]
  }
}
</script>