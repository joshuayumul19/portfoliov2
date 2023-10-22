<template>
	<nav class="bg-white" :class="{ shadow: isScrolled }">
		<div class="flex flex-wrap items-center justify-between mx-auto py-10 max-w-[62rem] px-4">
			<a href="#" class="flex items-center">
				<span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Joshua</span>
			</a>
			<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
				<span class="sr-only">Open main menu</span>
				<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
				</svg>
			</button>
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li v-for="list in navLists">
						<a :href="list.href" class="block py-2 pl-3 pr-4">{{ list.label }}</a>
					</li>
					<li>
						<a href="https://drive.google.com/file/d/1XGES8Zv-0LHTQ4Lqx8gmXfMQTXYGRptd/view?usp=sharing" target="_blank" class="block py-2 pl-3 pr-4"> Resume</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref } from "vue";

const isScrolled = ref(false);
const navLists = [
	{
		label: "Projects",
		href: "#project",
	},
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Contact",
		href: "#contact",
	},
];

window.addEventListener("scroll", () => {
	isScrolled.value = window.scrollY > 0; // Adjust the scroll threshold as needed
	console.log(isScrolled.value);
});
</script>

<style lang="scss" scoped></style>
