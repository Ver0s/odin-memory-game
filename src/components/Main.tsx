import React from 'react';
import Card from './Card';
import type { Card as CardProps } from '../assets/data/cardsData';

type MainProps = {
	cards: CardProps[];
	onCardClick: (id: number) => void;
};

export default function Main({ cards, onCardClick }: MainProps): JSX.Element {
	return (
		<main className="mx-auto mt-10 grid max-w-7xl grid-cols-auto-fit gap-6 px-2 pb-6 xl:mt-20">
			{cards.map((card) => (
				<Card
					img={card.src}
					title={card.title}
					key={card.id}
					id={card.id}
					onCardClick={onCardClick}
				/>
			))}
		</main>
	);
}
