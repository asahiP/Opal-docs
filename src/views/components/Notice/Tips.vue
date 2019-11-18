<template>
  <article>
    <h1>提示</h1>
    <h2>基础用法</h2>
    <div class="wrapper">
      <o-tips>
        这是一条提示
      </o-tips>
      <o-tips warning>
        这是一条警告
      </o-tips>
      <o-tips danger>
        这是一条危险警告
      </o-tips>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Tips extends Vue {
  demo1Code: string = `
    <template>
      <o-tips>
        这是一条提示
      </o-tips>
      <o-tips warning>
        这是一条警告
      </o-tips>
      <o-tips danger>
        这是一条危险警告
      </o-tips>
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
      { name: 'warning', description: '是否警告提示', required: 'false', type: 'Boolean', default: `false` },
      { name: 'danger', description: '是否危险警告提示', required: 'false', type: 'Boolean', default: `false` },
      { name: 'title', description: '提示标题', required: 'false', type: 'String', default: `-` },
    ]
  }
}
</script>