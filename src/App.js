import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.scss'
import Header from './Header.jsx'
import ProjectRules from './ProjectRules.jsx'

const App = () => {
  return (
    <Container>
      <Header />
      <ProjectRules />
    </Container>
  )
}

render(<App />, document.getElementById('root'))
