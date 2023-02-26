import { useParams, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Displayone.css";
function DisplayOne() {
    let [apidata, setapiData] = useState()
    let [displayIngradients, setdisplayIngradients] = useState(false)
    let [displayDirections, setdisplayDirections] = useState(false)
    let { title } = useParams()
    let fetchData = (id) => {
        axios.get(`https://recipe-38wu.onrender.com/api/newrecipe/${title}`)
            .then((data) => {
                setapiData(data.data[0])

            })
    }
    useEffect(() => {
        if (title) {
            fetchData(title)
        }
    }, [])
    return (
        <div className="displayone-container">
            <div className="container1">
                <h2>{apidata.title}</h2>
                <img src={`https://recipe-38wu.onrender.com/images/${apidata.image}`} alt="" />
              
            </div>
            <div className="container2">
                <div>
                <div className="display-data">
                    <button  onClick={() => {
                        setdisplayDirections(!displayDirections)
                    }}>Instructions</button>
                    {displayDirections && <div>{apidata.directions}</div>}
                </div>
                <div className="display-data">
                    <button  onClick={() => {
                        setdisplayIngradients(!displayIngradients)
                    }}>Ingradients</button>
                    {displayIngradients && <div>{apidata.ingradients}</div>}
                </div>
                </div>



                <div>
                    <Link to={-1}>Back</Link>
                </div>
            </div>



        </div>
    )
}

export default DisplayOne
