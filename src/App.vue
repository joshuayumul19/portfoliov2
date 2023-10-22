<template>
	<Navbar />
	<Layout>
		<h1>Hello</h1>
	</Layout>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Navbar from "./components/Navbar.vue";
import Layout from "./components/Layout.vue";

// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
});
</script>
