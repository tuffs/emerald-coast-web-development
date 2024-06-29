const LogoMark = ({ title_one, title_two, subtitle }) => {
  return (
    <>
      <div
        className="logo_mark__container my-4"
        style={{backgroundImage:`url(${require('../images/emerald-coast-web-development-crab-island.png')})`}}
      >
        <h1 className="site__title">
          {title_one} <span className="site__title_periwinkle">{title_two}</span>
        </h1>
        <h3
          className="site__subtitle"
        >{subtitle}</h3>
      </div>
    </>
  );
}

export default LogoMark;