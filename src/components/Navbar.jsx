import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector(state => state.user.currentUser);


  return (
    <div className='text-white bg-background-black'>
      <div className=' p-2 sm:p-6 flex justify-center'>
        <div className='flex-1 flex flex-row items-center gap-4'>
          <span className='cursor-pointer'>EN</span>
          <div className='flex items-center gap-2 w-2/3'>
            <input
              type="text"
              placeholder="Search"
              className="text-black items-center border-2 border-gray-300 rounded-md w-1/2 h-8 px-2"
            />
            <SearchIcon />
          </div>
        </div>
        <div className='flex-1 font-bold text-xl text-center'>Vá às Compras</div>


        {!user ?
          <div className='flex-1 flex items-center justify-end gap-4'>
            <Link to="/register">REGISTER</Link>
            <Link to="/login">SIGN IN</Link>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartIcon className='cursor-pointer' />
              </Badge>
            </Link>
          </div>
          :
          <div className='flex-1 flex items-center justify-end gap-4'>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartIcon fontSize="large" className='cursor-pointer' />
              </Badge>
            </Link>
          </div>
        }
      </div>

    </div>
  );
};

export default Navbar;