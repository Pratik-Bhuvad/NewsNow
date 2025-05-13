import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import { ThemeProvider } from "./Context/ThemeContext"

function App() {

  return (
    <Router>
      <ThemeProvider>
        <Header />
        <main className="w-screen transition-all duration-300 ease-in-out">
          <Routes>
            <Route path={`/`} element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App
