import './App.css'
import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { useDrag } from 'react-use-gesture';
import { a, useSpring } from '@react-spring/web'

import Section from './components/Articles';
import Fact from './components/FactOfTheDay';
import sections from './Articles.json'

const AnimSection = a(Section)

const Container = styled(a.div)`
  width: 100%;
  height: 100vh;
`

export default function App() {
  return (
    <Container>
      <Fact/>
      <a.div className="slider">
        {sections.map(ele => <AnimSection name={ele.header} articles={ele.articles}/>)}
      </a.div>
    </Container>
  );
}
// todo: 
// styling
// drag
// tap to expand article

// to add in the future:
// I did not have enought time to do this be I really would have added animations with react-spring and react-use-gesture
// navbar that jumps to a particular article section
// interaction with an api of a particular new site / reddit