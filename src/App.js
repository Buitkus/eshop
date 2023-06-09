import MyHeader from './components/MyHeader'
import { Container } from 'react-bootstrap'
import ProductList from './components/ProductList'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Container>
        <MyHeader/>
     <ProductList/>
   </Container>
    </Router>
  )
}

export default App