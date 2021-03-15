<template>
  <slider
    :sliderImges="sliderImges"
    :imgInOneSlide="3"
    :maxImages="100"
    @need-more-slides="loadMoreImg"
  />
</template>

<script>
import slider from "./components/Slider/index.vue";

export default {
  name: "App",
  components: {
    slider
  },
  data() {
    return {
      sliderImges: [
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random",
        "https://source.unsplash.com/random"
      ]
    };
  },
  methods: {
    loadMoreImg(imgQuantity) {
      this.getNewImges(imgQuantity, this.sliderImges.length);
      for (let i = 0; i < imgQuantity; i++) {
        this.sliderImges.push("");
        // добовляем пустой url => запрос в  this.getNewImges завершился меняем url на нужный нам
      }
    },
    async getNewImges(imgQuantity, startImgIndex) {

      /////////// имитация асинхронног запроса с задежкой //////////////////
      const getImgRequest = async (imgQuant, startIndex) =>
        new Promise(res => {
          setTimeout(() => {
            console.log(
              `загрузка ${imgQuant} картинок начиная с ${startIndex} индекса`
            );
            const images = [];
            for (let i = 0; i < imgQuant; i++) {
              images.push("https://source.unsplash.com/random");
            }
            res(images);
          }, 4000);
        });
      ////////////////////////////////////////////////

      const imges = await getImgRequest(imgQuantity, startImgIndex);

      for (let i = startImgIndex, j = 0; j < imgQuantity; i++, j++) {
        this.sliderImges[i] = imges[j];
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 800px;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
}
* {
  box-sizing: border-box;
}
</style>
