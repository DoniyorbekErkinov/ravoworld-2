<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";

onMounted(() => {
    var map = L.map('map').setView([41.35140553722883, 69.28855526466646], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

L.marker([41.35140553722883, 69.28855526466646]).addTo(map)
});


</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map { 
    height: 507px;
    width: 783px;
}
</style>