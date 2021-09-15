import './App.css'
import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import { useDrag } from 'react-use-gesture';
import { a, useSpring } from '@react-spring/web'

import Articles from './components/Articles';
import Fact from './components/FactOfTheDay';

const Headers = [
  "Breaking News",
  "Local News",
  "International News",
  "Weather",
  "Cooking",
]

const AnimArticles = a(Articles)

export default function App() {

  return (
    <a.div className="container">
      <Fact/>
      <a.div className="slider">
        {Headers.map(ele => <AnimArticles name={ele}/>)}
      </a.div>
    </a.div>
  );
}
// todo: 
// fixed artice length with overflow & flex-shrink/grow/basis
// drag
// tap to expand article

// to add in the future:
// navbar that jumps to a particular article section
// interaction with an api of a particular new site / reddit