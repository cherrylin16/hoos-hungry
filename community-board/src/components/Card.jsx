import React from 'react';

const Card = (props) => {
    return (
        <div className={'Card ' + props.color}>
            {props.image && <img className="card-image" src={props.image} alt="image" />}
            <div className="card-content">
                <h3>{props.card}</h3>
                <p>{props.location}</p>
                <a href={props.buttonLink} target="_blank" rel="noopener noreferrer">
                    <button type="button" className='btn btn-custom-font'>Explore</button>
                </a>
            </div>
        </div>
    )
}


export default Card
