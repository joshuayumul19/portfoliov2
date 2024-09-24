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
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import data from "@/../data.json";

const modules = [Navigation, Pagination, Mousewheel, Keyboard, Autoplay];
const projects = ref([]);

onMounted(() => {
	projects.value = data.projects;
});
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
