import React, { Component } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'
import About from '../About/About.js'
import AddDog from '../AddDog/AddDog.js'
import AllDogs from '../AllDogs/AllDogs.js'
import EditDog from '../EditDog/EditDog.js'
import Main from '../Main/Main.js'
import Nav from '../Nav/Nav.js'
import Resources from '../Resources/Resources.js'
import ShowDog from '../ShowDog/ShowDog.js'
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
            <Route exact path='/about' render={() => (
              <About />
            )} />
            <Route exact path='/dogs' render={() => (
              <AllDogs />
            )} />
            <Route exact path='/dogs/new' render={() => (
              <AddDog />
            )} />
            <Route exact path='/dogs/:id' render={(props) => (
              <ShowDog {...props} />
            )} />
            <Route exact path='/edit/:id' render={(props) => (
              <EditDog {...props} />
            )} />
            <Route exact path='/resources' render={() => (
              <Resources />
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
