import axios from "axios";
import React from "react";

const users = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h1>List Of Users</h1>
      {/* {users.map((element) => (
        <li key={element.id}>{element.name}</li>
      ))} */}
    </div>
  );
};

export default users;

export async function getStaticProps() {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6063152&lng=77.3855549&page_type=DESKTOP_WEB_LISTING",
    // { credentials: "include" }
  );
  const somedata = await data.json()
  const newData = JSON.stringify(data);
  console.log(newData);
  return {
    props: { users: newData },
  };
}
