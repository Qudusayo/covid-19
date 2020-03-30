import React from 'react'

const information = props => {
    const apps = ['card-body text-center', 'text-'+props.classed].join(' ');
    return(
        <div className="col-md-4">
            <div className="card mb-4">
                <div className={apps}>
                    <h1 className="display-4">{props.value}</h1>
                    <p className="card-text"><b>{props.title}</b></p>
                </div>
            </div>
        </div>
    );
}

export default information;