import React from 'react'
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Question = ({ question }) => {
    const { push } = useHistory();

    const handleDelete = e => {
        axiosWithAuth()
            .delete(`/questions/${question.questions_id}`)
            .then(res => {
                window.location.reload()
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='question'>
            <h2 className='questionBody'>Question: {question.question}</h2>
            <button onClick={() => push(`/edit-question/${question.question_id}`)}>Edit Question</button>
            <button onClick={handleDelete}>Delete Question</button>
        </div>
    )
}

export default Question;
