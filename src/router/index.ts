import Vue from 'vue'
import VueRouter from 'vue-router'

import Installation from '../views/quick-start/Installation.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'installation' },
  },
  {
    path: '/component',
    name: 'component',
    redirect: { name: 'icon' },
  },

  {
    path: '/installation',
    name: 'installation',
    component: Installation,
    meta: {
      title: '安装',
      category: '快速上手',
      classes: 'QuickStart',
    }
  },
  {
    path: '/configuration',
    name: 'configuration',
    component: () => import('../views/quick-start/Configuration.vue'),
    meta: {
      title: '全局配置',
      category: '快速上手',
      classes: 'QuickStart',
    }
  },
  {
    path: '/alias',
    name: 'alias',
    component: () => import('../views/quick-start/Alias.vue'),
    meta: {
      title: '别名',
      category: '快速上手',
      classes: 'QuickStart',
    }
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: () => import('../views/quick-start/Changelog.vue'),
    meta: {
      title: '更新日志',
      category: '快速上手',
      classes: 'QuickStart',
    }
  },

  {
    path: '/component/icon',
    name: 'icon',
    component: () => import('../views/components/Basic/Icon.vue'),
    meta: {
      title: '图标',
      category: '组件',
      classes: 'Basic',
    }
  },
  {
    path: '/component/button',
    name: 'button',
    component: () => import('../views/components/Basic/Button.vue'),
    meta: {
      title: '按钮',
      category: '组件',
      classes: 'Basic',
    }
  },

  {
    path: '/component/radio',
    name: 'radio',
    component: () => import('../views/components/Form/Radio.vue'),
    meta: {
      title: '单选框',
      category: '组件',
      classes: 'Form',
    }
  },
  {
    path: '/component/checkbox',
    name: 'checkbox',
    component: () => import('../views/components/Form/Checkbox.vue'),
    meta: {
      title: '复选框',
      category: '组件',
      classes: 'Form',
    }
  },
  {
    path: '/component/checkbutton',
    name: 'checkbutton',
    component: () => import('../views/components/Form/Checkbutton.vue'),
    meta: {
      title: '选项按钮',
      category: '组件',
      classes: 'Form',
    }
  },
  {
    path: '/component/input',
    name: 'input',
    component: () => import('../views/components/Form/Input.vue'),
    meta: {
      title: '输入框',
      category: '组件',
      classes: 'Form',
    }
  },
  {
    path: '/component/select',
    name: 'select',
    component: () => import('../views/components/Form/Select.vue'),
    meta: {
      title: '选择器',
      category: '组件',
      classes: 'Form',
    }
  },
  {
    path: '/component/slider',
    name: 'slider',
    component: () => import('../views/components/Form/Slider.vue'),
    meta: {
      title: '滑块',
      category: '组件',
      classes: 'Form',
    }
  },
  {
    path: '/component/stepper',
    name: 'stepper',
    component: () => import('../views/components/Form/Stepper.vue'),
    meta: {
      title: '步进器',
      category: '组件',
      classes: 'Form',
    }
  },
  {
    path: '/component/switch',
    name: 'switch',
    component: () => import('../views/components/Form/Switch.vue'),
    meta: {
      title: '开关',
      category: '组件',
      classes: 'Form',
    }
  },
  {
    path: '/component/form',
    name: 'form',
    component: () => import('../views/components/Form/Form.vue'),
    meta: {
      title: '表单',
      category: '组件',
      classes: 'Form',
    }
  },

  {
    path: '/component/table',
    name: 'table',
    component: () => import('../views/components/Data/Table.vue'),
    meta: {
      title: '表格',
      category: '组件',
      classes: 'Data',
    }
  },
  {
    path: '/component/pagination',
    name: 'pagination',
    component: () => import('../views/components/Data/Pagination.vue'),
    meta: {
      title: '分页',
      category: '组件',
      classes: 'Data',
    }
  },

  {
    path: '/component/alert',
    name: 'alert',
    component: () => import('../views/components/Notice/Alert.vue'),
    meta: {
      title: '弹窗',
      category: '组件',
      classes: 'Notice',
    }
  },
  {
    path: '/component/toast',
    name: 'toast',
    component: () => import('../views/components/Notice/Toast.vue'),
    meta: {
      title: '通知',
      category: '组件',
      classes: 'Notice',
    }
  },
  {
    path: '/component/tips',
    name: 'tips',
    component: () => import('../views/components/Notice/Tips.vue'),
    meta: {
      title: '提示',
      category: '组件',
      classes: 'Notice',
    }
  },

  {
    path: '/component/code',
    name: 'code',
    component: () => import('../views/components/Others/Code.vue'),
    meta: {
      title: '代码',
      category: '组件',
      classes: 'Others',
    }
  },
  {
    path: '/component/image',
    name: 'image',
    component: () => import('../views/components/Others/Image.vue'),
    meta: {
      title: '图片',
      category: '组件',
      classes: 'Others',
    }
  },
  {
    path: '/component/scroll',
    name: 'scroll',
    component: () => import('../views/components/Others/Scroll.vue'),
    meta: {
      title: '滚动条',
      category: '组件',
      classes: 'Others',
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || 'Home'} | Opal`
  next()
})

export default router
export { routes }
