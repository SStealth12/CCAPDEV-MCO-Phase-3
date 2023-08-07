import "./searchitem.css"

const Searchitem = ({ item }) => {
    return (
        <div className="showcase">
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

                    <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                </div>
            </div>

            <div className="showcase-content">
                <a href={`/listings/${item._id}`} className="showcase-category">{item.type}</a>

                <a href={`/listings/${item._id}`}>
                    <h3 className="showcase-title">{item.name}</h3>
                    <h3 className="showcase-company">{item.provider}</h3>
                </a>

                <div className="price-box">
                    <p className="price">₱{item.newPrice}</p>
                    <del>₱{item.oldPrice}</del>
                </div>
            </div>
        </div>
    )
}

export default Searchitem