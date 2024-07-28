import React, { useEffect, useState } from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        }).then((parsed) => {
            console.log(parsed)
            setBlogs(parsed)
        })
    }, [])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blogitem) => {
                    return <div className={styles.blogItem} key={blogitem.slug}>
                        <Link href={`/blogpost/${blogitem.slug}`}>
                            <h3>{blogitem.title}</h3>
                            <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
                        </Link>

                    </div>
                })}
            </main>
        </div>
    )
}

export default Blog
