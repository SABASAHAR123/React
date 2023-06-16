import React, { useEffect, useState } from 'react'

export default function MyComponent() {

    const [count, setCount] = useState(0)

    const increaseVal = () => setCount(count + 1)
    const decreaseVal = () => setCount(count - 1)


    useEffect(() => {
        console.log("UseEffect Ruuning")

    }, [count])


    return (
        // <div>MyComponent</div>
        <>
            <div className="container my-5 py-5">

                <div className="text-center">
                    {count}
                </div>

                <div className="text-center mt-3">
                    <button className="btn btn-primary mx-2" onClick={increaseVal}>+</button>
                    <button className="btn btn-primary mx-2" onClick={decreaseVal}>-</button>
                </div>
            </div>
        </>
    )
}
