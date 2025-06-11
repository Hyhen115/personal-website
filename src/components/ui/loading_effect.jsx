import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingEffect = ({ onLoadingComplete }) => {
  const svgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Phase 1: Complete the animation and show the signature
    const animationTimer = setTimeout(() => {
      // Phase 2: Start fade-out animation after a brief pause
      setIsVisible(false);
      
      // Phase 3: Call onLoadingComplete after the fade-out animation is complete
      setTimeout(() => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 800); // Allow time for fade-out animation (matches exit animation duration)
    }, 4000); // Total time before fade-out begins
    
    return () => clearTimeout(animationTimer);
  }, [onLoadingComplete]);

  // Three consolidated strokes - one continuous path per phase
  const signatureStrokes = [
    // Phase 1: Left side of H as a single continuous path
    "M 278.762,102.109 C 278.281,112.043 277.859,111.982 276.957,121.855 C 275.694,128.622 276.038,128.666 274.277,135.355 C 271.595,147.088 271.800,147.129 269.168,158.871 C 267.500,166.207 267.654,166.220 266.395,173.621",
    
    // Phase 2: Right side of H as a single continuous path
    "M 327.914,101.902 C 327.121,105.024 327.125,105.025 326.336,108.148 C 325.074,113.012 325.111,113.021 323.895,117.895 C 322.351,123.343 322.568,123.385 321.324,128.895 C 318.538,143.675 318.593,143.663 316.379,158.535 C 316.055,164.053 315.585,163.995 315.418,169.535",
    
    // Phase 3: Horizontal connector and W part as a single continuous path
    "M 253.770,150.863 C 256.215,149.667 256.268,149.803 258.766,148.742 C 269.303,145.369 269.153,144.976 279.645,141.480 C 287.569,137.976 287.744,138.435 295.648,134.875 C 303.639,131.998 303.575,131.833 311.656,129.195 C 323.834,124.437 323.960,124.894 336.289,120.668 C 342.396,119.260 342.276,118.856 348.539,118.035 C 355.302,115.206 352.957,117.154 357.410,116.457 C 357.437,120.024 358.824,117.296 355.582,122.215 C 351.874,125.022 352.732,125.581 348.000,127.570 C 342.705,129.870 345.770,129.037 343.375,130.246 C 347.361,129.846 344.379,130.810 351.348,129.449 C 356.231,127.256 354.344,129.151 357.340,128.855 C 358.024,133.311 358.843,131.024 356.570,136.984 C 353.798,141.132 354.795,141.471 350.883,145.176 C 348.109,147.053 349.198,147.513 347.371,149.746 C 346.981,156.564 345.631,156.094 345.926,163.258 C 345.601,166.494 345.443,166.318 344.297,169.254"
  ];

  // Animation variants for the three main strokes - smoother timing
  const strokeVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    // Phase 1 animation (left vertical)
    visible1: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          duration: 0.8,
          ease: "easeOut"
        },
        opacity: { 
          duration: 0.05
        }
      }
    },
    // Phase 2 animation (right vertical)
    visible2: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          duration: 0.8,
          delay: 0.9, // Reduced delay for smoother transition
          ease: "easeOut"
        },
        opacity: { 
          duration: 0.05,
          delay: 0.9
        }
      }
    },
    // Phase 3 animation (horizontal + W)
    visible3: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          duration: 1.2, // Longer duration for the more complex stroke
          delay: 1.8, // Reduced delay for smoother transition
          ease: "easeOut"
        },
        opacity: { 
          duration: 0.05, 
          delay: 1.8
        }
      }
    }
  };

  // Animation variants for the text appearing after signature
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 3.2, // Appear soon after signature completion
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  // Container animation for fade-in and fade-out
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut" 
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="flex flex-col items-center">
            {/* Signature SVG - smaller size */}
            <div className="w-48 h-32 mb-5">
              <svg 
                ref={svgRef}
                width="100%" 
                height="100%" 
                viewBox="240 90 130 90" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Phase 1: Left vertical stroke */}
                <motion.path
                  d={signatureStrokes[0]}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="text-blue-600 dark:text-blue-400"
                  variants={strokeVariants}
                  initial="hidden"
                  animate="visible1"
                />
                
                {/* Phase 2: Right vertical stroke */}
                <motion.path
                  d={signatureStrokes[1]}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="text-blue-600 dark:text-blue-400"
                  variants={strokeVariants}
                  initial="hidden"
                  animate="visible2"
                />
                
                {/* Phase 3: Horizontal connector and W */}
                <motion.path
                  d={signatureStrokes[2]}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="text-blue-600 dark:text-blue-400"
                  variants={strokeVariants}
                  initial="hidden"
                  animate="visible3"
                />
              </svg>
            </div>
            
            {/* Text that appears after signature animation */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Henry Wong
              </p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Software Developer
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingEffect;