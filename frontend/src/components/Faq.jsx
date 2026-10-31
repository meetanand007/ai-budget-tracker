import './Faq.css'

const questions = [
  { question: 'Is Opesora free?', answer: 'Yes, Opesora is free to use while we build it.' },
  { question: 'Do I need to connect my bank account?', answer: 'No. You add your own income and expenses, so Opesora never needs your bank login.' },
  { question: 'How does the AI know about my spending?', answer: 'It looks at a summary of the transactions you log, then explains the patterns in plain English.' },
  { question: 'Is the AI giving me financial advice?', answer: 'No. The AI gives suggestions based on your habits. It is not a professional financial advisor.' },
]

function Faq() {
  return (
    <section className="faq" id="faq">
      <h2>Questions, answered</h2>
      {questions.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  )
}

export default Faq