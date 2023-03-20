import React, { useState } from "react";
import {CSSTransition} from "react-transition-group";
import "./Transition.css";
import { Component } from "react";
export const SingleCard = (value)=>{
    if (value.films.length === 0){
      value.films = "None"
    }
    if (value.shortFilms.length === 0){
      value.shortFilms = "None"
    }
    if (value.tvShows.length === 0){
      value.tvShows = "None"
    }
    if (value.videoGames.length === 0){
      value.videoGames = "None"
    }
    if (value.name === 0 ){
        value.name = "None"
    }
    if (value.imageUrl === 0 ){
        value.imageUrl = "None"
    }
    return(
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="card-back">
          <img style={{
            width: '200px',
            height: '200px'
          }} src = {value.imageUrl}/>
          <h1>{value.name}</h1>
          <ul>
            <li>{"Films:\n"+value.films}</li>
            <li>{"ShortFilms:\n"+value.shortFilms}</li>
            <li>{"TvShows:\n"+value.tvShows}</li> 
            <li>{"VideoGames:\n"+value.videoGames}</li>
          </ul>
          </div>
          <div className="card-front">
          <figure><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" style={{
              width: "200px",
              height:"200px"
            }}></img></figure>
          </div>
        </div>
      </div>
    )
  }
  export  class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            isSelected:true
        }
    }
    handleClick = () =>{
        this.setState({isSelected:!this.state.isSelected})
    }
    render(){
        return(
            <div className="flip-card" >
               <CSSTransition
               in = {this.state.isSelected}
               timeout = {300}
               classNames = "flip">
               <div className="flip-card-inner" onClick={this.handleClick}>
                <div className="card-back">
                <img style={{
                    width: '200px',
                    height: '200px'
                }} src = {this.props.props.imageUrl}/>
                <h1>{this.props.props.name}</h1>
                <ul>
                    <li>{"Films:\n"+this.props.props.films}</li>
                    <li>{"ShortFilms:\n"+this.props.props.shortFilms}</li>
                    <li>{"TvShows:\n"+this.props.props.tvShows}</li> 
                    <li>{"VideoGames:\n"+this.props.props.videoGames}</li>
                </ul>
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