<template>
  <div class="img-replacer" :style="imgStyle">
    <div v-if="loading" class="spinner-wrapper">
      <load-spinner></load-spinner>
    </div>
    <img v-show="!loading" class="slider-img" :src="image" ref="sliderImg" />
  </div>
</template>

<script>
export default {
  name: "vue-slider-img",
  props: {
    imgInOneSlide: {
      type: Number,
      default: 3
    },
    image: {
      type: String
    }
  },
  data() {
    return {
      loading: true
    };
  },
  computed: {
    imgStyle() {
      return {
        width: 100 / this.imgInOneSlide + "%"
      };
    }
  },
  mounted() {
    this.$refs.sliderImg.onload = () => {
      this.loading = false;
    };
  }
};
</script>

<style scoped>
.slider-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.img-replacer {
  height: 100%;
  display: inline-block;
  vertical-align: text-bottom;
}
.spinner-wrapper {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
