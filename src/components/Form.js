import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form className="card p-2" onSubmit={this.props.getInfo}>
                    <div className="input-group">
                    <input type="text" name="country" autoComplete="off" className="form-control  text-capitalize" placeholder="COUNTRY"/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary  btn-outline-dark  text-light">GET INFO</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
