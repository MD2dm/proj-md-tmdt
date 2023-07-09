import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiHome, FiLogOut, FiShoppingBag, FiStar, FiUnlock, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const listMenuUser: { id: number, icon: any, to: string, name: string }[] = [
    {
        id: 1,
        icon: <FiUser></FiUser>,
        to: "",
        name: "listuser1"
    },
    {
        id: 2,
        icon: <FiHome></FiHome>,
        to: "/usersell",
        name: "listuser6"
    },
    {
        id: 3,
        icon: <FiShoppingBag></FiShoppingBag>,
        to: "",
        name: "listuser2"
    },
    {
        id: 4,
        icon: <FiUnlock></FiUnlock>,
        to: "",
        name: "listuser3"
    },
    {
        id: 5,
        icon: <FiStar></FiStar>,
        to: "",
        name: "listuser4"
    },
    {
        id: 6,
        icon: <FiLogOut></FiLogOut>,
        to: "",
        name: "listuser5"
    },

]
const UserList = () => {
    const { t } = useTranslation();

    return (
        <div className='bg-gradient-to-br from-gray-900 via-gray-900 to-gray-700 text-white w-[213px] absolute right-0 top-10 z-10'>
            {listMenuUser.map((item: any, index: any) => (
                <NavLink to={item.to} key={item.index} className='flex  px-4 py-5 hover:bg-blue-400 gap-x-3'>
                    <div className='setIcon'>{item.icon}</div>
                    <div className='text-[14px]'>{t(item.name)}</div>
                </NavLink>
            ))}
        </div>
    );
};

export default UserList;