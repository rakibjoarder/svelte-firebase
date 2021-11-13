<script>
	import Header from "./components/header.svelte";
	import Footer from "./components/footer.svelte";
	import Modal from "./components/modal.svelte";
	import AddPerson from "./components/add_person.svelte";

	let showModal = false;

	let people = [
		{ name: "Rakib", age: 25, gender: "Male", id: 1 },
		{ name: "Joarder", age: 52, gender: "Male", id: 2 },
		{ name: "Rabita", age: 34, gender: "Female", id: 3 },
	];

	const onDelete = (id) => {
		console.log(id);
		people = people.filter((person) => person.id != id);
	};
	const onReset = () => {
		people = [
			{ name: "Rakib", age: 25, gender: "Male", id: 1 },
			{ name: "Joarder", age: 52, gender: "Male", id: 2 },
			{ name: "Rabita", age: 34, gender: "Female", id: 3 },
		];
	};
</script>

<Modal
	{showModal}
	on:click={() => {
		console.log("asd");
		showModal = !showModal;
	}}
>
	<AddPerson />
</Modal>

<Header title="Welcome To Svelte" />
<main>
	<div>
		<button
			on:click={() => {
				showModal = !showModal;
			}}>Show Modal</button
		>
		<table>
			<tr>
				<th>Name</th>
				<th>Gender</th>
				<th>Age</th>
				<th>Action</th>
			</tr>

			{#each people as person}
				<tr>
					<td>{person.name}</td>
					<td>{person.gender}</td>
					<td>{person.age}</td>
					<button
						on:click={() => {
							onDelete(person.id);
						}}><i class="glyphicon glyphicon-thumbs-up" /></button
					>
				</tr>
			{:else}
				<div>
					<p>Empty Table</p>
					<button
						on:click={() => {
							onReset();
						}}>Load Again</button
					>
				</div>
			{/each}
		</table>
	</div>
</main>
<Footer />

<style>
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}
	td,
	th {
		border: 1px solid #dddddd;
		text-align: center;
		padding: 8px;
	}
	tr:nth-child(even) {
		background-color: black;
		color: white;
	}
	div {
		background-color: rgb(252, 252, 252);
	}

	main {
		text-align: center;
		padding: 0;
		margin: 0;
	}

	/* @media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>
