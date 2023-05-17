import "./PlaceCard.scss"

function PlaceCard({name, rating, address, photoRef }) {
    return (
        <div className="card">
            <h1 className="card__name">{name}</h1>
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=AIzaSyDtF6_spNsgvJGhTviepX9IkbZRYECwl9o`} alt="place" className="card__photo" />
            <p className="card__rating">{rating}</p>
            <p className="card__location">{address}</p>
        </div>
    )
}

export default PlaceCard