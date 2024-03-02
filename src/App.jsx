import './App.css'
import data from './animals.json'
import Animal from './components/Animal'
import SideBar from './components/SideBar'

const App = () => {
  console.log(data)
  return (
    <div>
      <h1>Animal Adoptions</h1>
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
