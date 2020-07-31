import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Table, Image } from 'react-bootstrap'

function FormCategory() {

    const [category, setDataCategory] = useState([])

    const getCategory = () => {
        axios.get('https://private-anon-281fe4fdb6-retailmockapp.apiary-mock.com/merchant/2/outlet/1/category')
      .then((response) => {
        // console.log(response.data.data);
        let resp = response.data.data
        setDataCategory(resp)
      })
      .catch((error) => {
        console.log(error);
      });
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <div>
            <h1>List Category</h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    category.map((value, i) => 
                    <tr key={i} >
                        <td>{i+1}</td>
                        <td>{value.name}</td>
                        <td>{value.slug}</td>
                        <td><Image src={value.imageUrl} roundedCircle /></td>
                    </tr>)
                }
            </tbody>
            </Table>
        </div>
    )
}

export default FormCategory