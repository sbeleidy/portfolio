import React from "react";
import PropTypes from "prop-types";
import { ResearchPageTemplate } from "../../templates/research-page";

const ResearchPagePreview = ({ entry, widgetFor }) => {
  return (
    <ResearchPageTemplate
      title={entry.getIn(["data", "title"])}
      main={{
        heading: entry.getIn(["data", "main", "heading"]),
        description: entry.getIn(["data", "main", "description"]),
        body: widgetFor("body"),
      }}
      conclusion={entry.getIn(["data", "conclusion"])}
    />
  );
};

ResearchPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default ResearchPagePreview;
