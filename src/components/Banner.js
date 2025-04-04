import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  // const [index, setIndex] = useState(1);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Engineer", "Web Developer", "UI/UX Developer"];
  const [text, setText] = useState('');

  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1);
      setDelta(150 - Math.random() * 100);
    } else {
      // setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Saad,`}
                  </h1>
                  <h2>a <span className="wrap">{text}</span></h2>
                  <p>Results-driven Software Engineer with 10+ years of experience building scalable, high-performance applications. Proficient in Frontend Technologies as well as Backend.</p>
                  <p>Passionate about optimizing for scalability, cloud integration, and AI/ML applications to enhance user experience and business impact.</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__headShake" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )

}
