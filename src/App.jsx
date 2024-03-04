import './App.css'
import data from './animals.json'
import Animal from './components/Animal'
import SideBar from './components/SideBar'

const App = () => {
  console.log(data)
  return (
    <div>
      <div className="heading">
        <img className="logo" src="/public/Logo3.png" />
        <h1>Welcome to Chelsea's Pet Rescue Centre</h1>
        <nav>
          <div>ADOPT</div>
          <div>VOLUNTEER</div>
          <div>ABOUT</div>
          <div>CONTACT US</div>
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
