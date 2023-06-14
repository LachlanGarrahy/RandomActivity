import Header from "./components/Header";
import RandomActivity from "./components/RandomActivity";

function App() {
  return (
    <div>
      <Header />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RandomActivity />
      </main>

      
    </div>
  )
}

export default App
