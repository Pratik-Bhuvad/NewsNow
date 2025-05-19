import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import { ThemeProvider } from "./Context/ThemeContext"
import Search from "./Components/Search"
import { useState } from "react"
import { NewsProvider } from "./Context/NewsContext"
import News from "./Pages/News"

function App() {
  const [search, setSearch] = useState(false)

  return (
    <Router>
      <NewsProvider>
        <ThemeProvider>
          <Header setSearch={setSearch} />
          {search && <Search setSearch={setSearch} />}
          <main className="w-screen min-h-screen transition-all duration-300 ease-in-out pt-[10vh] bg-bglight text-textlight dark:bg-bgdark dark:text-textdark">
            <Routes>
              <Route path={`/`} element={<Home />} />
              <Route path={`/trending`} element={<News newstype={'trendingArticle'}/>}/>
              <Route path={`/news`} element={<News newstype={'newsArticle'}/>}/>
            </Routes>
          </main>
          <Footer />
        </ThemeProvider>
      </NewsProvider>
    </Router>
  )
}

export default App
