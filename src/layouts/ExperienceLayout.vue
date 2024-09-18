<template>
	<section aria-labelledby="award-content" role="region" aria-describedby="awards">
		<p class="absolute -mt-36" id="award"></p>
		<h2 class="text-xl font-semibold mb-3">Awards</h2>
		<hr class="mt-5 mb-10" />
		<Award />
	</section>
</template>

<script setup>
import Award from "../components/Award.vue";
</script>
