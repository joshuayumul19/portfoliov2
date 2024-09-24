<template>
	<div class="grid gap-8 grid-cols-1 md:grid-cols-2 mb-32" v-for="award in awards">
		<div>
			<h2 class="lg:text-4xl font-bold md:text-2xl">{{ award.title }}</h2>
			<div class="my-5">
				<p>{{ award.description }}</p>
			</div>
			<div class="flex flex-wrap gap-6">
				<p class="text-gray-500"># {{ award.companyName }}</p>
				<p class="text-gray-500"># {{ award.date }}</p>
			</div>
		</div>
		<div class="flex justify-center">
			<img class="rounded-xl w-1/2" :src="award.imageSrc" :alt="award.title" />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import data from "@/../data.json";

const awards = ref([]);

onMounted(() => {
	awards.value = data.awards;
});
</script>
