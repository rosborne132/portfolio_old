import React from "react"

import Layout from "../components/Layout/layout"
import { ProjectCard } from "../components/Elements/Card/Card"
import SEO from "../components/Utilities/seo"
import Section from "../components/Elements/Section"
import Icon from "../components/Elements/Icon/Icon"
import Grid from "../components/Utilities/Grid/Grid"
import Container from "../components/Utilities/Container"

import { projects, icons } from "../data"

const width = 80

const IndexPage = () => (
  <Layout>
    <SEO
      title="Robert Osborne"
      keywords={[`gatsby`, `application`, `react`, `portfolio`, `frontend`]}
    />

    <header id="home">
      <Container width={width}>
        <h1>Robert Osborne</h1>
        <p>Software Engineer in the Portland area.</p>
      </Container>
    </header>

    <Section id="about" style={{ backgroundColor: "#61ccaa"}}>
      <Container width={width} style={{ textAlign: "left" }}>
        <h2>About</h2>
        <p>
          I am a software engineer and I love listening to music while getting heads down in code.
          I find creating reusable code extremely satisfying, so my current
          interests are in open source and design systems.
        </p>
        <p>
          Outside of coding, I like to play guitar and go on long walks. On
          rainy days I love to spend my time playing and taking apart video
          games. Much like code, I like to see how my favorite things work.
        </p>
      </Container>
    </Section>

    <Section id="work">
      <Container width={width} style={{ textAlign: "left" }}>
        <h2>Projects</h2>
      </Container>
      <Grid width={width}>
        { projects.map(project => {
          const { imageUrl, imageAlt, title, desc, linkIcons, techIcons, projectBackground } = project
          return (
            <ProjectCard
              key={title}
              image={imageUrl}
              alt={imageAlt}
              title={title}
              desc={desc}
              linkIcons={linkIcons}
              techIcons={techIcons}
              projectBackground={projectBackground}
            />
          )
        })}
      </Grid>
    </Section>

    <Section id="contact">
      <Container width={width} style={{ textAlign: "left" }}>
        <h2>Contact</h2>
        <p>Get in touch on other platforms</p>
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
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
