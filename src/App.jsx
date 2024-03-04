import './App.css'
import data from './animals.json'
import Animal from './components/Animal'
import SideBar from './components/SideBar'

const App = () => {
  console.log(data)
  return (
    <div>
      <div className="heading">
        <img className="logo" src="Logo3.png" />
        <h1>Welcome to Chelsea's Pet Rescue Centre</h1>
        <nav>
          <a href="/">ADOPT</a>
          <a href="/volunteer">VOLUNTEER</a>
          <a href="/about">ABOUT US</a>
          <a href="mailto:contact@cprcsydney.com.au">CONTACT US</a>
          <a href="/donate">DONATE</a>
        </nav>
      </div>
      <div className="flex-row">
        <div>
          <SideBar />
        </div>
        <div className="list">
          {data.animals.map((animal) => (
            <Animal key={animal.guid} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
