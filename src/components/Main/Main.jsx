import React, {useState} from 'react';
import Airpods from '../../assets/main/Airpods.png'
import Iphone from '../../assets/main/Iphone.png'
import Appltv from '../../assets/main/Appletv.png'
import Applcard from '../../assets/main/AppleCard.png'
import './main.css'
import Card from "./Card";
import Popup from "./Popup/Popup";
import PopupBuy from "./PopupBuy/PopupBuy";


const Main = () => {


    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Airpods',
            price: 199.00,
            image: Airpods
        },
        {
            id: 2,
            title: 'Iphone XR',
            price: 799.00,
            image: Iphone
        },
        {
            id: 3,
            title: 'Apple TV 4K',
            price: 179.00,
            image: Appltv
        },
        {
            id: 4,
            title: 'Apple Card',
            price: 'Free',
            image: Applcard
        },
        {
            id: 5,
            title: 'Airpods',
            price: 199.00,
            image: Airpods
        },
        {
            id: 6,
            title: 'Iphone XR',
            price: 799.00,
            image: Iphone
        },
        {
            id: 7,
            title: 'Apple TV 4K',
            price: 179.00,
            image: Appltv
        },
        {
            id: 8,
            title: 'Apple Card',
            price: 'Free',
            image: Applcard
        }
    ])

    const [all, setAll] = useState('')

    const [popupOpen, setPopupOpen] = useState(false)

    const [popupBuy, setPopupBuy] = useState({
        name: '',
        imageUrl: '',
        price: null,
        buy: false,
    });

    return (
        <main>
            <div className="container">
                <section className='content'>
                    <div className="content__header">
                        <h2 className="content__title">
                            Check also
                        </h2>
                        <p className="content__all" onClick={() => setAll('all')}>See All > </p>
                    </div>
                    <button type='button' className='addCard' onClick={() => setPopupOpen(true)}>Add card</button>
                    <div className="content__row">
                        {products.filter((item, idx) => (all.length === 0 ? idx < 4 : item)).map((item) => (
                            <Card popupBuy={popupBuy} setPopupBuy={setPopupBuy} setProducts={setProducts}
                                  products={products} key={item.id} item={item}/>
                        ))}
                    </div>
                    {
                        all.length !== 0 ? <p onClick={() => setAll('')}>Slip</p> : ''
                    }


                </section>
                <Popup products={products} setProducts={setProducts} popupOpen={popupOpen} setPopupOpen={setPopupOpen}/>
                <PopupBuy popupBuy={popupBuy}/>

            </div>
        </main>
    );
};

export default Main;