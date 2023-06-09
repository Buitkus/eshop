import products from "../data/products"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const OneProduct = () => {
  return (
    <div>
      {
          products.map((product, index) => (
            <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
          ))
      }

    </div>
  )
}

export default OneProduct