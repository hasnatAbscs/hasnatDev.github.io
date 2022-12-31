import React, { FC } from 'react'
import styled from 'styled-components'

const ProjectCard = styled.div`
  background: linear-gradient(
    112.83deg,
    rgba(0, 0, 0, 0.6) 3.66%,
    rgba(0, 0, 0, 0.1) 100%
  );
  backdrop-filter: blur(25px);
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  overflow: hidden;
  height: 230px;
  width: 330px;
  padding: 27px;
  img {
    height: 160px;
    width: 327px;
    left: 27px;
    top: 63px;
    transition: 250ms ease;
    width: 100%;
    padding: 20px 0;
    position: relative;
    top: 0;
    left: 0;
  }
  span {
    position: relative;
    top: 50px;
    margin: 0px;
    left: -2px;
  }
  p,
  p > span {
    margin: 4px;
    position: relative;
    top: 50px;
    left: 0;
    transition: 250ms ease;
  }
  .gradient-text span {
    margin: 0;
    position: static;
  }
  &:hover {
    img {
      transform: scale(0.63);
      top: -30px;
      transition: 250ms ease;
      padding: 0;
    }
    span {
      top: -35px;
    }
    p,
    p > span {
      top: -30px;
      transition: 250ms ease;
    }
  }
`
const StyledProjectCard: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ProjectCard>{children}</ProjectCard>
}

export default StyledProjectCard
