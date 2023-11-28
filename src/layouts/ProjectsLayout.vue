<template>
	<section aria-labelledby="projects-content" role="region" aria-describedby="projects-description">
		<p class="absolute -mt-36" id="projects"></p>
		<h2 class="text-xl font-semibold mb-3">Projects</h2>
		<hr class="mt-5 mb-10" />

		<Project />
	</section>
</template>

<script setup>
import Project from "../components/Project.vue";
</script>

<style lang="scss" scoped></style>
