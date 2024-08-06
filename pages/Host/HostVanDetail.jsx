import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function HostVanDetail() {
  const { id } = useParams();
const [currentValue,setCurrentValue] = useState(null)
  useEffect(()=> {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(result => setCurrentValue(result.vans[0]))
  },[])

  if(!currentValue) {
    return <h1>Loading...</h1>
  }
  return (
    <>
    <section className="host-van-detail-layout-container">
         <Link
                to=".."
                relative = 'path'
                className="back-button"
            >&larr; <span>Back to all vans</span>
            </Link>
        <div className="host-van-detail">
          <img src={currentValue.imageUrl} />
          <i className={`van-type van-type-${currentValue.type}`}>${currentValue.type}</i>
          <h3>{currentValue.name}</h3>
          <h4>${currentValue.price}/day</h4>
        </div>
    </section>
    </>
  )
}
