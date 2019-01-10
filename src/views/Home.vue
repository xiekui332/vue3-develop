<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <!-- footer组件 S -->
    <footerComponent />
    <!-- footer组件 E -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import footerComponent from '@/components/footer-component.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    footerComponent
  },
  mounted(){
    document.getElementById('app').style.minHeight = window.innerHeight + 'px';
  }
}
</script>
