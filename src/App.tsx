import React from 'react';

function App(): JSX.Element {
	const [currentScore, setCurrentScore] = useState(0);
	const [highestScore, setHighestScore] = useState(0);
	const [cards, setCards] = useState(cardsData);
	const [clickedCardsIds, setClickedCardsIds] = useState(new Set<number>());

	function shuffle(array: Card[]): Card[] {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	function updateHighestScore(): void {
		if (currentScore >= highestScore) {
			setHighestScore(highestScore + 1);
		}
	}

	function resetGame(): void {
		setClickedCardsIds(new Set<number>());
		setCurrentScore(0);
	}

	function handleCardClick(id: number): void {
		if (clickedCardsIds.has(id)) {
			resetGame();
		} else {
			setClickedCardsIds(new Set([...clickedCardsIds, id]));
			setCurrentScore(currentScore + 1);
			updateHighestScore();
		}

		setCards(shuffle([...cards]));
	}
	return (
		<div>
			<h1>Hi</h1>
			<p>test</p>
		</div>
	);
}

export default App;
