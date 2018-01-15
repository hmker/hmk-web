<template>
    <div class="wrap-index">
        <!-- 导航 -->
        <Navbar view="index"/>
        <!-- Scroll View -->
        <div class="scroll-view">
            <!-- Banner -->
            <div class="box-banner">
                <!-- Todo -->
            </div>
            <!-- 项目 -->
            <div class="box-title">
                <div class="title">
                    项目
                </div>
                <div class="line"></div>
            </div>
            <div class="content clearfix">
                <ProjectCard class="project-card pull-left" :item="item" v-for="(item,index) in projectData" :key="index" />
            </div>
            <!-- 分类 -->
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
    import ProjectCard from '@/components/ProjectCard'
    export default {
        components: {
            Navbar,
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
    .box-banner{
        width: 100%;
        height: 500px;
        background-color: #444;
        /* temp */
        /* background-image: url('http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/banner-temp.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center; */
    }
    .box-title{
        width: 100%;
        text-align: center;
        margin-top: 40px;
    }
    .box-title .title {
        font-weight: bold;
        font-size: 30px;
        line-height: 1;
        color: #fff;
    }
    .box-title .line{
        width: 40px;
        height: 5px;
        background-color: #222;
        margin: 20px auto;
    }
    .content{
        width: 90%;
        max-width: 1400px;
        margin: 0 auto;
    }
    .project-card{
        width: 32%;
        margin-right: 2%;
        margin-bottom: 40px;
    }
    .project-card:nth-child(3n){
       margin-right: 0; 
    }
</style>
