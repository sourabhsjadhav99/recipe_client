import React from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { useState } from "react";
import axios from 'axios';


const Form = () => {
    const [data, setData] = useState({
        title:"",
        image: "",
        author: "",
        ingradients: "",
        directions: "",
    });
    let navigate = useNavigate()
   
    

   

    let postData = () => {
        let formData = new FormData()
        formData.append("title", data.title)
        formData.append("image", data.image);
        formData.append("author", data.author)
        formData.append("ingradients", data.ingradients)
        formData.append("directions", data.directions)


        let config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        axios.post('https://recipe-38wu.onrender.com/api/newrecipe', formData, config)
            .then(function (response) {
                navigate("/display")
            })
            .catch(function (error) {
                console.log(error);
            });
    console.log(data)

    }


    let submitHandler = (e) => {
        e.preventDefault()
        if (data.title, data.ingradients, data.directions, data.author) {
            postData()

        } else {
            alert("All fields required")
        }



    }
    return (
        <div id="form-main-container">
            <form className="form-container" onSubmit={submitHandler}>

                <div>
                    <input type="text"
                        className="description-box" placeholder="Title" onChange={(e) => {
                            setData({ ...data, title: e.target.value })
                        }} />
                </div>
                <div>
                    <input type="text"
                        className="description-box" placeholder="Author" onChange={(e) => {
                            setData({ ...data, author: e.target.value })
                        }} />
                </div>
                <div>
                    <input type="file" id="formFile"
                        name="image"
                        onChange={(e) => {
                            setData({ ...data, image: e.target.files[0] });
                        }} />
                </div>
                {/* ------ */}
                <div>
                    <input type="text" className="description-box" placeholder="Ingradients" onChange={(e) => {
                        setData({ ...data, ingradients: e.target.value })
                    }} />
                </div>
                <div>
                    <input type="text" className="description-box" placeholder="Recipe Directions" onChange={(e) => {
                        setData({ ...data, directions: e.target.value })
                    }} />
                </div>
                {/* ------ */}
                <button id="button" type="submit" >Add Recipe</button>
            </form>
        </div>
    );
};

export default Form;
