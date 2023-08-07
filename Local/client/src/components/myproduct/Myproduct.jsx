import useFetch from '../../hooks/useFetch'
import "./myproduct.css"
import { AuthContext } from '../../context/AuthContext';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
    const { user, dispatch } = useContext(AuthContext);

    const { data, loading, error } = useFetch(`/listing?createdBy=${user.email}`)
    const [list, setList]= useState([]);

    useEffect(()=>{
        setList(data)
    }, [data])


    const handleClick = async (itemId) => {
        setList(list.filter((item) => item._id !== itemId))
        try {
            const response = await axios.delete(`/listing/${itemId}`);
            console.log('Listing deleted:', response.data);

        } catch (error) {
            console.error('Error deleting listing:', error);
        }
    };

    return (
        <div className='myproduct'>
            <div className="container">
                <div className="product-main">
                    <h2 className="title">My Service Listings</h2>
                    <div className="product-grid">
                        {loading ? (
                            "Loading"
                        ) : (
                            <>
                                {list.map((item) => (
                                    <div className="showcase" key={item._id}>
                                        <div className="showcase-banner">
                                            {item.type === "Grooming" ? (
                                                <>
                                                    <img
                                                        src="/assets/images/services/1.png"
                                                        alt="Dog Grooming"
                                                        width="300"
                                                        className="product-img default"
                                                    />
                                                    <img
                                                        src="/assets/images/services/1.png"
                                                        alt="Dog Grooming"
                                                        width="300"
                                                        className="product-img hover"
                                                    />
                                                </>
                                            ) : item.type === "Spa" ? (
                                                <>
                                                    <img
                                                        src="/assets/images/services/2.png"
                                                        alt="Spa"
                                                        width="300"
                                                        className="product-img default"
                                                    />
                                                    <img
                                                        src="/assets/images/services/2.png"
                                                        alt="Spa"
                                                        width="300"
                                                        className="product-img hover"
                                                    />
                                                </>
                                            ) : item.type === "Electronics" ? (
                                                <>
                                                    <img
                                                        src="/assets/images/services/3.png"
                                                        alt="Electronics"
                                                        width="300"
                                                        className="product-img default"
                                                    />
                                                    <img
                                                        src="/assets/images/services/3.png"
                                                        alt="Electronics"
                                                        width="300"
                                                        className="product-img hover"
                                                    />
                                                </>
                                            ) : item.type === "Auto" ? (
                                                <>
                                                    <img
                                                        src="/assets/images/services/4.png"
                                                        alt="Auto"
                                                        width="300"
                                                        className="product-img default"
                                                    />
                                                    <img
                                                        src="/assets/images/services/4.png"
                                                        alt="Auto"
                                                        width="300"
                                                        className="product-img hover"
                                                    />
                                                </>
                                            ) : item.type === "Haircuts And Styling" ? (
                                                <>
                                                    <img
                                                        src="/assets/images/services/5.png"
                                                        alt="Haircuts and Styling"
                                                        width="300"
                                                        className="product-img default"
                                                    />
                                                    <img
                                                        src="/assets/images/services/5.png"
                                                        alt="Haircuts and Styling"
                                                        width="300"
                                                        className="product-img hover"
                                                    />
                                                </>
                                            ) : item.type === "Dental" ? (
                                                <>
                                                    <img
                                                        src="/assets/images/services/6.png"
                                                        alt="Dental"
                                                        width="300"
                                                        className="product-img default"
                                                    />
                                                    <img
                                                        src="/assets/images/services/6.png"
                                                        alt="Dental"
                                                        width="300"
                                                        className="product-img hover"
                                                    />
                                                </>
                                            ) : item.type === "Day Care" ? (
                                                <>
                                                    <img
                                                        src="/assets/images/services/7.png"
                                                        alt="Day Care"
                                                        width="300"
                                                        className="product-img default"
                                                    />
                                                    <img
                                                        src="/assets/images/services/7.png"
                                                        alt="Day Care"
                                                        width="300"
                                                        className="product-img hover"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <img
                                                        src="/assets/images/services/8.png"
                                                        alt="Home"
                                                        width="300"
                                                        className="product-img default"
                                                    />
                                                    <img
                                                        src="/assets/images/services/8.png"
                                                        alt="Home"
                                                        width="300"
                                                        className="product-img hover"
                                                    />
                                                </>
                                            )}

                                            <div className="showcase-actions">
                                                <button className="btn-del" onClick={() => handleClick(item._id)}>
                                                    Delete Listing
                                                </button>

                                                <a  href={`/update/${item._id}`}>
                                                    <button className="btn-upd">
                                                        Update Listing
                                                    </button>
                                                </a>

                                            </div>
                                        </div>

                                        <div className="showcase-content">
                                            <a href={`/listings/${item._id}`} className="showcase-category">{item.type}</a>

                                            <a href={`/listings/${item._id}`} >
                                                <h3 className="showcase-title">{item.name}</h3>
                                                <h3 className="showcase-company">{item.provider}</h3>
                                            </a>

                                            <div className="price-box">
                                                <p className="price">₱{item.newPrice}</p>
                                                <del>₱{item.oldPrice}</del>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product