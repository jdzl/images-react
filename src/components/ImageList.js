import style from  './ImageList.module.css'
import React from 'react' 
import ImageCard from './ImageCard' 

const ImageList = ({ images }) => {
  const imagesList = images.map(image => <ImageCard key={image.id} image={image} />)

  return <div className={style.img_list}>{imagesList}</div> 
}

export default ImageList 
