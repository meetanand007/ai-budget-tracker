function Step(props) {
  return (
    <div className="step">
      <span className="step-number">{props.number}</span>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Step