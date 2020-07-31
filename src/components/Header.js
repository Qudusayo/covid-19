import React, { Component } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import Info from './Info';
import Information from './Information';
import Form from './Form';

class Header extends Component {
    constructor (){
        super();
        this.state =  {
            country: undefined,
            cases: undefined,
            todayCases: undefined,
            deaths:  undefined,
            todayDeaths: undefined,
            recovered: undefined,
            active: undefined,
            critical: undefined,
            casesPerOneMillion: undefined
          }
    }
    getInfo = async(e) => {
        e.preventDefault();
        const country = e.target.elements.country.value
        const value = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
        const response = await value.json();
        this.setState({
            country: response.country,
            cases: response.cases,
            todayCases: response.todayCases,
            deaths:  response.deaths,
            todayDeaths: response.todayDeaths,
            recovered: response.recovered,
            active: response.active,
            critical: response.critical,
            casesPerOneMillion: response.casesPerOneMillion
        })
    }
    render() {
        return (
            <div>
            <div className="jumbotron text-light">
                <div className="container text-center text-uppercase">
                <h1 className="display-3">covid - 19</h1>
                <p>2020 world pandemic disease</p>
                </div><br/><br/>
                <SkeletonTheme color="#bcbcbc" highlightColor="#a9a9a9">
                        <div className="row">
                            <Info
                                value={this.props.cases || <Skeleton />}
                                title={
                                    this.props.cases ? "CASES" : <Skeleton />
                                }
                                classes="warning"
                            />
                            <Info
                                value={this.props.deaths || <Skeleton />}
                                title={
                                    this.props.cases ? "DEATHS" : <Skeleton />
                                }
                                classes="danger"
                            />
                            <Info
                                value={this.props.recovered || <Skeleton />}
                                title={
                                    this.props.cases ? (
                                        "RECOVERED"
                                    ) : (
                                        <Skeleton />
                                    )
                                }
                                classes="success"
                            />
                        </div>
                    </SkeletonTheme>
                <Form getInfo={this.getInfo}/>
            </div>
                {this.state.country ?
                <div className="row container m-auto">
                    <Information classed="primary" value={this.state.country} title="COUNTRY"/>
                    <Information classed="warning" value={this.state.cases} title="CASES"/>
                    <Information classed="danger" value={this.state.todayCases} title="TODAY'S CASES"/>
                    <Information classed="danger" value={this.state.deaths} title="DEATHS"/>
                    <Information classed="danger" value={this.state.todayDeaths} title="TODAY DEATHS"/>
                    <Information classed="success" value={this.state.recovered} title="RECOVERED"/>
                    <Information classed="primary" value={this.state.active} title="ACTIVE"/>
                    <Information classed="warning" value={this.state.critical} title="CRITICAL"/>
                    <Information classed="warning" value={this.state.casesPerOneMillion} title="CASES PER 1 MILLION"/>
                </div>: null
                }
            </div>
        )
    }
}

export default Header
