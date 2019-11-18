<template>
  <article>
    <h1>通知</h1>
    <h2>基础用法</h2>
    <div class="wrapper">
      <o-button type="default" @click="$toast('信息通知')">
        信息
      </o-button>
      <o-button type="success" @click="$toast({ type: 'success', msg: '成功通知' })">
        成功
      </o-button>
      <o-button type="warning" @click="$toast({ type: 'warning', msg: '警告通知' })">
        警告
      </o-button>
      <o-button type="danger" @click="$toast({ type: 'error', msg: '错误通知' })">
        错误
      </o-button>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>全局方法</h2>
    <p>Opal在 <code>Vue</code> 的根实例中扩展了调用通知组件的方法，你可以通过下列函数来调用弹窗。</p>
    <o-code lang="typescript">
      <pre>
        $toast(msg: string | options): void
      </pre>
    </o-code>
    <h2>Options</h2>
    <o-table :data="Options"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Toast extends Vue {
  demo1Code: string = `
    <template>
      <o-button type="default" @click="$toast('信息通知')">
        信息
      </o-button>
      <o-button type="success" @click="$toast({ type: 'success', msg: '成功通知' })">
        成功
      </o-button>
      <o-button type="warning" @click="$toast({ type: 'warning', msg: '警告通知' })">
        警告
      </o-button>
      <o-button type="danger" @click="$toast({ type: 'error', msg: '错误通知' })">
        错误
      </o-button>
    </template>
  `

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
      { name: 'type', description: '通知类型', required: 'false', type: `'info' | 'success' | 'warning' | 'error'`, default: '-' },
    ]
  }
}
</script>