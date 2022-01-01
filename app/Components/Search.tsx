import { Form } from 'remix'

function Search() {
    return (
        <div className='w-full pl-[3rem] pt-4 flex' >
            <Form reloadDocument method='get' className='flex w-full'>
                <input className=' max-w-xs w-full h-10 p-6 text-sm font-sans outline-none rounded-md' type="text" placeholder='Search' name="name"/>
                <button type='submit' className='bg-white ml-2 rounded-md text-sm w-[8rem] max-w-xs'>Search</button>
            </Form>

        </div>
    );
}

export default Search