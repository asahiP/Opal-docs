<template>
  <article>
    <h1>选项按钮</h1>
    <h2>基础用法</h2>
    <h3>复选框类型</h3>
    <div class="wrapper">
      <o-Checkbutton v-model="demo1" :price="'选项A'"/>
      <o-Checkbutton v-model="demo1" :price="'选项B'"/>
      <o-Checkbutton v-model="demo1" :price="'选项C'"/>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h3>单选框类型</h3>
    <div class="wrapper">
      <o-Checkbutton v-model="demo2" :price="'选项A'" type="radio"/>
      <o-Checkbutton v-model="demo2" :price="'选项B'" type="radio"/>
      <o-Checkbutton v-model="demo2" :price="'选项C'" type="radio"/>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>禁用状态</h2>
    <div class="wrapper">
      <o-Checkbutton v-model="demo3" :price="'选项A'" disabled/>
      <o-Checkbutton v-model="demo3" :price="'选项B'"/>
      <o-Checkbutton v-model="demo3" :price="'选项C'"/>
    </div>
    <o-code :text="demo3Code" lang="html"></o-code>
    <h2>插槽与Price</h2>
    <p>你可以使用插槽来覆盖Price</p>
    <div class="wrapper">
      <p style="margin-bottom: 10px;">选中选项的Price <code v-text="demo4" style="display: inline-block; min-width: 30px; height: 24px; line-height: 24px; text-align: center;"></code></p>
      <o-Checkbutton v-model="demo4" :price="'选项A'">AAA</o-Checkbutton>
      <o-Checkbutton v-model="demo4" :price="'选项B'">BBB</o-Checkbutton>
      <o-Checkbutton v-model="demo4" :price="'选项C'">CCC</o-Checkbutton>
    </div>
    <o-code :text="demo4Code" lang="html"></o-code>
    <h2>不同尺寸</h2>
    <div class="wrapper">
      <o-Checkbutton v-model="demo5" :price="'小选项'" size="small"/>
      <o-Checkbutton v-model="demo5" :price="'通常选项'" size="normal"/>
      <o-Checkbutton v-model="demo5" :price="'大选项'" size="large"/>
    </div>
    <o-code :text="demo5Code" lang="html"></o-code>
    <h2>加载中</h2>
    <div class="wrapper">
      <o-Checkbutton v-model="demo6" :price="'加载中未选中'" loading/>
      <o-Checkbutton v-model="demo6" :price="'加载中已选中'" loading/>
    </div>
    <o-code :text="demo6Code" lang="html"></o-code>
    <h2>带图标 & 圆形按钮</h2>
    <div class="wrapper">
      <p style="margin-bottom: 10px;">选中选项的Price <code v-text="demo7" style="display: inline-block; min-width: 30px; height: 24px; line-height: 24px; text-align: center;"></code></p>
      <o-checkbutton v-model="demo7" icon="o-icon-plus" :price="'选项A'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-minus" :price="'选项B'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-clear" :price="'选项C'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-eraser" :price="'选项D'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-zoom-in" :price="'选项E'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-zoom-out" :price="'选项F'" circle></o-checkbutton>
    </div>
    <div class="wrapper">
      <o-checkbutton v-model="demo7" icon="o-icon-arrow-left" :price="'选项G'"></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-arrow-left" :price="'选项H'"></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-arrow-left" :price="'选项I'"></o-checkbutton>
    </div>
    <o-code :text="demo7Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Checkbutton extends Vue {

  demo1: string[] = ['选项A']
  demo1Code: string = `
    <template>
      <o-Checkbutton v-model="demo1" :price="'选项A'"/>
      <o-Checkbutton v-model="demo1" :price="'选项B'"/>
      <o-Checkbutton v-model="demo1" :price="'选项C'"/>
    </template>
  `

  demo2: string = '选项A'
  demo2Code: string = `
    <template>
      <o-Checkbutton v-model="demo2" :price="'选项A'" type="radio"/>
      <o-Checkbutton v-model="demo2" :price="'选项B'" type="radio"/>
      <o-Checkbutton v-model="demo2" :price="'选项C'" type="radio"/>
    </template>
  `

  demo3: string[] = ['选项A']
  demo3Code: string = `
    <template>
      <o-Checkbutton v-model="demo3" :price="'选项A'" disabled/>
      <o-Checkbutton v-model="demo3" :price="'选项B'"/>
      <o-Checkbutton v-model="demo3" :price="'选项C'"/>
    </template>
  `

  demo4: string[] = ['选项A']
  demo4Code: string = `
    <template>
      <o-Checkbutton v-model="demo4" :price="'选项A'">AAA</o-Checkbutton>
      <o-Checkbutton v-model="demo4" :price="'选项B'">BBB</o-Checkbutton>
      <o-Checkbutton v-model="demo4" :price="'选项C'">CCC</o-Checkbutton>
    </template>
  `

  demo5: string[] = ['选项A']
  demo5Code: string = `
    <template>
      <o-Checkbutton v-model="demo5" :price="'小选项'" size="small"/>
      <o-Checkbutton v-model="demo5" :price="'通常选项'" size="normal"/>
      <o-Checkbutton v-model="demo5" :price="'大选项'" size="large"/>
    </template>
  `

  demo6: string = '加载中已选中'
  demo6Code: string = `
    <template>
      <o-Checkbutton v-model="demo6" :price="'加载中未选中'" loading/>
      <o-Checkbutton v-model="demo6" :price="'加载中已选中'" loading/>
    </template>
  `

  demo7: string[] = ['选项A']
  demo7Code: string = `
    <template>
      <!-- with circle -->
      <o-checkbutton v-model="demo7" icon="o-icon-plus" :price="'选项A'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-minus" :price="'选项B'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-clear" :price="'选项C'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-eraser" :price="'选项D'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-zoom-in" :price="'选项E'" circle></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-zoom-out" :price="'选项F'" circle></o-checkbutton>
      <!-- without circle -->
      <o-checkbutton v-model="demo7" icon="o-icon-arrow-left" :price="'选项G'"></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-arrow-left" :price="'选项H'"></o-checkbutton>
      <o-checkbutton v-model="demo7" icon="o-icon-arrow-left" :price="'选项I'"></o-checkbutton>
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
      { name: 'type', description: '选项按钮的类型', required: 'false', type: `'checkbox' | 'radio'`, default: `'checkbox'` },
      { name: 'price', description: 'Checkbutton的值', required: 'false', type: 'String | Number | Boolean', default: '-' },
      { name: 'size', description: 'Checkbutton的大小', required: 'false', type: `'small' | 'normal' | 'large'`, default: `'normal'` },
      { name: 'disabled', description: '是否禁用', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'loading', description: '是否加载中', required: 'false', type: `Boolean`, default: 'false' },
      { name: 'icon', description: '图标类名', required: 'false', type: `String`, default: '-' },
      { name: 'circle', description: '是否圆形选项按钮', required: 'false', type: `Boolean`, default: 'false' },
    ]
  }
}
</script>