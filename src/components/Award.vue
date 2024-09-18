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
const awards = [
	{
		title: "Most Outstanding Performance for Q2",
		description: "Recipient of the Most Outstanding Performance award for Q2 2024 at Qstrike Innovations PHILS. OPC , this award recognizes exceptional individual contributions that significantly impacted team goals. This award highlights my consistent excellence in productivity, problem-solving and collaboration as an individual contributor.",
		date: "August 2024",
		imageSrc: "/outstanding-employee-award.jpg",
		companyName: "Qstrike Innovations PHILS.,OPC",
	},
];
</script>
