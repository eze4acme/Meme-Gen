import React from "react";
import data from "../data";

export default function Meme() {

    
        const [meme, setMeme] = React.useState({
            topText: '',
            bottomText: '',
            randomImage: "https://i.imgflip.com/1e7ql7.jpg"
        })
        const [allMemeImages, setAllMemeImages] = React.useState(data)

        function getMeme() {
        const dataArray = allMemeImages.data.memes 
        const randomNumber = Math.floor(Math.random() * dataArray.length)
        const url = dataArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme, [name]: value,
        }))
    }
        return(
            <main>
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button 
                        className="form--button"
                    onClick={getMeme}>
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
             
            </main>
        )
    }
        
  