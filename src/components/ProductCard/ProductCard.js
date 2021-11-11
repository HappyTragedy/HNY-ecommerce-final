import React from 'react'
import { Container } from './Styled'
import { Link } from 'react-router-dom'

const ProductCard = ({ name, image, description, id }) => {
    return (
        <div className="contenedor">
            <Container>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={`/product/${id}`}>Ver</Link>
            </Container>
        </div>
    )
}
export default ProductCard
