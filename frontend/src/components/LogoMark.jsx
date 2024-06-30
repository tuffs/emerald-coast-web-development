const LogoMark = ({ title__part_one, title__part_two, subtitle }) => {
  return (
    <>
      <div
        className="logo_mark__container my-4"
        style={{backgroundImage:`url(${require('../images/emerald-coast-web-development-crab-island.png')})`}}
      >
        <h1 className="site__title">
          {title__part_one} <span className="site__title_periwinkle">{title__part_two}</span>
        </h1>
        <h3
          className="site__subtitle"
        >{subtitle}</h3>
      </div>
    </>
  );
}

export default LogoMark;