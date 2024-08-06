import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
  const { currentValue } = useOutletContext();
  return (
    <div>
      <h3 className="host-van-price">${currentValue.price}<span>/day</span></h3>
    </div>
  )
}
