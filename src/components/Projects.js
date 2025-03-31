import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ai-journal/ai-journal01.png";
import projImg2 from "../assets/img/react-pet.png";
import projImg3 from "../assets/img/evergym.png";
import projImg4 from "../assets/img/brain-scan-project/sample01.png"
import projImg5 from "../assets/img/employees-api/employees-api01.png"
import projImg6 from "../assets/img/angular-pokemon-api.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Fullstack AI Journal ",
      description: "Next.js, Tailwind, SSR, PostgreSQL",
      imgUrl: projImg1,
    },
    {
      title: "React Pet Adoption",
      description: "React, Tailwind, Redux, SSR",
      imgUrl: projImg2,
    },
    {
      title: "Gym Application",
      description: "React Native",
      imgUrl: projImg3,
    },
    {
      title: "Brain Tumor Machine Learning ",
      description: "Python, LLM, AI",
      imgUrl: projImg4,
    },
    {
      title: "ASP.NET CORE API",
      description: "ASP.NET Core, C#",
      imgUrl: projImg5,
    },
    {
      title: "Pokemon Fetcher",
      description: "Angular, Standalone, Public API",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated" : ""}>
                  <h2>Projects</h2>
                  <p>Below are a list of some projects I've had fun working on. These are often done to explore new features (like signals in Angular) or try out a new language (C#).</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {/* <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__pulse animate__faster" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
