<template>
	<div class="grid gap-8 grid-cols-1 md:grid-cols-2 mb-32" v-for="project in projects" data-aos="fade-down">
		<div class="">
			<h2 class="lg:text-4xl font-bold md:text-2xl">{{ project.name }}</h2>
			<div class="my-5">
				<p>{{ project.description }}</p>
			</div>
			<div class="flex flex-wrap gap-6">
				<p v-for="techstack in project.techStack" class="text-gray-500">#{{ techstack }}</p>
			</div>
			<div class="flex items-center gap-10 mt-5">
				<a data-tooltip-target="viewLiveSite" :href="project.liveSiteLink" target="_blank" class="p-2 hover:bg-slate-200 rounded">
					<font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" size="lg" />
				</a>
				<a data-tooltip-target="githubRepo" :href="project.githubLink" target="_blank" class="p-2 hover:bg-slate-200 rounded">
					<font-awesome-icon icon="fa-brands fa-github" size="xl" />
				</a>
			</div>
		</div>

		<div>
			<swiper
				:cssMode="true"
				:navigation="true"
				:pagination="{
					clickable: true,
				}"
				:mousewheel="true"
				:loop="true"
				:keyboard="true"
				:modules="modules"
				class="mySwiper rounded-xl outline outline-offset-1 outline-slate-100"
			>
				<swiper-slide v-for="(image, index) in project.images" :key="index">
					<img :src="image" alt="" />
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref } from "vue";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const modules = [Navigation, Pagination, Mousewheel, Keyboard, Autoplay];

const projects = [
	{
		name: "Learning Activities",
		description: "These were the first activities or small project I did when I was learning Website Development, these activities helped me and build my fundamentals in HTML, CSS and Javascript. These are compiled activities to check each activity you can browse them at my Portfolio Version 1",
		techStack: ["HTML", "CSS", "JavaScript"],
		images: ["src/assets/images/activity-1.png", "src/assets/images/activity-1.1.png", "src/assets/images/activity-2.png", "src/assets/images/activity-3.png", "src/assets/images/activity-4.png", "src/assets/images/activity-5.png", "src/assets/images/activity-5.1.png", "src/assets/images/activity-6.png", "src/assets/images/activity-6.1.png", "src/assets/images/activity-6.2.png", "src/assets/images/activity-6.3.png", "src/assets/images/activity-7.png", "src/assets/images/activity-8.png"],
		liveSiteLink: "https://github.com/joshuayumul19",
		githubLink: "https://github.com/joshuayumul19",
	},
	{
		name: "Skywatchh",
		description: "SkyWatchh is an innovative weather application developed using React, designed to provide users with accurate and real-time weather forecasts. With a sleek and user-friendly interface, this app offers comprehensive weather information, ensuring users stay informed about weather conditions wherever they are.",
		techStack: ["React", "TailwindCSS", "OpenWeatherAPI"],
		images: ["src/assets/images/skywatchh-1.png", "src/assets/images/skywatchh-2.png", "src/assets/images/skywatchh-3.png", "src/assets/images/skywatchh-4.png", "src/assets/images/skywatchh-5.png"],
		liveSiteLink: "https://skywatchh.netlify.app/",
		githubLink: "https://github.com/joshuayumul19/skywatch",
	},
	{
		name: "Lista Mona!",
		description: "'Lista Mona,' derived from Filipino, directly translates to 'List It' in English. This app serves as an indispensable tool for organizing thoughts, tasks, and information seamlessly through note-taking functionality.",
		techStack: ["HTML", "CSS", "JavaScript"],
		images: ["src/assets/images/lista-mona-1.png", "src/assets/images/lista-mona-2.png"],
		liveSiteLink: "https://joshuayumul19.github.io/lista-mona/",
		githubLink: "https://github.com/joshuayumul19/lista-mona",
	},
	{
		name: "Portfolio V.1",
		description: "In my first web projects, Portfolio Version 1 is a collection of small things I created using HTML, CSS, and JavaScript. They're like building blocks for websites. I used these tools to make web pages, design how they look, and even add some fun interactive parts. They might not be super fancy, but they're really important because they show how I started to learn about making things on the internet. It's like a beginning point in my journey into this tech world and shows how I'm getting better at it.",
		techStack: ["HTML", "CSS", "JavaScript"],
		images: ["src/assets/images/portfoliov1-1.png", "src/assets/images/portfoliov1-2.png", "src/assets/images/portfoliov1-3.png", "src/assets/images/portfoliov1-4.png", "src/assets/images/portfoliov1-5.png", "src/assets/images/portfoliov1-6.png", "src/assets/images/portfoliov1-7.png"],
		liveSiteLink: "https://joshuayumul19.github.io/Portoflio/",
		githubLink: "https://github.com/joshuayumul19/Portoflio",
	},
	{
		name: "Portfolio V.2",
		description: "Portfolio Version 2 is like an upgraded show of my web projects using Vue.js and Tailwind CSS. Vue.js helps make my portfolio more fun and interactive, while Tailwind CSS makes it look really cool and work well on phones too. It's a big step up for me in understanding how websites work. This version is my way of showing I'm keeping up with the latest tech trends. It's not just about my work but also about how I'm learning to make websites that look awesome and are easy to use.",
		techStack: ["VueJS", "TailwindCSS", "SwiperJS", "EmailJS", "AOS"],
		images: ["src/assets/images/portfoliov2-1.png", "src/assets/images/portfoliov2-2.png", "src/assets/images/portfoliov2-3.png", "src/assets/images/portfoliov2-4.png", "src/assets/images/portfoliov2-5.png", "src/assets/images/portfoliov2-6.png", "src/assets/images/portfoliov2-7.png"],
		liveSiteLink: "https://joshuayumul.netlify.app/",
		githubLink: "https://github.com/joshuayumul19/portfoliov2",
	},
];
</script>

<style lang="scss">
.swiper {
	width: 100%;
	height: 100%;

	& img {
		display: block;
		height: 100%;
		widows: 100%;
		object-fit: cover;
	}
	&-button-prev,
	&-button-next {
		&::after {
			font-size: 30px !important;
			color: gray !important;
		}
	}
	&-pagination-bullet {
		background-color: #9e9dff !important;
	}
}
</style>
