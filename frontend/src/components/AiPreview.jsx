import { useState } from 'react'
import './AiPreview.css'

const questions = [
  { question: 'Where did my money go this month?', answer: 'Food took 38% of your spending, mostly takeout. Rent was 30%.' },
  { question: 'Can I afford a new phone?', answer: 'Save ₹3,000 a month and you reach your ₹30,000 goal in 10 months.' },
  { question: 'How do I spend less?', answer: 'Two fewer takeout orders a week would save about ₹2,400 a month.' },
]

function AiPreview() {
  const [selected, setSelected] = useState(0)

  return (
    <section className="ai-preview">
      <h2>Ask Opesora anything about your money</h2>
      <p className="ai-note">This is a sample chat. Real answers will use your own data.</p>

      <div className="chat">
        <div className="chips">
          {questions.map((item, index) => (
            <button
              key={item.question}
              className={index === selected ? 'chip active' : 'chip'}
              onClick={() => setSelected(index)}
            >
              {item.question}
            </button>
          ))}
        </div>

        <div className="bubble from-user">{questions[selected].question}</div>
        <div className="bubble from-ai">{questions[selected].answer}</div>
      </div>
    </section>
  )
}

export default AiPreview