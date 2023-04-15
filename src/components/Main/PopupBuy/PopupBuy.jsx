import React from 'react';
import './popupbuy.css'

const PopupBuy = ({popupBuy}) => {

    const {buy, name, imageUrl, price} = popupBuy
    return (
        <div className='popup-buy__overlay' style={{display: buy ? 'flex' : 'none'}}>
            <div className='popup-buy'>
                <h2 className="popup-buy__title">Спосибо за покупку !</h2>
                <img className="popup-buy__image" src={imageUrl} alt=""/>
                <h3 className="popup-buy__name">{name}</h3>
                <p className="popup-buy__price">Цена за товар: {name === 'Apple Card' ? '' : '$'}{price}</p>

            </div>
        </div>
    );
};

export default PopupBuy;