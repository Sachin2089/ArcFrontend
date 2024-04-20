import React from 'react';

const GoogleFormIframe = () => {
  return (
    <div className=' top-7 mt-20 mb-20 bg-white'>
        <iframe
      title="Registration Form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSfTu2BBXPjISmAvndm2HqYdYnrWb8yPAxVxjhz0BS2g3TQgdw/viewform?embedded=true"
      width="100%"
      height="100%"
      
      style={{ minHeight: '900px' }} // Set a minimum height to prevent the form from being too small
      allowFullScreen
    >
      Loading…
    </iframe>
    </div>
  );
};

export default GoogleFormIframe;

