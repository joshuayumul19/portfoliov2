<template>
	<section data-aos="fade-down" aria-labelledby="hero-content" role="region" aria-describedby="hero-description">
		<div class="h-screen flex items-center -mt-20">
			<div>
				<h1 class="font-bold lg:text-6xl md:text-5xl text-5xl md:text-left text-center tracking-wider">Hello there, I'm Joshua!</h1>
				<p class="md:!leading-[3rem] lg:text-3xl md:text-2xl text-lg my-10 md:text-left text-center tracking-wide">I am a passionate software professional driven by an enthusiasm for learning and a commitment to excellence.</p>
				<div class="flex items-center gap-10 md:justify-start justify-center">
					<a data-tooltip-target="linkedInProfile" href="https://www.linkedin.com/in/joshua-yumul-787518260/" target="_blank" rel="noopener noreferrer" class="p-2 hover:bg-slate-200 rounded" aria-label="LinkedIn Profile">
						<font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
					</a>
					<a data-tooltip-target="githubProfile" href="https://github.com/joshuayumul19" target="_blank" rel="noopener noreferrer" class="p-2 hover:bg-slate-200 rounded" aria-label="GitHub Profile">
						<font-awesome-icon icon="fa-brands fa-github" size="2xl" />
					</a>
				</div>
				<div class="animate-bounce absolute left-0 right-0 bottom-10 mx-auto w-4">
					<a href="#projects" aria-label="Scroll to Projects Section">
						<font-awesome-icon icon="fa-solid fa-circle-down" size="2xl" />
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>
