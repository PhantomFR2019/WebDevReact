// Hi there! This is the heart of my React practice project.
// Here, I share my favorite browsers.
// Feel free to explore and let me know what you think!

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'

// My personal browser recommendations and reasons
const browserInfos = [
  {
    title: "Google Chrome",
    reason: "Chrome is fast, widely supported, and has a huge extension library. It's great for both casual and power users.",
    img: "/Images/GoogleChrome.webp"
  },
  {
    title: "Microsoft Edge",
    reason: "Edge is built on Chromium, offers great performance, and has unique features like Collections and vertical tabs.",
    img: "/Images/MicrosoftEdge.webp"
  },
  {
    title: "Yandex",
    reason: "Yandex Browser is secure, has a built-in turbo mode for slow connections, and integrates well with Russian services.",
    img: "/Images/YandexBrowser.webp"
  }
]

// This function controls which browser info is shown in the main section
function App() {
  const [current, setCurrent] = useState(0)

  // Go to the next browser in my list
  const nextBrowser = () => {
    setCurrent((prev) => (prev + 1) % browserInfos.length)
  }

  // Go to the previous browser in my list
  const prevBrowser = () => {
    setCurrent((prev) => (prev - 1 + browserInfos.length) % browserInfos.length)
  }

  return (
    <div className="center-container">
      <div className="App">
        <Header />
        <Gallery />
        <main>
          {/* Show the current browser's logo, name, and reason */}
          <img
            src={browserInfos[current].img}
            alt={browserInfos[current].title}
            style={{ width: "80px", marginBottom: "16px" }}
          />
          <h2>{browserInfos[current].title}</h2>
          <p>{browserInfos[current].reason}</p>
          {/* Arrow buttons to switch between browsers */}
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "16px" }}>
            <button className="arrow-btn" onClick={prevBrowser} aria-label="Previous">&#8592;</button>
            <button className="arrow-btn" onClick={nextBrowser} aria-label="Next">&#8594;</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
