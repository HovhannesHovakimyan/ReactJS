import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
          lodaing: false,
          character: {}
        }
    }

    componentDidMount() {
      this.setState({
        lodaing: true
      })
      fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
          this.setState({
            character: data,
            lodaing: false
          })
        })
    }
    
    render() {
        const text = this.state.lodaing ? "Loading..." : this.state.character.name
        return (
            <div>
                {text}
            </div>
        )
    }
}

export default App