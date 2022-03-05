import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(entry.getIn(["data", "image"]))}
        title={data.title}
        heading={data.heading}
        content={widgetFor("body")}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
