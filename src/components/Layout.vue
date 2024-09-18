<template>
	<main class="max-w-[65rem] px-4 mx-auto" aria-label="Main Content">
		<slot></slot>
	</main>

	<Tooltip tooltip-content="LinkedIn Profile" tooltip-target="linkedInProfile" aria-label="LinkedIn Profile" />

	<Tooltip tooltip-content="GitHub Profile" tooltip-target="githubProfile" aria-label="GitHub Profile" />

	<Tooltip tooltip-content="View Live Site" tooltip-target="viewLiveSite" aria-label="View Live Site" />

	<Tooltip tooltip-content="View on GitHub" tooltip-target="githubRepo" aria-label="View on GitHub" />
</template>

<script setup>
import Tooltip from "./Tooltip.vue";
</script>
