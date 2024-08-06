import { useOutletContext } from "react-router-dom";

function HostVansInfo() {
  const { currentValue } = useOutletContext()
  console.log(currentValue)
  return (
    <>
      <section>
            <h4>Name: {currentValue.name}</h4>
            <h4>Category: {currentValue.type}</h4>
            <h4>Description: {currentValue.description}</h4>
            <h4>Visibility: public</h4>
        </section>
    </>
  )
}

export default HostVansInfo
