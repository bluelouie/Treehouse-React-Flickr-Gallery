import React from 'react';

const Image = props => (
  <li>
    <img src={props.url} alt="" />
  </li>
);
//Image template to be repeated in PhotoContainer
export default Image;
