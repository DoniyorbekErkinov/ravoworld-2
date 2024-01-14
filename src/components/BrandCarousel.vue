<template>
  <div
    class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full brand-carousel relative"
  >
    <div class="brands1">
      <div class="brand" v-for="(brand, index) in 9" :key="brand">
        <img
          @mouseover="activeHoverFn(index, 'over')"
          @mouseleave="activeHoverFn(index, 'leave')"
          class="brand-image"
          :src="
            activeHover == index
              ? `/img/brand_${index + 1}.svg`
              : `/img/brand_${index + 1}_hover.svg`
          "
        />
      </div>
    </div>
    <div class="brands2">
      <div class="brand" v-for="(brand, index) in 9" :key="brand">
        <img
          @mouseover="activeHoverFn(index, 'over')"
          @mouseleave="activeHoverFn(index, 'leave')"
          class="brand-image"
          :src="
            activeHover == index
              ? `/img/brand_${index + 1}.svg`
              : `/img/brand_${index + 1}_hover.svg`
          "
        />
      </div>
    </div>
    <div class="brands3">
      <div class="brand" v-for="(brand, index) in 9" :key="brand">
        <img
          @mouseover="activeHoverFn(index, 'over')"
          @mouseleave="activeHoverFn(index, 'leave')"
          class="brand-image"
          :src="
            activeHover == index
              ? `/img/brand_${index + 1}.svg`
              : `/img/brand_${index + 1}_hover.svg`
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeHover = ref(null);
function activeHoverFn(index, type) {
  if (type == "over") {
    activeHover.value = index;
  }
  if (type == "leave") {
    activeHover.value = null;
  }
}
</script>

<style scoped>
.brand-carousel {
  background: transparent;
  height: 80px;
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
