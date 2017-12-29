<template>
    <div>
        <b-card title="Card Title"
          :img-src="imgUrl"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          v-on:click="goDetail(123)"
          >
            <b-button v-on:click="goDetail(123)" variant="primary">Go thing detail</b-button>
        </b-card>
    </div>
</template>
<script>
export default {
    name: "thingCard",
    props: {
        imgUrl: String
    },
    data() {
        return {
        currentDate: new Date()
        }
    },
    methods: {
        goDetail(id){
            console.log(id);
            this.$router.push("/thing/" + id)
        }
    }
}
</script>

<style scoped>

  .time {
    font-size: 13px;
    color: #999;
  }

  .content {
      left: 0;
      border: 1;
      border-color: gray;
  }

  .button {
    padding: 0;
    float: right;
  }

  .button-left {
      padding: 0;
      float: left;
      /* color: #2c3e50; */
  }

  .image {
    width: 300px;
    height: 300px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

