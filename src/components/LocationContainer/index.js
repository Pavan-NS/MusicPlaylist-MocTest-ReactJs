import './index.css'

const LocationContainer = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="location-list">
      <div className="location-container">
        <img src={imageUrl} alt={name} className="image" />
        <div className="heading-container">
          <h1 className="heading">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default LocationContainer
