<template>
  <div class="home" id="home">
    <HeadComponent />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <!-- <HelloWorld :msg = msg /> -->
    
    <!-- container S -->
    <div class="page_container">

    </div>
    <!-- container E -->

    <!-- footer组件 S -->
    <FooterComponent ref="footer" :obj = selectPage />
    <!-- footer组件 E -->

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FooterComponent from '@/components/Footer-component.vue'
import HeadComponent from '@/components/Head-component.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    FooterComponent,
    HeadComponent
  },
  data(){
    return {
        msg:'233',
        selectPage:'one'
        
    }
  },
  mounted(){
    document.getElementById('home').style.minHeight = window.innerHeight + 'px';
    this.$refs.footer.footerItem[0].isActive = true;
    
    console.log(process.env.NODE_ENV)
  }
}
</script>



<style lang="less" scoped>

.home{
  width: 100%;
  background: #F9F3ED!important;
  overflow: hidden;
  .page_container{
    width: 7rem;
    height: 7.4rem;
    margin: .68rem auto 0; 
  }
}

</style>

