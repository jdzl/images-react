import React, { useState } from 'react'


export default (props) => {

  const [val, setVal] = useState('')

  const onFormSubmit = e => {
    e.preventDefault()
    props.onSubmit(val)
  }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search photos</label>
          <input type="text" value={val} onChange={e => setVal(e.target.value)} />
        </div>
      </form>
    </div>
  )
}
