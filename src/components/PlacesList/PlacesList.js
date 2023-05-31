import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils";
import axios from "axios";
import PlaceCard from "../PlaceCard/PlaceCard";
import "./PlacesList.scss"

function PlacesList({ location }) {

    const [places, setPlaces] = useState(null)


    useEffect(() => {
        axios.get(`${BASE_URL}/api/places?location=${location}`)
            .then(response => setPlaces(response.data))
            .catch(error => error)

        }, [location])
        
        if (!places) {
            return <h1>LOADING...</h1>
        }

    return (
        <div className="card-container">
            {
            places.map((place) => {
                const photoRef = place.photos? place.photos[0].photo_reference: 'AZose0l-Co4DshKOZ02PUSJCvHrKJcevzMORshefi5Q6Cu5cZ8TM3X5o-mWZCE8iOoSvFFB5agh2z8Nah7bbb12tlI9PHBKQ_hACKIDPIEa1bOlCprUmcyh7BdsPyUqckgGHSB5VEKWmueRAgnzKcap-sjpEmTRrNGhLVDaLJlr5ghlS6FEp'
                return(
                <PlaceCard
                key={place.reference}
                name = {place.name}
                photoRef = {photoRef}
                rating = {place.rating}
                address = {place.vicinity}
                url ={place.url}
                />
            )})}
        </div>
    )
}

export default PlacesList