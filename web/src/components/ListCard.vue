<template>
    <a class="wrap-listcard" @click="goDetail('2')">
        <!-- 图片 -->
        <div class="box-image">
            <div class="img" :style="{backgroundImage:`url(${bgimg})`}"></div>
            <div class="bg"></div>
            <div class="text">
                <div class="title">树莓派</div>    
                <div class="intro">Raspberry Pi(中文名为“树莓派”,简写为RPi，(或者RasPi / RPI)[1]  是为学习计算机编程教育而设计，只有信用卡大小的微型电脑，其系统基于Linux。</div>    
                <!-- <div class="author">创建人：王</div>     -->
            </div>
            <div class="info">
                PJ:40 FL:123
            </div>
        </div>
    </a>
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
                bgimg:"http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/bgimg.jpg",
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
            goDetail:function(value){
                this.$router.push({
                    path: '/project',
                    query: {
                        'clsss':value
                    }
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-listcard{
    /* width: 100%; */
    display: block;
    text-decoration: none;
    cursor: pointer;
}
.box-image{
    width: 100%;
    height: 195px;
    position: relative;
    overflow: hidden;
}
.box-image .img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.box-image .bg{
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.8);
    opacity: 0.8;
    z-index: 1;
    transform: scale(1.1,1.1)
    /* Todo 这里应该不需要transform的，很奇怪 */
}

.box-image .text{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    padding: 20px;
    line-height: 1.5;
    overflow: hidden;
    z-index: 2;
}

.box-image .text .title{
    font-weight: bold;
    font-size: 30px;
}
.box-image .text .intro{
    font-size: 12px;
    color: #999;
}

.wrap-listcard:hover .box-image .img{
    transform: scale(1.15,1.15)
}
.wrap-listcard:hover .box-image .bg{
    opacity: 1;
}
.wrap-listcard:hover .box-image .text .intro {
    color: #fff;
}

.info{
    position: absolute;
    right: 0;
    bottom: 20px;
    background-color: #171717;
    width: 150px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    z-index: 3;
    text-align: center;
}
    
</style>
