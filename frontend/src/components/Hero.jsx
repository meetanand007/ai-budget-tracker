import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>Your money, finally making sense.</h1>
        <p>
          Log what you spend, set budgets and savings goals, and let an AI
          tell you where your money actually went.
        </p>
        <div className="hero-buttons">
          <a href="#signup" className="btn btn-lemon">Get started free</a>
          <a href="#how-it-works" className="btn btn-white">See how it works</a>
        </div>
      </div>

      <div className="hero-card">
        <p className="card-label">Opesora AI</p>
        <p>Food is up 30% this week. Skipping two takeout orders gets you back on budget.</p>
        <div className="meter">
          <div className="meter-fill"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero