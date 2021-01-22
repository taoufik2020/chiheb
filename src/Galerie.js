import React, { Component } from "react";

export class Galerie extends Component {
  render() {
    return (
      <div>
        <div class='card'>
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
            alt='...'
            class='img-thumbnail'
          />
        </div>
        <div class='card'>
          <img
            src='https://www.gettyimages.fr/gi-resources/images/500px/983794168.jpg'
            alt='...'
            class='img-thumbnail'
          />
        </div>

        <div class='card'>
          <img
            src='https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg'
            alt='...'
            class='img-thumbnail'
          />
        </div>
      </div>
    );
  }
}

export default Galerie;
