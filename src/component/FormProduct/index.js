import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Card, Button, Container } from 'react-bootstrap'

function FormProduct() {

    const [product, setDataProduct] = useState([])

    const getProducts = () => {
        axios.get('https://private-anon-281fe4fdb6-retailmockapp.apiary-mock.com/merchant/merchantID/outlet/outletID/category/categoryID/product?page=1&limit=10&active=true')
        .then((response) => {
            // console.log(response.data.data.data);
            let resp = response.data.data.data
            setDataProduct(resp)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <h1>List Product</h1>
            <Container>
                <Row>
                    {
                        product.map((value, i) => 
                        <Card key={i} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={value.imageUrl} />
                        <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                            <Card.Text>
                                {value.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default FormProduct
