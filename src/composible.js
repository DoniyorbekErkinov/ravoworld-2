import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
export function useHelper() {
    const { locale, t } = useI18n();
    const carouselData = ref([
        {
          img: "/img/c-img-1.jpg",
          title: "carousel.title1",
          text: "carousel.text1",
        },
        {
          img: "/img/c-img-2.jpg",
          title: "carousel.title2",
          text: "carousel.text2",
        },
        {
          img: "/img/c-img-3.jpg",
          title: "carousel.title3",
          text: "carousel.text3",
        },
        {
          img: "/img/c-img-4.jpg",
          title: "carousel.title4",
          text: "carousel.text4",
        },
        {
          img: "/img/c-img-5.jpg",
          title: "carousel.title5",
          text: "carousel.text5",
        },
        {
          img: "/img/c-img-6.jpg",
          title: "carousel.title6",
          text: "carousel.text6",
        },
    ]);
    

    return {carouselData}
}