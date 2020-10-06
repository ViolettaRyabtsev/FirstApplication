import React, { useState } from 'react';
import { ANIMALS } from "@frontendmasters/pet"
const SearchParams = () => {
    const [location, setLocation] = useState("Where are you going?")
    const [animal, setAnimal] = useState('dog')
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
                        onChange={event => setLocation(event.target.value)} />
                </label>


                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => {
                            return <option key={animal} value={animal}>{animal}</option>
                        }
                        )}
                    </select>

                </label>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default SearchParams;