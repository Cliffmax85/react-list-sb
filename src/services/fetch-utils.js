import { checkError, client } from './client';

export async function fetchBands() {
  const response = await client
    .from('bands')
    .select();
  return checkError(response);
}

export async function fetchMovies() {
  const response = await client
    .from('movies')
    .select();
  return checkError(response);
}

export async function fetchPokemon() {
  const response = await client
    .from('pokemon')
    .select();
  return checkError(response);
}

export async function fetchCars() {
  const response = await client
    .from('cars')
    .select();
  return checkError(response);
}