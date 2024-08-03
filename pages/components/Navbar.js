import React from 'react';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";

const Navbar = () => {
    return (
        <nav className={styles.mainnav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/about">About</Link>
                </li>

                <li>
                    <Link href="/blog">Blogs</Link> 
                </li>

                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
