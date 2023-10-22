<template>
	<Navbar />
	<Layout>
		<HeroSection />
	</Layout>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Navbar from "./components/Navbar.vue";
import Layout from "./components/Layout.vue";
import HeroSection from "./components/HeroSection.Vue";

// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
});
</script>
