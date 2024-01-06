<script>
	import 'todomvc-app-css/index.css';
	import { onMount } from 'svelte';
	import jsonItems from './items.json';

	console.log(jsonItems);

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

	console.log(items);

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
	<h3 class="new-todo">🤩 Все хотелки 🤩</h3>
	<h4 class="new-todo-info">Актуальный адрес до 11-го числа (пункт выдачи):</h4>
	<h4 class="new-todo-info">Н. Новгород, Казанское шоссе, 12к1</h4>
	<h4 class="new-todo-info">Адрес после:</h4>
	<h4 class="new-todo-info">Н. Новгород, Маршала Баграмяна, 1</h4>
</header>

{#if items.length > 0}
	<section class="main">
		<ul class="todo-list">
			{#each filtered as item, index (item.id)}
				<li class:completed={item.completed} class:editing={editing === index}>
					<div class="view">
						<input class="toggle" type="checkbox" bind:checked={item.completed} />
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label>{item.description}</label>
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
				{numActive === 1 ? 'хотелка' : 'хотелок'} осталось (нажатия (пока) мне ничего не отправляют)
			</span>
		</footer>
	</section>
{/if}

<style>
	h1 {
		/* font-family: 'Courier New', Courier, monospace; */
		font-size: 45pt;
		top: -180px;
		color: rgb(162, 230, 255);
		font-family: 'Luckiest Guy', cursive;
		line-height: 40pt;

		-webkit-text-stroke-width: 3px;
		-webkit-text-stroke-color: black;
	}

	.new-todo {
		font-family: 'Caveat', cursive;
		font-size: 35pt;
		height: auto;
		font-weight: 700;
		text-align: center;
		padding: 16px 16px 16px 16px;
	}

	.new-todo-info {
		font-family: 'Caveat', cursive;
		font-size: 20pt;
		text-align: center;
		margin: 10px 10px;
	}

	.todo-list li {
		font-family: 'Caveat', cursive;
		font-size: 25pt;
		height: auto;
		font-weight: 300;
	}
</style>
