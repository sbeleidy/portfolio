import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {gridItems.map((item) => (
      <div key={item.text} className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
        <div className="w-60 mb-6">
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <p className="text-gray-600">{item.text}</p>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
