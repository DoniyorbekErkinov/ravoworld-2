<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";
const map = ref();
const mapContainer = ref();

onMounted(() => {
    var map = L.map('map').setView([41.35140553722883, 69.28855526466646], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
});


</script>

<template>
  <div id="map" style="width: 100%;"></div>
</template>

<style scoped>
#map { height: 507px; width: 783px; }
</style>