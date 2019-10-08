import React from "react"

import Layout from "../components/Layout/layout"
import { Card, ProjectCard } from "../components/Elements/Card"
import SEO from "../components/Utilities/seo"
import Section from "../components/Elements/Section"
import Icon from "../components/Elements/Icon/Icon"
import Grid from "../components/Utilities/Grid/Grid"
import Container from "../components/Utilities/Container/Container"

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
      <Container width={80}>
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
      </Container>
    </Section>

    <Section id="work">
      <Grid width={80}>
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

        { projects.map(project => {
          const { imageUrl, imageAlt, title, desc, linkIcons, techIcons } = project
          return (
            <ProjectCard
              key={imageAlt}
              image={imageUrl}
              alt={imageAlt}
              title={title}
              desc={desc}
              linkIcons={linkIcons}
              techIcons={techIcons}
            />
          )
        })}
      </Grid>
    </Section>

    <Section id="contact">
      <div className="contact-wrapper">
        { icons.map(icon => {
          const { link, iconClass} = icon
          return (
            <Icon 
              key={link} 
              link={link} 
              iconClass={iconClass}
            />
          )
        })}
      </div>
    </Section>
  </Layout>
)

export default IndexPage
