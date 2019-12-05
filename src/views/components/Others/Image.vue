<template>
  <article>
    <h1>图片</h1>
    <p>
      图片容器，提供懒加载、占位加载等功能。
    </p>
    <h2>基础用法</h2>
    <p>点击加载完毕的图片会进入大图模式，你可以在<code><router-link to="/configuration">全局配置</router-link></code>中关闭这个功能。</p>
    <div class="wrapper">
      <o-image :src="demo1" height="100"/>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>图片状态</h2>
    <p>加载中（左）、加载失败（右）</p>
    <div class="wrapper">
      <div style="display: inline-block; position: relative; width: 200px; height: 200px; background: white; text-align: center; line-height: 200px;">
        <div style="position: absolute; width: 100%; height: 100%; background: rgba(200, 200, 200, 0.2);"></div>
        <span class="o-icon-image" style="font-size: 40px; color: #909090"></span>
      </div>
      <div style="display: inline-block; position: relative; width: 200px; height: 200px; background: white; text-align: center; line-height: 200px;">
        <div style="position: absolute; width: 100%; height: 100%; background: rgba(200, 200, 200, 0.2);"></div>
        <span class="o-icon-image-error" style="font-size: 40px; color: #909090"></span>
      </div>
    </div>
    <h2>懒加载</h2>
    <p>
      Opal需要你在需要监听的元素的滚动事件中调用 <code>$lazy</code> 函数。<br>
      你可以在控制台限制带宽来更好地观察懒加载的效果。
    </p>
    <div class="wrapper" style="height: 300px">
      <o-scroll :hook="$lazy">
        <o-image v-for="(img, index) in demoPics" :key="img" :src="img" height="500" :lazy="index !== 0"/>
      </o-scroll>
    </div>
    <o-code :text="demo2Code" lang="html"></o-code>
    <h2>Props</h2>
    <o-table :data="Props"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

const pic0 = require('@/assets/logo.png')

const demoPics: any[] = []

for (let i = 1; i <= 8; i++) {
  demoPics.push(require(`@/assets/demo/pic${i}.jpg`))
}

@Component
export default class ImageDocs extends Vue {
  demo1: string = pic0
  demoPics: any[] = demoPics
  
  demo1Code: string = `
    <template>
      <!-- 你可以直接传递符合URI格式的字符串，示例中的做法是非必须的。 -->
      <o-image :src="demo1" height="100"/>
    </template>
    <code>
      const pic0 = require('@/assets/logo.png')

      export default {
        data () {
          return { pic0 }
        }
      }
    </code>
  `.replace(/code/g, 'script')

  demo2Code: string = `
    <template>
      <div style="height: 300px">
        <o-scroll :hook="$lazy">
          <o-image v-for="(img, index) in demoPics" :key="img" :src="img" height="500" :lazy="index !== 0"/>
        </o-scroll>
      </div>
    </template>
    <code>
      const demoPics = []

      for (let i = 1; i <= 8; i++) {
        demoPics.push(require(\`@/assets/demo/pic\${i}.jpg\`))
      }

      export default {
        data () {
          return { demoPics }
        }
      }
    </code>
  `.replace(/code/g, 'script')

  Props: any = {
    head: [
      { prop: 'name', label: 'Name', width: 150 },
      { prop: 'description', label: 'Description', width: 400 },
      { prop: 'required', label: 'Required', width: 100 },
      { prop: 'type', label: 'Type', width: 350 },
      { prop: 'default', label: 'Default', width: 100 },
    ],
    body: [
      { name: 'width', description: '宽度，不指定墓碑宽度默认为200，仅指定一边则另一边等长，图片则为原始大小，单位为px', required: 'false', type: 'String | Number', default: `-` },
      { name: 'height', description: '高度，不指定墓碑高度默认为200，仅指定一边则另一边等长，图片则为原始大小，单位为px', required: 'false', type: 'String | Number', default: `-` },
      { name: 'src', description: '图片源', required: 'false', type: 'String', default: `-` },
      { name: 'hrSrc', description: '高清图片源，仅在大图模式下才会加载', required: 'false', type: 'String', default: `-` },
      { name: 'title', description: '原生title属性', required: 'false', type: 'String', default: `-` },
      { name: 'lazy', description: '是否懒加载', required: 'false', type: 'Boolean', default: `false` },
    ]
  }
}
</script>