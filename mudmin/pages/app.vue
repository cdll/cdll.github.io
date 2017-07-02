
<style>
*{
  margin: 0;
  padding: 0;
}
</style>

<template>
  <section class="" id="app">
    <AppNav></AppNav>
    <transition name='fade'>
      <keep-alive exclude="moviesDetail">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script >

  export default {
    data(){
      return {
        data: {name: 'mudmin'}
      }
    }
    ,components: {
      'AppNav': require('./nav.vue')
    }
  }
</script>
