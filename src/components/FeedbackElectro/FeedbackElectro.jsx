import React from 'react'
import './FeedbackElectro.css'

const FeedbackElectro = ({ feedbackTier, feedback }) => {
  return (
    <div className='feedback-container'>
        <h2>{feedbackTier}</h2>
        <p>{feedback}</p>
    </div>
  )
}

export default FeedbackElectro
