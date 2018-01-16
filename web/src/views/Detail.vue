<template>
    <div class="wrap-detail">
        <!-- 导航 -->
        <Navbar view="detail"/>
        <!-- Scroll View -->
        <div class="scroll-view">
            <div class="box-top" :style="{backgroundImage:`url(${topbg})`}">
                <div class="top-info">
                    <div class="title">宇宙无敌永动机</div>
                    <div class="intro">宇宙无敌永动机简介,宇宙无敌永动机简介,宇宙无敌永动机简介,宇宙无敌永动机简介。</div>
                    <div class="author">
                        <div class="avatar" :style="{backgroundImage:`url(${avatarimg})`}"></div>
                        <div class="nick">e未酱</div>
                    </div>
                    <div class="box-button">
                        <button>[icon] Like</button>
                    </div>
                </div>
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
        props: {
            type: [Number, String],
            require: true
        },
        data() {
            return {
                data: "",
                topbg:"http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/bgimg.jpg",
                avatarimg:"http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/avatar.jpg"
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
    .wrap-detail {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-top: 60px;
        color: #fff;
    }
    .box-top {
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 330px;
    }
    .box-top .top-info {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        color: #fff;
        text-align: center;
        padding-top: 50px;
    }
    .box-top .title{
        width: 100%;
        font-weight: bold;
        font-size: 40px;
        line-height: 1;
    }
    .box-top .intro{
        width: 90%;
        max-width: 1000px;
        margin:30px auto 0;
        color: #999;    
    }

    .box-top .author{
        width: 100%;
        margin-top: 30px;
        position: relative;
        text-align: center;
    }
    .box-top .author .avatar{
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: inline-block;
    }
    .box-top .author .nick{
        margin-left: 10px;
        color: #007AFF;
        line-height: 24px;
        height: 24px;
        overflow: hidden;
        display: inline-block;
    }
    .box-top .box-button{
        width: 100%;
        margin-top: 30px;
    }

    .box-top .box-button button {
        background-color: #007AFF;
        height: 44px;
        border-radius: 4px;
        border:none;
        color: #fff;
        outline: 0;
        -webkit-appearance: none;
        margin:0 10px;
        display: inline-block;
        cursor: pointer;
        padding:0 20px;
    }
    .box-top .box-button button:hover{
        background-color: #259FFF;
    }
</style>
