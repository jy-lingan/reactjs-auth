import './App.css'
import logoBootstrao from './img/bootstrap-logo.svg'

function App() {

  const date = new Date()

  return (
    <main className="form-signin">
      <form>
        <img className="mb-4" src={logoBootstrao} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy;
          {date.getFullYear()}
        </p>
      </form>
    </main>
  )
}

export default App
