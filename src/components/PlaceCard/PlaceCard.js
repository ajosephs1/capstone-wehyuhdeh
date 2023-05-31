import "./PlaceCard.scss"

function PlaceCard({ name, rating, address, photoRef, url }) {

    function urlEncode(addressString) {
        const encodedChars = [];
        for (let i = 0; i < addressString.length; i++) {
          const char = addressString.charAt(i);
          if (/[\w\-_.~]/.test(char)) {
            encodedChars.push(char);
          } else {
            const charCode = char.charCodeAt(0);
            encodedChars.push('%' + charCode.toString(16).toUpperCase());
          }
        }
        return encodedChars.join('');
      }
      
    return (
        <div className="card">
            <h1 className="card__name">{name}</h1>
            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=AIzaSyDtF6_spNsgvJGhTviepX9IkbZRYECwl9o`} alt="place" className="card__photo" />
            <p className="card__rating">rating: {rating}</p>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${urlEncode(address)}&travelmode=driving`} target='#' className="card__directions">
                <p className="card__location">{address}</p>
            </a>
        </div>
    )
}

export default PlaceCard