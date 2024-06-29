import React from 'react'

const HomepageHero = () => {
  return (
    <>
      <div
        className="App homepage_hero__container my-4"
        style={{
          backgroundImage: `url(${require('../images/emerald-coast-web-development-crab-island.png')})`,
        }}>
        <h1 className="site__title">
          Emerald Coast <span className="darken">Web Development</span>
        </h1>
        <h3 className="site__subtitle">
          A WEB DESIGN AND DEVELOPMENT FIRM
        </h3>
      </div>
    </>
  )
}

export default HomepageHero;