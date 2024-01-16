<script setup>
import { onMounted, ref } from "vue";
import "leaflet/dist/leaflet.css";
import L, { icon } from "leaflet";

onMounted(() => {
    // Create the map
    var map = L.map('map').setView([41.35140553722883, 69.28855526466646], 17);

    // Add the tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    
    var customIcon = L.icon({
        iconUrl: '/img/marker.png', // Adjust the path to your marker image
        iconSize: [32, 32], // Adjust the size of your marker
        iconAnchor: [16, 32], // Adjust the anchor point if needed
        popupAnchor: [0, -32] // Adjust the popup anchor if needed
    });

    var marker = L.marker([41.35140553722883, 69.28855526466646], {icon: customIcon}).addTo(map);

});


</script>

<template>
    <div class="xxl:h-full xl:h-full lg:h-full md:h-full slg:h-full h-[509px] rounded-3xl" id="map"></div>
</template>

<style scoped>

</style>