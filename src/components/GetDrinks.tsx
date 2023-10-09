import React, { useState } from 'react';
import {type Drink } from '../interface/drink';


const GetDrinks = () => {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState<Drink[] | null>(null);

    const handleSearch = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then(response => response.json())
            .then(data => setData(data.drinks))
            .catch(error => console.error("Error fetching data", error));
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <input
                className='p-2 w-80'
                placeholder='Ingresa aquí el nombre del coctel...'
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='bg-purple-400 w-40 rounded p-2 mt-2 text-black font-bold' onClick={handleSearch}>Buscar</button>
            {data && (
                <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center'>
                    {data.map((drink, index) => (
                        <span key={index}>
                            <h2 className="text-2xl">{drink.strDrink}</h2>
                            <img className="rounded" src={drink.strDrinkThumb} alt="{drink.strDrink}" />
                            <h3 className="text-xl mt-3">Ingredients:</h3>
                            <div className="flex flow-row gap-2 mt-2 leading-3 flex-wrap">
                                <p>{drink.strIngredient1}</p>
                                <p>{drink.strIngredient1}</p>
                                <p>{drink.strIngredient2}</p>
                                <p>{drink.strIngredient3}</p>
                                <p>{drink.strIngredient4}</p>
                                <p>{drink.strIngredient5}</p>
                                <p>{drink.strIngredient6}</p>
                                <p>{drink.strIngredient7}</p>
                                <p>{drink.strIngredient8}</p>
                                <p>{drink.strIngredient9}</p>
                                <p>{drink.strIngredient10}</p>
                                <p>{drink.strIngredient11}</p>
                                <p>{drink.strIngredient12}</p>
                                <p>{drink.strIngredient13}</p>
                                <p>{drink.strIngredient14}</p>
                                <p>{drink.strIngredient15}</p>
                            </div>
                            <h3 className="text-xl mt-2">Instructions:</h3>
                            <p>{drink.strInstructions}</p>
                            <h3 className="text-xl mt-2">Recommended Glass:</h3>
                            <p>{drink.strGlass}</p>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GetDrinks;

