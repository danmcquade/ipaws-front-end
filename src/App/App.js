import React, { Component } from 'react'
import {
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import About from '../About/About.js'
import Main from '../Main/Main.js'
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/' render={() => (
              <Main />
            )} />
            <Route exact path='/About' render={() => (
              <About />
            )} />
            <Route
              path='/*'
              render={() => (
                <Redirect to='/' />
              )}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
