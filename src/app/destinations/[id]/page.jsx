

import { EditModal } from '@/components/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaRegCalendar } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params; // just id see
    // console.log(id);
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    console.log(destination);

    const { _id, imageUrl, price, destinationName, duration, country, description } = destination;

    return (
        <div className='max-w-7xl mx-auto'>
            <EditModal destination={destination}></EditModal>
            <Image
                className="w-full h-100 object-cover"
                alt={destinationName}
                src={imageUrl}
                height={500}
                width={800}
            />
            <div className="p-2">
                <div className="flex items-center gap-1">
                    <LuMapPin /> <span>{country}</span>
                </div>
                <div className="flex justify-between gap-2">
                    <div>
                        <div>
                            <h2 className="text-xl font-bold">{destinationName}</h2>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaRegCalendar /> {duration}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">${price}</h3>
                    </div>
                </div>
                <h1 className="mt-10 text-2xl font-bold">Overview</h1>
                <p className="max-w-6xl">{description}</p>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;