import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

const root = createRoot(document.getElementById('root'))
root.render(<App />)

function LoginForm({onSubmit, buttonText}) {
  const handleSubmit = e => {
    e.preventDefault()
    const {username, password} = e.target.elements
    onSubmit({username: username.value, password: password.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('')

  const handleClose = () => setOpenModal('')
  const handleLoginSubmit = formData => {
    console.log('login', formData)
  }

  const handleRegisterSubmit = formData => {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog
        isOpen={openModal === 'login'}
        onDismiss={handleClose}
        aria-label="login"
      >
        <button aria-label="close" onClick={handleClose}>
          close
        </button>
        <h2>Login</h2>
        <LoginForm onSubmit={handleLoginSubmit} buttonText="Login" />
      </Dialog>

      <Dialog
        isOpen={openModal === 'register'}
        onDismiss={handleClose}
        aria-label="register"
      >
        <button aria-label="close" onClick={handleClose}>
          close
        </button>
        <h2>Register</h2>
        <LoginForm onSubmit={handleRegisterSubmit} buttonText="Register" />
      </Dialog>
    </div>
  )
}
