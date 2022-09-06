import React from "react"
import '../App.css'


export default function Body( props){
    
    return (
        <div className="body-container">
            <div className="cards-container">
                <img className="card-image" src={`../public/Images/${props.imageUrl}`}></img>
                <div className="text-container">
                    <div className="location-container">
                    
                        <img class="pin-icon"src="../public/location-icon.png"></img>
                        <h3>{props.location}</h3>
                        <a className="map-link" href={`../public/Images/${props.googleMapsUrl}`} >View on Google maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <p className="p-title">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}
                    </p>
                </div>
                
            </div>
            <hr></hr>
        </div>
    )
}