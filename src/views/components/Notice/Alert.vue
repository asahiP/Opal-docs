<template>
  <article>
    <h1>弹窗</h1>
    <h2>基础用法</h2>
    <h3>Alert</h3>
    <div class="wrapper">
      <o-button type="plain" @click="$alert('无类型')">
        无类型
      </o-button>
      <o-button type="default" @click="$alert({ type: 'info', msg: '信息' })">
        信息
      </o-button>
      <o-button type="success" @click="$alert({ type: 'success', msg: '成功' })">
        成功
      </o-button>
      <o-button type="warning" @click="$alert({ type: 'warning', msg: '警告' })">
        警告
      </o-button>
      <o-button type="danger" @click="$alert({ type: 'error', msg: '错误' })">
        错误
      </o-button>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h3>Confirm</h3>
    <div class="wrapper">
      <o-button type="plain" @click="$confirm('无类型')">
        无类型
      </o-button>
      <o-button type="default" @click="$confirm({ type: 'info', msg: '信息' })">
        信息
      </o-button>
      <o-button type="success" @click="$confirm({ type: 'success', msg: '成功' })">
        成功
      </o-button>
      <o-button type="warning" @click="$confirm({ type: 'warning', msg: '警告' })">
        警告
      </o-button>
      <o-button type="danger" @click="$confirm({ type: 'error', msg: '错误' })">
        错误
      </o-button>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>异步操作</h2>
    <div class="wrapper">
      <o-button type="default" @click="demo3">
        异步
      </o-button>
      <o-button type="default" @click="demo4">
        嵌套
      </o-button>
      <o-button type="default" @click="demo5">
        异步确认
      </o-button>
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>全局方法</h2>
    <p>Opal在 <code>Vue</code> 的根实例中扩展了调用弹窗组件的方法，你可以通过下列函数来调用弹窗。</p>
    <o-code lang="typescript">
      <pre>
        $alert(msg: string | options): Promise
        $confirm(msg: string | options): Promise
      </pre>
    </o-code>
    <h2>Options</h2>
    <o-table :data="Options"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Alert extends Vue {
  demo1Code: string = `
    <template>
      <o-button type="plain" @click="$alert('无类型')">
        无类型
      </o-button>
      <o-button type="default" @click="$alert({ type: 'info', msg: '信息' })">
        信息
      </o-button>
      <o-button type="success" @click="$alert({ type: 'success', msg: '成功' })">
        成功
      </o-button>
      <o-button type="warning" @click="$alert({ type: 'warning', msg: '警告' })">
        警告
      </o-button>
      <o-button type="danger" @click="$alert({ type: 'error', msg: '错误' })">
        错误
      </o-button>
    </template>
  `

  demo2Code: string = `
    <template>
      <o-button type="plain" @click="$confirm('无类型')">
        无类型
      </o-button>
      <o-button type="default" @click="$confirm({ type: 'info', msg: '信息' })">
        信息
      </o-button>
      <o-button type="success" @click="$confirm({ type: 'success', msg: '成功' })">
        成功
      </o-button>
      <o-button type="warning" @click="$confirm({ type: 'warning', msg: '警告' })">
        警告
      </o-button>
      <o-button type="danger" @click="$confirm({ type: 'error', msg: '错误' })">
        错误
      </o-button>
    </template>
  `

  demo3 (): void {
    let { $alert, $toast } = this

    $alert('确认异步操作')
      .then(() => {
        $toast({ type: 'success', msg: 'ok' })
      })
  }

  demo4 (): void {
    let { $alert } = this

    $alert('确认异步操作')
      .then(() => {
        $alert('嵌套操作！')
      })
  }

  demo5 (): void {
    let { $confirm, $toast } = this

    $confirm('确认异步操作')
      .then(() => {
        $toast({ type: 'success', msg: '确认了' })
      })
      .catch(() => {
        $toast({ type: 'error', msg: '取消了' })
      })
  }

  demo3Code: string = `
    <template>
      <o-button type="default" @click="demo3">
        异步
      </o-button>
      <o-button type="default" @click="demo4">
        嵌套
      </o-button>
      <o-button type="default" @click="demo5">
        异步确认
      </o-button>
    </template>
    <code>
      export default {
        methods: {
          demo3 () {
            let { $alert, $toast } = this

            $alert('确认异步操作')
              .then(() => {
                $toast({ type: 'success', msg: 'ok' })
              })
          },

          demo4 () {
            let { $alert } = this

            $alert('确认异步操作')
              .then(() => {
                $alert('嵌套操作！')
              })
          },

          demo5 () {
            let { $confirm, $toast } = this

            $confirm('确认异步操作')
              .then(() => {
                $toast({ type: 'success', msg: '确认了' })
              })
              .catch(() => {
                $toast({ type: 'error', msg: '取消了' })
              })
          },
        }
      }
    </code>
  `.replace(/code/g, 'script')

  Options: any = {
    head: [
      { prop: 'name', label: 'Name', width: 150 },
      { prop: 'description', label: 'Description', width: 200 },
      { prop: 'required', label: 'Required', width: 100 },
      { prop: 'type', label: 'Type', width: 350 },
      { prop: 'default', label: 'Default', width: 100 },
    ],
    body: [
      { name: 'title', description: '标题', required: 'false', type: 'String', default: `-` },
      { name: 'msg', description: '内容正文', required: 'true', type: 'String', default: `-` },
      { name: 'type', description: '弹窗类型', required: 'false', type: `'info' | 'success' | 'warning' | 'error'`, default: '-' },
      { name: 'confirm', description: '确认按钮文本', required: 'false', type: 'String', default: `'OK'` },
      { name: 'cancel', description: '取消按钮文本，$alert 弹窗没有此按钮，因此不会生效', required: 'false', type: 'String', default: `'CANCEL'` },
    ]
  }
}
</script>