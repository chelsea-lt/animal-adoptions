import './App.css'
import data from './animals.json'
import Animal from './components/Animal'

const App = () => {
  console.log(data)
  return (
    <div>
      <h1>Animal Adoptions</h1>
      <div>
        {data.animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  )
}

export default App
