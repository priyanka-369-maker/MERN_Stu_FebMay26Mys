import {React} from "react";
//List rendering
const users = [
    {id:1, role:"Student"},
    {id:2, role:"Trainer"},
    {id:3, role:"Admin"},
    {id:4, role:"Developer"},
];
export function FunctionalComp(){
    return(
        <div>
            <h2>Functional component</h2>
            {/* List rendering */}
            {users.map((user)=>(
                <p key={user.id}>
                    {user.role}
                </p>
            ))}
        </div>
    );
}
// import React from "react";

// const users = [
//     { id: 1, role: "Student" },
//     { id: 2, role: "Trainer" },
//     { id: 3, role: "Admin" },
//     { id: 4, role: "Developer" },
// ];

// export function FunctionalComp() {
//     return (
//         <div className="container">
//             <h2 data-type="heading">Functional component</h2>

//             {users.map((user) => (
//                 <p key={user.id} className="user-text">
//                     {user.role}
//                 </p>
//             ))}
//         </div>
//     );
// }