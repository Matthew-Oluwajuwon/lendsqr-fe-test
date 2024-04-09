import logo from "./assets/images/logo.svg"
const App = () => {
  return (
    <header className="header">
      <h1 className="header__title" data-testid='heading'>Hello, World!</h1>
      <p className="header__subtitle" data-testid='paragraph'>Welcome to my React.js project</p>
      <img src={logo} alt="" />
    </header>
  )
}

export default App