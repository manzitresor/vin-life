import { useOutletContext } from "react-router-dom"
export default function HostVansPhotos() {
  const { currentValue } = useOutletContext();
  return (
    <div>
       <img src={currentValue.imageUrl} className="host-van-detail-image" />
    </div>
  )
}
