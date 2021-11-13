<script>
	let showModal = false;
	export let people;

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

<main>
	<div>
		<div class="tablehead">
			<h3 style="flex: 0%;">Person Table</h3>
			<button class="button" on:click>Add Person</button>
		</div>
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
		background-color: rgb(110, 110, 110);
		color: white;
	}
	.tablehead {
		background-color: rgb(110, 110, 110);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.button {
		float: right;
		color: rgb(255, 255, 255);
		margin: 10px;
		font-weight: bold;
		padding: 5px 10px;
		border: 2px solid rgb(255, 255, 255);
		background-color: orange;
	}
	h3 {
		color: rgb(255, 255, 255);
		font-weight: bold;
	}
	/* @media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>
