import { useParams,useNavigate } from 'react-router-dom'

const Nesteditem = () => {
    const params=useParams();
    const navigate=useNavigate()
  return (
    <div>
        <h1>{params.i}</h1>
        <button
        onClick={() => navigate(-1)}
        className="px-4 py-1 bg-black text-white rounded-md mt-4"
      >
        Back
      </button>
    </div>
  )
}

export default Nesteditem
