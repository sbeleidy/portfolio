import * as React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {data.map((price) => (
      <div key={price.plan} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center">
        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
          {price.plan}
        </h4>
        <h2 className="text-5xl font-extrabold text-indigo-600 mb-4">
          ${price.price}
        </h2>
        <p className="text-gray-500 mb-6 font-medium">{price.description}</p>
        <ul className="space-y-4">
          {price.items.map((item) => (
            <li key={item} className="text-gray-600">
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
