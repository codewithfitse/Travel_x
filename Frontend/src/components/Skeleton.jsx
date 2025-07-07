import React from "react";

export const SkeletonImage = ({
  isLoading = true,
  src = "",
  alt = "Logo",
  className = "", // Optional outer wrapper styling
  imgClass = "",
  skeletonAnimation = "bg-gray-300 animate-pulse",
  skeletonClass = "",
}) => {
  return (
    <div className={`flex items-center transition-all ${className}`}>
      {isLoading ? (
        <div className={`${skeletonAnimation} ${skeletonClass}`}></div>
      ) : (
        <img src={src} alt={alt} className={imgClass} />
      )}
    </div>
  );
};

export default SkeletonImage;

export const SkeletonText = ({
  isLoading = true,
  className = "", // Optional outer wrapper styling
  skeletonAnimation = "w-full lg:w-full bg-gray-300 animate-pulse",
  skeletonClass = "",
  textStyle = "",
  text = "",
}) => {
  return (
    <div className={`flex items-center transition-all ${className}`}>
      {isLoading ? (
        <div className={`${skeletonAnimation} ${skeletonClass}`}></div>
      ) : (
        <h1 className={textStyle}>{text}</h1>
      )}
    </div>
  );
};
