import Carousel from 'react-bootstrap/Carousel';
import data from "../data/products";

console.log(data);


const About = () => {
  return (
    <div>
      
      <Carousel>
      {data.map((oneProduct, index) => (
           <Carousel.Item key={index}>
           <img
             className="d-block w-100"
             src={oneProduct.imageUrl}
             alt={oneProduct.name}
           />
           <Carousel.Caption>
             <h5>{oneProduct.name}</h5>
             <p>{oneProduct.price}</p>
           </Carousel.Caption>
         </Carousel.Item>
      ))}

     
    </Carousel>


        </div>
  )
}

export default About