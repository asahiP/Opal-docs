<template>
  <article>
    <h1>表单</h1>
    <p>
      由Form组件构成，用以收集和校验数据。
    </p>
    <o-tips warning>
      只有含有 <code>name</code> 属性的Form组件会被Opal捕获。
    </o-tips>
    <h2>通用表单</h2>
    <div class="wrapper">
      <o-form v-model="formData" @validate="setValidationResults" ref="form">
        <div class="row">
          <o-input
            name="mail"
            placeholder="邮箱，用于登录及安全验证"
            width="350"
            :datalist="mailDatalist"
            :mismatched="validationResults.mail && validationResults.mail.status === 'mismatched'"
            clearable
          />
          <p
            class="validation"
            v-if="validationResults.mail && validationResults.mail.status === 'mismatched'"
            v-text="validationResults.mail.text"
          ></p>
        </div>
        <div class="row">
          <o-input
            name="pass"
            placeholder="密码，由6-20个字符组成，区分大小写"
            width="350"
            :datalist="mailDatalist"
            :mismatched="validationResults.pass && validationResults.pass.status === 'mismatched'"
            password
          />
          <p
            class="validation"
            v-if="validationResults.pass && validationResults.pass.status === 'mismatched'"
            v-text="validationResults.pass.text"
          ></p>
        </div>
        <div class="row">
          <o-input
            name="cfmpass"
            placeholder="请再次输入密码，确保两次输入一致"
            width="350"
            :datalist="mailDatalist"
            :mismatched="validationResults.cfmpass && validationResults.cfmpass.status === 'mismatched'"
            password
          />
          <p
            class="validation"
            v-if="validationResults.cfmpass && validationResults.cfmpass.status === 'mismatched'"
            v-text="validationResults.cfmpass.text"
          ></p>
        </div>
        <div class="row">
          <o-input
            name="phone"
            placeholder="常用手机号码，用于接收验证码"
            width="350"
            :datalist="mailDatalist"
            :mismatched="validationResults.phone && validationResults.phone.status === 'mismatched'"
            clearable
          />
          <p
            class="validation"
            v-if="validationResults.phone && validationResults.phone.status === 'mismatched'"
            v-text="validationResults.phone.text"
          ></p>
        </div>
          <o-checkbox name="agree" :price="true">
            我已阅读并同意 <a href="/#/component/form" target="_blank">服务声明和隐私条款</a>
          </o-checkbox>
        <div style="margin-top: 20px;">
          <o-button style="width: 170px; margin-right: 10px" @click="getValidate">
            注册
          </o-button>
          <o-button type="plain" native-type="reset" style="width: 170px">
            重置
          </o-button>
        </div>
      </o-form>
    </div>
    <o-code :text="demo1Code" lang="html"></o-code>
    <h2>Methods</h2>
    <o-table :data="Methods"></o-table>
    <h2>Events</h2>
    <o-table :data="Events"></o-table>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class FormDoc extends Vue {

  demo1Code: string = `
    <template>
      <o-form v-model="formData" @validate="setValidationResults" ref="form">
        <div class="row">
          <o-input
            name="mail"
            placeholder="邮箱，用于登录及安全验证"
            width="350"
            :datalist="mailDatalist"
            :mismatched="validationResults.mail && validationResults.mail.status === 'mismatched'"
            clearable
          />
          <p
            class="validation"
            v-if="validationResults.mail && validationResults.mail.status === 'mismatched'"
            v-text="validationResults.mail.text"
          ></p>
        </div>
        <div class="row">
          <o-input
            name="pass"
            placeholder="密码，由6-20个字符组成，区分大小写"
            width="350"
            :datalist="mailDatalist"
            :mismatched="validationResults.pass && validationResults.pass.status === 'mismatched'"
            password
          />
          <p
            class="validation"
            v-if="validationResults.pass && validationResults.pass.status === 'mismatched'"
            v-text="validationResults.pass.text"
          ></p>
        </div>
        <div class="row">
          <o-input
            name="cfmpass"
            placeholder="请再次输入密码，确保两次输入一致"
            width="350"
            :datalist="mailDatalist"
            :mismatched="validationResults.cfmpass && validationResults.cfmpass.status === 'mismatched'"
            password
          />
          <p
            class="validation"
            v-if="validationResults.cfmpass && validationResults.cfmpass.status === 'mismatched'"
            v-text="validationResults.cfmpass.text"
          ></p>
        </div>
        <div class="row">
          <o-input
            name="phone"
            placeholder="常用手机号码，用于接收验证码"
            width="350"
            :datalist="mailDatalist"
            :mismatched="validationResults.phone && validationResults.phone.status === 'mismatched'"
            clearable
          />
          <p
            class="validation"
            v-if="validationResults.phone && validationResults.phone.status === 'mismatched'"
            v-text="validationResults.phone.text"
          ></p>
        </div>
          <o-checkbox name="agree" :price="true">
            我已阅读并同意 <a href="/#/component/form" target="_blank">服务声明和隐私条款</a>
          </o-checkbox>
        <div style="margin-top: 20px;">
          <o-button style="width: 170px; margin-right: 10px" @click="getValidate">
            注册
          </o-button>
          <o-button type="plain" native-type="reset" style="width: 170px">
            重置
          </o-button>
        </div>
      </o-form>
    </template>
    <code>
      export default {
        data () {
          return {
            formData: {},
            validationResults: {},
          }
        },

        computed: {
          rules () {
            let { pass } = this.formData

            return {
              mail: [
                { rule: 'Required string', mismatchedText: '邮箱地址不能为空' },
                { rule: 'String mail', mismatchedText: '请输入正确的邮箱地址' },
              ],

              pass: [
                { rule: 'Required string', mismatchedText: '密码不能为空' },
                { rule: 'String minlen: 5', mismatchedText: '密码长度必须大于等于6' },
                { rule: 'String maxlen: 21', mismatchedText: '密码长度必须小于等于20' },
              ],

              cfmpass: pass
                ? [
                  { rule: 'Required string', mismatchedText: '请再次输入密码' },
                  { rule: \`String equal: \\\`\${pass}\\\`\`, mismatchedText: '两次密码不一致' },
                ]
                : [
                  { rule: 'Required string', mismatchedText: '请再次输入密码' },
                ]
              ,

              phone: [
                { rule: 'Required string', mismatchedText: '手机号码不能为空' },
                { rule: 'String phone', mismatchedText: '请输入正确的手机号码' },
              ]
            }
          }
        },

        methods: {
          mailDatalist () {
            let { mail } = this.formData
            return new Promise((res, rej) => {
              let address = mail ? mail.split('@')[0] : ''

              if (address) {
                let datalist = []
                let template = [
                  '@qq.com',
                  '@126.com',
                  '@163.com',
                  '@gmail.com',
                  '@outlook.com',
                ]

                for (let i of template) {
                  datalist.push({ value: address + i })
                }

                res(datalist)
              } else {
                res([])
              }
            })
          },

          setValidationResults (callback) {
            this.validationResults = callback(this.rules)
          },

          getValidate () {
            let template = {
              mail: '',
              pass: '',
              cfmpass: '',
              phone: '',
              agree: false,
            }
            let { rules, formData, $refs } = this
            this.validationResults = $refs.form.getValidate(rules, Object.assign(template, formData))

            let canSubmit = true
            let { validationResults, $alert } = this
            
            Object.keys(validationResults).forEach(name => {
              if (validationResults[name].status === 'mismatched') {
                canSubmit = false
              }
            })

            if (canSubmit) {
              if (formData.agree && formData.agree[0]) {
                $alert({ type: 'success', msg: '注册成功' })
              } else {
                $alert({ type: 'warning', msg: '请先阅读服务声明和隐私条款' })
              }
            }
          }
        },
      }
    </code>
  `.replace(/code/g, 'script')

  formData: any = {}

  mailDatalist (): Promise<any> {
    let { mail } = this.formData
    return new Promise((res, rej) => {
      let address = mail ? mail.split('@')[0] : ''

      if (address) {
        let datalist = []
        let template = [
          '@qq.com',
          '@126.com',
          '@163.com',
          '@gmail.com',
          '@outlook.com',
        ]

        for (let i of template) {
          datalist.push({ value: address + i })
        }

        res(datalist)
      } else {
        res([])
      }
    })
  }

  get rules (): any {
    let { pass } = this.formData

    return {
      mail: [
        { rule: 'Required string', mismatchedText: '邮箱地址不能为空' },
        { rule: 'String mail', mismatchedText: '请输入正确的邮箱地址' },
      ],

      pass: [
        { rule: 'Required string', mismatchedText: '密码不能为空' },
        { rule: 'String minlen: 5', mismatchedText: '密码长度必须大于等于6' },
        { rule: 'String maxlen: 21', mismatchedText: '密码长度必须小于等于20' },
      ],

      cfmpass: pass
        ? [
          { rule: 'Required string', mismatchedText: '请再次输入密码' },
          { rule: `String equal: \`${pass}\``, mismatchedText: '两次密码不一致' },
        ]
        : [
          { rule: 'Required string', mismatchedText: '请再次输入密码' },
        ]
      ,

      phone: [
        { rule: 'Required string', mismatchedText: '手机号码不能为空' },
        { rule: 'String phone', mismatchedText: '请输入正确的手机号码' },
      ]
    }
  }

  validationResults: any = {}

  setValidationResults (callback: Function): void {
    this.validationResults = callback(this.rules)
  }

  getValidate (): void {
    let template = {
      mail: '',
      pass: '',
      cfmpass: '',
      phone: '',
      agree: false,
    }
    let { rules, formData, $refs } = this
    this.validationResults = ($refs.form as any).getValidate(rules, Object.assign(template, formData))

    let canSubmit = true
    let { validationResults, $alert } = this
    
    Object.keys(validationResults).forEach(name => {
      if (validationResults[name].status === 'mismatched') {
        canSubmit = false
      }
    })

    if (canSubmit) {
      if (formData.agree && formData.agree[0]) {
        $alert({ type: 'success', msg: '注册成功' })
      } else {
        $alert({ type: 'warning', msg: '请先阅读服务声明和隐私条款' })
      }
    }
  }


  Methods: any = {
    head: [
      { prop: 'name', label: 'Name', width: 150 },
      { prop: 'description', label: 'Description', width: 300 },
      { prop: 'argument', label: 'Argument', width: 350 },
      { prop: 'return', label: 'Return', width: 200 },
    ],
    body: [
      {
        name: 'getValidate',
        description: '对整个表单进行校验的方法，参数为校验用的规则，返回值为校验的结果。',
        argument: 'Object: { [name]: [{ rule, matchedText, mismatchedText }...] }',
        return: 'Object: { [name]: { status, rule, text } }',
      },
    ]
  }

  Events: any = {
    head: [
      { prop: 'name', label: 'Name', width: 150 },
      { prop: 'description', label: 'Description', width: 300 },
      { prop: 'argument', label: 'Argument', width: 549 },
    ],
    body: [
      {
        name: 'validate',
        description: '表单内任意组件更新时触发，事件触发后会传入表单的 getValidate 方法',
        argument: 'getValidate: (rules: Object) => (results: Object)',
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
.row {
  position: relative;

  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 30px;
}

.validation {
  position: absolute;

  color: red;
  font-size: 15px;
}
</style> 