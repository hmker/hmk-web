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
                        <!-- Todo Icon -->
                        <button>喜欢</button>
                        <button>关注</button>
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
                        <button class="detail-nav pull-right">讨论<span>123</span></button>
                        <button class="detail-nav pull-right">零件<span>12</span></button>
                        <button class="detail-nav pull-right">文件<span>10</span></button>
                        <button class="detail-nav pull-right">详情</button>
                        <button class="detail-nav pull-right active">简介</button>
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
                        <button class="detail-nav pull-right">讨论<span>123</span></button>
                        <button class="detail-nav pull-right">零件<span>12</span></button>
                        <button class="detail-nav pull-right">文件<span>10</span></button>
                        <button class="detail-nav pull-right">详情</button>
                        <button class="detail-nav pull-right active">简介</button>
                    </div>
                </div>
            </div>
            <div class="box-detail clearfix">
                <div class="left pull-left">
                    <div class="box-bigimg" :style="{backgroundImage:`url(${bgimg})`}">
                    </div>
                    <div class="box-smallimg clearfix">
                        <div class="smallimg pull-left" :style="{backgroundImage:`url(${bgimg})`}"></div>
                        <div class="smallimg pull-left" :style="{backgroundImage:`url(${bgimg})`}"></div>
                        <div class="smallimg pull-left" :style="{backgroundImage:`url(${bgimg})`}"></div>
                        <div class="smallimg pull-left" :style="{backgroundImage:`url(${bgimg})`}"></div>
                    </div>
                </div>
                <div class="right pull-right">
                    <div class="small-title">简介</div>
                    <div class="detail-intro">
                        编者按：本文系腾讯财经《棱镜》栏目出品，来自微信公众号棱镜（ID：lengjing_qqfinance），作者 李思谊 邬川，编辑 刘利平。
                    </div>
                    <div class="small-title">详情</div>
                    <div class="detail-content">
                        <p>2018年1月15日，腾讯《棱镜》从多个独立信源处获悉，乐视网目前已经做好了复牌的准备工作，复牌公告发出的时间将在近期。但不排除受突发因素影响，复牌时间再度延后。</p>
                        <p>其中一位信源表示，复牌公告发出的次日可能不会立即复牌，而是在此后数日，且在正式复牌之前做一个线上说明会。<p>
                        <p>另一位信源称按原计划上周（1月8日至1月12日）复牌，但是因一些其他因素暂缓。</p>
                        <p>“具体何时复牌，要等监管层面的通知。”一位乐视网内部人士称，复牌的准备工作已经有一段时间，目前基本准备就绪。</p>
                        <p>乐视网官方回复腾讯《棱镜》就此事的问询时称“请以公司公告为准”。</p>
                        <p>乐视网处于停牌状态已有八个月之久。2017年4月16日晚间，乐视网发布公告称，拟调整收购乐视影业方案，股票自4月17日上市开始起停牌。乐视网前一个交易日（2017年4月14日）的收盘价为30.68元/股。</p>
                        <p>根据深圳证券交易所2016年5月27日发布《中小企业板信息披露业务备忘录第 14 号：上市公司停复牌业务》中指出，公司筹划各类事项连续停牌时间自停牌之日起不得超过6个月。</p>
                        <p>在乐视网停牌接近6个月时，2017年10月10日，乐视网以“本次重大资产重组涉及重大无先例事项”为由继续停牌。此前的9月27日晚间，乐视网发布公告称，将拟更名为“新乐视”。</p>
                        <p>2017年12月25日，乐视网发布公告称，乐视影业方面拟进行股权调整。融创中国（1918.HK）实际控制公司天津嘉睿汇鑫企业管理有限公司拟对乐视影业进行增资。</p>
                        <p>增资完成后，天津嘉睿持有乐视影业40.75%股权，为第一大股东；乐视控股（北京）有限公司持有乐视影业16.3592%股权，为第二大股东。</p>
                        <p>早在2017年12月14日，落款为深圳某券商经纪事业部的一则通知显示，要做好乐视网复牌前后的各项准备工作。</p>
                    </div>
                    <div class="small-title">文件<span>10</span></div>
                    <div class="detail-file">
                        <div class="file clearfix">
                            <div class="pull-left">
                                <div class="file-name">说明.pdf</div>
                                <div class="file-intro">这是一个说明文件</div>
                                <div class="file-info">
                                    10天前上传 | 1.2MB
                                </div>
                            </div>
                            <div class="pull-right clearfix">
                                <div class="act pull-right">
                                    <div class="icon">
                                        <img src="http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/icon-download.png" alt="">
                                    </div>
                                    <div class="act-name">下载</div>
                                </div>
                                <div class="act pull-right">
                                    <div class="icon">
                                        <img src="http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/icon-eye.png" alt="">
                                    </div>
                                    <div class="act-name">查看</div>
                                </div>
                            </div>
                        </div>
                        <div class="file clearfix">
                            <div class="pull-left">
                                <div class="file-name">说明.pdf</div>
                                <div class="file-intro">这是一个说明文件</div>
                                <div class="file-info">
                                    10天前上传 | 1.2MB
                                </div>
                            </div>
                            <div class="pull-right clearfix">
                                <div class="act pull-right">
                                    <div class="icon">
                                        <img src="http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/icon-download.png" alt="">
                                    </div>
                                    <div class="act-name">下载</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="small-title">零件<span>12</span></div>
                    <div class="detail-component">
                        <div class="component clearfix">
                            <div class="component-left pull-left clearfix">
                                <div class="number pull-left">1</div>
                                <div class="multiplication pull-right">×</div>
                            </div>
                            <div class="component-right pull-left">
                                <div class="name">STM32F405RGT6</div>
                                <div class="intro">Microprocessors, Microcontrollers, DSPs / Microcontrollers (MCUs)</div>
                            </div>
                        </div>
                        <div class="component clearfix">
                            <div class="component-left pull-left clearfix">
                                <div class="number pull-left">1</div>
                                <div class="multiplication pull-right">×</div>
                            </div>
                            <div class="component-right pull-left">
                                <div class="name">STM32F405RGT6</div>
                                <div class="intro">Microprocessors, Microcontrollers, DSPs / Microcontrollers (MCUs)</div>
                            </div>
                        </div>
                        <div class="box-buy">
                            <button class="buy-all-component">
                                一键购买所有零件
                            </button>
                            <div class="info">
                                * 出现本按钮，说明此东西的零件，可全部在本网站官方店采购
                            </div>
                        </div>
                    </div>
                    <div class="small-title">讨论<span>2</span></div>
                    <div class="detail-chat">
                        <div class="box-chat clearfix">
                            <div class="avatar pull-left" :style="{backgroundImage:`url(${avatarimg})`}"></div>
                            <div class="chat pull-left">
                                <div class="info clearfix">
                                    <div class="name pull-left">eWei</div>
                                    <div class="time pull-left">1天前</div>
                                </div>
                                <div class="text">
                                    非常不错
                                </div>
                            </div>
                        </div>
                        <div class="box-chat clearfix">
                            <div class="avatar pull-left" :style="{backgroundImage:`url(${avatarimg})`}"></div>
                            <div class="chat pull-left">
                                <div class="info clearfix">
                                    <div class="name pull-left">eWei</div>
                                    <div class="time pull-left">1天前</div>
                                </div>
                                <div class="text">
                                    非常不错
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-new-chat">
                        <textarea class="new-chat" placeholder="输入评论内容"></textarea>
                        <button class="btn-new-chat">评论</button>
                    </div>
                </div>
            </div>
            <!-- 东西 -->
            <Title value="相似东西" />
            <div class="project-content clearfix">
                <ProjectCard class="card pull-left" :item="item" v-for="(item,index) in projectData" :key="index" />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar'
    import Footer from '@/components/Footer'
    import ProjectCard from '@/components/ProjectCard'
    import Title from '@/components/Title'
    export default {
        components: {
            Navbar,
            Footer,
            ProjectCard,
            Title
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
                bgimg:"http://hmk-temp.oss-cn-hangzhou.aliyuncs.com/img/bgimg.jpg",
                showfixQucikbar:false,
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
                    }
                ],
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
    /* 详情盒子 */
    .box-detail{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 50px 0;
    }
    .box-detail .left{
        width: 40%;
        padding-right: 60px;
    }
    .box-detail .right{
        width: 60%;
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
    .detail-intro{
        line-height: 1.5;
        font-size: 14px;
    }
    .detail-content{
        line-height: 1.5;
        font-size: 14px;
    }
    .detail-content p {
        margin-bottom: 10px;
    }
    .detail-file{
        width: 100%;
        font-size: 14px;
    }
    .detail-file .file{
        margin-bottom: 40px;
    }
    .detail-file .file-name{
        font-size: 16px;
        font-weight: bold;
    }
    .detail-file .file-intro{
        font-size: 12px;
        margin-top: 12px;
    }
    .detail-file .file-info{
        color: #666;
        font-size: 12px;
        margin-top: 4px;
    }
    .detail-file .act {
        color: #666;
        width: 64px;
        cursor: pointer;
    }
    .detail-file .act .icon{
        width: 40px;
        height: 40px;
        margin: 0 auto;
        opacity: 0.35;
    }
    .detail-file .act .icon img{
        width: 40px;
        height: 40px;
        display: block;
    }
    .detail-file .act .act-name{
        width: 100%;
        text-align: center;
    }
    .detail-file .act:hover .icon{
        opacity: 1;
    }
    .detail-file .act:hover .act-name{
        color: #fff;
    }
    .project-content{
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
    }
    .card{
        width: 32%;
        margin-right: 2%;
        margin-bottom: 40px;
    }
    .card:nth-child(3n){
       margin-right: 0; 
    }
    /* left */
    .box-bigimg{
        width: 100%;
        padding-bottom: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
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
    /* 零件 */
    .detail-component{
        width: 100%;
        font-size: 14px;
    }
    .detail-component .component{
        width: 100%;
        position: relative;
        margin-bottom: 30px;
    }
    .detail-component .component:last-child{
        margin-bottom: 0;
    }
    .detail-component .component-left{
        width: 100px;
    }
    .detail-component .multiplication{
        color: #888;
        margin-right: 40px;
    }
    .detail-component .intro{
        color: #888;
        font-size: 12px;
        margin-top: 6px;
    }
    /* 讨论 */
    .detail-chat{
        width: 100%;
        font-size: 14px;
    }
    .detail-chat .box-chat{
        margin-bottom: 40px;
    }
    .detail-chat .avatar{
        width: 60px;
        height: 60px;
        margin-right: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
        border-radius: 50%;
        overflow: hidden;
    }
    .detail-chat .name {
        color: #007AFF;
    }
    .detail-chat .time {
        color: #333;
        margin-left: 10px;
    }
    .detail-chat .text {
        margin-top: 20px;
    }
    /* 发布评论 */
    .detail-new-chat{
        width: 100%;
        font-size: 14px;
    }
    .new-chat{
        width: 100%;
        height: 80px;
        border-radius: 5px;
        background-color: #000;
        color: #fff;
        border: none;
        resize: none;
        outline: none;
        box-shadow: none;
        -webkit-appearance: none;
        padding:6px 10px;
    }
    .btn-new-chat{
        width: 100px;
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: #000;
        color: #007AFF;
        margin-top: 10px;
    }
    .box-buy .buy-all-component{
        width: 200px;
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: #000;
        color: #007AFF;
        margin-top: 10px;
        cursor: pointer;
    }
    .box-buy .info {
        font-size: 12px;
        color: #888;
        margin-top: 10px;
    }
</style>
