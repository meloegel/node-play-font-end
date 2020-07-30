import React, { useEffect, useContext } from 'react'
import QuestionCard from './QuestionCard'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import QuestionContext from '../contexts/QuestionContext'
import { useHistory } from "react-router-dom";
import UserContext from '../contexts/UserContext'

const Questions = () => {
    const { push } = useHistory();
    const { setQuestionList } = useContext(QuestionContext)
    const { userId } = useContext(UserContext)
    console.log(userId)

    const getQuestions = () => {
        axiosWithAuth()
            .get(`api/auth/questions`)
            .then(res => setQuestionList(res.data))
            .catch(err => console.log(err))
    };

    const getMyQuestions = () => {
        axiosWithAuth()
            .get(`api/auth/questions/${userId.userId}`)
            .then(res => setQuestionList(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getQuestions(userId.userId)
    }, [userId.userId])


    return (
        <div id='questions'>
            <h1>Answer my question</h1>
            <h2>{`Questions:`}</h2>
            <button onClick={() => push('/add-plant')}>Add A Question</button>
            <button onClick={() => getMyQuestions()}>See My Questions</button>
            <QuestionCard />
        </div>
    )

}

export default Questions