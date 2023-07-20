import { useState } from "react"
import data from '../User.json';

const LoginUse = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Kullanıcı adı ve şifre doğrulama
    const user = data.users.find(user => user.username === username && user.password === password);
    if (user) {
      setLoggedIn(true);
      alert('Kullanıcı adı veya şifre doğru!');
    } else {
      alert('Kullanıcı adı veya şifre yanlış!');
    }
  };

  return (
    <div>
       <div>
      {loggedIn ? (
        <div>Hoş geldiniz, {username}!</div>
      ) : (
        <div>Giriş yapınız.</div>
      )}
    </div>
      <div >
      <div className="login-form">
      <h2>Sign In</h2>
      <form>
        <div className="form-group">
          
          <input className="inputveri" placeholder="Enter your e-mail" value={password} onChange={(e)=>setUsername(e.target.value)}  />
          
        </div>
        <div className="form-group">
          <input className="inputveri" type="password" id="password" placeholder="Enter your password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
   
        </div>
        <button onClick={handleLogin} type="submit">Sign In</button>
        <div className="labelbottom">
        <div className="gri-checkbox">
      <p className="labelright"><input className="checkbox" type="checkbox" />Remember Me</p>
        </div>
      <div>
      <a href="" className="labelleft">Need Help?</a>
      </div>
        </div>
        <div>
        <div className="Newto">
         <p className="Netflix">New to Netflix? <a className="Sign" href="">Sign Up Now.</a> </p>
        </div>
        <div className="Newto">
         <p className="Thispage">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className="Learn" href="#">Learn more.</a></p> 
        </div>
      </div>     
      </form>
    </div>
      </div>
      </div>
    
  )
}

export default EmailValue