<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue'
</script>

<template>
    <div class="flex flex-col min-h-screen bg-slate-950">
        <NavBar/>
        <div div class="main container mx-auto px-4 py-6">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>