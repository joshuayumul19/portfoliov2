<template>
	<div class="mb-32" v-for="experience in experiences" data-aos="fade-down">
		<div>
			<h2 class="lg:text-4xl font-bold md:text-2xl">{{ experience.position }}</h2>
			<div class="my-5">
				<p>{{ experience.description }}</p>
			</div>
			<div class="my-5">
				<p><strong>Key Responsibilities:</strong></p>
				<ul class="pl-5 mt-5 list-[circle]">
					<li class="mt-3" v-for="responsibility in experience.responsibilities">
						{{ responsibility }}
					</li>
				</ul>
			</div>
			<div class="flex flex-wrap gap-6">
				<p class="text-gray-500"># {{ experience.companyName }}</p>
				<p class="text-gray-500"># {{ experience.duration }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const experiences = [
	{
		description:
			"As a Associate Software Engineer, I am responsible for designing, developing, testing, and maintaining high-quality front-end software solutions. I play a key role in the Customizer Project, ensuring that new features are implemented effectively and any bugs are promptly addressed. My expertise in user interface (UI) design and development allows me to create and convert mockups that align with the best user experience and coding practices.",
		duration: "August 2023 - September 2024",
		companyName: "Qstrike Innovations PHILS.,OPC",
		position: "Associate Software Engineer",
		responsibilities: [
			"Develop, test, and maintain software for front-end projects.",
			"Implement new features and bug fixing for the Customizer Project.",
			"Mockup Creation of a User Interface line with the best User Experience for the Customizer Project.",
			"Mockup Conversion of a User Interface made with best code practice.",
			"Collaborate with other developers for the Customizer project.",
			"Mockup Conversion of a User Interface made with best code practice.",
			"Stay updated on software development technologies and best practices.",
			"Write high-quality, efficient, and maintainable code for Customizer projects.",
			"Participate in code reviews and offer constructive feedback.",
			"Contribute to improving software development processes and other projects.",
		],
	},
	{
		description:
			"During my internship as a Frontend Developer, I had the opportunity to develop my skills in creating visually appealing and user-friendly web interfaces. I collaborated closely with fellow interns, software engineers, UX designers, and developers to bring design concepts to life and enhance user experience.",
		duration: "March 2023 – June 2023",
		companyName: "Qstrike Innovations PHILS.,OPC",
		position: "Front-End Developer Intern",
		responsibilities: [
			"Create visually appealing and user-friendly web interfaces.",
			"Collaborate with fellow interns and software engineers, including UX designers and developers.",
			"Generate wireframes, prototypes, and design drafts using Figma, applying best design practices.",
			"Transform UI designs into responsive and interactive web pages using HTML, CSS, and JavaScript.",
			"Optimize UI for improved speed and scalability.",
			"Participate in design reviews, providing constructive feedback to elevate design quality.",
			"Code and implement designs using HTML, CSS, JavaScript, and frameworks like Bootstrap, Tailwind CSS, and UIKit.",
		],
	},
];
</script>
