<template>
  <div
    class=" w-full h-[224px] brand-carousel flex flex-col justify-between"
  >
  <div class="w-full">
    <span class="rf-dewi-font-semibold slg:text-[40px] text-[24px] text-mWhite">{{$t('brand_title_1')}}</span> 
    <span class="rf-dewi-font-semibold slg:text-[40px] text-[24px] text-mRed">{{$t('brand_title_2')}}</span> 
  </div>
    <swiper-container
    class="w-full h-[80px]"
      :slides-per-view="slidesPerViewRef"
      :space-between="spaceBetween"
      :centered-slides="false"
      :autoplay="{
        delay: 250,
      }"
    >
      <swiper-slide class="mr-16" v-for="i in 9" :key="i">      
        <img
          @mouseover="activeHoverFn(i, 'over')"
          @mouseleave="activeHoverFn(i, 'leave')"
          class="brand-image"
          :src="
            activeHover == i
              ? `/img/brand_${i}.svg`
              : `/img/brand_${i}_hover.svg`
          "
        />
      </swiper-slide>
      <swiper-slide class="mr-16" v-for="i in 9" :key="i">             
        <img
          @mouseover="activeHoverFn(i, 'over')"
          @mouseleave="activeHoverFn(i, 'leave')"
          class="brand-image"
          :src="
            activeHover == i
              ? `/img/brand_${i}.svg`
              : `/img/brand_${i}_hover.svg`
          "
        />
      </swiper-slide>
      <swiper-slide class="mr-16" v-for="i in 9" :key="i">             
        <img
          @mouseover="activeHoverFn(i, 'over')"
          @mouseleave="activeHoverFn(i, 'leave')"
          class="brand-image"
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
  window.addEventListener("resize", handleResize);

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
  overflow: hidden; /* Ensure that content is clipped within the specified width */
}



.brand-image {
  width: 100%;
  height: 80px;
  object-fit: contain;
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
