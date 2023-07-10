import InputSearch from '@components/input-search';
import UserList from '@components/user-list';
import React, { useEffect, useRef, useState } from 'react';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const GroupInputHome: React.FC = () => {
    const [on, setOn] = useState<Boolean>(false);
    const userRef = useRef<HTMLDivElement>(null);

    const handleOn = () => {
        setOn(!on);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userRef.current && !userRef.current.contains(event.target as Node)) {
                setOn(false)
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex gap-x-5'>
            <div className='flex'>
                <div className='relative'>
                    <InputSearch></InputSearch>
                </div>
            </div>
            <div className='centerAll gap-x-5 setIcon'>
                <FiHeart></FiHeart>
                <NavLink to="/cart" className={({ isActive }) =>
                    isActive
                        ? "p-[6px] rounded-full text-white bg-red-600 transition-all"
                        : ""
                }>
                    <FiShoppingCart></FiShoppingCart>
                </NavLink>
                <div className='relative' ref={userRef}>
                    <FiUser onClick={handleOn}></FiUser>
                    <div className='bg-gradient-to-br from-gray-900 via-gray-900 to-gray-700 text-white w-[213px] absolute right-0 top-10 z-10'>
                        {on && <UserList></UserList>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupInputHome;