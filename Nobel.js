import React from 'react';
import {connect} from 'react-redux';
import {getWinners} from './store/action';
const Nobel=(props)=>{
    function sortby(k){
        console.log("sort")
			props.Nobelwinners.sort(function(a,b){
				if(Date.parse(a[k])> Date.parse(b[k])){
					return 1;
					}
				else{
					return -1;
					}
			})
    }
        
    return(
        <div>
        <div style={{border:'3px solid lightgreen'}}>
            <h1>Nobel Winners</h1>
            <button
            onClick={()=>{
                props.dispatch(getWinners())
            }}
            >GetWinners</button>

            <div>
                <table border="2px solid">
                        <thead>
                        <th>s.no</th>
                        <th>id</th>
                        <th onClick={()=>{sortby('name')}}>Firstname</th>
                        <th onClick={()=>{sortby('lname')}}>Lastname</th>
                        <th onClick={()=>{sortby('year')}}>Year</th>
                        <th onClick={()=>{sortby('motivation')}}>Motivation</th>
                        </thead>

                 {
                        props.Nobelwinners &&
                        props.Nobelwinners.map((p, i) => {
                    return (
                        <tbody id="tables">
                            <tr>
                            <td>{i + 1}</td>
                            <td>{p.id}</td>
                            <td>{p.firstname}</td>
                            <td>{p.lastname}</td>
                            <td>{p.year}</td>
                            <td>{p.motivation}</td>
                            </tr>
                        </tbody>
                         );
                        
                         })
                        
                         

                         
                 }
                </table>
    </div>
    </div>
    </div>
    )
}
export default  connect((store)=>store)(Nobel);