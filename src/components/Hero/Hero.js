import React, { useState, useEffect } from 'react'
import { Container } from './Styled'
import Logo from '../../assets/images/hny.png'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../Services/firebase'

const Hero = () => {

    const [categories, setCategories] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const db = getFirestore()
            try {
                const itemsCollection = db.collection(`categories`)
                const itemSnapshot = await itemsCollection.get();
                const cats = itemSnapshot.docs.map(doc => {
                    return { catId: doc.id, ...doc.data() }
                })

                setCategories(cats)
                setLoading(false)

            } catch (error) {
                console.log('Error:', error)
            } finally {
                setLoading(false)
            }
        }


        fetchData()
    }, [])


    return (
        <div className="patron" style={{ boxShadow: "0px 0px 15px 0px #000000b8" }}>
            <Container>
                <div className="logo">
                    <Link to='/'><img src={Logo} alt="Logo"></img></Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/shop`}>Shop</Link>
                        </li>
                        {!loading &&
                            categories.map(({ catId, name }) => (
                                <li>
                                    <Link to={`/category/${catId}`}>{name}</Link>
                                </li>
                            ))}
                        <li>
                            <Link to={`/checkout`}>Checkout</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    )
}

export default Hero
