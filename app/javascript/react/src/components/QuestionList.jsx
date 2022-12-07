import * as React from 'react'
import * as ReactDOM from 'react-dom'

const QuestionList = () => {
   const questionList = [
    {
        title: 'How to check if a key is present in a Hash?',
        tag: 'Ruby'
    },
    {
        title: 'What is the difference between string and symbols?',
        tag: 'Ruby'
    },
    {
        title: 'What happened if you add two same keys in Hash?',
        tag: 'Ruby'
    },
    {
        title: 'How to delete a given key from hash?',
        tag: 'Ruby'
    },
    {
        title: 'How to check if two hash are identical?',
        tag: 'Ruby'
    },
    {
        title: 'How to combine two hashes in Ruby?',
        tag: 'Ruby'
    },
    {
        title: 'How to get unique keys from two hashes in Ruby?',
        tag: 'Ruby'
    },
    {
        title: 'What does the has_key?, key?, member? and include? method in a Hash?',
        tag: 'Ruby'
    },
    {
        title: 'What are blocks in Ruby?',
        tag: 'Ruby'
    },
    {
        title: 'Does the order of keys matters to compare two hashs in ruby?',
        tag: 'Ruby'
    }
   ]

   return(
    <div className='row'>
        <div className='col-lg-10 mx-auto'>
          {questionList.map((question) =>
            <div className='card rounded-0 mt-3'>
                <div className='card-body'>
                  <h3 className='card-title'>{question.title}</h3>
                  <p className='lead'>
                    <span className='badge bg-primary'>{question.tag}</span>
                  </p>
                </div>
            </div>
            )}
        </div>
    </div>
   )
}

export default QuestionList