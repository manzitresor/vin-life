import { Link, Outlet  } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
     <Link to="/host/income">Income</Link>
          <Link to="/host/reviews">Reviews</Link>
     <Outlet />
    </>
  )
}
