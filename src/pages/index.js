import React from "react"

import Layout from "../components/Layout/layout"
import Card from "../components/Elements/Card"
import SEO from "../components/Utilities/seo"
import Section from "../components/Elements/Section"
import Icon from "../components/Elements/Icon/Icon"

import { projects, icons } from "../data"

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
        { projects.map(project => {
          const { imageUrl, imageAlt, title, desc, skills, githubLink, webLink } = project
          return (
            <Card
              key={imageAlt}
              image={imageUrl}
              alt={imageAlt}
              title={title}
              desc={desc}
              skills={skills}
              githubLink={githubLink}
              webLink={webLink}
            />
          )
        })}
      </div>
    </Section>

    <Section id="contact">
      <div className="contact-wrapper">
        { icons.map(icon => {
          const { link, iconClass} = icon
          return (
            <Icon key={link} link={link} iconClass={iconClass}/>
          )
        })}
      </div>
    </Section>
  </Layout>
)

export default IndexPage
