import LandingPage from './pages/landingPage'
import Dashboard from './pages/dashboard'
function App() {
  const [login, setLogin] = useState(false)
  return (
    <>
      <LandingPage/>
      <Dashboard/>
    </>
  )
}

export default App
