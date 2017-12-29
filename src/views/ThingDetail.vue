<template>
<div>
    <Header></Header>
  <div class="container container-top">
      
    <div class="row col-border">
        <div class="col-md-7 col-border">
            <div>
                <b-img src="https://lorempixel.com/600/400/" class="img-p" />
            </div>
            <div>
                <div>此处为图片缩略图</div>
            </div>
        </div>
        
        <div class="col-md-5">
            <div>
                <b-button class="download-btn" variant="primary">
                    下载所有文件
                </b-button>
            </div>
            <div>
                <!-- <b-list-group class="button-grp">
                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                        <span class="glyphicon glyphicon-heart"></span>喜欢<b-badge variant="primary" pill>1</b-badge>
                    </b-list-group-item>
                    <b-list-group-item  class="d-flex justify-content-between align-items-center">
                        收藏<b-badge variant="primary" pill>2</b-badge>
                    </b-list-group-item>
                    <b-list-group-item  class="d-flex justify-content-between align-items-center">
                        评论<b-badge variant="primary" pill>3</b-badge>
                    </b-list-group-item>
                    <b-list-group-item  class="d-flex justify-content-between align-items-center">
                        照着做了一个<b-badge variant="primary" pill>10</b-badge>
                    </b-list-group-item>
                    <b-list-group-item  class="d-flex justify-content-between align-items-center">
                        关注<b-badge variant="primary" pill>5</b-badge>
                    </b-list-group-item>
                    <b-list-group-item  class="d-flex justify-content-between align-items-center">
                        改造<b-badge variant="primary" pill>6</b-badge>
                    </b-list-group-item>
                    <b-list-group-item  class="d-flex justify-content-between align-items-center">
                        分享<b-badge variant="primary" pill>1</b-badge>
                    </b-list-group-item>
                </b-list-group> -->
                <b-button-group vertical class="button-grp">
                    <b-button class="d-flex justify-content-between align-items-center">
                        <span class="glyphicon glyphicon-heart"></span>喜欢<b-badge variant="primary" pill>1</b-badge>
                    </b-button>
                    <b-button class="d-flex justify-content-between align-items-center">
                        收藏<b-badge variant="primary" pill>2</b-badge>
                    </b-button>
                    <b-button class="d-flex justify-content-between align-items-center">
                        评论<b-badge variant="primary" pill>3</b-badge>
                    </b-button>
                    <b-button class="d-flex justify-content-between align-items-center">
                        照着做了一个<b-badge variant="primary" pill>10</b-badge>
                    </b-button>
                    <b-button class="d-flex justify-content-between align-items-center">
                        关注<b-badge variant="primary" pill>5</b-badge>
                    </b-button>
                    <b-button class="d-flex justify-content-between align-items-center">
                        改造<b-badge variant="primary" pill>6</b-badge>
                    </b-button>
                    <b-button class="d-flex justify-content-between align-items-center">
                        分享<b-badge variant="primary" pill>1</b-badge>
                    </b-button>
                </b-button-group>
            </div>
            
        </div>
    </div>
  </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
    

  components:{
    Header
  }
}
</script>

<style>
    .container-top {
        padding-top: 10px;
    }
    .col-border {
        border: 0px solid black
    }
    .img-p {
        position: relative;
        width: 600px;
        height: 400px;

    }
    .download-btn {
        width: 100%;
    }

    .button-grp{
        padding-top: 10px;
        width: 100%;
        background-color: white;
    }
</style>
