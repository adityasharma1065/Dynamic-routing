import { useLocation, useNavigate,useParams } from "react-router-dom"


const Listitem = () => {
    const navigate=useNavigate();
    const params=useParams();
    const location=useLocation();
    console.log(location);
    
    return (
      <div>
          <h1>{params.i}</h1>
          <button onClick={()=>{navigate(-1)}}> back </button>
      </div>
    )
}

export default Listitem