import React from 'react';
import avt1 from '@assets/image/avt1.png'
import avt2 from '@assets/image/avt2.png'
import avt3 from '@assets/image/avt3.png'
import { FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ListAuthorUser: { id: number, image: any, name: string, job: string }[] = [
    {
        id: 1,
        image: avt1,
        name: 'Tom Cruise',
        job: 'Founder & Chairman'
    },
    {
        id: 2,
        image: avt2,
        name: 'Emma Watson',
        job: 'Managing Director'
    },
    {
        id: 3,
        image: avt3,
        name: 'Will Smith',
        job: 'Product Designer'
    }
]
const ListAuthor = () => {
    return (
        <div className='flex justify-around mt-24'>
            {ListAuthorUser.map((item: any, index: number) => (
                <div key={item.id}>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <p className='fontAcount text-[32px] font-medium mt-5 mb-1'>{item.name}</p>
                    <p>{item.job}</p>
                    <div className='flex gap-x-3 mt-3'>
                        <FiTwitter className='setIcon'></FiTwitter>
                        <FiInstagram className='setIcon'></FiInstagram>
                        <FiLinkedin className='setIcon'></FiLinkedin>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListAuthor;