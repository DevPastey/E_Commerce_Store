

const HomePage = () => {

    const handleSubmit = () => {
        console.log("forn Submited successfully");
    }
  return (
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

        {/* <form onSubmit={handleSubmit} className="bg-gray-900/60 flex flex-col px-4 py-6 w-130">
            <h3>Create New Product</h3>
            <Input name="name" value={} onChange={} />
        </form> */}
    </div>
  )
}

export default HomePage
