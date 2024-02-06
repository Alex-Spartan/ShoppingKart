import { categories } from '../data';
import CategoryItem from './CategoryItem';


const Categories = () => {
    return (
        <div className="flex flex-wrap justify-evenly bg-gray-200">
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}

        </div>
    )
}

export default Categories