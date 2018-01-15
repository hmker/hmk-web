<template>
    <div class="wrap-navbar">
        <div class="box-pc clearfix">
            <div class="pc-wrap">
            <!-- 电脑版 -->
                <!-- Logo -->
                <div class="logo pull-left">LOGO.INFO</div>
                <!-- 导航 -->
                <div class="box-nav pull-left clearfix">
                    <router-link to="/" :class="view == 'index' ? 'nav pull-left active':'nav pull-left'">首页</router-link>
                    <router-link to="/project" :class="view == 'project' ? 'nav pull-left active':'nav pull-left'">项目</router-link>
                    <router-link to="/list" :class="view == 'list' ? 'nav pull-left active':'nav pull-left'">分类</router-link>
                    <div v-if="view == 'search'" :class="view == 'search' ? 'nav pull-left active':'nav pull-left'">搜索</div>
                </div>
                <!-- 搜索 -->
                <div class="box-search pull-left clearfix" v-if="view != 'search'">
                    <div class="box-input pull-left">
                        <input type="text">
                        <!-- <span>X</span> Todo 清除输入 -->
                    </div>
                    <button class="pull-left">搜索</button>
                    <!-- Todo 文字换成图标 -->
                    <!-- Todo 鼠标移入，焦点自动聚焦到input上 -->
                </div>
                <!-- 用户信息 -->
                <div class="box-user pull-right">
                    <div class="user">
                        <!-- Todo -->
                    </div>
                    <router-link to="/login" class="no-user">登录/注册</router-link>
                </div>
            </div>
        </div>
        <div class="box-mobile">
            <!-- 手机版 -->
            <!-- Todo -->
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            view: String //index project list search detail
        },
        data() {
            return {
                data: "",
            }
        },
        created() {},
        mounted() {
            // this.init(this.$route.query);
            console.log(this.view)
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
.wrap-navbar{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.box-pc{
    width: 100%;
    height: 60px;
    background-color: #000;
    color: #fff;
}

.box-pc .pc-wrap{
    width: 90%;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
}

.box-pc .logo{
    font-weight: bold;
    line-height: 60px;
    font-size: 20px;
    margin-right: 20px;
}
.box-pc .box-nav{
    line-height: 60px;
}
.box-pc .box-nav .nav{
    height: 100%;
    color: #fff;
    text-decoration: none;
    padding: 0 20px;
    position: relative;
}
.box-pc .box-nav .nav:hover{
    background-color: #222;
    color: #007AFF;
}
.box-pc .box-nav .nav.active{
    color: #007AFF;
}
.box-pc .box-nav .nav.active::after{
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-color: #007AFF;
    position: absolute;
    bottom: 0;
    left: 0;
}

.box-pc .box-search{
    height: 60px;
    margin-left:20px;
}
.box-pc .box-search .box-input{
    position: relative;
}
.box-pc .box-search .box-input input{
    -webkit-appearance: none;
    width: 100px;
    height: 60px;
    border:none;
    background-color: #222;
    padding:0 10px;
    color: #fff;
}
.box-pc .box-search:hover .box-input input{
    width: 200px;
    background-color: #eee;
    color: #000;
}
.box-pc .box-search button {
    width: 60px;
    height: 100%;
    background-color: #222;
    border:none;
    color: #fff;
    cursor: pointer;
}
.box-pc .box-search:hover button{
    background-color: #007AFF;
}
.box-pc .box-user{
    height: 60px;
    line-height: 60px;
}
.box-pc .box-user .no-user{
    color: #007AFF;
    text-decoration: none;
    display: block;
    padding: 0 10px;
}
.box-pc .box-user .no-user:hover{
    background-color: #222;
}
    
</style>
