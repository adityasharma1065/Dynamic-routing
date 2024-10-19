import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div>
        <Link to="/list/item1">item1</Link><br />
        <Link to="/list/item2">item2</Link><br />
        <Link to="/list/item3">item3</Link>
    </div>
  )
}

export default List