<template>
    <div class="wrap-publish">
        <!-- 导航 -->
        <Navbar view="publish"/>
        <!-- Scroll View -->
        <div class="scroll-view">
            <div class="box-top">
                <input type="text" class="title" placeholder="标题">
                <input type="text" class="intro" placeholder="简介">
            </div>
            <div class="box-detail">
                <div class="left">
                    <div class="upload-image">
                        上传图片
                    </div>
                </div>
                <div class="right">
                    <input type="text" class="desc" placeholder="介绍">
                    <select type="text" class="category">
                            <option value="">分类</option>
                    </select>
                    <select type="text" class="status">
                            <option value="">状态</option>
                    </select>
                    <input type="text" placeholder="TAGS">
                    <div class="box-link">
                        连接
                    </div>
                    <div class="box-file">
                        文件：
                        <input type="file">
                    </div>
                    <div class="box-component">
                        <input type="text" placeholder="配件">
                        <input type="number" placeholder="数量">
                    </div>
                    <button>发布</button>
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
    .wrap-publish{
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-top: 60px;
        color: #fff;
    }
</style>
