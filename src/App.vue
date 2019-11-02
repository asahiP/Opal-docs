<template>
  <div id="app">
    <nav>
      <o-scroll>
        <section v-for="category of Object.keys(navData)" :key="`nav-section-${category}`">
          <p class="category" v-text="category"></p>
          <ol v-for="classes of Object.keys(navData[category])" :key="`nav-classes-${classes}`">
            <li v-if="classes !== 'QuickStart'"><p class="classes" v-text="classes"></p></li>
            <li v-for="({ meta: { title }, name, path }, index) of navData[category][classes]" :key="`nav-${classes}-${index}`">
              <router-link :to="path">
                {{ title }}
                <span>{{ name | camel }}</span>
              </router-link>
            </li>
          </ol>
        </section>
      </o-scroll>
    </nav>
    <main>
      <o-scroll ref="main">
        <router-view/>
        <section class="footer-nav">
          <router-link class="footer-nav-left" v-if="currentRouteIndex > 0" :to="routeData[currentRouteIndex - 1].path">
            <span class="o-icon-arrow-left footer-nav-icon"></span>
            <span v-text="routeData[currentRouteIndex - 1].meta.title"></span>
          </router-link>
          <router-link class="footer-nav-right" v-if="currentRouteIndex < routeData.length - 1" :to="routeData[currentRouteIndex + 1].path">
            <span v-text="routeData[currentRouteIndex + 1].meta.title"></span>
            <span class="o-icon-arrow-right footer-nav-icon"></span>
          </router-link>
        </section>
      </o-scroll>
    </main>
    <footer>
      <img src="./assets/logo-white.png" alt="logo" height="41.5">
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { routes } from './router'

interface route {
  path: string
  name: string
  meta?: {
    title: string
    category: string
    classes: string
  }
  redirect?: any
  component?: Vue.Component | Function
}

interface nav {
  [category: string]: {
    [classes: string]: route[]
  }
}

@Component({
  filters: {
    camel (val: string): string {
      return typeof val === 'string'
        ? val.slice(0, 1).toLocaleUpperCase() + val.slice(1)
        : ''
    }
  }
})
export default class App extends Vue {
  routeData: route[] = routes.slice(1)

  get navData (): nav {
    let nav: nav = {}

    routes.forEach(route => {
      if (route && route.meta) {
        let { category, classes } = route.meta

        if (!nav[category]) {
          nav[category] = {}
        }
        if (!nav[category][classes]) {
          nav[category][classes] = []
        }

        nav[category][classes].push(route)
      }
    })
    return nav
  }

  get currentRouteIndex (): number {
    let { routeData, $route } = this
    let { name } = $route
    let result = -1

    for (let i = 0, len = routeData.length; i < len; i++) {
      if (routeData[i].name === name) {
        result = i
        break
      }
    }

    return result
  }

  mounted () {
    let { main }: any = this.$refs

    this.$router.afterEach(() => {
      main.setScrollTop(0, true)
    })
  }
}
</script>

<style lang="scss">
@import './styles/variable.scss';

* {
  margin: 0;
  padding: 0;
}

html, body {
  position: relative;

  width: 100%;
  height: 100%;
  overflow: hidden;

  background: lighten($primary-color, 27%);
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  width: $app-size;
  height: $app-size;
  min-width: 1366 - ($app-space * 2);
  min-height: 625 - ($app-space * 2);
  overflow: hidden;

  margin: auto;
  padding-top: $app-radius;

  border-radius: $app-radius;

  font-family: $default-font-family;

  background: $white;

  box-shadow: $shadow-default;
  box-sizing: border-box;

  & > nav {
    float: left;

    width: $app-nav-width;
    height: calc(100% - #{$app-footer-height});
    overflow: hidden;

    & section {
      padding: $space-sm * 2;
      padding-top: unset;

      & li {
        $height: 40px;
        $height-inner: $height - ($space-base / 2);
        height: $height;

        list-style: none;
        line-height: $height-inner;

        & a {
          display: block;
          height: $height-inner;

          padding-left: $space-base;

          border-radius: $radius-base;

          color: $text-main-color;
          text-decoration: none;

          span {
            float: right;

            margin-right: $space-base;

            color: $text-sub-color;
            font-size: $fontsize-sm;
          }
        }
        .router-link-exact-active, & a:hover {
          color: $white;

          background: $primary-color;

          span {
            color: $white;
          }
        }
      }
      &:first-child {
        padding-top: $space-lg;
      }
    }

    .category {
      margin-bottom: $space-base;

      color: $text-main-color;
      font-size: $fontsize-lg;
      font-weight: bold;
    }
    .classes {
      color: $text-sub-color;
      font-size: $fontsize-sm;
    }
  }

  & > main {
    float: left;

    width: calc(100% - #{$app-nav-width});
    height: calc(100% - #{$app-footer-height});
    overflow: hidden;

    article {
      color: $text-main-color;

      h1, h2, h3, h4, h5 {
        font-weight: 400;
      }
      
      h1 {
        font-size: 30px;

        margin-bottom: $space-base * 3;
      }

      h2 {
        margin-top: $space-base * 3;
      }

      p {
        line-height: 2;
      }

      & :not(.o-code) > code {
        margin: 0 3px;
        padding: 3px;

        border-radius: $radius-base;

        color: $white;
        font-family: $default-font-family;

        background: $primary-light-color;

        *, *:hover, *:visited, *:active {
          color: $white;
          font-family: $default-font-family;
        }
      }

      .wrapper::after {
        display: block;
        clear: both;
        content: '';
      }

      & > * {
        margin: $space-lg $space-base * 2;
      }
    }

    .footer-nav {
      padding: $space-base * 3 0;

      a {
        color: $text-main-color;
        text-decoration: none;

        transition: color .2s ease-out;

        &:hover, &:hover .footer-nav-icon {
          color: $primary-color;
        }
      }

      &::after {
        display: block;
        clear: both;
        content: '';
      }
    }

    .footer-nav-icon {
      margin: 0 $space-sm * 2;

      color: $text-sub-color;
    }

    .footer-nav-left {
      float: left;
    }

    .footer-nav-right {
      float: right;
    }
  }

  & > footer {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: $app-footer-height;

    background: $primary-color;

    & > img {
      position: absolute;
      top: 0;
      right: 20px;
      bottom: 0;

      margin: auto 0;
    }
  }
}
</style>
