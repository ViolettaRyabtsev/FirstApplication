
import React, { Component, useState } from 'react';
import pet from '@frontendmasters/pet'


class Details extends Component {
    state = { loading: true};
    componentDidMount() {
   
        pet.animal(Number(this.props.id))
        .then(({animal}) => {
          
            this.setState({
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city} , ${animal.contact.address.state}`,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
                loading: false

            });
        })
        .catch(err => console.log('we could not fetch anything ', err))

        console.log('state after fetch: ', this.state)
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }

        const { animal, breed, location, description, name } = this.state;
        return (

            <div className="details">
                Are we getting anything
                
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button> Adopt {name} </button>
                    <p>{description}</p>
                </div>

            </div>

        )
    }
};

export default Details