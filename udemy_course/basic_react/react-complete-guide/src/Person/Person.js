/**
 * Using Function-based components
 */
import React from 'react';
const Person = (props) => {
    return (
        <div>
            <p>
                Hello I'm <strong>{props.name}</strong> from Person.js
                and I'm <strong>{getAge()}</strong> years old.
            </p>
            <p>{props.children}</p>
        </div>
    );
}
export default Person;



/**
 * Using Class-based components
 */

// import React, { Component } from 'react'
// export class Person extends Component {
//     render() {
//         return (
//             <div>
//                 Hello I'm {this.props.name} from Person.js
//                 and I'm {getAge()} years old.
//             </div>
//         )
//     }
// }
// export default Person




// Js Code
function getAge() {
    return Math.floor(Math.random() * 30);
}