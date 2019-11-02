<template>
  <article>
    <h1>图标</h1>
    <h2>基础用法</h2>
    <o-code :text="usage"></o-code>
    <h2>可用图标</h2>
    <div class="wrapper">
      <div class="icon" v-for="item of icon" :key="`icon-className-${item}`">
        <p><span :class="[item, 'icon-main']"></span></p>
        <p v-text="item" style="line-height: 1.4"></p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Icon extends Vue {
  usage: string = `
    <template>
      <element class="[icon-className]"></element>
    </template>
  `

  icon: string[] = [
    'o-icon-loading', 'o-icon-clear', 'o-icon-eraser', 'o-icon-password-hidden', 'o-icon-password-visible', 'o-icon-plus', 'o-icon-minus', 'o-icon-arrow-left', 'o-icon-arrow-up', 'o-icon-arrow-right', 'o-icon-arrow-down', 'o-icon-sort', 'o-icon-ellipsis', 'o-icon-info', 'o-icon-success', 'o-icon-error', 'o-icon-warning', 'o-icon-image', 'o-icon-image-error', 'o-icon-zoom-in', 'o-icon-zoom-out', 'o-icon-origin-scale', 'o-icon-fullscreen', 'o-icon-rotate-left', 'o-icon-rotate-right', 'o-icon-leave'
  ]
}
</script>

<style lang="scss" scoped>
$color: rgb(230, 223, 223);
$color-dark: rgb(105, 105, 105);

.icon {
  float: left;

  width: 130px;
  height: 130px;

  margin-top: -1px;
  margin-right: -1px;
  padding: 10px;

  border: 1px solid $color;

  color: $color-dark;
  text-align: center;
}

.icon-main {
  font-size: 40px;
}
</style>