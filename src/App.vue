<template>
	<Navbar />
	<Layout>
		<HeroSection />
		<Award />
		<Project />
		<About />
		<Contact />
	</Layout>
	<Footer />
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Navbar from "./components/Navbar.vue";
import Layout from "./components/Layout.vue";
import HeroSection from "./components/HeroSection.vue";
import Award from "./layouts/AwardsLayout.vue";
import Project from "./layouts/ProjectsLayout.vue";
import About from "./layouts/AboutLayout.vue";
import Contact from "./layouts/ContactLayout.vue";
import Footer from "./components/Footer.vue";
import AOS from "aos";
import "aos/dist/aos.css";

// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
	AOS.init();
});
</script>
