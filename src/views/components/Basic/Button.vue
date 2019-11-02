<template>
  <article>
    <h1>按钮</h1>
    <h2>基础用法</h2>
    <div class="wrapper">
      <o-button type="default">基础按钮</o-button>
      <o-button type="plain">朴素按钮</o-button>
      <o-button type="success">成功按钮</o-button>
      <o-button type="warning">警告按钮</o-button>
      <o-button type="danger">危险按钮</o-button>
    </div>
    <o-code :text="BasicUsage"></o-code>
    <h2>禁用状态</h2>
    <div class="wrapper">
      <o-button type="default" disabled>基础按钮</o-button>
      <o-button type="plain" disabled>朴素按钮</o-button>
      <o-button type="success" disabled>成功按钮</o-button>
      <o-button type="warning" disabled>警告按钮</o-button>
      <o-button type="danger" disabled>危险按钮</o-button>
    </div>
    <o-code :text="Disabled"></o-code>
    <h2>加载中</h2>
    <div class="wrapper">
      <o-button type="default" loading>加载中</o-button>
    </div>
    <o-code :text="Loading"></o-code>
    <h2>不同尺寸</h2>
    <div class="wrapper">
      <o-button type="default" size="small">小按钮</o-button>
      <o-button type="default" size="normal">默认按钮</o-button>
      <o-button type="default" size="large">大按钮</o-button>
    </div>
    <o-code :text="Size"></o-code>
    <h2>带图标 & 圆形按钮</h2>
    <div class="wrapper">
      <o-button type="default" icon="o-icon-plus" circle></o-button>
      <o-button type="default" icon="o-icon-minus" circle></o-button>
      <o-button type="default" icon="o-icon-clear" circle></o-button>
      <o-button type="default" icon="o-icon-eraser" circle></o-button>
      <o-button type="default" icon="o-icon-zoom-in" circle></o-button>
      <o-button type="default" icon="o-icon-zoom-out" circle></o-button>
    </div>
    <o-code :text="Circle"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  BasicUsage: string = `
    <template>
      <o-button type="default">基础按钮</o-button>
      <o-button type="plain">朴素按钮</o-button>
      <o-button type="success">成功按钮</o-button>
      <o-button type="warning">警告按钮</o-button>
      <o-button type="danger">危险按钮</o-button>
    </template>
  `

  Disabled: string = `
    <template>
      <o-button type="default" disabled>基础按钮</o-button>
      <o-button type="plain" disabled>朴素按钮</o-button>
      <o-button type="success" disabled>成功按钮</o-button>
      <o-button type="warning" disabled>警告按钮</o-button>
      <o-button type="danger" disabled>危险按钮</o-button>
    </template>
  `

  Loading: string = `
    <template>
      <o-button type="default" loading>加载中</o-button>
    </template>
  `

  Size: string = `
    <template>
      <o-button type="default" size="small">小按钮</o-button>
      <o-button type="default" size="normal">默认按钮</o-button>
      <o-button type="default" size="large">大按钮</o-button>
    </template>
  `

  Circle: string = `
    <!-- 圆形按钮与图标互不依赖，可以分开使用 -->
    <template>
      <o-button type="default" icon="o-icon-plus" circle></o-button>
      <o-button type="default" icon="o-icon-minus" circle></o-button>
      <o-button type="default" icon="o-icon-clear" circle></o-button>
      <o-button type="default" icon="o-icon-eraser" circle></o-button>
      <o-button type="default" icon="o-icon-zoom-in" circle></o-button>
      <o-button type="default" icon="o-icon-zoom-out" circle></o-button>
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
      { name: 'type', description: '按钮类型', required: 'false', type: `'default' | 'plain' | 'success' | 'warning' | 'danger'`, default: `'default'` },
      { name: 'size', description: '按钮大小', required: 'false', type: `'small' | 'normal' | 'large'`, default: `'normal'` },
      { name: 'disabled', description: '是否禁用', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'loading', description: '是否加载中', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'nativeType', description: '原生按钮类型', required: 'false', type: `'button' | 'submit' | 'reset'`, default: `'button'` },
      { name: 'icon', description: '图标类名', required: 'false', type: `String`, default: '-' },
      { name: 'circle', description: '是否圆形按钮', required: 'false', type: `Boolean`, default: 'false' },
    ]
  }
}
</script>

<style lang="scss" scoped>
$space: 15px;
.wrapper * {
  margin-top: $space;
  margin-right: $space;
}
</style>