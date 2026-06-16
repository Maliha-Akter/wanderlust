import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/destinations"}>Destinations</Link></li>
                <li><Link href={"/my-bookings"}>My Bookings</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;