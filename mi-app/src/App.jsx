import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [videojuegos, setVideojuegos] = useState([
    {
      id: 1,
      title: "Cyberpunk 2077",
      image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
      category: "RPG/Acción",
      price: 29990,
      description: "Videojuego de rol de acción en mundo abierto ambientado en el futuro distópico de Night City."
    },
    {
      id: 2, 
      title: "The Witcher 3: Wild Hunt",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
      category: "RPG/Fantasía",
      price: 24990,
      description: "Aventura épica de fantasía con Geralt de Rivia en un mundo vasto y detallado."
    },
    {
      id: 3,
      title: "Elden Ring",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg",
      category: "RPG/Acción",
      price: 54990,
      description: "Videojuego de rol de acción desarrollado por FromSoftware con un mundo abierto masivo."
    },
    {
      id: 4,
      title: "God of War Ragnarök",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/0110/4xJ8XB3biUdQ4TVyYY6P3NwD.png",
      category: "Acción/Aventura",
      price: 39990,
      description: "Kratos y Atreus se embarcan en un viaje épico a través de los Nueve Reinos."
    },
    {
      id: 5,
      title: "Horizon Forbidden West",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/4xJ8XB3biUdQ4TVyYY6P3NwD.png",
      category: "RPG/Aventura",
      price: 32990,
      description: "Explora un mundo post-apocalíptico lleno de máquinas y misterios."
    }
  ])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="nav-left">
            {/* Logo izquierda */}
            <div className="logo-main">🎮 STEAMLITE</div>
          </div>

          {/* Menú central */}
          <div className={`nav-center ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li>Inicio</li>
              <li>Acción</li>
              <li>RPG</li>
              <li>Aventura</li>
              <li>Estrategia</li>
              <li>Ofertas</li>
            </ul>
          </div>

          {/* Botones derecha */}
          <div className="nav-right">
            <button className="search-btn">
              <svg viewBox="0 0 24 24" className="search-icon">
                <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/>
              </svg>
            </button>
            <button className="cart-btn">
              <svg viewBox="0 0 24 24" className="cart-icon">
                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
              </svg>
            </button>
            <button className="profile-btn">
              <svg viewBox="0 0 24 24" className="profile-icon">
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/>
              </svg>
            </button>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <section className="hero" style={{backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"}}>
        <div className="hero-content">
          <h1 className="hero-title">Los mejores videojuegos te esperan</h1>
          <p className="hero-description">
            Descubre una amplia selección de videojuegos para todas las plataformas
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explorar Juegos</button>
            <button className="btn btn-secondary">Ver Ofertas</button>
          </div>
        </div>
      </section>

      <main>
        <section className="games-section">
          <h2 className="section-title">Videojuegos Destacados</h2>
          <div className="game-grid">
            {videojuegos.map(game => (
              <div key={game.id} className="game-card">
                <div className="game-image-container">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="game-poster"
                  />
                  <div className="game-overlay">
                    <button className="btn btn-primary">Comprar</button>
                    <button className="btn btn-secondary">Ver Detalles</button>
                  </div>
                </div>
                <div className="game-info">
                  <h3 className="game-title">{game.title}</h3>
                  <p className="game-category">{game.category}</p>
                  <p className="game-description">{game.description}</p>
                  <div className="game-price">${game.price.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App