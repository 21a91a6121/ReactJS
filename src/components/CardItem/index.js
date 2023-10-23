// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imageUrl, className} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <img src={imageUrl} alt={title} className="card-img" />
      </div>
    </li>
  )
}

export default CardItem
