import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class GeneratorDetail extends Component {
    handleRedirect(){
        browserHistory.push('/generators');
    }
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
                <h1>{generator[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={generator[0].media} alt={generator[0].name} />
                        </div>
                    </div>
                    <div>{generator[0].getStarted}</div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {generator[0].model}</li>
                           <li><strong>Make</strong>: {generator[0].make}</li>
                           <li><strong>Year</strong>: {generator[0].year}</li>
                           <li><strong>Price</strong>: {generator[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Generators</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneratorDetail