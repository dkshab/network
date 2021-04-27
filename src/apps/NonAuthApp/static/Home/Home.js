import React, { useEffect } from "react";
import { firestore } from "../../../../utilities/firebase";

const Home = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await firestore.collection("posts").get();

      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      console.log(posts);
    };

    fetchPosts();
  }, []);
  return (
    <div className="Home">
      <div className="Home__hero">
        <div className="Home__hero__content">
          <p>all the fun starts here</p>
          <h2>Discover</h2>
          <h2>
            <span>Workshops</span> around you.
          </h2>
        </div>
        <form action="" className="Home__hero__form">
          <div className="Home__hero__form__field">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className="Home__hero__form__field">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className="Home__hero__form__buttons">
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
