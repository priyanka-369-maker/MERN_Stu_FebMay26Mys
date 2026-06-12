import {useState} from "react";

export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
   function handleSubmit(e){
    e.preventDefault();
    alert(`login: ${email}`)
   }
   return(
    <section>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) =>{
             setEmail(e.target.value);
          }}/>
          <button>Login</button>
          </form>
          </section>
   );
}

