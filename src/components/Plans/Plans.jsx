
import React from 'react'
import { useState } from 'react'
import './Plans.css'

export const Plans = () => {

    const [products, setProduct] = useState([])

    const data = [
        {
            name: "Premium",
            desription: "4k + HDR"
        },
        {
            name: "Basic",
            desription: "720p"
        }, {
            name: "Standard",
            desription: "1080p"
        },
    ]

    return (
        <div className='Plans'>
            {
                data.map(product => {

                    return (
                        <div className="plans__plan">
                            <div className="plans__info">
                                <h5>
                                    {product.name}
                                </h5>
                                <h6>
                                    {product.desription}
                                </h6>
                            </div>
                            <button >
                                Subscribe
                            </button>



                        </div>
                    )
                })
            }

        </div>
    )
}
