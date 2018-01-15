<template>
  <div>
    <b-row>
    </b-row>
    <Header></Header>
    
    <poster class="poster"/>
    <div class="container content" > 
      <div class="row">
        <div class="col-md-3" v-for="img in imgUrls" :key="img.imgUrl">
          <thing-card :imgUrl="img.imgUrl"></thing-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ThingCard from '@/components/ThingCard'
import Poster from '@/components/Poster'

export default {
  name: 'home',
  data(){
    return {
        imgUrls:[
            {"imgUrl": "http://element-cn.eleme.io/static/hamburger.50e4091.png"},
            {"imgUrl": "https://cdn.thingiverse.com/renders/d2/98/52/fc/37/6f50f5ef59fbcaa11206cdbf33bd8fb6_preview_card.jpg"},
            {"imgUrl": "https://cdn.thingiverse.com/renders/33/50/7d/3a/eb/95504b08e51fc501405bdeaf47ae7c43_preview_card.jpg"},
            {"imgUrl": "https://cdn.thingiverse.com/renders/b8/40/96/4c/eb/bcd844d63dd9f125044b21cf5266cb73_preview_card.jpg"},
        ]
    }
  },
  methods: {
    
  },
  
  components: {
    Header,
    ThingCard,
    Poster,
  }
}
</script>

<style scoped>
.poster {
  padding-top: 10px;
  padding-left: 10%;
  padding-right: 10%;  
}

.content {
  padding-top: 10px;
}
.main-view {
  padding: 5px;
}
</style>