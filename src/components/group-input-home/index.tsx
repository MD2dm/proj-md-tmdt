import InputSearch from '@components/input-search';
import UserList from '@components/user-list';
import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

const GroupInputHome = () => {
    const [on, setOn] = useState<Boolean>(false);
    const handleOn = () => {
        setOn(!on)
    }
    return (
        <div className='flex gap-x-5' >
            <div className='flex'>
                <div className='relative'>
                    <InputSearch></InputSearch>
                </div>
            </div>
            <div className='centerAll gap-x-5 setIcon'>
                <FiHeart></FiHeart>
                <FiShoppingCart></FiShoppingCart>
                <div className='relative'>
                    <FiUser onClick={handleOn}></FiUser>
                    {on && <UserList></UserList>}
                </div>
            </div>
        </div >
    );
};

export default GroupInputHome;