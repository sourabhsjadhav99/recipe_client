import React, { useState, useEffect } from 'react'
import { FaUtensilSpoon, FaPizzaSlice } from 'react-icons/fa'
import axios from 'axios'
import "./display.css";
import { useNavigate, Link } from 'react-router-dom'
function DisplayPage() {
    let [data, setData] = useState([])
    let [searchData, setSearchData] = useState([])
    let [filterVal, setFilterVal] = useState("")
let navigate = useNavigate()

    let fetchData = () => {
        axios.get("https://recipe-38wu.onrender.com/api/newrecipe")
            .then((data) => {
                setData(data.data.data)
                setSearchData(data.data.data)
            })

    }
    useEffect(() => {
        fetchData()
    }, [])


    const handleFilter = (e) => {
        if (e.target.value === "") {
            setData(searchData);
        } else {
            const filterResult = searchData.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setData(filterResult);
        }
        setFilterVal(e.target.value);
    };

    let clickHandler=(title)=>{
        navigate(`/displayone/${title}`)

    }
    return (
        <div id="main-display-container">
            <div id="container1">
                <div id="logo"><span><FaUtensilSpoon /></span><span>Recipe App</span></div>
            </div>
            <div id="container2">
                <div><input
                    placeholder="Search Recipe"
                    value={filterVal}
                    onChange={(e) => {
                        handleFilter(e);
                    }}
                /></div>
                <div id="add-recipe-btn"><Link to="/form"><FaPizzaSlice />New</Link></div>
            </div>
            <div id="container3">
                <h4>All Recipe</h4>
                <div id="img-box">{data.map((data, index) => {
                    return (
                        <button id="images" key={index} className="display-recipe-btn" onClick={()=>{clickHandler(data.title)}}>
                            <div id="title">{data.title}</div>
                            <div><img src={`https://recipe-38wu.onrender.com/images/${data.image}`} alt="" /></div>

                        </button>
                    );
                })}</div>

            </div>
            <div id="logout-btn">
                <Link to="/">Logout</Link>
            </div>

        </div>
    )
}

export default DisplayPage

