<template>
    <div class="head-container">
        <div class="head-flex">
            <span class="head-title">{{ headContent.headMsg }}</span>
            <div class="head-btn">{{ headContent.headBtnMsg }} <i class="fa fa-angle-right"></i> </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'HeadComponent',
    props:{
        
    },
    data(){
        return {
            headContent:{
                headMsg:'完善资料，定制您的专属运势',
                headBtnMsg:'马上填写'
            }
        }
    },
    methods:{

    }
}
</script>


<style lang="less" scoped>
    .head-container{
        width: 100%;
        height: .8rem;
        background: #B31C21;
        position: fixed;
        left: 0;
        top: 0;
        .head-flex{
            display: flex;
            flex-direction: row;
            .head-title{
                display: inline-block;
                margin:0;
                color: #fff;
                font-size:.28rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                line-height: .8rem;
                text-indent: 1.5em;
            };
            .head-btn{
                width:1.68rem;
                height:.54rem;
                background:rgba(255,255,255,1);
                border-radius:.32rem;
                font-size:.24rem;
                font-family:PingFang-SC-Regular;
                font-weight:400;
                color:rgba(179,28,33,1);
                line-height: .54rem;
                margin: .13rem .2rem 0 1.4rem;
                i{
                    font-size: .3rem;
                    margin-left: .1rem;
                }
            }
        }
        
    }
</style>


