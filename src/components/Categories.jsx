import { categories } from '../data';
import CategoryItem from './CategoryItem';


const Categories = () => {
    return (
        <div className="bg-gray-200 py-8 flex flex-col items-center justify-center">
            <p className='mb-4 text-lg'>Shop By Category</p>
            <hr className='w-[90%] mb-4 border-gray-300' />
            <div className='flex flex-col md:flex-row md:flex-wrap justify-evenly items-center h-full'>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}
            </div>

        </div>
    )
}

export default Categories