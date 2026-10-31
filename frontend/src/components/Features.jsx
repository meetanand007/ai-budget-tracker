import './Features.css'

const features = [
  { icon: '💸', title: 'Log transactions', text: 'Add income and expenses in seconds and sort them by category.', color: 'lemon' },
  { icon: '🎯', title: 'Set budgets', text: 'Give each category a monthly limit and watch the bar fill up.', color: 'mint' },
  { icon: '🐷', title: 'Save for goals', text: 'Pick something you want, set a target, and track how close you are.', color: 'white' },
  { icon: '📊', title: 'See the big picture', text: 'A dashboard shows where your money comes from and where it goes.', color: 'lilac' },
  { icon: '🤖', title: 'Ask the AI', text: 'Get plain-English tips on your spending habits, based on your own data.', color: 'coral' },
]

function Features() {
  return (
    <section className="features" id="features">
      <h2>What Opesora does</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div className={'feature-card ' + feature.color} key={feature.title}>
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features