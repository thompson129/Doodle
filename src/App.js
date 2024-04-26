import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/common/Layout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Courses } from "./pages/Courses"
import { Offices } from "./pages/Offices"
import { Instructor } from "./pages/Instructor"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/about'
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path='/courses'
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path='/instructor'
            element={
              <Layout>
                <Instructor />
              </Layout>
            }
          />
          <Route
            path='/offices'
            element={
              <Layout>
                <Offices />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
