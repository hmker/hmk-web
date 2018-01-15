<template>
    <div class="wrap-title">
       <div class="title">
                {{value}}
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        props: {
            value:String
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrap-title{
        width: 100%;
        text-align: center;
        margin-top: 40px;
    }
    .wrap-title .title {
        font-weight: bold;
        font-size: 30px;
        line-height: 1;
        color: #fff;
    }
    .wrap-title .line{
        width: 40px;
        height: 5px;
        background-color: #222;
        margin: 20px auto 30px;
    }
</style>
