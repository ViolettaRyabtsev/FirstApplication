import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from "@frontendmasters/pet"
import useDropdown from "./useDropdown";
const SearchParams = () => {
    const [location, setLocation] = useState("Where are you going?");
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds)
    // const [animal, setAnimal] = useState('dog');
    // const [breed, setBreed] = useState("");
    useEffect(() => {
        setBreeds([]);
        setBreed(" ")
        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
            setBreeds(breedStrings)
        }, console.error);
    }, [animal, setBreed, setBreeds]);
    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeHolder="location"
                        onChange={event => setLocation(event.target.value)}
                    />
                </label>

                <AnimalDropdown />
                <BreedDropdown />

                <button>Submit</button>
            </form>

        </div>
    )
}

export default SearchParams;