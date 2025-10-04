type Priority = "Urgente" | "Moyenne" | "Basse"

type Todo = {
  id: number;
  text: string;
  priority : Priority
}

function App() {

  return (
    <div className="">
    <button className="btn btn-accent">test</button>
    </div>
  )
}

export default App
