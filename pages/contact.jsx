import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  // for do not refresh
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, phone, desc };

    // calling the api
    fetch("http://localhost:3000/api/postContact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contact");
        setPhone("");
        setName("");
        setEmail("");
        setDesc("");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // Change the state as an input
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.contact_title}>
        {" "}
        <h1>Contact us</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="Name" className={styles.formlabel}>
            <p>
              Name <span className={styles.star}>*</span>
            </p>
          </label>
          <input
            required
            placeholder="Enter your name"
            onChange={handleChange}
            value={name}
            type="text"
            className={styles.form_control}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            <p>
              {" "}
              Email <span className={styles.star}>*</span>
            </p>
          </label>
          <input
            required
            placeholder="email@domain.com"
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            id="email"
            className={styles.form_control}
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            <p>
              Number <span className={styles.star}>*</span>
            </p>
          </label>
          <input
            required
            onChange={handleChange}
            placeholder="123456789"
            type="phone"
            name="phone"
            value={phone}
            id="phone"
            className={styles.form_control}
          />
        </div>
        <div className={styles.textarea}>
          <div className={styles.mb3}>
            <p>
              Message <span className={styles.star}>*</span>
            </p>
            <textarea
              required
              name="desc"
              value={desc}
              onChange={handleChange}
              className={styles.form_control}
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="write your concern here "
              style={{ width: "254px", height: "31px" }}
            />
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
