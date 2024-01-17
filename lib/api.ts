import axios from "axios"

const BASE_PATH = 'https://pokeapi.co/api/v2'
const BASE_LIMIT = 20

export const fetchPokemons = async (pagenumber : number) => {
    const pokeData = await axios.get(`${BASE_PATH}/pokemon?page=${pagenumber}&limit=${BASE_LIMIT}`).then((res) => {
        // console.log(res.data.results)
        return res.data.results
    }).catch((err) => {console.error(`Error retrieving Data: ${err}`)})

    return pokeData
}

export const fetchPokemonByName = async (name: string) => {
    const pokemon = await axios.get(`${BASE_PATH}/pokemon/${name}`).then((res) => {
        // console.log(res.data)
        return res.data
    }).catch((err) => {console.error(`Error retrieving Data: ${err}`)})

    return pokemon
}

