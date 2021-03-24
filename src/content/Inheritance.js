import React from 'react'
export default class Inheritance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }
    onChange = (e) => {
        this.setState({ data: e.target.value })
    }
    render() {
        return (
            <div>
                <h1>{this.props.title} {this.state.data}</h1>
                <input type="text" onChange={this.onChange} ></input>
            </div>
        )
    }
}