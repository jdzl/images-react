import React, { Component ,createRef } from 'react' 

class ImageCard extends Component {
  imgRef = createRef()
  state = {
    span: 0
  }
  componentDidMount = () => this.imgRef.current.addEventListener('load', this.setSpan)

  setSpan = () => {
    const height = this.imgRef.current.clientHeight

    const span = Math.ceil(height / 10)

    this.setState({ span })
  }
  render() {
    const { description, urls } = this.props.image 

    return (
      <div style={{ gridRowEnd: `span ${this.state.span}`, position: 'relative' }}>
        <img ref={this.imgRef} alt={description} src={urls.regular} />      
      </div>
    ) 
  }
}
export default ImageCard 
