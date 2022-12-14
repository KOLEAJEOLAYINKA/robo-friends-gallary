import React from "react";
import "tachyons";

class Card extends React.Component {
  render() {
    const { name, email, id } = this.props;
    return (
      // <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
         <div className="card">   
        <img src={`https://robohash.org/${id}?size=300x300`} alt="robots" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}
export default Card;
