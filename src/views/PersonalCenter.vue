<template>
    <div>
        <!-- footer组件 S -->
        <FooterComponent ref="footer" :obj = selectPage />
        <!-- footer组件 E -->
    </div>
</template>

<script>
import FooterComponent from '@/components/Footer-component.vue'

export default {
  name: "personalCenter",
  components:{
      FooterComponent
  },
  data() {
    return {
      selectPage: "four"
    };
  },
  methods: {},
  mounted() {
    this.$refs.footer.footerItem[3].isActive = true;
  }
};
</script>


<style lang="less" scoped>
</style>


