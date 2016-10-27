import React, { Component } from 'react';
import { Link } from 'react-router';

class Generator extends Component {
    render(){
        // Get data from route props
        const generators = this.props.route.data;
        console.log(generators);
        const generatorNode = generators.map((generator) => {
            return (
                <Link
                    to={"/generators/"+ generator.id}
                    className="list-group-item"
                    key={generator.id}>
                    {generator.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Generators page</h1>
                <div className="list-group">
                    {generatorNode}
                </div>
            </div>
        );
    }
}

export default Generator;
