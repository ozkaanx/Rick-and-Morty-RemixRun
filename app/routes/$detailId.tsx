import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { json, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { Result } from '~/types';


interface DetailIdProps {
    params?: number | any,
}

export async function loader({ params }: number | any) {
    const charId: number = params.detailId;
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
    return data;
}


const DetailId: React.FC<DetailIdProps> = ({ }) => {
    const charData = useLoaderData<Result>()
    return (
        <div className='container px-2 md:px-24 lg:px-50 m-auto mt-14'>
            <Link to="/">
                <button className='mb-9 text-2xl font-mono font-semibold text-white uppercase '>Go Back</button>
            </Link>
            <div className="flex flex-col justify-center items-center w-[40rem] border-2 border-[#007541] bg-[#007541] bg-opacity-10 p-5 m-auto" >
                <div className='min-h-[24rem] h-auto overflow-hidden relative flex'>
                    <img className='w-full h-auto object-contain' src={charData.image} alt="" />
                </div>
                <div className='p-8 flex flex-col gap-10 text-center'>
                    <div className='text-5xl font-bold text-white font-sans'>
                        {charData.name}
                    </div>
                    <div className='text-lg leading-7 flex justify-between'>
                        <span className='text-[#007541]'>{charData.gender}</span>
                        <span className='text-[#007541]'>{charData.species}</span>
                        <span className='text-[#007541]'>{charData.status}</span>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default DetailId