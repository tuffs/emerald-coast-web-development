import ContentLine from '../../images/boards__line.png';

export default function HomeOne() {
  return (
    <div className="container-fluid pt-4">
      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-8">
          <div className="mt-3"/>
          <h3
            className="sub_heading mt-4"
          >
            <i className="fa fa-code orange_text"></i>&nbsp;Developing with Tomorrow In Mind
          </h3>
          <img src={ContentLine} className="w-100" />
          <div className="content_boards__width">
            <p className="lead">
              We are a <a href="/about-us">full-service web development company</a> that specializes in
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
    </div>
  );
}