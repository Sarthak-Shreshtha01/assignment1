import React, { useState } from 'react';

const MainContent = ({mainContent}) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-evenly min-h-160 bg-gray-50">
      <h1 className="text-4xl font-semibold text-gray-800 text-center">
        {mainContent.title}
      </h1>
      <p className='text-xl text-center w-10/12  ' >
        {mainContent.description.split('\n').map( (line , index) => (
            <span key={index} >
                {line}
                <br />
                <br />
            </span>
        ) ) }
      </p>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white text-lg hover:bg-blue-600 transition"
          onClick={() => setCount(count - 1)}        
          >
          -
        </button>
        <div className="text-2xl font-bold w-12 text-center select-none">
          {count}
        </div>
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white text-lg hover:bg-blue-600 transition"
          onClick={() => setCount(count + 1)}
          aria-label="Increase"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default MainContent;
