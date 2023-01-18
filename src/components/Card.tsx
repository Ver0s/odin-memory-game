import React from 'react';

type CardProps = {
	title: string;
	img: string;
	id: number;
	onCardClick: (id: number) => void;
};

export default function Card({
	title,
	img,
	onCardClick,
	id,
}: CardProps): JSX.Element {
	return (
		<button
			className="rounded-xl bg-slate-400 transition-shadow duration-200 hover:shadow-md"
			onClick={() => {
				onCardClick(id);
			}}
		>
			<img src={img} alt={title} />
			<h3 className="p-2 font-medium text-white">{title}</h3>
		</button>
	);
}
