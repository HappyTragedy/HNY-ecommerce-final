import React from 'react'
import { Container } from './Styled'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Container>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/category/1'>Category 1</Link></li>
                        <li><Link to='/product/2'>Category 2</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                    </ul>
                </nav>
            </Container>
        </div>
    )
}

export default NavBar
