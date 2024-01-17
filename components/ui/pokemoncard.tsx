import { fetchPokemonByName, fetchPokemons } from '@/lib/api';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from './card';
import Image from 'next/image';

export const PokemonTable = async () => {
	const pokemons = await fetchPokemons(1);
	return (
		<>
			{pokemons.map((pokemon: any) => {
				return (
					// @ts-ignore
					<PokemonCard
						pokemon={pokemon}
						key={pokemon.id}
					/>
				);
			})}
		</>
	);
};

export const PokemonCard = async (pokemon: any) => {
	const currentPokemon = pokemon.pokemon;
	const currentPokemonData = await fetchPokemonByName(currentPokemon.name);
	return (
		<Card className='w-[350px] h-[350px]'>
			<CardHeader>
				<CardTitle>
					<Image
						src={currentPokemonData.sprites.front_default}
						alt={currentPokemon.name}
						width={100}
						height={100}
					></Image>
				</CardTitle>
				<CardDescription>
					<div className=' text-xl'>{`#${currentPokemonData.id} ${currentPokemon.name}`}</div>
				</CardDescription>
				<CardContent></CardContent>
			</CardHeader>
		</Card>
	);
};
