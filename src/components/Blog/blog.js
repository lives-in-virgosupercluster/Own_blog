import React from 'react'
import styles from "./blog.module.css";
import Posts from '../Posts';
import SmallWithSocial from '../Footer';
import { Heading } from '@chakra-ui/react';
const Blog = () => {
  return (
    <div className={styles.container}>
<Heading size="xl">Blog</Heading>
<p> Here, you'll find insights into my  projects and thoughts about Software Development in general,Whether you're a seasoned developer or just starting your coding journey, I invite you to join me on this exploration. Let's delve into the intricacies of code, celebrate achievements, and tackle challenges together!</p>
<div className={styles.tags}>
  <p className={styles.para}>Common tags:</p>
  <div className={`${styles.tag} ${styles.reactjs}`}>Reactjs</div>
  <div className={`${styles.tag} ${styles.nodejs}`}>Nodejs</div>
  <div className={`${styles.tag} ${styles.nextjs}`}>Nextjs</div>
  <div  className={`${styles.tag} ${styles.mongodb}`}>MongoDB</div>
  <div className={`${styles.tag} ${styles.sql}`}>SQL</div>
  <div  className={`${styles.tag} ${styles.git}`}>GIT</div>
  <div  className={`${styles.tag} ${styles.vscode}`}>VSCODE</div>
</div>
<Posts></Posts>
        <SmallWithSocial></SmallWithSocial>
    </div>
  )
}
export default Blog;
