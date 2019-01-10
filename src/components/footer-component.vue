<template>
    <div class="footer-component">
        <div class="footer_item" v-for="item,index in footerItem" :key="index">
            <div class="footer_item_box">
                <img :src="item.img" alt="图片">
                <p :class="{p_active:item.isActive}">{{item.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "footerComponent",
  props: {
    obj: String //设置类型
  },
  data() {
    return {
      footerItem: [
        {
          img:
            this.obj == "one"
              ? require("../assets/images/icon/shyeselect.png")
              : require("../assets/images/icon/shyeunselect.png"),
          title: "首页",
          isActive: false
        },
        {
          img:
            this.obj == "two"
              ? require("../assets/images/icon/dashiselect.png")
              : require("../assets/images/icon/dashiunselect.png"),
          title: "大师讲堂",
          isActive: false
        },
        {
          img:
            this.obj == "three"
              ? require("../assets/images/icon/qifuselect.png")
              : require("../assets/images/icon/qifuunselect.png"),
          title: "祈福许愿",
          isActive: false
        },
        {
          img:
            this.obj == "four"
              ? require("../assets/images/icon/gerenselect.png")
              : require("../assets/images/icon/gerenunselect.png"),
          title: "个人中心",
          isActive: false
        }
      ]
    };
  },
  methods: {},
  created() {
    // console.log(this.obj)
  }
};
</script>
<style lang="less" scoped>
.footer-component {
  width: 100%;
  height: 0.98rem;
  // background: pink;
  background: rgba(250, 250, 250, 0.9);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25);
  border-top: 1px solid #eeeeee;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
}
.footer_item {
  flex: 1;
  overflow: hidden;
  img {
    display: block;
    width: 0.45rem;
    height: 0.45rem;
    margin: 0.1rem auto 0;
  }
  .footer_item_box {
    display: flex;
    flex-direction: column;
    p {
      color: #666;
      font-size: 0.2rem;
      margin-top: 0.05rem;
    }
    p.p_active {
      color: #d18e53;
    }
  }
}
</style>


