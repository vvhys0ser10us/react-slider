import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setindex] = useState()
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div>

      <div className="section-center">
        {people.map((ppl) => {
          const { id, name, image, title, quote } = ppl
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          )
        })}
        <button className="prev">
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className="next">
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  )
}

export default App
