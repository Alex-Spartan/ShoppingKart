import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-600  text-white p-6">
            <div className="container mx-auto flex justify-evenly">
                <section>
                    <h2 className="font-bold text-lg mb-2">Vá às Compras</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium consectetur natus laborum repudiandae quis porro laudantium placeat tenetur debitis cupiditate reiciendis illo nisi sunt voluptatem quod, et dignissimos deserunt dolorem?</p>
                </section>
                <section>
                    <h2 className="font-bold text-lg mb-2">Useful Links</h2>
                    <div className='flex space-x-3'>
                        <ul className="space-y-1">
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                            <li>Link 4</li>
                            <li>Link 5</li>
                        </ul>
                        <ul className="space-y-1">
                            <li>Link 6</li>
                            <li>Link 7</li>
                            <li>Link 8</li>
                            <li>Link 9</li>
                            <li>Link 10</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h2 className="font-bold text-lg mb-2">Contact Details</h2>
                    <p>Email: example@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;