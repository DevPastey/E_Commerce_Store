import CategoryItem from "../components/CategoryItem";
import { categories } from "../constants/images";


const isAdmin = false;

const HomePage = () => {

    const handleSubmit = () => {
        console.log("forn Submited successfully");
    }
  return (
   <div className="relative min-h-screen text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-center text-4xl md:text-5xl font-bold text-primary-green mb-4">
                Explore Our Categories
            </h1>
            <p className="text-center text-sm lg:text-lg text-gray-300 mb-12">
                Discover the latest trends in eco-friendly fashion
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, i) => (
                    <CategoryItem
                        key={category.name}
                        name={category.name}
                        imageUrl={category.imageURL}
                        href={category.href}
                    />
                ))}
            </div>
        </div>

       {isAdmin && (
        <div className="flex flex-col gap-4 justify-center items-center text-white">
            <h1 className="text-primary-green text-xl font-bold">Admin Dashboard</h1>

            <div className="flex gap-4 text-sm">
                <div className="bg-primary-green/60 py-1 px-2 rounded">
                    <span>Create Product</span>
                </div>

                <div className="bg-gray-600/60 py-1 px-2 rounded">
                    <span>Products</span>
                </div>

                <div className="bg-gray-600/60 py-1 px-2 rounded">
                    <span>Analytics</span>
                </div>
            </div>
        </div>
       ) }
       
    <div/>
        {/* <form onSubmit={handleSubmit} className="bg-gray-900/60 flex flex-col px-4 py-6 w-130">
            <h3>Create New Product</h3>
            <Input name="name" value={} onChange={} />
        </form> */}
    </div>
  )
}

export default HomePage
