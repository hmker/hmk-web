<template>
    <div class="wrap-detail">
        <!-- 导航 -->
        <Navbar view="detail"/>
        <!-- Scroll View -->
        <div class="scroll-view" id="scroll-view-detail">
            <!--  顶部 -->
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
            <!-- 信息条 -->
            <div class="box-quickbar clearfix">
                <div class="wrap-quickbar">
                    <div class="left pull-left clearfix">
                        <div class="info pull-left">
                            <div class="value">34K</div>
                            <div class="label">次浏览</div>
                        </div>
                        <div class="info pull-left">
                            <div class="value">1200</div>
                            <div class="label">点赞</div>
                        </div>
                        <div class="info pull-left">
                            <div class="value">34</div>
                            <div class="label">条讨论</div>
                        </div>
                    </div>
                    <div class="right pull-right clearfix">
                        <button class="detail-nav pull-right">讨论</button>
                        <button class="detail-nav pull-right">零件</button>
                        <button class="detail-nav pull-right">文件<span>10</span></button>
                        <button class="detail-nav pull-right">详情</button>
                        <button class="detail-nav pull-right active">介绍</button>
                    </div>
                </div>
            </div>
            <!-- 信息条 浮动 -->
            <div :class="showfixQucikbar ? 'box-quickbar box-quickbar-fixed show clearfix':'box-quickbar box-quickbar-fixed clearfix'">
                <div class="wrap-quickbar">
                    <!-- Todo 添加返回顶部 -->
                    <div class="left pull-left clearfix">
                        <div class="title">宇宙无敌永动机</div>
                        <div class="intro">宇宙无敌永动机简介,宇宙无敌永动机简介,宇宙无敌永动机简介,宇宙无敌永动机简介。</div>
                    </div>
                    <div class="right pull-right clearfix">
                        <button class="detail-nav pull-right">讨论</button>
                        <button class="detail-nav pull-right">零件</button>
                        <button class="detail-nav pull-right">文件<span>10</span></button>
                        <button class="detail-nav pull-right">详情</button>
                        <button class="detail-nav pull-right active">介绍</button>
                    </div>
                </div>
            </div>
            <div class="box-detail"></div>
            <p>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
                1 <br>
            </p>
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
                avatarimg:"http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/avatar.jpg",
                showfixQucikbar:false,
            }
        },
        created() {
        },
        mounted() {
            // this.init(this.$route.query);
            let scrollBox = document.getElementById("scroll-view-detail")
            scrollBox.addEventListener('scroll', this.quicknavScroll,false)
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
            quicknavScroll:function(){
                let scrollTop = document.getElementById("scroll-view-detail").scrollTop
                // 隐藏显示fixed
                if(scrollTop >= 390){
                    this.showfixQucikbar = true;
                }else{
                    this.showfixQucikbar = false;
                }
            }
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
    .scroll-view{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
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

    .box-quickbar{
        width: 100%;
        background-color: #333;
    }
    .wrap-quickbar{
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
    }
    .box-quickbar .info{
        color: #fff;
        height: 60px;
        padding:10px 40px 0 0;
    }
    .box-quickbar .value{
        font-size: 18px;
    }
    .box-quickbar .label{
        margin-top: 4px;
        font-size: 12px;
        font-weight: lighter;
    }
    .box-quickbar .detail-nav{
        padding: 0 20px;
        line-height: 60px;
        height: 60px;
        color: #fff;
        background-color: #333;
        position: relative;
        cursor: pointer;
        display: block;
        outline: none;
        -webkit-appearance: none;
        border: none;
    }
    .box-quickbar .detail-nav span {
        font-size: 12px;
        display: inline-block;
        margin-left: 4px;
        position: relative;
        top: -6px;
        color: #888;
    }
    .box-quickbar .detail-nav:hover{
        color: #007AFF;
        background-color: #555;

    }
    .box-quickbar .detail-nav.active{
        color: #007AFF;
    }
    .box-quickbar .detail-nav.active::after{
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-color: #007AFF;
    position: absolute;
    bottom: 0;
    left: 0;
    }
    .box-quickbar-fixed{
        position: fixed;
        top:0;
        left: 0;
        transform: translateY(-60px);
    }
    .box-quickbar-fixed.show{
        transform: translateY(0);
        
    }
    .box-quickbar-fixed .left{
        width: 40%;
        overflow: hidden;
        padding:10px 0 0;
        height: 60px;;
    }
    .box-quickbar-fixed .left .title{
        font-size: 18px;
    }
    .box-quickbar-fixed .left .intro{
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        word-break: keep-all;
        white-space: nowrap;
        margin-top: 4px;
        font-size: 12px;
        font-weight: lighter;
    }
</style>
