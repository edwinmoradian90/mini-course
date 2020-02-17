import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'
import axios from 'axios'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      course_modules: []
    }
  }

  componentDidMount = () => {
     axios.get('/episodes.json')
      .then(episode => {
        debugger
        let res = []
        episode.data.data.map(episode => {
          res.push({
            id: episode.id, 
            title: episode.title,
            description: episode.description,
            active: false
          })
          this.setState({ course_modules: res })
        })
      })
      .catch(episode => {
        debugger
      })
  }

  handleVideoChange = (item, event) => {
    event.preventDefault()

    let course_modules = [...this.state.course_modules]

    course_modules.map( module =>  module.active = false )
    item.active = !item.active
    course_modules[item.id - 1] = item
    this.setState({ course_modules })
  }

  render() {
    return (
      <div>
        <Jumbotron/>
        <Table handleVideoChange={this.handleVideoChange} course_modules={this.state.course_modules}/>
      </div>
    )
  }
}

export default Home
