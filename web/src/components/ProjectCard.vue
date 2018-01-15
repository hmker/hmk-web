<template>
    <a class="wrap-projectcard">
        <div class="box-image">
            <div class="img" :style="{backgroundImage:`url(${bgimg})`}"></div>
            <div class="intro">
                早就耳闻珠海的美丽，六月上旬，夏冰利用出差的最后一个黄昏打的去了心仪已久的花园城市。出租车刚行至那条著名的情侣路，夏冰便迫不及待地示意司机停车。四周，灯火阑珊，踩着软软的细沙，闻着海风的气息，看着涟漪的波浪，夏冰好想不顾一切地扑进海的怀抱。不远处，一对对情侣，或甜蜜相对，或深情相拥，夏冰的心隐隐疼了一下，她刻意把视线移开，低头专注地找寻贝壳。不久，突然身后传来了一阵熟悉的咳嗽声，夏冰情不自禁地回眸。
            </div>
        </div>
        <div class="box-text">
            <div class="title">标题标题标题标题标题标题标题</div>
            <a class="author clearfix">
                <div class="avatar pull-left" :style="{backgroundImage:`url(${avatarimg})`}"></div>
                <div class="nick pull-left">e未酱</div>
            </a>
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-projectcard{
    /* width: 100%; */
    display: block;
    text-decoration: none;
    cursor: pointer;
}
.box-image{
    width: 100%;
    height: 340px;
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
.box-image .intro{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.8);
    opacity: 0;
    color: #fff;
    padding: 20px;
    line-height: 1.5;
    overflow: hidden;
}

.wrap-projectcard:hover .box-image .img{
    transform: scale(1.2,1.2)
}
.wrap-projectcard:hover .box-image .intro{
    opacity: 1;
}

.box-text{
    color: #fff;
    margin-top: 10px;
}
.box-text .title{
    font-size: 18px;
    word-break: break-all;
    line-height: 1.5;
}
.box-text .author{
    width: 100%;
    margin-top: 4px;
    position: relative;
    display: block;
    text-decoration: none;
}
.box-text .author .avatar{
    width: 24px;
    height: 24px;
    border-radius: 12px;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.box-text .author .nick{
    margin-left: 10px;
    color: #999;
    line-height: 24px;
    height: 24px;
    overflow: hidden;
}
    
</style>
