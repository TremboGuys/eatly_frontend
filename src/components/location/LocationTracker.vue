<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const eatlyHQ = {
  latitude: -26.3034,
  longitude: -48.8456,
  accuracy: 0,
};
const userLocation = ref(null);
const loading = ref(false);
const loadingRoute = ref(false);
const error = ref(null);
const routeInfo = ref(null);
let map = null;
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
const distance = computed(() => {
  if (!userLocation.value) return 0;
  return calculateDistance(
    userLocation.value.latitude,
    userLocation.value.longitude,
    eatlyHQ.latitude,
    eatlyHQ.longitude
  );
});
const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};
const getRoute = async () => {
  loadingRoute.value = true;
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${userLocation.value.longitude},${userLocation.value.latitude};${eatlyHQ.longitude},${eatlyHQ.latitude}?overview=full&geometries=geojson`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      routeInfo.value = {
        distance: route.distance,
        duration: route.duration,
      };
      drawRoute(route.geometry.coordinates);
    }
  } catch {}
  loadingRoute.value = false;
};
const drawRoute = (coordinates) => {
  if (!map) return;
  const latLngs = coordinates.map((coord) => [coord[1], coord[0]]);
  L.polyline(latLngs, {
    color: "#444801",
    weight: 5,
    opacity: 0.8,
    lineCap: "round",
    lineJoin: "round",
  }).addTo(map);
  const group = new L.featureGroup([
    L.marker([userLocation.value.latitude, userLocation.value.longitude]),
    L.marker([eatlyHQ.latitude, eatlyHQ.longitude]),
  ]);
  map.fitBounds(group.getBounds().pad(0.1));
};
const initializeMap = async () => {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;
  const centerLat = (userLocation.value.latitude + eatlyHQ.latitude) / 2;
  const centerLng = (userLocation.value.longitude + eatlyHQ.longitude) / 2;
  if (map) map.remove();
  map = L.map("map", { preferCanvas: true }).setView(
    [centerLat, centerLng],
    13
  );
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
    crossOrigin: true,
  }).addTo(map);
  await new Promise((resolve) => setTimeout(resolve, 500));
  const blueIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  const redIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  L.marker([userLocation.value.latitude, userLocation.value.longitude], {
    icon: blueIcon,
    title: "Sua Localização",
  })
    .addTo(map)
    .bindPopup("<strong>Sua Localização</strong>");
  L.marker([eatlyHQ.latitude, eatlyHQ.longitude], {
    icon: redIcon,
    title: "Sede Eatly",
  })
    .addTo(map)
    .bindPopup("<strong>Sede Eatly</strong><br>Joinville, SC");
  map.invalidateSize();
  await getRoute();
};
const requestLocation = () => {
  loading.value = true;
  error.value = null;
  routeInfo.value = null;
  if (!navigator.geolocation) {
    error.value = "Geolocalização não é suportada pelo seu navegador.";
    loading.value = false;
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation.value = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      };
      loading.value = false;

      nextTick(() => {
        setTimeout(() => initializeMap(), 100);
      });
    },
    (err) => {
      loading.value = false;
      if (err.code === err.PERMISSION_DENIED)
        error.value = "Permissão de localização negada.";
      else if (err.code === err.POSITION_UNAVAILABLE)
        error.value = "Localização indisponível.";
      else if (err.code === err.TIMEOUT) error.value = "Tempo limite excedido.";
      else error.value = "Erro ao obter localização.";
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
};
onMounted(() => {});
</script>
<template>
  <div class="location-tracker">
    <div class="container">
      <div class="titleSection">
        <span class="text">Filial mais próxima</span>
        <div class="hr"></div>
      </div>
      <main class="main-content">
        <div v-if="loading" class="status-card loading">
          <div class="spinner"></div>
          <p>Obtendo sua localização...</p>
        </div>
        <div v-else-if="error" class="status-card error">
          <p class="error-message">{{ error }}</p>
          <button @click="requestLocation" class="btn btn-primary">
            Tentar Novamente
          </button>
        </div>
        <div v-else-if="userLocation" class="content-wrapper">
          <div class="map-container">
            <div id="map" class="map"></div>
            <div v-if="loadingRoute" class="map-loading">
              <div class="spinner-small"></div>
              <p>Traçando rota...</p>
            </div>
          </div>
          <div class="info-card">
            <div class="card-header">
              <h2 class="card-title">Sua Localização</h2>
            </div>
            <div class="card-body">
              <div class="location-item">
                <span class="label">Latitude</span>
                <span class="value"
                  >{{ userLocation.latitude.toFixed(6) }}°</span
                >
              </div>
              <div class="location-item">
                <span class="label">Longitude</span>
                <span class="value"
                  >{{ userLocation.longitude.toFixed(6) }}°</span
                >
              </div>
              <div class="location-item">
                <span class="label">Precisão</span>
                <span class="value"
                  >{{ userLocation.accuracy.toFixed(2) }} m</span
                >
              </div>
            </div>
          </div>
          <div v-if="routeInfo" class="info-card">
            <div class="card-header">
              <h2 class="card-title">Informações da Rota</h2>
            </div>
            <div class="card-body">
              <div class="location-item">
                <span class="label">Distância</span>
                <span class="value"
                  >{{ (routeInfo.distance / 1000).toFixed(2) }} km</span
                >
              </div>
              <div class="location-item">
                <span class="label">Tempo Estimado</span>
                <span class="value"
                  >{{ formatTime(routeInfo.duration) }} de carro</span
                >
              </div>
            </div>
          </div>
          <div class="info-card">
            <div class="card-header">
              <h2 class="card-title">Sede Eatly (Joinville)</h2>
            </div>
            <div class="card-body">
              <div class="location-item">
                <span class="label">Latitude</span>
                <span class="value">{{ eatlyHQ.latitude.toFixed(6) }}°</span>
              </div>
              <div class="location-item">
                <span class="label">Longitude</span>
                <span class="value">{{ eatlyHQ.longitude.toFixed(6) }}°</span>
              </div>
              <div class="location-item">
                <span class="label">Endereço</span>
                <span class="value">Centro de Joinville, SC</span>
              </div>
            </div>
          </div>
          <button @click="requestLocation" class="btn btn-secondary btn-full">
            Atualizar Localização
          </button>
        </div>
        <div v-else class="empty-state">
          <h2>Comece aqui</h2>
          <p>
            Clique no botão abaixo para compartilhar sua localização e ver a
            rota até a sede do Eatly.
          </p>
          <button @click="requestLocation" class="btn btn-primary btn-full">
            Compartilhar Localização
          </button>
        </div>
      </main>

      <footer class="footer">
        <p class="footer-text">Eatly © 2024 | Localização em Tempo Real</p>
      </footer>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/sass/location/_locationTracker.scss";
</style>
