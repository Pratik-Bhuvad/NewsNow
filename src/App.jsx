import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import { ThemeProvider } from "./Context/ThemeContext"
import Search from "./Components/Search"
import { useState } from "react"

function App() {
  const [search, setSearch] = useState(false)

  return (
    <Router>
      <ThemeProvider>
        <Header setSearch={setSearch}/>
        {search && <Search  setSearch={setSearch}/>}
        <main className="w-screen min-h-screen transition-all duration-300 ease-in-out pt-[10vh] bg-bglight text-textlight dark:bg-bgdark dark:text-textdark">
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
