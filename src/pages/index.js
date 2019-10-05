import React from "react"

import Layout from "../components/Layout/layout"
import Card from "../components/Elements/Card"
import SEO from "../components/Utilities/seo"
import Section from "../components/Elements/Section"

import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Robert Osborne"
      keywords={[`gatsby`, `application`, `react`, `portfolio`, `frontend`]}
    />

    <header id="home">
      <h1>Robert Osborne</h1>
      <p>
        Front-end Developer from Portland Oregon looking for new exciting
        opportunities.
      </p>
    </header>

    <Section id="about" className="about">
      <div className="container">
        <h2>Hello! My name is Robert but you can call me Rob. :)</h2>
        <p>
          I am an IT Service Technician with a passion for front-end
          development. I love listening to music and getting heads down in code.
          I find creating reusable code extremely satisfying, so my current
          interests are in typescript and design systems.
        </p>
        <p>
          Outside of coding, I like to play guitar and go on long walks. On
          rainy days I love to spend my time playing and taking apart video
          games. Much like code, I like to see how my favorite things are made.
        </p>
      </div>
    </Section>

    <Section id="work">
      <div className="cards container">
        <Card
          image={
            "https://res.cloudinary.com/rosborne/image/upload/v1551277668/Portfolio_Assets/tcg_search.png"
          }
          alt={"TCG_search"}
          title={"TCG Search"}
          desc={`Search through every Pokemon card ever released.`}
          skills={"Tech: HTML, CSS, jQuery, JavaScript"}
          githubLink={"https://github.com/rosborne132/tcg_search"}
          webLink={"https://rosborne132.github.io/tcg_search/"}
        />
        <Card
          image={
            "https://res.cloudinary.com/rosborne/image/upload/v1551053134/Portfolio_Assets/styledOUI.png"
          }
          alt={"styledOUI"}
          title={"styledOUI"}
          desc={
            "An app to showcase some elements created within the UI library."
          }
          skills={"Tech: React, Webpack, styled-components"}
          githubLink={"https://github.com/rosborne132/styledoui"}
          webLink={"https://rosborne132.github.io/styledoui-demo/?no-cache=1"}
        />

        <Card
          image={
            "https://res.cloudinary.com/rosborne/image/upload/v1551052059/Portfolio_Assets/quiz_app.png"
          }
          alt={"quiz_app"}
          title={"Chuck Quizmo's Quiz App"}
          desc={`An app based off of the Chuck Quizmo’s quiz show in Paper Mario for N64.`}
          skills={"Tech: HTML, CSS, jQuery"}
          githubLink={"https://github.com/rosborne132/quiz-app"}
          webLink={"https://rosborne132.github.io/quiz-app/"}
        />
      </div>
    </Section>

    <Section id="contact">
      <div className="contact-wrapper">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/robert-osborne-037857100/"
          rel="noopener noreferrer"
        >
          <i className="icon fab fa-linkedin" />
        </a>
        <a
          target="_blank"
          href="https://github.com/rosborne132"
          rel="noopener noreferrer"
        >
          <i className="icon fab fa-github-square" />
        </a>
        <a
          target="_blank"
          href="mailto:ozborne132@gmail.com"
          rel="noopener noreferrer"
        >
          <i className="icon fas fa-envelope-square" />
        </a>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
