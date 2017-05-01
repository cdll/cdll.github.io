
<style>
*{
  transition: all .1s ease-in-out;
}
</style>

<template lang='pug'>
<!--<ul>
  <li class="" v-for='(el, i) in navList'>
    <a class="" :href='el.url' v-text='el.name'></a>
  </li>
</ul>-->
div
    mu-appbar(title='', :style='{marginLeft: menuOpened? 256+"px": 0}')
      mu-text-field.appbar-search-field(icon='search', slot='right', hintText='请输入搜索内容')
      mu-flat-button(color='white', label='Mudmin', slot='left', @click='toggleMenu()', v-if='!menuOpened')
      //- mu-raised-button(label='toggle', @click='toggleMenu()')

    mu-drawer(:open='menuOpened', :docked='menuDocked', @closed='toggleMenu(true)')
      mu-list(@itemClick='')
        mu-list-item(title='Mudmin', @click='toggleMenu()' style='text-align: center;')
          mu-flat-button(color='white', label='登陆', slot='left', @click='login()')
        mu-list-item(v-for='(el, i) in navList', :title='el.name', :key='i')
</template>

<script>

  export default {
    data() {
      return {
        navList: [
          {
            name: '主页'
            ,url: '/home'
          }
          ,{
            name: '登陆'
            ,url: '/login'
          }
        ]
        ,menuOpened: true
        ,menuDocked: true
      }
    }
    ,methods: {
      toggleMenu (flag){
        this.menuOpened= undefined=== flag? !this.menuOpened: flag
      }
      ,login (){
        console.info(this.route)
      }
    }
  }
</script>
