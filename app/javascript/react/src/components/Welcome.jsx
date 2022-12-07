import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionList from './QuestionList'

const Welcome = () => {
    return(
        <div className='container'>
            <h1>
               Hello World! Welcome to my site 
            </h1>
            <p className='lead'>This is the first lecture and there are many more coming</p>
            <QuestionList />
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Welcome />, document.getElementById('welcome'))
})

export default Welcome;