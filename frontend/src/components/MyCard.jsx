/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard({image, title, desc, price}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:"17rem"}} src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">{price}</Button>
      </Card.Body>
    </Card>
  )
}
export default MyCard;