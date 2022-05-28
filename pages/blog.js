import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = (props) => {
  const [blogs] = useState(props.allBlogs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <>
              <div key={blogitem.slug} className={styles.blog_home}>
                <Link href={`/blogPost/${blogitem.slug}`}>
                  <h3 className={styles.blog_item_title}>{blogitem.title}</h3>
                </Link>
                <p>{blogitem.content.substr(0, 1000)}....</p>
                <span>{blogitem.author}</span>
              </div>
            </>
          );
        })}
      </main>
    </div>
  );
};

// server side redering for live update
export async function getServerSideProps() {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}

export default Blog;
