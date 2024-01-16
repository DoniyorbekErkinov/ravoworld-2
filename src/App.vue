<script setup>
import { ref, onMounted, watch } from "vue";
import { useHelper } from './composible'
import { useI18n } from "vue-i18n";
import Map from './components/map.vue'
import Map2 from './components/map2.vue'
import handGlobe from "./components/handGlobe.vue";
import warning from "./components/warning.vue";
import headphones from "./components/headphones.vue";
import logo from "./components/logo.vue";
import burger from "./components/burger.vue";
import cross from "./components/cross.vue";
import phone from "./components/phone.vue";
import arrow from "./components/arrow.vue";
import BrandCarousel from "./components/BrandCarousel.vue";
const {carouselData} = useHelper()
const { locale, t } = useI18n();
const currentItem = ref(1);
const count1 = ref(0);
const count2 = ref(0);
const count3 = ref(0);
const count4 = ref(0);
function next() {
  currentItem.value = (currentItem.value + 1) % carouselData.value.length;
}
function prev() {
  currentItem.value =
    (currentItem.value - 1 + carouselData.value.length) % carouselData.value.length;
}
watch(locale, (newVal, oldVal) => {
  localStorage.setItem("locale", newVal);
  currentItem.value = 1
});
onMounted(() => {
  let carouselInterval = setInterval(() => {  
    if (window.pageYOffset > 200 && window.pageYOffset < 2500) {
      next();
    } else {
      clearInterval(carouselInterval);
    }
  }, 2500);

  document.addEventListener("scroll", (event) => {
    if (window.pageYOffset > 2200) {
      let numberCount1 = setInterval(() => {
        if (count1.value < 30) count1.value++;
        if (count1.value === 30) {
          clearInterval(numberCount1);
        }
      }, 100);
      let numberCount2 = setInterval(() => {
        if (count2.value < 2020) count2.value++;
        if (count2.value === 2020) {
          clearInterval(numberCount2);
        }
      }, 100);
      let numberCount3 = setInterval(() => {
        if (count3.value < 440) count3.value++;
        if (count3.value === 440) {
          clearInterval(numberCount3);
        }
      }, 100);
      let numberCount4 = setInterval(() => {
        if (count4.value < 500) count4.value++;
        if (count4.value === 500) {
          clearInterval(numberCount4);
        }
      }, 100);
    }
  });

  showMap.value = true
});

const isSideBarOpen = ref(false);
const isLangOpen = ref(false);
function openCloseSidebar() {
  isSideBarOpen.value = !isSideBarOpen.value;
  document.body.classList.toggle('no-scroll', isSideBarOpen.value);

}
function openCloseLang() {
  isLangOpen.value = !isLangOpen.value;
}

// MAPS
    const zoom = ref(17)
    const showMap = ref(false)
