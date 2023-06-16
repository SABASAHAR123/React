import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/ItemCard';


export default function Products() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => setPosts(data.products))
            .catch((err) => console.log(err))

    }, [])

    return (
        <>
            <div className="container">
                <div className="row gap-5 py-5">
                    {
                        posts.map((post, index) => <ItemCard data={post} key={index} />)
                    }
                </div>
            </div>

        </>
    )
}
