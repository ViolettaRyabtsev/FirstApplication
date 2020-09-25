import React, { useState } from 'react';

const SearchParams = () => {
    const [location, setLocation] = useState("Where are you going?")

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location"
                        value={location}
                        placeHolder="location"
                        onChange={event => setLocation(event.target.value)} />
                </label>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default SearchParams;