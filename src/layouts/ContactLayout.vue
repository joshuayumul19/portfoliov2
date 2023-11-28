<template>
	<section data-aos="fade-down" id="contact" tabindex="-1" aria-labelledby="contact-me-content" role="region" aria-describedby="contact-me-description">
		<p class="absolute -mt-1" id="contact" aria-hidden="true"></p>
		<hr class="mt-16 mb-10" />
		<div class="text-center">
			<h2 class="text-6xl font-bold mt-20" tabindex="0">Don't Be Shy, Say Hi</h2>
			<p class="text-xl mt-10" tabindex="0">Let's connect! I'm eager to hear from you—whether it's about potential projects, job opportunities, or just for a friendly chat. Feel free to reach out anytime; your message matters!</p>
		</div>
		<p class="text-center mt-10 mb-8" tabindex="0">
			<font-awesome-icon icon="fa-solid fa-arrow-down-long" size="2xl" bounce />
		</p>
		<!-- Modal toggle -->
		<div class="text-center">
			<a data-modal-target="contact-form-modal" data-modal-toggle="contact-form-modal" role="button" class="cursor-pointer py-2 px-5 hover:bg-gray-50 animate-pulse" tabindex="0">
				<font-awesome-icon icon="fa-solid fa-paper-plane" size="xl" class="" />
				Shoot me a message
			</a>
		</div>
	</section>

	<!-- Main modal -->
	<div id="contact-form-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-x-hidden fixed top-0 right-0 left-0 z-[99] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
		<div class="relative p-4 w-full max-w-xl max-h-full">
			<!-- Modal content -->
			<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<!-- Modal header -->
				<div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
					<h3 class="text-xl font-semibold text-gray-900 dark:text-white" tabindex="0">Shoot me a message 🤪</h3>
					<button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="contact-form-modal" tabindex="0">
						<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
						</svg>
						<span class="sr-only">Close modal</span>
					</button>
				</div>
				<!-- Modal body -->
				<div class="p-4 md:p-5">
					<form class="space-y-4" @submit.prevent="submitForm">
						<div>
							<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
							<input v-model="senderName" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Joshua Yumul" required />
						</div>
						<div>
							<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
							<input v-model="senderEmail" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="myemail@email.com" required />
						</div>
						<div>
							<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
							<textarea v-model="senderMessage" rows="7" cols="50" name="message" id="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Hello Josh! . . ." required></textarea>
						</div>
						<button type="submit" class="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Send Message</button>
						<div class="text-sm font-medium text-gray-500 dark:text-gray-300">Or you can directly email me at <a href="mailto:joshuayumul19@gmail.com" class="text-gray-700 hover:underline dark:text-gray-500">joshuayumul19@gmail.com</a></div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div v-if="emailSentSuccess" id="email-success" class="z-[99] fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
		<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
			<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
			</svg>
			<span class="sr-only">Check icon</span>
		</div>
		<div class="ms-3 text-sm font-medium" tabindex="0">Email sent successfully</div>
		<button @click="removeNotificationOnCLick" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#email-success" aria-label="Close">
			<span class="sr-only">Close</span>
			<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
			</svg>
		</button>
	</div>

	<div v-else-if="emailSentSuccess === false" id="email-failed" class="z-[99] fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
		<div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
			<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
				<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
			</svg>
			<span class="sr-only">Error icon</span>
		</div>
		<div class="ms-3 text-sm font-normal">
			Email sent unsuccessfully <br />
			<p tabindex="0">{{ errorMessage }}</p>
		</div>
		<button @click="removeNotificationOnCLick" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#email-failed" aria-label="Close">
			<span class="sr-only">Close</span>
			<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
			</svg>
		</button>
	</div>
</template>

<script setup>
import { onMounted } from "vue";
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const senderName = ref("");
const senderEmail = ref("");
const senderMessage = ref("");
let emailSentSuccess = ref();
let errorMessage = ref("");

const submitForm = async () => {
	try {
		var templateParams = {
			name: senderName.value,
			email: senderEmail.value,
			message: senderMessage.value,
		};

		await emailjs.send("gmail_service_id", "emailTemplateId", templateParams);

		// Clear form input values
		senderName.value = "";
		senderEmail.value = "";
		senderMessage.value = "";
		emailSentSuccess.value = true;
	} catch (error) {
		errorMessage.value = error.text;
		emailSentSuccess.value = false;
	}
	removeNotificationAutomatic();
};

const removeNotificationAutomatic = () => {
	setTimeout(() => {
		emailSentSuccess.value = undefined;
	}, 5000);
};
const removeNotificationOnCLick = () => {
	emailSentSuccess.value = undefined;
};
const initEmailJs = () => {
	emailjs.init("ik1k3s6Cr8oPlynTY");
};

onMounted(initEmailJs);
</script>

<style lang="scss" scoped></style>
