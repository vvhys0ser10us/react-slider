import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index > people.length - 1) {
      setIndex(0)
    } else if (index < 0) {
      setIndex(people.length - 1)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)

    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div>

      <div className="section-center">
        {people.map((ppl, pplIndex) => {
          const { id, name, image, title, quote } = ppl
          let position = 'nextSlide'
          if (
            pplIndex === index - 1 ||
            (index === 0 && pplIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          if (index === pplIndex) {
            position = 'activeSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
  )
}

export default App
