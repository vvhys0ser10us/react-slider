import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import SingleSlide from './singleSlide'
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
          return <SingleSlide {...ppl} position={position}></SingleSlide>
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
