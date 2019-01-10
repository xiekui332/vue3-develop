<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <!-- <HelloWorld :msg = msg /> -->
    
    <!-- footer组件 S -->
    <footerComponent ref="footer" :obj = selectPage />
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
  data(){
    return {
        msg:'233',
        selectPage:'one'
    }
  },
  mounted(){
    document.getElementById('app').style.minHeight = window.innerHeight + 'px';
    this.$refs.footer.footerItem[0].isActive = true;
  }
}
</script>
