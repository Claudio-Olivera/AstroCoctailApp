import type { Coctail } from "../interface/drink";

export async function buscarCocktailPorNombre(nombre:string) {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`,{
        method: 'GET',
    })
    
    const data = await res.json() as Coctail[]
      return data

}