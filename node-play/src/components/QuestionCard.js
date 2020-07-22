import React, { useContext } from 'react'
import QuestionContext from '../contexts/QuestionContext'
import Question from './Question'

const QuestionCard = () => {
    const { questionList } = useContext(QuestionContext)
    return (
        <div>
            {questionList.map(question => (
                <Question
                    key={question.id}
                    question={question}
                    className='question'
                />
            ))}
        </div>
    )
}

export default QuestionCard;