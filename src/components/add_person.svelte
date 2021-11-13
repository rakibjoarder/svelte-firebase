<script>
	let name;
	let age;
	let gender;
	const onSubmit = () => {
		console.log(name, age, gender);
	};
</script>

<main>
	<div>
		<form on:submit|preventDefault={onSubmit}>
			<input
				type="text"
				name="Name"
				bind:value={name}
				placeholder="Name"
			/><br />
			<input
				type="number"
				name="Age"
				bind:value={age}
				placeholder="Age"
			/><br />
			<select name="gender" bind:value={gender}>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
			</select>
			<input type="submit" /><br />
		</form>
	</div>
</main>

<style>
</style>
