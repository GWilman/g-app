import React from 'react';

function Spinner() {

  const style = {
    'margin': 'auto',
    'background': 'none',
    'display': 'block',
    'shapeRendering': 'auto'
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style} width="40px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#09d3ca" strokeWidth="8" r="40" strokeDasharray="188.49555921538757 64.83185307179586" transform="rotate(35.946 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  );

}

export default Spinner;
