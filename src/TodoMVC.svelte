<script>
	import 'todomvc-app-css/index.css';
	import { onMount } from 'svelte';
	import jsonItems from './items.json'

	console.log(jsonItems)

	const ENTER_KEY = 13;
	const ESCAPE_KEY = 27;

	const active = (item) => !item.completed;
	const completed = (item) => item.completed;

	let currentFilter = 'all';
	let items = [];
	let editing = null;

	try {
		items = jsonItems.items;
	} catch {
		items = [];
	}

	console.log(items)

	$: filtered =
		currentFilter === 'all'
			? items
			: items.filter(currentFilter === 'completed' ? completed : active);

	$: numActive = items.filter(active).length;

	$: numCompleted = items.filter(completed).length;

	$: try {
		localStorage.setItem('todos-svelte', JSON.stringify(items));
	} catch {
		// noop
	}

	const updateView = () => {
		currentFilter = 'all';
		if (location.hash === '#/active') {
			currentFilter = 'active';
		} else if (location.hash === '#/completed') {
			currentFilter = 'completed';
		}
	};

	function remove(index) {
		items = items.slice(0, index).concat(items.slice(index + 1));
	}

	function toggleAll(event) {
		items = items.map((item) => ({
			id: item.id,
			description: item.description,
			completed: event.target.checked
		}));
	}

	function createNew(event) {
		if (event.which === ENTER_KEY) {
			items = items.concat({
				id: crypto.randomUUID(),
				description: event.target.value,
				completed: false,
				thonked: 0
			});
			event.target.value = '';
		}
	}

	function handleEdit(event) {
		if (event.which === ENTER_KEY) event.target.blur();
		else if (event.which === ESCAPE_KEY) editing = null;
	}

	function submit(event) {
		items[editing].description = event.target.value;
		editing = null;
	}

	onMount(updateView);
</script>

<svelte:window on:hashchange={updateView} />

<header class="header rounding">
	<h1>Nikita's Birthday Wishlist</h1>
	<!-- svelte-ignore a11y-autofocus -->
	<input
		class="new-todo rounding"
		on:keydown={createNew}
		placeholder="Все хотелки"
		autofocus
	/>
</header>

{#if items.length > 0}
	<section class="main">
		<input
			id="toggle-all"
			class="toggle-all"
			type="checkbox"
			on:change={toggleAll}
			checked={numCompleted === items.length}
		/>
		<label for="toggle-all">Mark all as complete</label>

		<ul class="todo-list">
			{#each filtered as item, index (item.id)}
				<li class:completed={item.completed} class:editing={editing === index}>
					<div class="view">
						<input class="toggle" type="checkbox" bind:checked={item.completed} />
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label on:dblclick={() => (editing = index)}>{item.description}</label>
						<span class="destroy">{item.thonked}</span>
					</div>

					{#if editing === index}
						<!-- svelte-ignore a11y-autofocus -->
						<input
							value={item.description}
							id="edit"
							class="edit"
							on:keydown={handleEdit}
							on:blur={submit}
							autofocus
						/>
					{/if}
				</li>
			{/each}
		</ul>

		<footer class="footer">
			<span class="todo-count">
				<strong>{numActive}</strong>
				{numActive === 1 ? 'item' : 'items'} left
			</span>

			<ul class="filters">
				<li>
					<a class:selected={currentFilter === 'all'} href="#/">All</a>
				</li>
				<li>
					<a class:selected={currentFilter === 'active'} href="#/active">Active</a>
				</li>
				<li>
					<a class:selected={currentFilter === 'completed'} href="#/completed">Completed</a>
				</li>
			</ul>
		</footer>
	</section>
{/if}

<style>
	h1 {
		/* font-family: 'Courier New', Courier, monospace; */
		font-size: 35pt;
		top: -120px;
		color: rgb(43, 174, 222);
	}

	.todo-list li .destroy {
		display: block;
		position: absolute;
		top: 0;
		right: 10px;
		bottom: 0;
		width: 40px;
		height: 40px;
		margin: auto 0;
		font-size: 30px;
		color: #949494;
		transition: color 0.2s ease-out;
	}

	.todo-list li .destroy:hover,
	.todo-list li .destroy:focus {
		color: #c18585;
	}

	.todo-list li .destroy:after {
		content: ' ';
		display: block;
		height: 100%;
		line-height: 1.1;
	}

	.todo-list li:hover .destroy {
		display: block;
	}

</style>
