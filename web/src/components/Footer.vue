<template>
    <div class="wrap-footer">
        ©{{thisYear}} HMK 京ICP证030173号
    </div>
</template>

<script>
    export default {
        data() {
            return {
                thisYear: "",
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init:function(){
                let date=new Date()
                this.thisYear = date.getFullYear()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrap-footer {
        width: 100%;
        height: 50px;
        background-color: #000;
        color: #fff;
        text-align: center;
        line-height: 50px;
        color: #444
    }
</style>
