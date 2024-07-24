import React from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';
const Blog = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <div className={styles.blogs}>
                <div className={styles.blogItem}>
                    <Link href={'/blogpost/learn-javascript'}>
                    <h3>How to learn javascript in 2024?</h3>
                    </Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className={styles.blogs}>
                <div className={styles.blogItem}>
                    <h3>How to learn javascript in 2024?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className={styles.blogs}>
                <div className={styles.blogItem}>
                    <h3>How to learn javascript in 2024?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
            </div>
            <div className={styles.blogs}>
                <div className={styles.blogItem}>
                    <h3>How to learn javascript in 2024?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
            </div>
            </main>
        </div>
    )
}

export default Blog
