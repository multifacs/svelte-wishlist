<script>
	import 'todomvc-app-css/index.css';
	import { onMount } from 'svelte';

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex > 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	import jsonItems from './items.json';

	let currentFilter = 'all';
	let items = [];
	let displayedItems = [];
	let usedIndices = new Set();

	try {
		items = jsonItems.items;
		shuffle(items);
	} catch {
		items = [];
	}

	$: try {
		localStorage.setItem('todos-svelte', JSON.stringify(items));
	} catch {
		// noop
	}

	// $: shuffle(filtered)

	const updateView = () => {
		currentFilter = 'all';
		if (location.hash === '#/active') {
			currentFilter = 'active';
		} else if (location.hash === '#/completed') {
			currentFilter = 'completed';
		}
	};

	// Добавляем функцию для генерации случайной высоты
	function getRandomHeight() {
		return Math.floor(Math.random() * 30) - 50; // случайное смещение от -50 до +50 пикселей
	}

    function getRandomItem() {
        if (usedIndices.size >= items.length) {
            usedIndices.clear(); // Сбрасываем, если все товары были показаны
        }

        let availableIndices = Array.from(Array(items.length).keys())
            .filter(index => !usedIndices.has(index));
        
        let randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        usedIndices.add(randomIndex);
        
        return items[randomIndex];
    }

    // Заполняем массив случайными товарами
    function refreshDisplayedItems() {
        displayedItems = Array(items.length).fill(null)
            .map(() => getRandomItem());
    }

    onMount(() => {
        refreshDisplayedItems();
    });

    $: itemOffsets = displayedItems.map(() => getRandomHeight());
</script>

<svelte:window on:hashchange={updateView} />

<header class="header rounding">
	<h1>Nikita's Birthday Wishlist</h1>
	<!-- svelte-ignore a11y-autofocus -->
	<h3 class="new-todo">🤩 Квест 🤩</h3>
	<h4 class="new-todo-info">Всем привет!</h4>
	<h4 class="new-todo-info">На свой ДР я захотел устроить для себя небольшой квест,</h4>
	<h4 class="new-todo-info">в котором организаторами будете непосредственно вы.</h4>
	<h4 class="new-todo-info">Ближайшие пару недель я буду в Питере и хочу</h4>
	<h4 class="new-todo-info">посетить самые разные его уголки, а может даже</h4>
	<h4 class="new-todo-info">и его окрестности (Выборг, Пушкин).</h4>
	<h4 class="new-todo-info">Для этого вы можете заказать мне подарочек</h4>
	<h4 class="new-todo-info">в любой пункт выдачи Озона, а я доберусь до него</h4>
	<h4 class="new-todo-info">и сделаю селфи в этом месте, когда подарочек заберу.</h4>
	<h4 class="new-todo-info">На этой странице список штук, которые я хочу,</h4>
	<h4 class="new-todo-info">но я буду рад совершенно любой мелочи (особенно с волками).</h4>
	<h4 class="new-todo-info">Надеюсь, из этого выйдет интересное приключение.</h4>
	<h4 class="new-todo-info">Чтобы прислать код для получения,</h4>
	<h4 class="new-todo-info">можно написать мне в тг: <a href="https://t.me/MultiFaCs">@MultiFaCs</a></h4>
	<h4 class="new-todo-info">&lt;3</h4>
</header>

<section class="gifts-container">
    {#each items as item, index (item.id)}
        <div 
            class="gift-card"
            style="transform: translateY({itemOffsets[index]}px)"
        >
            <div class="gift-content">
                <div class="gift-image">
                    <img src={item.img} alt="Gift preview" />
                </div>
                <div class="gift-link">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" class="new-todo-info">
                        Ссылка
                    </a>
                </div>
            </div>
        </div>
    {/each}
</section>

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

    .gifts-container {
        width: 666px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        padding: 50px 0px;
    }

    .gift-card {
        width: calc(666px / 3 - 20px);
        height: 300px;
        margin-bottom: 20px;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    .gift-card:hover {
        transform: translateY(calc(var(--random-offset) - 10px)) scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    .gift-content {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .gift-image {
        flex: 1;
        overflow: hidden;
    }

    .gift-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gift-link {
        padding: 15px;
        text-align: center;
        background: rgba(255, 255, 255, 0.9);
    }

    .gift-link a {
        color: #005bff;
        text-decoration: none;
        font-weight: 500;
    }

    .gift-link a:hover {
        text-decoration: underline;
    }
</style>
