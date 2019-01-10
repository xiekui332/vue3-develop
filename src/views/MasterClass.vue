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
  name: "masterClass",
  components:{
      FooterComponent
  },
  data() {
    return {
      selectPage: "two"
    };
  },
  methods: {},
  mounted() {
    document.getElementById("app").style.minHeight = window.innerHeight + "px";
    this.$refs.footer.footerItem[1].isActive = true;
  }
};
</script>


<style lang="less" scoped>
</style>