</script>
<template>
  <div class="h-full flex flex-col scrollbarActive overflow-hidden relative">
    <div id="main" class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] md:w-[1300px] w-full mx-auto">
      <!-- Navbar Start -->
      <div
        class="w-full py-8 xxl:px-0 xl:px-0 lg:px-0 md:px-0 slg:px-0 px-6 flex justify-between items-center"
      >
        <div class="w-[30%] flex items-center">
          <logo
            class="xxl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 ml-2 scale-125 xxl:scale-100 xl:scale-100 lg:scale-100 md:scale-100"
          />
        </div>
        <div class="w-[70%] flex justify-end items-center">
          <ul class="xxl:flex xl:flex lg:flex hidden justify-between w-[60%]">
            <li class="hover:text-mRed underline-hover cursor-pointer">
              <a
                class="text-mGray hover:text-mRed text-base rf-dewi-font-normal"
                href="#main"
                >{{ $t("menu.main") }}</a
              >
            </li>
            <li class="hover:text-mRed underline-hover cursor-pointer">
              <a
                class="text-mGray hover:text-mRed text-base rf-dewi-font-normal"
                href="#service"
                >{{ $t("menu.service") }}</a
              >
            </li>
            <li class="hover:text-mRed underline-hover cursor-pointer">
              <a
                class="text-mGray hover:text-mRed text-base rf-dewi-font-normal"
                href="#advantages"
                >{{ $t("menu.advantages") }}</a
              >
            </li>
            <li class="hover:text-mRed underline-hover cursor-pointer">
              <a
                class="text-mGray hover:text-mRed text-base rf-dewi-font-normal"
                href="#about"
                >{{ $t("menu.about") }}</a
              >
            </li>
            <li class="hover:text-mRed underline-hover cursor-pointer">
              <a
                class="text-mGray hover:text-mRed text-base rf-dewi-font-normal"
                href="#contacts"
                >{{ $t("menu.contacts") }}</a
              >
            </li>
          </ul>
          <div class="flex justify-start items-center w-[60%]">
            <div
              class="text-xl ml-[72px] flex items-center relative"
              @click="openCloseLang"
            >
              <span
                :class="isLangOpen ? 'text-mRed' : 'text-mGray'"
                class="capitalize text-base rf-dewi-font-light"
                >{{ $t(`lang.${locale}`) }}</span
              >
              <arrow
                :class="
                  isLangOpen
                    ? '-rotate-90 stroke-mRed'
                    : 'rotate-90 stroke-mGray'
                "
                class="w-5 h-5 ml-1"
              />
              <div v-if="isLangOpen" class="absolute text-mWhite top-8">
                <div
                  @click="locale = 'ru'"
                  class="border-none text-mGray hover:text-mRed mt-1 text-base cursor-pointer rf-dewi-font-normal"
                >
                  {{ $t("lang.ru") }}
                </div>
                <div
                  @click="locale = 'en'"
                  class="border-none text-mGray hover:text-mRed mt-1 text-base cursor-pointer rf-dewi-font-normal"
                >
                  {{ $t("lang.en") }}
                </div>
                <div
                  @click="locale = 'uz'"
                  class="border-none text-mGray hover:text-mRed mt-1 text-base cursor-pointer rf-dewi-font-normal"
                >
                  {{ $t("lang.uz") }}
                </div>
              </div>
            </div>
            <div
              class="xxl:flex xl:flex lg:flex hidden text-mWhite justify-between group hover:text-mRed items-center ml-10"
            >
              <svg
                class="mr-4 stroke-mWhite group-hover:stroke-mRed"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4741 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4018C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.945 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3146 6.72527 15.2661 5.18993 12.85C3.49991 10.2412 2.44818 7.27097 2.11993 4.17997C2.09494 3.90344 2.12781 3.62474 2.21643 3.3616C2.30506 3.09846 2.4475 2.85666 2.6347 2.6516C2.82189 2.44653 3.04974 2.28268 3.30372 2.1705C3.55771 2.05831 3.83227 2.00024 4.10993 1.99997H7.10993C7.59524 1.9952 8.06572 2.16705 8.43369 2.48351C8.80166 2.79996 9.04201 3.23942 9.10993 3.71997C9.23656 4.68004 9.47138 5.6227 9.80993 6.52997C9.94448 6.8879 9.9736 7.27689 9.89384 7.65086C9.81408 8.02482 9.6288 8.36809 9.35993 8.63998L8.08993 9.90997C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0554 17.4699 14.19C18.3772 14.5285 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-base manrope-font-normal"
                >+998 97 999 15 30</span
              >
            </div>
            <burger
              @click="openCloseSidebar"
              class="xxl:hidden xl:hidden flex"
            ></burger>
          </div>
        </div>       
      </div>
      <!-- Navbar End -->
      <!-- Under Navbar Start -->
      <div
        class="w-full py-14 mt-14 xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col flex justify-between items-center relative"
      >
        <div
          class="flex flex-col xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full xxl:px-0 xl:px-0 lg:px-0 md:px-0 slg:px-0 px-6 text-[32px] xxl:text-[56px] xl:text-[56px] lg:text-[56px] md:text-[56px] slg:text-[56px]"
        >
          <span class="text-mWhite rf-dewi-font-semibold">{{
            $t("header.title_1")
          }}</span>
          <div>
            <span class="text-mRed rf-dewi-font-semibold"
              >{{ $t("header.title_2") }} </span
            ><span class="text-mWhite rf-dewi-font-semibold">{{
              $t("header.title_3")
            }}</span>
          </div>
        </div>
        <div
          class="flex justify-center items-center pt-6 xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full xxl:px-0 xl:px-0 lg:px-0 md:px-0 px-6"
        >
          <div
            class="text-2Gray xxl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-4/5 slg:w-4/5 w-full flex justify-end text-sm xxl:text-base xl:text-base lg:text-base md:text-base slg:text-base leading-6 manrope-font-normal"
          >
            {{ $t("header.text") }}
          </div>
        </div>
        <div
          class="xxl:h-[152px] xl:h-[152px] lg:h-[152px] md:h-[152px] slg:h-[152px] h-[112px] xxl:w-[152px] xl:w-[152px] lg:w-[152px] md:w-[152px] slg:w-[152px] w-[112px] rounded-full bg-mRed absolute top-[80%] right-[50px] flex justify-center items-center text-mWhite tracking-wider manrope-font-normal text-xs xxl:text-base xl:text-base lg:text-base md:text-base slg:text-base"
        >
          <a href="#contacts" class="xxl:flex xl:flex lg:flex md:flex slg:flex hidden">{{ $t("header.circle") }}</a>
          <a href="tel:+998979991530" class="xxl:hidden xl:hidden lg:hidden md:hidden slg:hidden flex">{{ $t("header.circle") }}</a>
        </div>
      </div>
      <!-- Under Navbar End -->
    </div>
    <!-- Banner Image -->
    <div
      class="w-full xxl:h-[700px] xl:h-[700px] lg:h-[700px] md:h-[700px] slg:h-[700px] h-[285px]"
    >
      <img
        class="w-full max-w-full xxl:h-[700px] xl:h-[700px] lg:h-[700px] md:h-[700px] slg:h-[700px] h-[285px]"
        src="/img/banner.jpg"
      />
    </div>
    <!-- Banner Image -->
    <!-- Carausel Start -->
    <div
      id="service"
      class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full mx-auto mt-[134px]"
    >
      <!-- Header Start -->
      <div
        class="w-full flex xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col justify-between"
      >
        <div
          class="flex flex-col text-[24px] xxl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] slg:text-[40px] xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full xxl:px-0 xl:px-0 lg:px-0 md:px-0 slg:px-0 px-6"
        >
          <span class="text-mWhite tracking-wider rf-dewi-font-semibold"
            >{{ $t("carousel.title_1") }}
          </span>
          <div class="text-mWhite tracking-wider rf-dewi-font-semibold">
            {{ $t("carousel.title_2") }}
            <span class="text-mRed tracking-wider rf-dewi-font-semibold">{{
              $t("carousel.title_3")
            }}</span>
          </div>
        </div>
        <div
          class="flex justify-end items-center xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full xxl:px-0 xl:px-0 lg:px-0 md:px-0 slg:px-0 px-6 text-2Gray"
        >
          <div
            class="xxl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] slg:w-[60%] w-full text-sm xxl:text-base xl:text-base lg:text-base md:text-base slg:text-base  xxl:ml-14 xl:ml-14 lg:ml-14 ml-0 xxl:mt-0 xl:mt-0 lg:mt-0 mt-4 manrope-font-normal"
          >
            {{ $t("carousel.text") }}
          </div>
        </div>
      </div>
      <!-- Header End -->
      <!-- Body Start -->
      <div
        class="slider-container w-full xxl:h-[553px] xl:h-[553px] lg:h-[553px] md:h-[553px] slg:h-[553px] h-[650px] relative xxl:mt-[103px] xl:mt-[103px] lg:mt-[103px] md:mt-[103px] mt-[34px]"
      >
        <div
          class="slider w-full xxl:h-[553px] xl:h-[553px] lg:h-[553px] md:h-[553px] slg:h-[553px] h-[650px] xxl:flex xl:flex lg:flex md:flex slg:flex "
          :style="{ transform: `translateX(-${currentItem * 100}%)`}"
          v-if="carouselData.length > 0"
        >
          <div
            v-for="(item, index) in carouselData"
            :key="index"
            class="slider-item h-full w-full relative pr-4"
          >
            <div
              class="w-full xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex flex-col-reverse box-border h-full xxl:px-0 xl:px-0 lg:px-0 md:px-0 slg:px-0 px-6"
            >
              <div
                class="xxl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] slg:w-[50%] w-full flex justify-start xxl:mt-[114px] xl:mt-[114px] lg:mt-[114px] md:mt-[114px] mt-[32px]"
              >
                <div
                  class="xxl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-4/5 slg:w-4/5 w-full" 
                >
                  <h2
                    class="text-mWhite xxl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] slg:text-[24px] text-[20px] xxl:manrope-font-semibold xl:manrope-font-semibold lg:manrope-font-semibold md:manrope-font-semibold slg:manrope-font-semibold manrope-font-bold"
                  >
                    {{ $t(`${item?.title}`) }}
                  </h2>
                  <p
                    class="text-mGray xxl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] slg:text-[16px] text-[14px] manrope-font-normal xxl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 slg:mt-8 mt-4"
                  >
                    {{ $t(`${item?.text}`) }}
                  </p>
                </div>
              </div>
              <div
                class="xxl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] slg:w-[50%] w-full xxl:h-full xl:h-full lg:h-full md:h-full slg:h-full h-[347px]"
              >
                <img
                  :src="item?.img"
                  alt="item.image"
                  class="rounded-3xl h-full w-full pr-2 mr-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="xxl:flex xl:flex lg:flex md:flex slg:flex hidden bottom-[84px] absolute justify-between items-center"
        >
          <div
            @click="prev"
            class="w-14 h-14 rounded-full flex justify-center items-center group border border-mRed hover:bg-mRed rotate-180 opacity-60 hover:opacity-100"
          >
            <svg
              class="stroke-mRed group-hover:stroke-mWhite"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="ml-4">
            <span
              class="text-mWhite xxl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] slg:text-[24px] text-[16px] manrope-font-normal"
              >{{ currentItem + 1 }} /</span
            >
            <span
              class="text-mGray xxl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] slg:text-[16px] text-[14px] manrope-font-normal ml-1"
              >{{ carouselData.length }}</span
            >
          </div>
          <div
            @click="next"
            class="w-14 h-14 rounded-full flex justify-center items-center group border border-mRed hover:bg-mRed ml-4"
          >
            <svg
              class="stroke-mRed group-hover:stroke-mWhite"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="xxl:hidden xl:hidden lg:hidden md:hidden slg:hidden flex justify-between items-center w-1/2 mx-auto mt-12"
      >
        <div
          @click="prev"
          class="w-14 h-14 rounded-full flex justify-center items-center group border border-mRed hover:bg-mRed rotate-180 opacity-60 hover:opacity-100"
        >
          <svg
            class="stroke-mRed group-hover:stroke-mWhite"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="ml-4">
          <span
            class="text-mWhite xxl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] slg:text-[24px] text-[16px] manrope-font-normal"
            >{{ currentItem + 1 }} /</span
          >
          <span
            class="text-mGray xxl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] slg:text-[16px] text-[14px] manrope-font-normal"
            >{{ carouselData.length }}</span
          >
        </div>
        <div
          @click="next"
          class="w-14 h-14 rounded-full flex justify-center items-center group border border-mRed hover:bg-mRed ml-4"
        >
          <svg
            class="stroke-mRed group-hover:stroke-mWhite"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <!-- Body End -->
    </div>
    <!-- Carausel End -->
    <!-- Result Start -->
    <div
      id="advantages"
      class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full mx-auto xxl:mt-[184px] xl:mt-[184px] lg:mt-[184px] md:mt-[184px] mt-[120px]"
    >
      <div
        class="xxl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] slg:w-[70%] w-full mx-auto flex flex-col items-center"
      >
        <div class="flex justify-end items-center w-full">
          <div
            class="xxl:w-[75%] xl:w-[75%] lg:w-[75%] md:w-[75%] slg:w-[75%] w-full flex xxl:justify-end xl:justify-end lg:justify-end md:justify-end slg:justify-end justify-center mx-auto"
          >
            <span
              class="text-mWhite xxl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] slg:text-[40px] text-[24px] tracking-wider rf-dewi-font-bold"
              >{{ $t("underCarousel.title_1_1") }}
            </span>
            <span
              class="text-mRed xxl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] slg:text-[40px] text-[24px] tracking-wider ml-4 rf-dewi-font-bold"
            >
              {{ $t("underCarousel.title_1_2") }}</span
            >
          </div>
        </div>
        <div class="flex justify-start items-center w-full">
          <div
            class="xxl:w-[75%] xl:w-[75%] lg:w-[75%] md:w-[75%] slg:w-[75%] w-full flex xxl:justify-start xl:justify-start lg:justify-start md:justify-start slg:justify-start justify-center mx-auto"
          >
            <span
              class="text-mWhite xxl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] slg:text-[40px] text-[24px] tracking-wider rf-dewi-font-bold"
              >{{ $t("underCarousel.title_2_1") }}
            </span>
            <span
              class="text-mRed xxl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] slg:text-[40px] text-[24px] tracking-wider ml-4 rf-dewi-font-bold"
            >
              {{ $t("underCarousel.title_2_2") }}</span
            >
          </div>
        </div>
      </div>
      <div
        class="w-full xxl:grid xl:grid lg:grid md:grid slg:grid flex flex-col grid-cols-3 gap-6 xxl:mt-[88px] xl:mt-[88px] lg:mt-[88px] md:mt-[88px] mt-12 xxl:px-0 xl:px-0 lg:px-0 md:px-0 slg:px-0 px-6"
      >
        <div
          class="group hover:border-mRed border border-2Gray h-[366px] rounded-2xl xxl:px-12 xl:px-12 lg:px-12 md:px-12 slg:px-12 p-8 xxl:py-10 xl:py-10 lg:py-10 md:py-10 slg:py-10 flex flex-col justify-between"
        >
          <div>
            <handGlobe class="group-hover:fill-mRed fill-mWhite" />
          </div>
          <div
            class="text-mWhite xxl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] slg:text-[24px] text-[20px] mt-8 manrope-font-semibold w-full"
          >
            {{ $t("underCarousel.card.title1") }}
          </div>
          <div
            class="text-mGray xxl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] slg:text-[16px] text-[14px] mt-4 w-full manrope-font-normal"
          >
            {{ $t("underCarousel.card.text1") }}
          </div>
        </div>
        <div
          class="group hover:border-mRed border border-2Gray h-[366px] rounded-2xl xxl:px-12 xl:px-12 lg:px-12 md:px-12 slg:px-12 p-8 xxl:py-10 xl:py-10 lg:py-10 md:py-10 slg:py-10 flex flex-col justify-between"
        >
          <div>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_488_1113" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">
              <path d="M0 3.8147e-06H56V56H0V3.8147e-06Z" class="fill-mWhite group-hover:fill-mRed" />
              </mask>
              <g mask="url(#mask0_488_1113)">
              <path d="M8.67679 45.6241V4.00466C8.67679 2.25291 10.1092 0.820316 11.8609 0.820316H44.1361C45.8877 0.820316 47.3232 2.25291 47.3232 4.00466V51.9925C47.3232 53.7441 45.8877 55.1797 44.1361 55.1797H11.8609C10.1092 55.1797 8.67679 53.7441 8.67679 51.9925V49.3384" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M43.6058 11.436V51.4622H12.3911V4.53471H20.5668M35.43 4.53471H43.6058V7.72178" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.5668 0.820251H35.43V4.53473C35.43 6.57786 33.7591 8.25195 31.7158 8.25195H24.2842C22.2379 8.25195 20.5668 6.57786 20.5668 4.53473V0.820251Z" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.5783 20.8862H20.2474V16.2138H15.5783V20.8862Z" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.5783 30.8665H20.2474V26.1941H15.5783V30.8665Z" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.5783 40.8464H20.2474V36.1743H15.5783V40.8464Z" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.5807 30.5781V15.5783H39.8885V41.5256H34.5807V34.2953" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.5807 15.5784H39.8885L37.2345 10.7356L34.5807 15.5784Z" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M36.1743 46.4084H38.2979C39.1723 46.4084 39.8885 45.6924 39.8885 44.8149V41.5254H34.5807V44.8149C34.5807 45.6924 35.2968 46.4084 36.1743 46.4084Z" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.2208 20.1421H28.9534M23.2208 16.9581H31.6072" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.1337 4.53491H30.8664" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.2208 30.1221H28.9534M23.2208 26.9381H31.6072" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.2208 40.1023H28.9534M23.2208 36.9183H31.6072" class="stroke-mWhite group-hover:stroke-[#d11011] group-hover:opacity-100" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </svg>
          </div>
          <div
            class="text-mWhite xxl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] slg:text-[24px] text-[20px] mt-8 manrope-font-semibold w-full"
          >
            {{ $t("underCarousel.card.title2") }}
          </div>
          <div
            class="text-mGray xxl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] slg:text-[16px] text-[14px] mt-4 w-full manrope-font-normal"
          >
            {{ $t("underCarousel.card.text2") }}
          </div>
        </div>
        <div
          class="h-[300px] rounded-2xl xxl:flex xl:flex lg:flex md:flex hidden"
        ></div>
        <div
          class="h-[300px] rounded-2xl xxl:flex xl:flex lg:flex md:flex hidden"
        ></div>
        <div
          class="group hover:border-mRed border border-2Gray h-[366px] rounded-2xl xxl:px-12 xl:px-12 lg:px-12 md:px-12 slg:px-12 p-8 xxl:py-10 xl:py-10 lg:py-10 md:py-10 slg:py-10 flex flex-col justify-between"
        >
          <div>
            <warning class="group-hover:fill-mRed fill-mWhite" />
          </div>
          <div
            class="text-mWhite xxl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] slg:text-[24px] text-[20px] mt-8 manrope-font-semibold w-full"
          >
            {{ $t("underCarousel.card.title3") }}
          </div>
          <div
            class="text-mGray xxl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] slg:text-[16px] text-[14px] mt-4 w-full manrope-font-normal"
          >
            {{ $t("underCarousel.card.text3") }}
          </div>
        </div>
        <div
          class="group hover:border-mRed border border-2Gray h-[366px] rounded-2xl xxl:px-12 xl:px-12 lg:px-12 md:px-12 slg:px-12 p-8 xxl:py-10 xl:py-10 lg:py-10 md:py-10 slg:py-10 flex flex-col justify-between"
        >
          <div>
            <headphones class="group-hover:fill-mRed fill-mWhite" />
          </div>
          <div
            class="text-mWhite xxl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] slg:text-[24px] text-[20px] mt-8 manrope-font-semibold w-full"
          >
            {{ $t("underCarousel.card.title4") }}
          </div>
          <div
            class="text-mGray xxl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] slg:text-[16px] text-[14px] mt-4 w-full manrope-font-normal"
          >
            {{ $t("underCarousel.card.text4") }}
          </div>
        </div>
      </div>
    </div>
    <!-- Result End -->
    <!-- Counts Start -->
    <div
      id="about"
      class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full xxl:h-[700px] xl:h-[700px] lg:h-[700px] md:h-[700px] slg:h-[700px] h-[1650px] mx-auto xxl:mt-[184px] xl:mt-[184px] lg:mt-[184px] md:mt-[184px] mt-[120px] flex xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col justify-between xxl:px-0 xl:px-0 lg:px-0 md:px-0 slg:px-0 px-6"
    >
      <div
        class="xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full flex flex-col justify-between"
      >
        <div
          class="text-mWhite flex flex-col tracking-wider xxl:text-[40px] xl:text-[40px] lg:text-[40px] text-[24px] w-full xxl:pr-8 xl:pr-8 md:pr-8 lg:pr-8 p-0 rf-dewi-font-semibold"
        >
          <div>
            <span class="text-mRed ">{{
              $t("associate.title_1_1")
            }}</span
            ><span class=" text-mWhite">
              {{ $t("associate.title_1_2") }}
            </span>
          </div>
          <div>
            <span class="">{{ $t("associate.title_2_1") }}</span
            ><span
              class="text-mRed  text-red-700 text-[40px] leading-[52px]"
            >
              {{ $t("associate.title_2_2") }}
            </span>
          </div>
        </div>
        <div
          class="text-mWhite xxl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-4/5 slg:w-4/5 w-full xxl:pr-8 xl:pr-8 md:pr-8 lg:pr-8 py-8 manrope-font-normal"
        >
          <span
            v-html="
              $t('associate.text', {
                RavoWorld: `<span class=&quot;text-mRed&quot;>RavoWorld</span>`,
              })
            "
            class="text-base"
          >
          </span>
        </div>
      </div>
      <div
        class="xxl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 slg:w-1/2 w-full grid xxl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 slg:grid-cols-2 grid-cols-1 gap-6 xxl:pl-10 xl:pl-10 lg:pl-10 md:pl-10 pl-0 xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-2"
      >
        <div
          class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite xxl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] slg:h-[320px] h-[338px]"
        >
          <div class="text-5xl rf-dewi-font-bold">{{ count1 }}</div>
          <div class="tracking-wider text-base manrope-font-normal">
            {{ $t("associate.card1") }}
          </div>
        </div>
        <div
          class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite xxl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] slg:h-[320px] h-[338px]"
        >
          <div class="text-5xl rf-dewi-font-bold">{{ count2 }}</div>
          <div class="tracking-wider text-base manrope-font-normal">
            {{ $t("associate.card2") }}
          </div>
        </div>
        <div
          class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite xxl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] slg:h-[320px] h-[338px]"
        >
          <div class="text-5xl rf-dewi-font-bold">{{ count3 }}</div>
          <div class="tracking-wider text-base manrope-font-normal">
            {{ $t("associate.card3") }}
          </div>
        </div>
        <div
          class="border border-2Gray bg-2Black rounded-2xl flex flex-col justify-between items-start p-8 text-mWhite xxl:h-[320px] xl:h-[320px] lg:h-[320px] md:h-[320px] slg:h-[320px] h-[338px]"
        >
          <div class="text-5xl rf-dewi-font-bold">{{ count4 }}+</div>
          <div class="tracking-wider text-base manrope-font-normal">
            {{ $t("associate.card4") }}
          </div>
        </div>
      </div>
    </div>
    <!-- Counts End -->
    <!-- Contact Start -->
    <div
      id="contacts"
      class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full xxl:mt-[184px] xl:mt-[184px] lg:mt-[184px] md:mt-[184px] mt-[120px] xxl:px-0 xl:px-0 lg:px-0 md:px-0 slg:px-0 px-6 h-auto mx-auto flex flex-col relative"
    >
      <BrandCarousel class="xxl:mb-[184px] xl:mb-[184px] lg:mb-[184px] md:mb-[184px] mb-[120px] xxl:mt-[0px] xl:mt-[0px] lg:mt-[0px] md:mt-[0px] mt-[120px]"/>
      <div class="w-full">
        <div
          class="text-mWhite xxl:text-[40px] xl:text-[40px] lg:text-[40px] text-[24px] flex flex-col tracking-wider rf-dewi-font-medium"
        >
          <span>{{ $t("contact.title") }}</span>
          <span>{{ $t("contact.title_1") }}</span>
        </div>
      </div>
      <div
        class="w-full xxl:h-[500px] xl:h-[500px] lg:h-[500px] md:h-[500px] slg:h-[500px] h-[1050px] xxl:grid xl:grid lg:grid md:grid slg:grid flex flex-col grid-cols-3 gap-6 xxl:mt-14 xl:mt-14 lg:mt-14 md:mt-14 mt-12 py-8"
      >
        <div
          class="h-[507px] mb-6 w-full xxl:hidden xl:hidden lg:hidden md:hidden slg:hidden block rounded-3xl"
        >
          <Map class="xxl:hidden xl:hidden lg:hidden md:hidden slg:hidden block"/>        
        </div>
        <div
          class="border border-2Gray col-span-1 py-[72px] xxl:px-[64px] xl:px-[64px] lg:px-[64px] md:px-[64px] slg:px-[64px] px-[40px] bg-3Black rounded-xl"
        >
          <h2
            class="text-4xl text-mWhite rf-dewi-font-semibold text-[20px] xxl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[32px] slg:text-[32px]"
          >
            {{ $t("contact.contacts") }}
          </h2>
          <div class="flex justify-start text-mWhite mt-8">
            <svg
              class="mt-1"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                stroke="#D11011"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#D11011"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex flex-col ml-4">
              <span
                class="manrope-font-semibold text-[18px] xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] slg:text-[20px]"
                >{{ $t("contact.address") }}</span
              >
              <div
                class="mt-2 manrope-font-normal text-sm xxl:text-base xl:text-base lg:text-base md:text-base slg:text-base"
              >
                {{ $t("contact.address_map") }}
              </div>
            </div>
          </div>
          <div class="flex justify-start text-mWhite mt-8">
            <svg
              class="mt-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z"
                stroke="#D11011"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex flex-col ml-4">
              <span
                class="manrope-font-semibold text-[18px] xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] slg:text-[20px]"
                >{{ $t("contact.telefon") }}</span
              >
              <span
                class="mt-2 manrope-font-normal text-sm xxl:text-base xl:text-base lg:text-base md:text-base slg:text-base"
                >+998 (97) 999 15 30</span
              >
            </div>
          </div>
          <div class="flex justify-start text-mWhite mt-8">
            <svg
              class="mt-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4.00098H20C21.1 4.00098 22 4.90098 22 6.00098V18.001C22 19.101 21.1 20.001 20 20.001H4C2.9 20.001 2 19.101 2 18.001V6.00098C2 4.90098 2.9 4.00098 4 4.00098Z"
                stroke="#D11011"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 6.00098L12 13.001L2 6.00098"
                stroke="#D11011"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex flex-col ml-4">
              <span
                class="manrope-font-semibold text-[18px] xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] slg:text-[20px]"
                >{{ $t("contact.email") }}</span
              >
              <span
                class="mt-2 manrope-font-normal text-sm xxl:text-base xl:text-base lg:text-base md:text-base slg:text-base"
                >info@ravoworld.com</span
              >
            </div>
          </div>
        </div>      
        <div
          class="h-full w-full  col-span-2 rounded-3xl xxl:block xl:block lg:block md:block slg:block hidden"
        >
          <Map2 />        
        </div>
      </div>
    </div>
    <!-- Contact End -->
    <div
      class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full mx-auto mt-14"
    >
      <!-- Navbar Start -->
      <div
        class="w-full py-8 flex xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col justify-between items-center relative"
      >
        <div class="w-[30%] text-[36px] flex items-center">
          <logo
            class="xxl:scale-100 xl:scale-100 lg:scale-100 md:scale-100 slg:scale-100 scale-125"
          />
        </div>
        <div
          class="xxl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] slg:w-[70%] w-full flex justify-end items-center"
        >
          <ul
            class="flex justify-between xxl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] slg:w-[70%] w-full xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col items-center"
          >
            <li
              class="hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"
            >
              <a
                class="text-mGray hover:text-mRed text-base manrope-font-normal"
                href="#main"
                >{{ $t("menu.main") }}</a
              >
            </li>
            <li
              class="hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"
            >
              <a
                class="text-mGray hover:text-mRed text-base manrope-font-normal"
                href="#service"
                >{{ $t("menu.service") }}</a
              >
            </li>
            <li
              class="hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"
            >
              <a
                class="text-mGray hover:text-mRed text-base manrope-font-normal"
                href="#advantages"
                >{{ $t("menu.advantages") }}</a
              >
            </li>
            <li
              class="hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"
            >
              <a
                class="text-mGray hover:text-mRed text-base manrope-font-normal"
                href="#about"
                >{{ $t("menu.about") }}</a
              >
            </li>
            <li
              class="hover:text-mRed underline-hover cursor-pointer xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 slg:mt-0 mt-4"
            >
              <a
                class="text-mGray hover:text-mRed text-base manrope-font-normal"
                href="#contacts"
                >{{ $t("menu.contacts") }}</a
              >
            </li>
          </ul>
        </div>
        <a
          href="#main"
          class="absolute cursor-pointer border border-mWhite w-14 h-14 xxl:flex xl:flex lg:flex md:flex slg:flex hidden -right-[144px] bottom-8 rounded-full justify-center items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19V5"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 12L12 5L19 12"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
      <!-- Navbar End -->
    </div>
    <div style="border: 1px solid rgba(255, 255, 255, 0.1)"></div>
    <div
      class="xxl:w-[1350px] xl:w-[1350px] lg:w-[1300px] w-full xxl:flex-row xl:flex-row lg:flex-row md:flex-row slg:flex-row flex-col mx-auto flex justify-between items-center my-6"
    >
      <span
        class="xxl:text-left xl:text-left lg:text-left md:text-left slg:text-left w-1/2 text-center manrope-font-normal text-mWhite opacity-20"
        >©2020-2023 RavoWorld. {{ $t("contact.copy_right") }}</span
      >
      <span
        class="xxl:text-right xl:text-right lg:text-right md:text-right slg:text-right w-1/2 text-center xxl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-8 manrope-font-normal"
      >
        <span class="text-mWhite opacity-20 manrope-font-normal">designed by</span>
        <span class="text-mWhite opacity-40 manrope-font-normal"> Nextmark</span>
      </span>
    </div>
    <!-- Sidebar Start -->
    <div
      v-if="isSideBarOpen"
      class="bg-2Black fixed left-0 top-0 w-screen h-screen flex flex-col p-8"
    >
      <div class="w-full flex justify-end">
        <cross @click="openCloseSidebar" />
      </div>
      <div class="w-full flex justify-end items-center mt-20">
        <ul class="flex justify-between w-full flex-col items-center">
          <li class="underline-hover cursor-pointer mt-8">
            <a
              class="text-mWhite hover:text-mRed text-xl manrope-font-normal"
              @click="openCloseSidebar"
              href="#main"
              >{{ $t("menu.main") }}</a
            >
          </li>
          <li class="underline-hover cursor-pointer mt-8">
            <a
              class="text-mWhite hover:text-mRed text-xl manrope-font-normal"
              @click="openCloseSidebar"
              href="#service"
              >{{ $t("menu.service") }}</a
            >
          </li>
          <li class="underline-hover cursor-pointer mt-8">
            <a
              class="text-mWhite hover:text-mRed text-xl manrope-font-normal"
              @click="openCloseSidebar"
              href="#advantages"
              >{{ $t("menu.advantages") }}</a
            >
          </li>
          <li class="underline-hover cursor-pointer mt-8">
            <a
              class="text-mWhite hover:text-mRed text-xl manrope-font-normal"
              @click="openCloseSidebar"
              href="#about"
              >{{ $t("menu.about") }}</a
            >
          </li>
          <li class="underline-hover cursor-pointer mt-8">
            <a
              class="text-mWhite hover:text-mRed text-xl manrope-font-normal"
              @click="openCloseSidebar"
              href="#contacts"
              >{{ $t("menu.contacts") }}</a
            >
          </li>
        </ul>
      </div>
      <div class="w-full flex justify-center items-center mt-20">
        <phone /><span class="text-2xl text-mWhite manrope-font-normal"
          >+998 97 999 15 30</span
        >
      </div>
      <div class="flex justify-center mt-24">
        <span class="text-xl manrope-font-normal text-mGray opacity-30"
          >designed by</span
        >
        <span class="text-xl manrope-font-normal text-mGray ml-2">Nextmark</span>
      </div>
    </div>
    <!-- Sidebar Start -->
  </div>
</template>
<style>

body {
  background-color: #0b1117;
}
.underline-hover {
  position: relative;
  display: inline-block;
}

.underline-hover::before {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px; /* Adjust the thickness of the underline as needed */
  background-color: transparent; /* Set the initial color of the underline */
}

.underline-hover:hover::before {
  background-color: #d11011; /* Change the color on hover */
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0b1117;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #101922;
}

.slider-container {
  position: relative;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 2s ease-in-out;
}

.slider-item {
  flex: 0 0 100%;
  box-sizing: border-box;
  display: flex;
}

.image-container {
  flex: 1;
  display: flex;
  align-items: center;
}

.slider-image {
  width: 100%;
  border-radius: 24px;
}

.slider-arrow {
  cursor: pointer;
  font-size: 2rem;
  color: #ff0000; /* Red color */
  padding: 10px;
  border-radius: 50%;
}
.no-scroll {
  overflow: hidden;
}
</style>
