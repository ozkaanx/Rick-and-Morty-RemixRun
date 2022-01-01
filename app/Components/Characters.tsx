import React from 'react'
import { Link } from 'react-router-dom';
import { Result } from "~/types";

interface CharactersProps {
    character: Result;
}

const Characters: React.FC<CharactersProps> = ({ character }) => {
    return (
        <>
            {<Link to={`/${character.id}`}>
                <div className="card flex flex-col gap-0 mb-1 relative overflow-hidden h-[18rem] border-2 border-[#007541] rounded-xl shadow-lg cursor-pointer  transition-bottom delay-100 hover:shadow-2xl hover:bottom-3" key={character.id}>
                    <div className="w-full h-[55rem] overflow-hidden">
                        <img className='w-full h-full object-fill' src={character.image} alt="" />
                    </div>
                    <div className="w-full h-full flex items-center justify-center text-center m-auto bg-white">
                        <p className='text-base font-mono w-5/6'>{character.name}</p>
                    </div>
                </div>
            </Link>}
        </>
    );
}

export default Characters