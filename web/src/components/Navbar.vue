<template>
    <div class="wrap-navbar">
        <div class="box-pc clearfix">
            <div class="pc-wrap">
            <!-- 电脑版 -->
                <div class="logo pull-left">LOGO.INFO</div>
                <div class="box-nav clearfix">
                    <router-link to="/" class="nav pull-left">首页</router-link>
                    <router-link to="/project" class="nav pull-left">项目</router-link>
                    <router-link to="/list" class="nav pull-left">分类</router-link>
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
            prop: {
                type: [Number, String],
                require: true
            },
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
.wrap-navbar{
    width: 100%;
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
.box-pc .box-nav a{
    height: 100%;
    color: #fff;
    text-decoration: none;
    padding: 0 20px;
}
.box-pc .box-nav a:hover{
    background-color: #222;
}
    
</style>
