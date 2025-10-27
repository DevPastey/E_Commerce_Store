

const Input = () => {
  return (
    <div>
      	<label htmlFor='name' className='block text-sm font-medium text-gray-300'>
            Product Name
        </label>
        <input
            type='text'
            id='name'
            name='name'
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
                px-3 text-white focus:outline-none focus:ring-2
            focus:ring-emerald-500 focus:border-emerald-500'
            required
        />
    </div>
  )
}

export default Input
