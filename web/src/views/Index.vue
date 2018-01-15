<template>
    <div class="wrap-index">
        <!-- 导航 -->
        <Navbar view="index"/>
        <div class="scroll-view">
            <div class="banner">
                <!-- Todo -->
            </div>
            <!-- 项目区域 -->
            <div class="box-title">
                <div class="title">
                    项目
                </div>
                <div class="line"></div>
            </div>
            <div class="box-title">
                <div class="title">
                    分类
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    export default {
        components: {
            Navbar
        },
        data() {
            return {
                data: "",
            }
        },
        created() {},
        mounted() {
            // this.init(this.$route.query);
        },
        watch: {},
        methods: {
            // post: function() {
            //     var self = this;
            //     var URL = '/api/v1/auth/';
            //     this.$http.post(URL).then(function(response) {
            //         var info = response.data.response;
            //         if (response.data.code == 1000) {
            //             console.log(info)
            //         } else {
            //             self.$notify(response.data.msg);
            //         }
            //     }).catch(function(error) {
            //         console.log(error);
            //     });
            // }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrap-index{
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-top: 60px;
    }
    .scroll-view{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .box-title{
        width: 100%;
        text-align: center;
    }
    .box-title .title {
        font-weight: bold;
        font-size: 30px;
        line-height: 1;
        color: #fff;
    }
    .box-title .line{
        width: 100px;
        height: 5px;
        background-color: #222;
        margin: 20px auto;
    }

</style>
