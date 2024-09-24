<template>
	<section aria-labelledby="about-content" role="region" aria-describedby="about-description">
		<p class="absolute -mt-36" id="about"></p>
		<h3 id="about-heading" class="text-xl font-semibold mb-3">About Me</h3>
		<hr class="mt-5 mb-10" />
		<div class="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-6 items-center" data-aos="fade-down">
			<div>
				<p id="about-description" class="leading-8">
					Hey, I'm Joshua Yumul! I'm a web developer and software engineer who thrives on
					<strong> learning new tech skills </strong>. I love exploring the digital world, coding websites, and crafting digital magic. <strong> Constantly learning is my thing </strong>—it's like unlocking superpowers to create awesome, user-friendly online experiences.
				</p>

				<p class="my-5">Here are the few technology stacks I've been working with:</p>
				<div class="grid grid-cols-2 md:grid-cols-3 gap-2">
					<p v-for="techStack in techStacks" class="text-gray-500">
						<span class="text-black" v-if="techStack.icon">
							<font-awesome-icon :icon="'fa-brands ' + techStack.icon" size="lg" />
						</span>
						<span class="text-black" v-else>
							<font-awesome-icon icon="fa-solid fa-bug" size="lg" />
						</span>
						{{ techStack.name }}
					</p>
				</div>
			</div>
			<div>
				<img src="/profile-picture.jpg" alt="Profile Picture of Joshua Yumul" class="rounded-full mx-auto" width="300" />
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import data from "@/../data.json";

const techStacks = ref([]);

onMounted(() => {
	techStacks.value = data.techStacks;
});
</script>

<style lang="scss" scoped></style>
