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
          EMERALD COAST <span className="site__title_periwinkle">WEB DEVELOPMENT</span>
        </h1>
        <h3 className="site__subtitle">
          WEB DESIGN & CUSTOM SOFTWARE
        </h3>
      </div>
    </>
  )
}

export default HomepageHero;