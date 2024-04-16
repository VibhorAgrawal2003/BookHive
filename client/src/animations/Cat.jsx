import React, { useEffect, useRef } from 'react';
import anime from 'animejs'; // Import anime.js

const MascotAnimation = () => {
  const mascotRef = useRef(null);

  useEffect(() => {
    // Define the animation
    const animation = anime({
      targets: mascotRef.current,
      translateX: 250, // Move 250px to the right
      rotate: '1turn', // Rotate 360 degrees (1 full turn)
      duration: 3000, // Duration of the animation (3 seconds)
      loop: true, // Loop the animation
      easing: 'easeInOutQuad', // Easing function
    });

    // Cleanup function to stop the animation when component unmounts
    return () => {
      animation.pause(); // Pause the animation
    };
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div
      ref={mascotRef}
      style={{
        width: '100px',
        height: '100px',
        background: 'url(https://placekitten.com/200/200)',
        backgroundSize: 'cover',
        borderRadius: '50%', // Make it circular
        border: '2px solid #fff', // Add a white border
      }}
    />
  );
};

export default MascotAnimation;
