import React from 'react';
import { useRouter } from 'next/router'
import styles from "@/styles/BlogPost.module.css";

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={styles.container}> 
            <main className={styles.main} >
            <h1>Title {slug}</h1>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magni quo repellat in saepe, autem corrupti consequuntur praesentium quia reprehenderit adipisci assumenda magnam consequatur odit sint aliquam fugit ratione repellendus!
            </div>
            </main>
        </div>
    )
}

export default slug;
