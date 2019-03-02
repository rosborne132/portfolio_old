import React from "react"
import styled from "styled-components"

const CardStyles = styled.div`
  background-color: #fff;
  color: #000;
  width: 100%;
  position: relative;
  perspective: 1000px;
  margin-top: 15px;
  padding-bottom: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  :hover {
    transform: scale(1.03);
  }

  h3,
  p {
    text-align: left;
    padding: 10px;
  }

  .button {
    width: 100%;
    padding: 5px;
    color: #000;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
  }
`

const CardImage = styled.img`
  width: 100%;
`

const GithubButton = styled.a`
  background-color: #89ffb7;

  :hover {
    background-color: #d0fde2;
    color: #b2b2b2;
  }
`

const DemoButton = styled.a`
  background-color: #17c1ff;

  :hover {
    background-color: #91e2ff;
    color: #b2b2b2;
  }
`

const CardButtonGrid = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 5px;
`

const Card = props => (
  <CardStyles>
    <CardImage src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.desc}</p>
    <p>{props.skills}</p>

    <CardButtonGrid>
      <GithubButton
        key={props.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        href={props.githubLink}
        className="button"
      >
        Github
      </GithubButton>

      <DemoButton
        key={props.webLink}
        target="_blank"
        rel="noopener noreferrer"
        href={props.webLink}
        className="button"
      >
        Demo
      </DemoButton>
    </CardButtonGrid>
  </CardStyles>
)

export default Card
