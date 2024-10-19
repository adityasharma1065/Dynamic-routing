import React from 'react'
import { Link , Outlet} from 'react-router-dom'

const Nested = () => {
  return (
    <>
    <br />
    <Link to={"/nested/nesteditem1"}>Nest 1</Link><br />
    <Link to={"/nested/nesteditem2"}>Nest 2</Link><br />
    <Link to={"/nested/nesteditem3"}>Nest 3</Link>
    <hr className="my-6" />
      <Outlet />
    </>
  )
}

export default Nested