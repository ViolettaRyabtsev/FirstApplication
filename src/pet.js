import React from 'react';
export default function Pet({ name, animal, breed, location, media, id }) {
    let hero = "http://placecorgi.com/260/180"
    if (media.length) {

        hero = media[0].small;
    }
    return (
        <a href={`/details/${id}`} className="pet">
            <div className="image-container" >
                <img src={hero} alt={name} />
            </div>
            <div className='info'>
                <h1 id="colorName">  {name.toUpperCase()}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </a>
    );
}

