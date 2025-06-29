import React from "react";

const SkeletonImage = ({
  isLoading = true, // Allow external control
  src = "",
  alt = "Logo",
  className = "", // Optional outer wrapper styling
  imgClass = "",
  skeletonClassAnimation = "w-full lg:w-full bg-gray-300 rounded-full animate-pulse",
  skeletonClass = "",
}) => {
  return (
    <div className={`flex items-center transition-all ${className}`}>
      {isLoading ? (
        <div className={`${skeletonClassAnimation} ${skeletonClass}`}></div>
      ) : (
        <img src={src} alt={alt} className={imgClass} />
      )}
    </div>
  );
};

export default SkeletonImage;
