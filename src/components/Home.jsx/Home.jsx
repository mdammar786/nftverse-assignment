import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then((data) => data.json())
      .then((data) => setUserData(data));
  }, []);

  const showCards = () => {
    const realdata = [];

    if (userdata.content !== undefined) {
      userdata.content.forEach((item) => {
        const sliced = item.title.indexOf(":");
        const titled = item.title.slice(sliced + 2);
        realdata.push([titled, item.coverImageUrl]);
      });
    }
    const renderCards = realdata.map((item, i) => {
      return (
        <div key={i}>
          <img src={item[1]} alt="userimage" />
          <a href="{item[1]}">{item[0]}</a>
        </div>
      );
    });

    return renderCards;
  };

  return (
    <div className="background">
      <div className="extra">
        <div>
          <p>Discover</p>
        </div>
        <div className="plus">
          <p>+</p>
        </div>
      </div>
      <div className="cards grow-shadow a">{showCards()}</div>
    </div>
  );
};

export default Home;
