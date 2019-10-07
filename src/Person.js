// 1st Approach
// import React from "react";
// class Person extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Person Component</h1>
//             </div>
//         );
//     }
// }

// 2nd Approach
// import React from 'react';
// function Person() {
//     return (
//         <div1>Person Component</div1>
//     );
// };

// 3rd Approach
import React from 'react';
import './Person.css'
const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> My Name is {props.name} and my age :{props.age}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person;