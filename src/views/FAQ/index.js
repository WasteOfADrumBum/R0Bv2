import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ScrollToTop } from '../../components'

const FAQ = () => {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
  }

  return (
    <>
      <h2 className="text-center">FAQ - Frequently Asked Questions</h2>
      <p className="text-center mb-5">
        <i>
          This is a list of frequently asked questions by potential employers
          and recruiters in the hopes you stumble across this before we chat.
        </i>
      </p>
      <ul>
        {isAuthenticated && (
          <>
            {faqList.map((question, i) => (
              <div key={i} className="mb-3">
                <h4 className="text-uppercase">
                  {i + 1}. {question.question}
                </h4>
                <p className="my-1 mx-5">{question.answer}</p>
              </div>
            ))}
          </>
        )}
      </ul>
      <ScrollToTop />
    </>
  )
}

const faqList = [
  {
    question: 'How do you feel about remote work',
    answer:
      'I am only intrested in 100% remote work at this time and I am not open to relocating. I have been more efficient working from home and have a proven track reccord of performing while in a remote role.',
  },
  {
    question: 'What your main tech stack you like to work with?',
    answer: 'MERN Stacks',
  },
  {
    question: 'Would you consider yourself a front-end or back-end developer?',
    answer:
      'I am a full-stack developer so I would consider myself both. I am a bit more front-end heavy, about 60/40 front to back. I love the creativity front-end development provides but enjoy the structure of the back-end.',
  },
  {
    question: 'What are your main front-end technologies?',
    answer: 'HTML, CSS, JavaScript, React.js, jQuery, and SASS',
  },
  {
    question: 'What are your main back-end technologies?',
    answer: 'Node.js, PHP, and Express.js',
  },
  {
    question: 'What industries do you like to work with?',
    answer:
      'I am open to working in any industry. I am more interested in a company’s culture. As well as the ability to learn and grow my own skills while helping grow a company’s application.',
  },

  {
    question: 'How do you work within a team dynamic?',
    answer:
      'I prefer an Agile Scrum environment where we have a daily stand-up, bi-weekly sprints, weekly backlog refinements, and weekly retrospectives. I am more than happy to always help test or troubleshoot when developing with teammates. I maintain a lot of notes in my assigned tickets for others to follow behind me and comment effectively in my code. When I exhaust my options using google foo and reading the documentation I always ask for help from my team to see if anyone has run into a similar issue or go to a Sr. Dev if all else fails. We work independently as developers most of the time, but similar to ants we accomplish big things with our small tasks.',
  },
  {
    question:
      'Do you know Ruby, Rails, Python, .NET, PostGress and/or Typescript?',
    answer:
      'No. I have been working on learning these technologies in my spare time, but I am not proficient in them yet. I would be more than willing to learn any language needed through mentoring or paid training.',
  },
  {
    question: 'How do you feel about contract work?',
    answer:
      'I am looking for stability for my family. I am more intrested in full-time remote permanent placement positions. However, I am open to contract-to-hire positions if there is low turnover and a high contract-to-hire conversion ratio.',
  },
]

export default FAQ
