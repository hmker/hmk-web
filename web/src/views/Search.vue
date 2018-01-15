<template>
    <div class="wrap-search">
        <!-- 导航 -->
        <Navbar view="search"/>
        <!-- Scroll View -->
        <div class="scroll-view">
            搜索还没有做
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
    .wrap-search{
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-top: 60px;
        color: #fff;
    }
</style>
