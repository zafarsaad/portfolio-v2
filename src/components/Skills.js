// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import meter95 from "../assets/img/meter95.svg"
import meter90 from "../assets/img/meter90.svg"
import meter80 from "../assets/img/meter80.svg"
import meter70 from "../assets/img/meter70.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>A breakdown of my skills based on my work experience!<br></br>The tech field moves fast so there's always something to learn.</p>
              <Carousel autoPlay={true} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter95} alt="Image" />
                  <h5>Frontend</h5>
                </div>
                <div className="item">
                  <img src={meter90} alt="Image" />
                  <h5>Fullstack</h5>
                </div>
                <div className="item">
                  <img src={meter80} alt="Image" />
                  <h5>AWS/Google Cloud</h5>
                </div>
                <div className="item">
                  <img src={meter70} alt="Image" />
                  <h5>AI/ML</h5>
                </div>
                <div className="item">
                  <img src={meter70} alt="Image" />
                  <h5>Database</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
