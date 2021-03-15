<template>
  <!-- картинки -->
  <div class="slider" :style="sliderStyle">
    <div class="slider-inside-wrapper">
      <div class="slider-img-wrapper" ref="imgWrapper">
        <slider-img
          v-for="(image, i) in sliderImges"
          :key="i"
          :imgInOneSlide="imgInOneSlide"
          :image="image"
        />
      </div>
    </div>
    <!-- кнопка на лево -->
    <span
      v-show="starImg != 0"
      class="slider-button-left slider-button"
      @click="move(left)"
    >
      &#60;
    </span>
    <!-- кнопка на право -->
    <span
      v-show="rightShow"
      class="slider-button-right slider-button"
      @click="move(right)"
      >&#62;
    </span>
  </div>
</template>

<script>
import SliderImg from "./SliderImg";

export default {
  name: "vue-slider",
  components: {
    SliderImg
  },
  props: {
    sliderHeight: {
      type: Number,
      default: 200
    },
    imgInOneSlide: {
      type: Number,
      default: 3
    },
    sliderImges: {
      type: Array
    },
    maxImages: {
      required: true,
      type: Number
    }
  },
  emits: ["need-more-slides"],
  data() {
    return {
      starImg: 0,
      offset: 0,
      right: 1,
      left: -1
    };
  },
  computed: {
    sliderStyle() {
      return {
        height: this.sliderHeight + "px"
      };
    },
    rightShow() {
      return (
        this.starImg + (this.imgInOneSlide - 1) != this.sliderImgesQuantity
      );
    },
    needMoreImges() {
      if (this.maxImages === this.sliderImgesQuantity) {
        return false;
      }
      return (
        this.starImg + (this.imgInOneSlide - 1) >=
        this.sliderImgesQuantity - this.imgInOneSlide
      );
    },
    sliderImgesQuantity() {
      return this.sliderImges.length;
    }
  },
  methods: {
    move(value) {
      this.starImg += value;
      if (value === this.right) {
        this.checkImgNeed();
      }
      this.$refs.imgWrapper.style.left = -this.starImg * this.offset + "px";
    },
    checkImgNeed() {
      if (this.needMoreImges) {
        let imgQuantity;
        if (this.imgInOneSlide + this.sliderImgesQuantity > this.maxImages) {
          imgQuantity = this.maxImages - this.sliderImgesQuantity;
        } else {
          imgQuantity = this.imgInOneSlide;
        }
        this.$emit("need-more-slides", imgQuantity);
      }
    },
    setup() {
      this.offset = this.$refs.imgWrapper.clientWidth / this.imgInOneSlide;
      this.move(0); // для обновления при ресайзе
    }
  },
  mounted() {
    this.setup();
    if (this.imgInOneSlide > this.sliderImges.length) {
      this.checkImgNeed();
    }
    window.addEventListener("resize", this.setup);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setup);
  }
};
</script>

<style scoped>
.slider {
  width: 100%;
  position: relative;
}
.slider-inside-wrapper {
  overflow: hidden;
  height: 100%;
  outline: 1px solid gray;
  position: relative;
}
.slider-img-wrapper {
  left: 0;
  height: 100%;
  position: relative;
  transition: left 0.5s ease;
  white-space: nowrap;
}
.slider-button {
  background-color: #4caf50;
  border: 1px solid green;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
}
.slider-button-left {
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
}
.slider-button-right {
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
}
</style>
