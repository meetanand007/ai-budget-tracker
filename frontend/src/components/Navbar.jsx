import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-night/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4 md:px-8">
        <div className="mr-auto font-heading text-2xl font-bold text-fg">Opesora</div>

        <a href="/#features" className="hidden text-muted transition-colors hover:text-fg md:block">Features</a>
        <a href="/#how-it-works" className="hidden text-muted transition-colors hover:text-fg md:block">How it works</a>
        <a href="/#faq" className="hidden text-muted transition-colors hover:text-fg md:block">FAQ</a>
        <Link to="/transactions" className="hidden text-muted transition-colors hover:text-fg md:block">Transactions</Link>
        <Link to="/login" className="hidden text-muted transition-colors hover:text-fg md:block">Log in</Link>

        <Link
          to="/signup"
          className="rounded-xl bg-linear-to-r from-violet to-cyan px-4 py-2 font-semibold text-night transition hover:shadow-[0_0_24px_rgba(139,92,246,0.6)] active:scale-95"
        >
          Sign up
        </Link>
      </nav>
    </header>
  )
}

export default Navbar