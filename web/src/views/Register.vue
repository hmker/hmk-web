<template>
    <div class="wrap-login">
        <!-- 导航 -->
        <Navbar view="login"/>
        <!-- Scroll View -->
        <div class="scroll-view">
            <!-- 东西 -->
            <Title value="注册" />
            <form action="" class="login">
                <input class="input" type="text" placeholder="手机号">
                <div class="box-ver-code clearfix">
                    <input type="text" class="pull-left" placeholder="输入手机验证码">
                    <button class="pull-left">发送验证码</button>
                    <!-- <button class="wait" disabled>60s</button> -->
                </div>
                <input class="input" type="password" placeholder="密码">
                <!-- Todo 添加删除和眼睛tip -->
                <button type="submit">注册</button>
            </form>
            <Footer />
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import Footer from '@/components/Footer'
    import Title from '@/components/Title'
    import ProjectCard from '@/components/ProjectCard'
    export default {
        components: {
            Navbar,
            Footer,
            Title,
            ProjectCard
        },
        data() {
            return {
                projectData: [
                    {
                        "id":1,
                        "title":"哈哈哈1"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈2"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈3"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈4"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    },
                    {
                        "id":1,
                        "title":"哈哈哈5"
                    }
                ],
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
    .wrap-login{
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
        -webkit-overflow-scrolling: touch;
    }
    .login{
        width: 100%;
    }
    .login .input[type=text],
    .login .input[type=password]
    {
        background-color: #222;
        width: 90%;
        height: 44px;
        border-radius: 4px;
        border: 2px solid #222;
        outline: 0;
        -webkit-appearance: none;
        max-width: 400px;
        margin:0 auto 20px;
        display: block;
        padding:0 10px;
    }
    .login input[type=text]:hover,
    .login input[type=password]:hover{
        background-color: #444;
        border-color: #444;
    }
    .login input[type=text]:focus,
    .login input[type=password]:focus{
        background-color: #fff;
        border-color: #fff;

    }
    .login .box-checkbox{
        width: 90%;
        max-width: 400px;
        height: 44px;
        margin:0 auto;
        color: #fff;

    }
    .login button{
        background-color: #007AFF;
        width: 90%;
        max-width: 400px;
        height: 44px;
        border-radius: 4px;
        border:none;
        color: #fff;
        outline: 0;
        -webkit-appearance: none;
        margin:0 auto 20px;
        display: block;
        cursor: pointer;
    }
    .login button:hover{
        background-color: #259FFF;
    }
    .box-ver-code{
        width: 90%;
        max-width: 400px;
        margin:0 auto;
        /* background-color: rebeccapurple; */
    }
    .box-ver-code input{
        width: 60%;
        background-color: #222;
        height: 44px;
        border-radius:4px 0 0 4px ;
        border: 2px solid #222;
        outline: 0;
        -webkit-appearance: none;
        max-width: 400px;
        margin:0 auto 20px;
        display: block;
        padding:0 10px;
    }
    .box-ver-code button{
        width: 40%;
        margin:0;
        border-radius: 0 4px  4px 0;
    }
</style>
