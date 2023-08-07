import { useState, useEffect } from "react"
import Desktopnav from "../../components/desktopnav/Desktopnav"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Promobar from "../../components/promobar/Promobar"
import "./update.css"
import axios from "axios"
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';

const Update = () => {
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");

    const [issue, setIssue] = useState(null);
    const [success, setSuccess] = useState(false);

    const location = useLocation();
    console.log(location)
    const id = location.pathname.split("/")[2];
    console.log(id)

    const { data, loading, error } = useFetch(`/listing/find/${id}`)

    useEffect(() => {
        if (data) {
            setDescription(data.description);
            setPrice(data.newPrice);
            setAddress(data.address);
        }
    }, [data]);

    const handleClick = async (e) => {
        e.preventDefault();

        const requestData = {
            description: description,
            oldPrice: data.newPrice,
            newPrice: price,
            address: address,
        };
        console.log(requestData)



        try {
            const res = await axios.put(`/listing/${id}`, requestData);
            console.log(res.data);
            setSuccess(true);
            setIssue(null);
        } catch (err) {
            setIssue(err.response.data); // Assuming the server returns error message in the response
            console.log(err.response.data)
            setSuccess(false);
        }
    }

    return (
        <div className='updateedit-listing'>
            <Promobar />
            <Navbar />
            <Desktopnav />

            <div className="banner">

                <div className="container">

                    <div className="slider-container has-scrollbar">

                        <div className="slider-item">

                            <img src="/assets/images/create-banner1.svg" alt="bg1 banner" className="banner-img" />


                        </div>

                        <div className="slider-item">

                            <img src="/assets/images/create-banner2.svg" alt="bg2 banner" className="banner-img" />

                        </div>

                    </div>

                </div>

            </div>

            <div className="content">
                <h2>Update Service Listings</h2>
                <p>Service providers can update exiting listings for the services they offer.</p>
                <form className="listing-form" id="serviceListingForm">
                    <label htmlFor="title">Service Title: <span>{data.name}</span> </label>


                    <label htmlFor="title">Service Type: <span>{data.type}</span> </label>

                    <label htmlFor="serviceprovider">Service Provider: <span>{data.provider}</span></label>

                    <label htmlFor="description">Service Description:</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                    <label htmlFor="price">New Price:</label>
                    <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />

                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={address} onChange={(e) => setAddress(e.target.value)} />

                    <div className="button-container">
                        <button onClick={handleClick} type="submit">Update Listing</button>
                        {success && <span>Updated Listing</span>}
                        {issue && <span>Listing Update Error</span>}
                    </div>
                </form>
            </div>



            <Footer />
        </div>
    )
}

export default Update