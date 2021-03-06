import React from 'react';

const AddedFeature = props => {

  const removeFeatureHandler = () => {
    props.removeFeatureHandler(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeatureHandler}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
