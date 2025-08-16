// This gallery showcases my top browser picks.
// Click any logo to visit the official site and learn more!

function Gallery() {
  const items = [
    { id: 1, title: 'Google Chrome', src: "/Images/GoogleChrome.webp", url: "https://www.google.com/chrome/" },
    { id: 2, title: 'Microsoft Edge', src: "/Images/MicrosoftEdge.webp", url: "https://www.microsoft.com/edge" },
    { id: 3, title: 'Yandex', src: "/Images/YandexBrowser.webp", url: "https://browser.yandex.com/" },
  ]

  return (
    <section className="gallery">
      <h2>My Recommended Browsers</h2>
      <div className="grid">
        {items.map(item => (
          <div key={item.id} className="gallery-item">
            {/* Each browser logo is a clickable link */}
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.title} />
            </a>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery