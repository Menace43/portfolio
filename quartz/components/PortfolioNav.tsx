import { QuartzComponent, QuartzComponentConstructor } from "./types"

function PortfolioNav() {
  return (
    <nav class="portfolio-nav">

      <a class="portfolio-logo" href="/portfolio/">
        JOEL<span>.</span>
      </a>

      <div class="portfolio-nav-links">

        <a href="/portfolio/">
          Home
        </a>

        <a href="/portfolio/Artificats/">
          Artifacts
        </a>

        <a href="/portfolio/about/">
          About
        </a>

        <a href="/portfolio/contact/">
          Contact
        </a>

      </div>

    </nav>
  )
}

PortfolioNav.css = `
.portfolio-nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.portfolio-logo {
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  text-decoration: none !important;
  color: var(--dark) !important;
}

.portfolio-logo span {
  opacity: 0.45;
}

.portfolio-nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.portfolio-nav-links a {
  text-decoration: none !important;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.65;
  transition: opacity 0.2s ease;
}

.portfolio-nav-links a:hover {
  opacity: 1;
}

@media all and (max-width: 800px) {
  .portfolio-nav {
    padding: 1rem;
  }

  .portfolio-nav-links {
    gap: 1rem;
  }

  .portfolio-nav-links a {
    font-size: 0.7rem;
  }
}
`

export default (() => PortfolioNav) satisfies QuartzComponentConstructor