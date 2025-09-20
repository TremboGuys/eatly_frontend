<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
</script>

<template>
    <router-link to="/restaurant/:id" class="listItemLink">
        <div class="listItem">
        <div class="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8ZaBueWk9wkYCzMni_p_1nO03KQRrew3aQ&s" alt="">
        </div>
        <div class="info">
            <p class="restaurant-name">Burger King</p>
            <p class="restaurant-description">oferece sabor incomparável com opções irresistíveis e inovadoras.</p>
                <div class="more-info">
                    <div class="rating-container">
                        <i class="fa fa-star"></i>
                        <p class="restaurant-rating">5.0</p>
                    </div>
                    <div class="delivery-container">
                        <i class="fa fa-clock"></i>
                        <p class="delivery-time">00:00</p>

                    </div>
                </div>
        </div>
    </div>
    </router-link>
</template>

<style scoped>
@import "@/assets/sass/home/_listItem.scss";
</style>