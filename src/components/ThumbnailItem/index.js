/* eslint-disable react/button-has-type */
// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeAltText, changeImage} = props
  const {thumbnailUrl, thumbnailAltText, imageAltText, imageUrl} = imageDetails

  const handleClick = () => {
    changeImage(imageUrl)
    changeAltText(imageAltText)
  }

  return (
    <li onClick={handleClick}>
      <button>
        <img src={thumbnailUrl} className="thumbnail" alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
