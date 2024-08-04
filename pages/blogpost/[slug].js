import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from "@/styles/BlogPost.module.css";
import * as fs from 'fs'

const Slug = (props) => {
    function createMarkup(content) {
        return { __html: content };
    }

    const [blog, setBlog] = useState(props.myBlog);
    return <div className={styles.container}>
        <main className={styles.main} >
            <h1 className={styles.title}>{blog && blog.title}</h1>
            {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} className={styles.blogContent}></div>}

        </main>
    </div>

};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: false // put false for 'blocking'
    };
}


export async function getStaticProps(context) {
    // const router = useRouter();
    //API call
    // const { slug } = router.query;
    const { slug } = context.params;

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) }, //will be passed to the page component as props
    }
}

export default Slug;
