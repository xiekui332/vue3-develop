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
  name: "prayForBlessing",
  components:{
      FooterComponent
  },
  data() {
    return {
      selectPage: "three"
    };
  },
  methods: {},
  mounted() {
    this.$refs.footer.footerItem[2].isActive = true;
  }
};
</script>


<style lang="less" scoped>
</style>


