<script>
	import Header from "./components/header.svelte";
	import Footer from "./components/footer.svelte";
	import ViewPerson from "./view/person/view_person.svelte";
	import AddPerson from "./view/person/add_person.svelte";
	import Tabs from "./components/nav.svelte";

	let showModal = false;
	let people = [
		{ name: "Rakib", age: 25, gender: "Male", id: 1 },
		{ name: "Joarder", age: 52, gender: "Male", id: 2 },
		{ name: "Rabita", age: 34, gender: "Female", id: 3 },
	];
	const addPerson = (e) => {
		const person = e.detail;
		people = [person, ...people];
		activeTab = "View Person";
	};

	let tabItems = ["View Person", "Add Person"];
	let activeTab = "Add Person";

	const changeTab = (e) => {
		activeTab = e.detail;
		console.log(e.detail);
	};
</script>

<!-- header -->
<Header title="Welcome To Svelte" />
<main>
	<!-- person table -->
	<Tabs {tabItems} {activeTab} on:changeTab={changeTab} />
	{#if activeTab == "View Person"}
		<ViewPerson
			{people}
			{showModal}
			on:click={() => {
				showModal = !showModal;
			}}
		>
			<slot />
		</ViewPerson>
	{:else}
		<AddPerson on:addPerson={addPerson} />
	{/if}
</main>
<!-- footer -->
<Footer />

<style>
	main {
		text-align: center;
		max-width: 960px;
		padding: 0;
		margin: 40px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
