import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">Opesora</div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
      <p className="footer-note">Opesora gives suggestions, not professional financial advice.</p>
      <p className="footer-note">© {year} Opesora</p>
    </footer>
  )
}

export default Footer