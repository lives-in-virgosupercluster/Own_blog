"use client"
import React from 'react'
import styles from "./posts.module.css"
import { useState,useEffect } from 'react';
import Link from 'next/link';
import { ReactjsImage } from '../ReactjsImage';
import { Heading } from '@chakra-ui/react'
 const Posts = () => {


  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Function to fetch posts from API
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/read'); 
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts); 
        } else {
          throw new Error('Failed to fetch posts');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts(); // Call the function to fetch posts when component mounts
  }, []); 
  return (
    <div className={styles.posts}>
      <Heading size="xl">Latest posts</Heading>
        {posts.map(post => (
          <Link href={`/post/${post._id}`} className={styles.link} key={post._id}>
            <ReactjsImage></ReactjsImage>
        <div className={styles.post} key={post._id}> {/* Assuming each post has a unique _id */}
          <Heading size="md">{post.title}</Heading>{/* Assuming post title */}
          <p>published on {post.time}</p> {/* Assuming post time */}
         
        </div>
        </Link>
      ))}

      </div>
  )
}
export default Posts;
