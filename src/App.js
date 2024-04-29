import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/common/Layout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Courses } from "./pages/Program"
import { Offices } from "./pages/Offices"
import { Partners } from "./pages/Partners"
import { TCenter } from "./pages/TestCenter"

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
            path='/partners'
            element={
              <Layout>
                <Partners />
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
          <Route
            path='/testcenter'
            element={
              <Layout>
                <TCenter />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
