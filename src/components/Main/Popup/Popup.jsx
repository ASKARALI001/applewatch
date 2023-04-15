import React from 'react'
import './popup.css'

const Popup = ({popupOpen, setPopupOpen, products, setProducts}) => {
    const ClosePopupFormOverlay = (e) => {
        if(e.target.className === 'overlay'){
            setPopupOpen(false)
        }
    }


    const addCard = (e) => {
        e.preventDefault();
        setProducts([...products, {
            id: products[products.length - 1].id + 1,
            title: e.target[0].value,
            image: e.target[1].value,
            price: e.target[2].value,
        }]);
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        setPopupOpen(false)
    }

    return (
        <div className='overlay' style={{display: popupOpen === true ? 'flex' : 'none'}} onClick={ClosePopupFormOverlay}>
            <form className="popup__form" onSubmit={addCard}>
                <input placeholder='Title' type="text" className='popup__form-input' required/>
                <input placeholder='Image' type="text" className='popup__form-input' required/>
                <input placeholder='Price' type="number" className='popup__form-input' required/>
                <button type='submit' className='popup__form-btn'>Добавить</button>

                <div className='line' onClick={() => setPopupOpen(false)}>

                </div>
            </form>


        </div>
    );
};

export default Popup;