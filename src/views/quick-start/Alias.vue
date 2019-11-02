<template>
  <article>
    <h1>别名</h1>
    <p>
      你可以在<code><a href="#/configuration" target="_blank">全局配置</a></code>中通过配置别名来调用相应方法。<br>
      但是如果你在项目中使用了<code>TypeScript</code>，别名会在编译时无法通过类型检查而导致报错。<br>
      你可以参考Vuejs官方文档 | <code><a href="https://cn.vuejs.org/v2/guide/typescript.html#增强类型以配合插件使用" target="_blank">TypeScript 支持</a></code>
      自行编写声明文件，也可以使用Opal提供的在线工具来生成声明文件。
    </p>
    <h2>生成声明文件</h2>
    <o-form v-model="formData" @validate="getValidate">
      <div class="generator-layout-top">
        <div class="generator-layout-left">
          <label class="generator">
            <p class="generator-name">
              Alert <span class="generator-alert" v-if="validationResults.alert" v-text="validationResults.alert.text"></span>
            </p>
            <o-input name="alert" clearable :mismatched="validationResults.alert && validationResults.alert.status === 'mismatched'"/>
          </label>
          <label class="generator">
            <p class="generator-name">
              Confirm <span class="generator-alert" v-if="validationResults.confirm" v-text="validationResults.confirm.text"></span>
            </p>
            <o-input name="confirm" clearable :mismatched="validationResults.confirm && validationResults.confirm.status === 'mismatched'"/>
          </label>
          <label class="generator">
            <p class="generator-name">
              Toast <span class="generator-alert" v-if="validationResults.toast" v-text="validationResults.toast.text"></span>
            </p>
            <o-input name="toast" clearable :mismatched="validationResults.toast && validationResults.toast.status === 'mismatched'"/>
          </label>
          <label class="generator">
            <p class="generator-name">
              Lazy <span class="generator-alert" v-if="validationResults.lazy" v-text="validationResults.lazy.text"></span>
            </p>
            <o-input name="lazy" clearable :mismatched="validationResults.lazy && validationResults.lazy.status === 'mismatched'"/>
          </label>
        </div>
        <o-code style="width: calc(100% - 230px); height: 352px" :text="declarationFileText" ref="code">
        </o-code>
      </div>
      <div class="generator-layout-bottom">
        <hr>
        <label class="generator">
          <p class="generator-name">
            文件名 <span class="generator-alert" v-if="validationResults.filename" v-text="validationResults.filename.text"></span>
          </p>
          <o-input name="filename" v-model="defaultFilename" clearable :mismatched="validationResults.filename && validationResults.filename.status === 'mismatched'"/>
        </label>
        <label class="generator">
          <p class="generator-name">版本</p>
          <o-select name="version" :datalist="versions" v-model="currentVersion" />
        </label>
        <o-button size="normal" class="generator-button" @click="download">下载声明文件</o-button>
      </div>
    </o-form>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

interface formData {
  alert?: string
  confirm?: string
  toast?: string
  lazy?: string
  filename?: string
  version: string
}

type status = 'matched' | 'mismatched'

interface validationResult {
  status: status
  rule: string
  text: string
}

interface validationResults {
  alert?: validationResult
  confirm?: validationResult
  toast?: validationResult
  lazy?: validationResult
  filename?: validationResult
  version?: validationResult
}

@Component
export default class Alias extends Vue {
  currentVersion: string = 'v0.0.2'
  defaultFilename: string = 'alias-declaration'

  versions: any[] = [
    { value: 'v0.0.2' }
  ]
  formData: formData = {
    version: this.currentVersion
  }

  templates: any = {
    'v0.0.2': `
      import Vue from 'vue'

      type type = 'info' | 'success' | 'warning' | 'error'

      interface toastArgs {
        title?: string
        msg: string
        type?: type
      }

      interface alertArgs extends toastArgs {
        confirm?: string
        cancel?: string
      }

      declare module 'vue/types/vue' {
        interface Vue {
          [[ alias area ]]
        }
      }
    `
  }

  validationResults: validationResults = {}

  get declarationFileText (): string {
    let { templates, formData, validationResults } = this
    let {
      alert: alertResult, confirm: confirmResult,
      toast: toastResult, lazy: lazyResult,
    } = validationResults
    let { version, alert, confirm, toast, lazy } = formData
    let template = templates[version]
    let alias = '\n'

    if (alert && alertResult && alertResult.status === 'matched') {
      alias += `          ${alert} (arg: string | alertArgs): Promise<void>\n`
    }
    if (confirm && confirmResult && confirmResult.status === 'matched') {
      alias += `          ${confirm} (arg: string | alertArgs): Promise<void>\n`
    }
    if (toast && toastResult && toastResult.status === 'matched') {
      alias += `          ${toast} (arg: string | toastArgs): void\n`
    }
    if (lazy && lazyResult && lazyResult.status === 'matched') {
      alias += `          ${lazy} (): void\n`
    }

    return template.replace('[[ alias area ]]', alias)
  }

  get rules (): any {
    let { formData } = this
    let { alert, confirm, toast, lazy } = formData
    let publicRule = [
      { rule: 'String regexp: `/^[a-zA-Z_$][a-zA-Z_$0-9]*$/`', mismatchedText: '别名不合法' }
    ]

    return {
      filename: [
        { rule: 'Required string', mismatchedText: '文件名不能为空' }
      ],
      alert: alert && publicRule,
      confirm: confirm && publicRule,
      toast: toast && publicRule,
      lazy: lazy && publicRule,
    }
  }

  getValidate (callback: Function): void {
    this.validationResults = callback(this.rules)
  }

  download (): void {
    let { filename } = this.formData
    if (filename) {
      this.$confirm({
        type: 'warning',
        msg: '这个操作会发起一个下载任务，是否继续？',
        confirm: '继续',
        cancel: '取消',
      }).then(() => {
        let { code }: any = this.$refs
        let declaration = code.formattedCode.join('\n')
  
        let mission = document.createElement('a')
        mission.href = window.URL.createObjectURL(new Blob([declaration]))
        mission.download = `${filename}.d.ts`
  
        mission.click()
      })
    } else {
      this.$alert({ type: 'error', msg: '你必须先填写文件名后才能下载。' })
    }
  }
}
</script>

<style lang="scss" scoped>
$generator-layout-left-width: 200px;
$generator-name-fontsize: 18px;
.generator {
  display: inline-block;
}

.generator-name {
  margin: 5px 0;

  font-size: $generator-name-fontsize;
  text-align: left;
}

.generator-layout-left {
  display: flex;
  flex-direction: column;
  float: left;

  width: $generator-layout-left-width;

  padding-right: 30px
}

.generator-layout-bottom {
  margin-top: 30px;

  text-align: right;

  .generator {
    margin-right: 25px;
  }
  .generator-button {
    width: 130px;
    height: 40px;
  }
}

.generator-alert {
  float: right;

  font-size: 14px;
  line-height: 2 * $generator-name-fontsize;
  color: red;
}

</style>