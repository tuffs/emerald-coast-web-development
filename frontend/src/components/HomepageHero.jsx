import LogoMark from './LogoMark';

const HomepageHero = () => {
  return (
    <>
      <LogoMark
        title_one="EMERALD COAST"
        title_two="WEB DEVELOPMENT"
        subtitle="WEB DESIGN & APP DEVELOPMENT"
      />
      <div className="container pt-4">
        <div className="row">
          <div className="col">
            <br/>
            <h3
              className="sub_heading text-center my-4"
            >
              <i className="fa fa-code orange_text"></i>&nbsp;
              Make a Statement with Our Services
            </h3>
            <p className="lead">
              We are a full-service web development company that specializes in
              creating custom websites and web applications for businesses and organizations
              of all sizes. Our team of experienced web developers and designers will work
              with you to create a website that meets your needs and exceeds your expectations.
            </p>
            <p className="lead">
              Whether you need a simple informational website, an e-commerce site, or a
              complex web application, we have the skills and expertise to deliver a high-quality
              product that will help you achieve your online goals.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomepageHero;