import './NewsPage.css'

function NewsPage() {
  return (
    <div className="news-page">
      <header className="news-header">
        <div className="news-header-content">
          <div className="sam-logo">Sam</div>
        </div>
      </header>

      <main className="news-content">
        <section className="article-header">
          <div className="article-meta">
            <span className="category-tag">Onderwijs</span>
            <span className="article-date">23-09-2026</span>
          </div>

          <h1>
            Meer praktijkscholen krijgen geld om leerlingen te helpen
          </h1>
        </section>

        <div className="video-container">
        <iframe
            src="https://app.heygen.com/embeds/cacde21f844340bdba80d24a0d6b9cf9"
            title="Sam vertelt het nieuws"
            frameBorder="0"
            allow="encrypted-media; fullscreen"
            allowFullScreen
        />
        </div>

        <section className="actions-section">
          <h2>Wat wil je nu doen?</h2>

          <div className="action-list">
            <button className="action-button">
              <span>Ik wil meer context</span>
              <span className="arrow">›</span>
            </button>

            <button className="action-button">
              <span>Leg het simpeler uit</span>
              <span className="arrow">›</span>
            </button>

            <a
              className="action-button"
              href="https://nos.nl/artikel/2632137-werkschoenen-of-fiets-meer-praktijkscholen-krijgen-geld-om-leerlingen-te-helpen"
              target="_blank"
              rel="noreferrer"
            >
              <span>Lees het originele artikel</span>
              <span className="arrow">›</span>
            </a>
          </div>
        </section>

        <section className="source-card">
          <div>
            <span className="source-label">BRON</span>
            <strong>NOS</strong>
          </div>

          <a
            href="https://nos.nl/artikel/2632137-werkschoenen-of-fiets-meer-praktijkscholen-krijgen-geld-om-leerlingen-te-helpen"
            target="_blank"
            rel="noreferrer"
          >
            Bekijk artikel ↗
          </a>
        </section>
      </main>
    </div>
  )
}

export default NewsPage