<template>
  <div
    class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full h-[80px] brand-carousel relative"
  >
    <swiper-container
    class="w-full"
      :slides-per-view="slidesPerViewRef"
      :space-between="spaceBetween"
      :centered-slides="false"
      :autoplay="{
        delay: 500,
      }"
    >
      <swiper-slide class="mr-1" v-for="i in 9" :key="i">
        <img
          @mouseover="activeHoverFn(i, 'over')"
          @mouseleave="activeHoverFn(i, 'leave')"
          class="brand-image mr-1"
          :src="
            activeHover == i
              ? `/img/brand_${i}.svg`
              : `/img/brand_${i}_hover.svg`
          "
        />
      </swiper-slide>
      <swiper-slide class="mr-1" v-for="i in 9" :key="i">      
        <img
          @mouseover="activeHoverFn(i, 'over')"
          @mouseleave="activeHoverFn(i, 'leave')"
          class="brand-image mr-1"
          :src="
            activeHover == i
              ? `/img/brand_${i}.svg`
              : `/img/brand_${i}_hover.svg`
          "
        />
      </swiper-slide>
      <swiper-slide class="mr-1" v-for="i in 9" :key="i">      
        <img
          @mouseover="activeHoverFn(i, 'over')"
          @mouseleave="activeHoverFn(i, 'leave')"
          class="brand-image mr-1"
          :src="
            activeHover == i
              ? `/img/brand_${i}.svg`
              : `/img/brand_${i}_hover.svg`
          "
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import { ref, onMounted, watchEffect, onUnmounted } from "vue";
register()
const activeHover = ref(null);
const slidesPerViewRef = ref(9)
const screenWidth = ref(window.innerWidth);
const handleResize = () => {
  screenWidth.value = window.innerWidth;
  if (screenWidth.value < 601) {
    slidesPerViewRef.value = 3
  } 
  console.log(screenWidth.value);
};
function activeHoverFn(index, type) {
  if (type == "over") {
    activeHover.value = index;
  }
  if (type == "leave") {
    activeHover.value = null;
  }
}

onMounted(() => {
  handleResize();
  console.log(screenWidth.value);

  window.addEventListener("resize", handleResize);

  // Cleanup the event listener when the component is unmounted
  watchEffect(() => {
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
  });
})


</script>

<style scoped>
.brand-carousel {
  background: transparent;
  justify-content: center;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  overflow: hidden; /* Ensure that content is clipped within the specified width */
}

.brands1,
.brands2,
.brands3 {
  display: flex;
  width: 100%;
  position: absolute;
  animation: sideToSide 15s infinite linear;
  background: #0b1117;
}

.brands2 {
  animation: sideToSide2 15s infinite linear;
}

.brands3 {
  animation: sideToSide3 15s infinite linear;
}

.brand {
  margin: 0 10px;
  padding: 0;
  width: 100%;
  height: 80px;
  background: #0b1117;
}

.brand-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent; /* Set the desired background color */
  z-index: 1; /* Ensure overlay is above the image */
}

.brand-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2; /* Adjust object-fit property as needed */
  background-color: #0b1117; /* Set the desired background color */
}

@keyframes sideToSide {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
}

@keyframes sideToSide2 {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
}

@keyframes sideToSide3 {
  from {
    transform: translateX(200%);
  }

  to {
    transform: translateX(100%);
  }
}
</style>
