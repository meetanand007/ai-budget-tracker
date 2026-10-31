import Step from './Step'
import './HowItWorks.css'

const steps = [
  { title: 'Sign up', text: 'Create a free account with your email. It takes under a minute.' },
  { title: 'Add your spending', text: 'Log your income and expenses, then set a budget for each category.' },
  { title: 'Get insights', text: 'Ask the AI where your money went and what to change next month.' },
]

function HowItWorks() {
  return (
    <section className="how" id="how-it-works">
      <h2>How it works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <Step
            key={step.title}
            number={index + 1}
            title={step.title}
            text={step.text}
          />
        ))}
      </div>
    </section>
  )
}

export default HowItWorks