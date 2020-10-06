import React, { useState } from 'react';
import { ANIMALS } from "@frontendmasters/pet"
import useDropdown from "./useDropdown";
const SearchParams = () => {
    const [location, setLocation] = useState("Where are you going?");
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds)
    // const [animal, setAnimal] = useState('dog');
    // const [breed, setBreed] = useState("");

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