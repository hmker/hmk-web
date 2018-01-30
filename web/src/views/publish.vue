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
            <div class="box-detail clearfix">
                <div class="left pull-left">
                    <label class="upload-image">
                        <input type="file">
                        <div class="box-image">
                            <div class="box-bigimg-empty">
                                <div class="add">
                                    +
                                </div>
                            </div>
                            <!-- <div class="box-bigimg" :style="{backgroundImage:`url(${bgimg})`}"> </div>-->
                            
                            <div class="box-smallimg clearfix">
                                <div class="smallimg-empty pull-left">
                                    <div class="add">
                                        +
                                    </div>
                                </div>

                                <div class="smallimg-empty pull-left">
                                    <div class="add">
                                        +
                                    </div>
                                </div>

                                <div class="smallimg-empty pull-left">
                                    <div class="add">
                                        +
                                    </div>
                                </div>

                                <div class="smallimg-empty pull-left">
                                    <div class="add">
                                        +
                                    </div>
                                </div>
                                <!-- <div class="smallimg pull-left" :style="{backgroundImage:`url(${bgimg})`}"></div> -->
                                <!-- <div class="smallimg pull-left" :style="{backgroundImage:`url(${bgimg})`}"></div> -->
                                <!-- <div class="smallimg pull-left" :style="{backgroundImage:`url(${bgimg})`}"></div> -->
                                <!-- <div class="smallimg pull-left" :style="{backgroundImage:`url(${bgimg})`}"></div> -->
                            </div>
                        </div>
                    </label>
                </div>
                <div class="right pull-left">
                    <div class="small-title">详情</div>
                    <!-- Todo 富文本 -->
                    <textarea type="text" class="desc" placeholder="介绍" />
                    <div class="small-title">分类</div>
                    <select type="text" class="category">
                            <option value="">分类</option>
                    </select>
                    <div class="small-title">状态</div>
                    <select type="text" class="status">
                            <option value="">状态</option>
                    </select>
                    <div class="small-title">TAGS</div>
                    <div class="box-tags clearfix">
                        <input type="text" class="pull-left" placeholder="输入标签，回车确认">
                        <div class="tag pull-left">设计</div>
                        <div class="tag pull-left">游戏</div>
                        <div class="tag pull-left">3D打印</div>
                    </div>
                    <div class="small-title">超连接</div>
                    <div class="box-link">
                        <div class="new-link clearfix">
                            <input type="text" class="link pull-left" placeholder="连接地址">
                            <input type="text" class="linkname pull-left" placeholder="名称（选填）">
                        </div>
                    </div>
                    <div class="small-title">文件</div>
                    <div class="box-file">
                        <label for="" class="label-file">
                            <input type="file">
                            <div>上传文件</div>
                        </label>
                    </div>
                    <div class="small-title">零件</div>
                    <div class="box-component">
                        <div class="component clearfix">
                            <input type="text" class="com-name pull-left" placeholder="配件">
                            <input type="number" class="com-number pull-left" placeholder="数量">
                        </div>
                    </div>
                    <button class="btn-publish">发布</button>
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import Footer from '@/components/Footer'
    export default {
        components: {
            Navbar,
            Footer
        },
        props: {
            type: [Number, String],
            require: true
        },
        data() {
            return {
                data: "",
                bgimg:"http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/bgimg.jpg",
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
    .scroll-view{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .wrap-publish input{
        background-color: #333;
        color: #fff;
        padding: 0 10px;
        outline: none;
        box-shadow: none;
        -webkit-appearance: none;
        border-radius: 5px;
        border: none;
    }
    .wrap-publish textarea{
        background-color: #333;
        color: #fff;
        padding: 6px 10px;
        outline: none;
        box-shadow: none;
        -webkit-appearance: none;
        border-radius: 5px;
        border: none;
        resize: none;
    }
    .wrap-publish select{
        background-color: #333;
        color: #fff;
        outline: none;
        box-shadow: none;
        border: none;
        border-radius: 5px;
        -webkit-appearance: none;
        padding: 0 10px;
    }
    /* top */
    .box-top{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 0 100px;
    }
    .title {
        display: block;
        width: 100%;
        font-size: 20px;
        text-align: center;
        height: 50px;
    }
    .intro{
        display: block;
        width: 60%;
        text-align: center;
        height: 40px;
        margin: 5px auto 0;
    }

    /* detail */
    .box-detail{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 100px;
    }
    /* left */
    .box-detail .left{
        width: 40%;
        padding-right: 60px;
    }
    .upload-image{
        width: 100%;
        height: auto;
        background-color: #333;
        position: relative;
    }
    .upload-image input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
        z-index: 2;
    }
    .upload-image .box-image{
        width: 100%;
    }
    .box-bigimg{
        width: 100%;
        padding-bottom: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .box-bigimg-empty{
        width: 100%;
        padding-bottom: 100%;
        position: relative;
        border: 1px dotted #333;

    }
    .box-bigimg-empty .add {
        position: absolute;
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-top: -28px;
        left: 0;
        top: 50%;
        text-align: center;
        font-size: 40px;
    }
    .box-smallimg{
        margin-top: 4%;
        width: 100%;
        position: relative;
    }
    .smallimg{
        width: 22%;
        padding-bottom: 22%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 4%;
        cursor: pointer;
    }
    .smallimg:last-child{
        margin-right: 0;
    }
    .smallimg-empty{
        width: 22%;
        padding-bottom: 22%;
        margin-right: 4%;
        border: 1px dotted #333;
        position: relative;
    }
    .smallimg-empty .add {
        position: absolute;
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-top: -28px;
        left: 0;
        top: 50%;
        text-align: center;
        font-size: 40px;
    }
    .smallimg-empty:last-child{
        margin-right: 0;
    }
    /* right */
    .box-detail .right{
        width: 60%;
    }
    .desc{
        width: 100%;
        height: 100px;
    }
    .category {
        width: 100%;
        height: 40px;
    }
    .status{
        width: 100%;
        height: 40px;
    }
    .box-tags{
        width: 100%;
    }
    .box-tags input {
        width: 100%;
        height: 40px;
        display: block;
    }
    .box-tags .tag {
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        background-color: #333;
        border-radius: 20px;
        margin-right: 10px;
        margin-top: 10px;
        cursor: pointer;
    }
    .box-tags .tag:hover{
        text-decoration: line-through;
    }
    .box-tags .tag:last-child{
        margin-right: 0;
    }
    .box-link{
        width: 100%;
    }
    .box-link .new-link{
        width: 100%;
    }
    .box-link .link{
        width: 78%;
        height: 40px;
        margin-right: 2%;
    }
    .box-link .linkname{
        width: 20%;
        height: 40px;
    }
    .box-detail .small-title {
        width: 100%;
        font-weight: bold;
        color: #888;
        margin-bottom: 20px;
        margin-top: 100px;
        font-size: 14px;
    }
    .box-detail .small-title span{
        font-weight: normal;
        display: inline-block;
        margin-left: 10px;
    }
    .box-detail .small-title:first-child{
        margin-top: 0;
    }
    .label-file{
        width: 100px;
        height: 40px;
        overflow: hidden;
        position: relative;
        display: block;
    }
    .label-file input{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 2;
        cursor: pointer;
    }
    .label-file div {
        background-color: #333;
        color: #fff;
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
        width: 100%;
        text-align: center;
    }
    .box-component{
        width: 100%;
    }
    .component{
        width: 100%;
    }
    .component .com-name{
        width: 78%;
        height: 40px;
        margin-right: 2%;
    }
    .component .com-number{
        width: 20%;
        height: 40px;
    }
    .btn-publish{
        width: 100px;
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: #007AFF;
        color: #fff;
        margin-top: 40px;
    }
</style>
