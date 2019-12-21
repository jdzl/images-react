import React, { useState } from 'react' 
import SearchBar from './SearchBar' 
import ImageList from './ImageList' 
import Loading from './Loading' 
import unsplash from '../api/unsplash' 

const App = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const onSearchSubmit = async query => {

    setLoading(true)

    const { data } = await unsplash.get('/search/photos', { params: { query } })

    setImages(data.results)
    setLoading(false)
  } 

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      {loading ?
        <Loading /> :
        <ImageList images={images} />
      }
    </div>
  )

}
export default App 
