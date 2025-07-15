import { useState, useEffect } from 'react'

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "cover.jpg"
  })
  const [allMemes, setAllMemes] = useState([])

  function handleChange(event) {
    const {name, value} = event.currentTarget
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value
    }))
  }

  function getNewMemeImg(event) {
    event.preventDefault()
    const randomIndex = Math.floor(Math.random() * allMemes.length)
    const randomMeme = allMemes[randomIndex]
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: randomMeme.url
    }))
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => (setAllMemes(data.data.memes)))
  }, [])



  return (
    <main>
      <form className="form" action="">
        <label htmlFor="topText">Top Text
        <input onChange={handleChange} id="topText" name="topText" type="text" placeholder='One does not simply' value={meme.topText} />
        </label>

        <label htmlFor="bottomText">Bottom Text
        <input onChange={handleChange} id="bottomText" name="bottomText" type="text" placeholder='Walk into Mordor' value={meme.bottomText}/>
        </label>

        <button onClick={getNewMemeImg}>Get a new meme image</button>
      </form>
      <div className="meme">
        <img src={meme.imageUrl} alt="" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  )
}

export default Main