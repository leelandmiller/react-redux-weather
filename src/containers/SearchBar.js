import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    state = { term: '' }

    handleChange = event => {
        const name = event.target.name;
        const val = event.target.value;

        this.setState({
            [name]: val
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        // now fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className='input-group'>
                <input
                name='term'
                placeholder='Search for a city' value={this.state.term} onChange={this.handleChange}
                className='form-control' />
                <span className='input-group-btn'>
                    <button onClick={this.handleSubmit} type='submit' className='btn btn-primary'>Submit</button>
                </span>

            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
