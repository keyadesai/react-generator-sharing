import React, { Component } from 'react';

class GetStarted extends Component {
    render(){
        const generators = this.props.route.data;
        const id = this.props.params.id;
        const generator = generators.filter(generator => {
            if(generator.id == id) {
                return generator;
            }
        });

        return (
            <div>
            npm install -g yo generator-react-component-library
            </div>
        );
    }
}

export default GetStarted
