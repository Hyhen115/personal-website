import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Function to update cursor position
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Function to detect hovering over clickable elements
    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isClickable = 
        hoveredElement && (
          hoveredElement.closest('a') || 
          hoveredElement.closest('button') || 
          hoveredElement.closest('input') || 
          hoveredElement.closest('textarea') || 
          hoveredElement.closest('select') ||
          window.getComputedStyle(hoveredElement).cursor === 'pointer'
        );
      
      setIsPointer(isClickable);
    };

    // Function to handle mouse events
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    // Add event listeners
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursorType);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursorType);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y]);

  return (
    <>
      {/* Inner dot cursor */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full bg-gray-800 dark:bg-white transition-transform duration-100 ease-out ${
          isClicking ? 'w-2 h-2 transform scale-150' : 'w-2 h-2'
        } ${isPointer ? 'opacity-70' : 'opacity-100'} ${isHidden ? 'opacity-0' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Outer circle cursor */}
      <div 
        className={`fixed pointer-events-none z-40 rounded-full border border-gray-800 dark:border-white transition-all duration-200 ease-out ${
          isClicking ? 'w-6 h-6 opacity-70' : 'w-10 h-10 opacity-40'
        } ${isPointer ? 'w-6 h-6 opacity-70' : ''} ${isHidden ? 'opacity-0' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default CustomCursor;