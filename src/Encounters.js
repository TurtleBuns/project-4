import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'






class Encounters extends Component {
    constructor(props) {
        super(props);
        this.state = {encounterList:[]};
        }
        componentDidMount() {
        
        axios.get('https://red-wdp-api.herokuapp.com/api/mars/encounters')
        .then(
            (results) => {
            this.setState({encounterList:results});
            console.log(this.state.encounterList.data.encounters);
        }); 
    }
    
    render() {
        const encounterData = this.state.encounterList.data.encounters.map((item,i)=>(
            <div>
                <li>
                    <div className='encounter-detail'><span className='encounter-detail alien'>{item.action}</span></div>
                    <p className='encounter-action'></p>
                </li>
            </div>
        ));
        return (
            <div id='encounters-container'>
                <h1 id='encounters-title'>ENCOUNTERS</h1>
                <ul className='encounter-list'>
                   <encounterData />
                </ul>
                <footer>REPORT ENCOUNTER</footer>
            </div>
        );
    }
}



export default Encounters