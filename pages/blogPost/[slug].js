import React, { useState } from "react";
import styles from "../../styles/BlogPost.module.css";

const Slug = (props) => {
  console.log(props);
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
        <h2>{blog && blog.author}</h2>
      </main>
    </div>
  );
};

// server site redering
export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();

  return {
    props: { myBlog },
  };
}

export default Slug;
