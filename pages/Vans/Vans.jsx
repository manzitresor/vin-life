import React from "react"
import { Link,useSearchParams } from "react-router-dom"

export default function Vans() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [vans, setVans] = React.useState([]);
    const typeFilter = searchParams.get("type");

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const searchFilter = typeFilter ? vans.filter((van)=> van.type === typeFilter) : vans

    const vanElements = searchFilter.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    className="van-type simple"
                    onClick={()=>handleFilterChange("type","rugged")}
                    >
                        rugged
                </button>
                <button 
                    className="van-type simple"
                    onClick={()=>handleFilterChange("type","luxury")}
                    >
                        luxury
                </button>
                <button 
                    className="van-type simple"
                    onClick={() =>handleFilterChange("type", "simple")}
                    >
                        simple
                </button>
                { 
                typeFilter ? (
                    <button 
                    className="van-type simple"
                    onClick={()=>handleFilterChange("type",null)}
                    >
                        clear
                </button>
                ) : null
                
                }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}