import './index.css'

const ImagesItem = props => {
  const {imageItem, imageTab} = props
  const {id, thumbnailUrl} = imageItem

  const onImageTab = () => {
    imageTab(id)
  }

  return (
    <li className="image-item">
      <button className="button-img" type="button" onClick={onImageTab}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImagesItem
