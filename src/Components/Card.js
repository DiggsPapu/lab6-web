import React, { useState } from "react";
import {CSSTransition} from "react-transition-group";
import "./Transition.css";
import { Component } from "react";
  export  class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            isSelected:true,
            Done:false
        }
    }
    
    render(){
        return(
            <div className="flip-card">
               <CSSTransition
               in = {this.state.isSelected}
               timeout = {300}
               classNames = "flip">
               <div className="flip-card-inner" onClick={onclick} >
                <div className="card-back">
                <img style={{
                    width: '200px',
                    height: '200px'
                }} src = {this.props.props.imageUrl}/>
                <ul>
                    <li>{"Films:\n"+this.props.props.films}</li>
                    <li>{"ShortFilms:\n"+this.props.props.shortFilms}</li>
                    <li>{"TvShows:\n"+this.props.props.tvShows}</li> 
                    <li>{"VideoGames:\n"+this.props.props.videoGames}</li>
                </ul>
                <h1>{this.props.props.name}</h1>
                </div>
                <div className="card-front">
                <figure><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" style={{
                    width: "200px",
                    height:"200px"
                    }}></img></figure>
                </div>
                </div>
               </CSSTransition>
            </div>
        )
    }
  }