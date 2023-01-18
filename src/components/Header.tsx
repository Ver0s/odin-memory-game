import React from 'react';

type HeaderProps = {
	currentScore: number;
	highestScore: number;
	title: string;
};

export default function Header({
	currentScore,
	highestScore,
	title,
}: HeaderProps): JSX.Element {
	return (
		<header className="bg-slate-400">
			<div className="mx-auto flex max-w-7xl items-center justify-between py-6 px-2">
				<h1 className="text-xl font-bold">{title}</h1>
				<div className="flex gap-5 text-lg md:gap-10">
					<h3>Current Score: {currentScore}</h3>
					<h3>Highest Score: {highestScore}</h3>
				</div>
			</div>
		</header>
	);
}
