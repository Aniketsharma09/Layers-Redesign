import Footer from './components/Footer'
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'
const App = () => {
  return (
    <div className='container'>
      <Nav/>
      <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default App