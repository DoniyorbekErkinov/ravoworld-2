<script setup>
import { onMounted, ref } from "vue";
import MapIcon from "./MapIcon.vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

onMounted(() => {
    // Create the map
    var map = L.map('map').setView([41.35140553722883, 69.28855526466646], 17);

    // Add the tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    var marker = L.marker([41.35140553722883, 69.28855526466646]).addTo(map);

});


</script>

<template>
    <div class="xxl:h-full xl:h-full lg:h-full md:h-full slg:h-full h-[509px] rounded-3xl" id="map"></div>
</template>

<style scoped>

</style>