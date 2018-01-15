<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="900"
                img-height="300"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        v-for="img in images"
                        :key="img.imgUrl"
                        :img-src='img.imgUrl'
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Poster",
  data(){
    return {
      images:[
        {"imgUrl": "https://s3.amazonaws.com/thingiverse-production-new/spotlight/Template_Featured--cs6--Turkey-.jpg"},
        {"imgUrl": "https://s3.amazonaws.com/thingiverse-production-new/spotlight/Template_Featured--cs6--Age-of-Empire-2.01-.jpg"},
        {"imgUrl": "https://s3.amazonaws.com/thingiverse-production-new/spotlight/Template_Featured--cs6--Measuring-cube-.jpg"},
        {"imgUrl": "https://s3.amazonaws.com/thingiverse-production-new/spotlight/Template_Featured--cs6--Educational-Automotive-Alternator-.jpg"},
      ],
      slide: 0,
      sliding: null
    }
  }, 
  methods: {
    onSlideStart(slide){
      this.sliding = true;
    },
    onSlideEnd(slide){
      this.sliding = false;
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>