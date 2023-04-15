import React, {useState}  from 'react';
import Airpods from "../../assets/main/Airpods.png";

const Card = ({item, setProducts , products, popupBuy, setPopupBuy}) => {


    const {image, title, price, id} = item;

    const deleteCardHandler = (id) => {
        setProducts(products.filter((el) => el.id !== id))
    }
    const buyCardHandler = (title, image, price) => {
        setPopupBuy({
            name: title,
            imageUrl: image,
            price: price,
            buy: true,

        });

        setTimeout(() => {
            setPopupBuy({
                name: '',
                imageUrl: '',
                price: null,
                buy: false,
            })
        }, 4000)

    }

    return (
        <div className="content__card">
            <img src={item.image} alt={image} className="content__card-img"/>
            <h3 className="content__card-title">{title}</h3>
            <p className="content__card-price">{title !== 'Apple Card' ? `$${price}.00` : price}</p>
            <div className='content__card-btns'>
                <button className="content__card-btn" type='button' onClick={() => buyCardHandler(title, image, price)}>{title === 'Apple Card' ? 'Apply' : 'Buy'}</button>
                <button className="content__card-btn" onClick={() => deleteCardHandler(id)}>Delet</button>
            </div>
        </div>
    );
};

export default Card;