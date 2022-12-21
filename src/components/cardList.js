import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
  if (false) {
    throw new Error("Opps An Eroor Occur::")
  }
  return (
    <div>
      {robots.map((user, num) => {
        return (
          <Card
            id={robots[num].id}
            name={robots[num].name}
            username={robots[num].username}
            email={robots[num].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
