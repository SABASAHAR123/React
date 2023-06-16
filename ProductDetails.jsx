import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    let { productID } = useParams()
    console.log(productID)


    useEffect(() => {

        fetch(`https://dummyjson.com/products/${productID}`)
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])


    return (
        <div>ProductDetails</div>
    )
}
