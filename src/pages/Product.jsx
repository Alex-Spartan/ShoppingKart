import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'


import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("White");
    const [size, setSize] = useState("X");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [id])

    const handleQuantity = (type) => {
        if (type == 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
        } else if (type == 'inc') {
            setQuantity(quantity + 1)
        }
    }
    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size}));
    }

    return (
        <div className="container">
            <Navbar />
            <Announcement />

            <div className="flex mb-20 justify-evenly">
                <div className="w-1/3">
                    <img src={product.img} alt="" className="h-80p" />
                </div>

                <div className="w-1/3 p-4">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold">{product.title}</h1>
                        <p className="text-gray-600">
                            {product.desc}</p>
                        <span className="block text-xl font-bold">${product.price}</span>
                    </div>

                    <div className="mb-4">
                        <div className="mb-2">
                            <label htmlFor='size' className="mr-2">Size:</label>
                            <select defaultValue={"M"} id="size" className="border p-2">
                                {product.size?.map((size) => {
                                    return (
                                        <option key={size} value={size}>{size}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="mb-2 flex">
                            <label htmlFor="color" className="mr-2">Color:</label>
                            <span className='flex'>
                                {product.color?.map((color) => {
                                    return (
                                        <div key={color} className={`w-6 h-6 bg-${color.toLowerCase()} rounded-full border border-gray-300 mr-2 hover:border-white`}></div>
                                        // have to create custom colors in tailwind
                                    )
                                })}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Remove onClick={() => handleQuantity('dec')} />
                        <span className="mx-1 px-2 border-2 border-blue-300 rounded">{quantity}</span>
                        <Add onClick={() => handleQuantity('inc')} />
                        <button 
                            className="bg-gray-600 text-white px-4 py-2 rounded ml-2"
                            onClick={handleClick}
                        >
                                Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>

    )
}

export default Product;