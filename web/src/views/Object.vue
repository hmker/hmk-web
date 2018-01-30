<template>
    <div class="wrap-project">
        <!-- 导航 -->
        <Navbar view="project"/>
        <!-- Scroll View -->
        <div class="scroll-view">
            <!-- 东西 -->
            <Title value="东西" />
            <!-- 筛选 -->
            <div class="hmk-filter clearfix">
                <label for="" class="box-select pull-left">
                    <div class="select-text">所属盒子</div>
                    <select>
                        <option value="">所属盒子</option>
                    </select>
                    <div class="arrow"></div>
                </label>

                <label for="" class="box-select pull-right">
                    <div class="select-text">排序：喜欢人数</div>
                    <select>
                        <option value="">排序：喜欢人数</option>
                    </select>
                    <div class="arrow"></div>
                </label>


                <label for="" class="box-select pull-right">
                    <div class="select-text">时间：近7周</div>
                    <select>
                        <option value="">时间：近7周</option>
                    </select>
                    <div class="arrow"></div>
                </label>
            </div>
            <div class="content clearfix">
                <ProjectCard class="project-card pull-left" :item="item" v-for="(item,index) in projectData" :key="index" />
            </div>
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
    .wrap-project {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-top: 60px;
    }
    .scroll-view {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .content {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
    }
    .project-card {
        width: 32%;
        margin-right: 2%;
        margin-bottom: 40px;
    }
    .project-card:nth-child(3n) {
       margin-right: 0; 
    }
</style>
