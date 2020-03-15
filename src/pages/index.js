import React from "react"

import {
  Badge,
  Container,
  Grid,
  Icon,
  Layout,
  ProjectCard,
  Section,
  SEO,
} from "../components"

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

    <Section id="about" style={{ backgroundColor: "#61ccaa" }}>
      <Container width={width} style={{ textAlign: "left" }}>
        <h2>About</h2>
        <p>
          I am a software engineer and I love listening to music while getting
          heads down in code. My current interests are in Next.js and
          Serverless.
        </p>
        <p>
          Outside of coding, I like to play guitar and go on long walks. On
          rainy days I love to spend my time playing and taking apart video
          games. Much like code, I like to see how my favorite things work.
        </p>
      </Container>
    </Section>

    <Section id="certications">
      <Container width={width} style={{ textAlign: "left" }}>
        <h2>Certications</h2>
        <p>See my current certications! :)</p>
        <div>
          <Badge
            altTest="AWS Developer Cert"
            badgeLink="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2020-03-07&ci=AWS00487144"
            imgLink="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Developer_Associate_512x512.6d5f0ad35de66966c96f8e408e4fd919c1a2d753.png"
          />
        </div>
      </Container>
    </Section>

    <Section id="work">
      <Container width={width} style={{ textAlign: "left" }}>
        <h2>Projects</h2>
      </Container>
      <Grid width={width}>
        {projects.map(
          ({
            imageUrl,
            imageAlt,
            title,
            desc,
            linkIcons,
            techIcons,
            projectBackground,
          }) => (
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
        )}
      </Grid>
    </Section>

    <Section id="contact">
      <Container width={width} style={{ textAlign: "left" }}>
        <h2>Contact</h2>
        <p>Get in touch on other platforms</p>
        {icons.map(({ link, iconClass }) => (
          <Icon key={link} link={link} iconClass={iconClass} />
        ))}
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
