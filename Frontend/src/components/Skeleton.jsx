import React from "react";

const SkeletonImage = ({
  isLoading = true, // Allow external control
  src = "",
  alt = "Logo",
  className = "", // Optional outer wrapper styling
  imgClass = "",
  skeletonClass = "w-14 lg:w-18 h-14 bg-gray-300 rounded-full animate-pulse",
}) => {
  return (
    <div className={`flex items-center transition-all ${className}`}>
      {isLoading ? (
        <div className={skeletonClass}></div>
      ) : (
        <img src={src} alt={alt} className={imgClass} />
      )}
    </div>
  );
};

export default SkeletonImage;
