<template>
	<nav class="bg-white sticky top-0 z-40 py-10" :class="{ shadow: isScrolled }">
		<div class="flex flex-wrap items-center justify-center md:justify-between mx-auto max-w-[65rem] px-4">
			<a href="#" class="flex items-center">
				<span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Joshua</span>
			</a>
			<div class="hidden w-full md:block md:w-auto">
				<ul class="flex flex-col p-4 md:p-0 mt-4 text-md border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li v-for="list in navLists">
						<a :href="list.href" class="block py-1 px-5 bg-white hover:bg-slate-200 rounded-md">{{ list.label }}</a>
					</li>
					<li>
						<a href="https://drive.google.com/file/d/1rjBmX5kCSjZDI8f5PVHIusQfvrhP9n7z/view?usp=sharing" target="_blank" class="block py-1 px-5 bg-white hover:bg-slate-200 rounded-md">
							Resume
							<font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

	<nav class="fixed bottom-10 left-0 z-50 right-0 mx-auto w-[85%] h-16 block md:hidden">
		<ul class="grid h-[4.5rem] max-w-lg grid-cols-4 mx-auto font-medium rounded-full bg-slate-50 shadow">
			<li class="inline-flex rounded-full flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" v-for="list in navLists">
				<a :href="list.href">
					<div class="text-center group-hover:text-blue-600 dark:group-hover:text-blue-500">
						<font-awesome-icon :icon="list.icon" size="lg" />
					</div>
					<span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{{ list.label }}</span>
				</a>
			</li>
			<li class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
				<a href="https://drive.google.com/file/d/1XGES8Zv-0LHTQ4Lqx8gmXfMQTXYGRptd/view?usp=sharing" target="_blank">
					<div class="text-center group-hover:text-blue-600 dark:group-hover:text-blue-500">
						<font-awesome-icon icon="fa-regular fa-newspaper" size="lg" />
					</div>
					<span class="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Resume</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { ref } from "vue";

const isScrolled = ref(false);
const navLists = [
	{
		label: "Experience",
		href: "#award",
		icon: "fa-solid fa-trophy",
	},
	{
		label: "Awards",
		href: "#award",
		icon: "fa-solid fa-trophy",
	},
	{
		label: "Projects",
		href: "#projects",
		icon: "fa-solid fa-book",
	},
	{
		label: "About",
		href: "#about",
		icon: "fa-solid fa-address-card",
	},
	{
		label: "Contact",
		href: "#contact",
		icon: "fa-solid fa-phone-volume",
	},
];

window.addEventListener("scroll", () => {
	isScrolled.value = window.scrollY > 0;
});
</script>

<style lang="scss" scoped></style>
