
import { useState, useContext } from "react"
import Desktopnav from "../../components/desktopnav/Desktopnav"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Promobar from "../../components/promobar/Promobar"
import { AuthContext } from '../../context/AuthContext';
import "./create.css"
import axios from "axios"

const Create = () => {
    const { user } = useContext(AuthContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [serviceprovider, setServiceProvider] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const createdBy = user.email;

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const resetForm = () => {
        setTitle("");
        setType("");
        setDescription("");
        setPrice("");
        setServiceProvider("");
        setLocation("");
    };

    const handleClick = async (e) => {
        e.preventDefault();

        const requestData = {
            name: title,
            type: type,
            provider: serviceprovider,
            address: location,
            description: description,
            createdBy: createdBy,
            oldPrice: price,
            newPrice: price
        };
        console.log(requestData)

        try {
            const res = await axios.post('/listing', requestData);
            console.log(res.data);
            setSuccess(true);
            setError(null);
            resetForm();
        } catch (err) {
            setError(err.response.data); // Assuming the server returns error message in the response
            console.log(err.response.data)
            setSuccess(false);
        }
    }

    return (
        <div className='create-listing'>
            <Promobar />
            <Navbar />
            <Desktopnav />

            <div className="banner">

                <div className="container">

                    <div className="slider-container has-scrollbar">

                        <div className="slider-item">

                            <img src="./assets/images/create-banner1.svg" alt="bg1 banner" className="banner-img" />


                        </div>

                        <div className="slider-item">

                            <img src="./assets/images/create-banner2.svg" alt="bg2 banner" className="banner-img" />

                        </div>

                    </div>

                </div>

            </div>

            <div className="content">
                <h2>Create Service Listings</h2>
                <p>Service providers can create listings for the services they offer.</p>
                <form className="listing-form" id="serviceListingForm">
                    <label htmlFor="title">Service Title:</label>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="title">Service Type:</label>
                    <input type="text" id="type" name="type" value={type} onChange={(e) => setType(e.target.value)} />

                    <label htmlFor="description">Service Description:</label>
                    <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="price">Price:</label>
                            <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="form-column">
                            <label htmlFor="serviceprovider">Service Provider:</label>
                            <input type="text" id="serviceprovider" name="serviceprovider" value={serviceprovider} onChange={(e) => setServiceProvider(e.target.value)} />
                        </div>
                    </div>

                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />

                    <div className="button-container">
                        <button onClick={handleClick} type="submit">Create Listing</button>
                        {success && <span>Created Listing</span>}
                        {error && <span>Listing Creation Error</span>}
                    </div>
                </form>
            </div>



            <Footer />
        </div>
    )
}

export default Create