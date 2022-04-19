import React from "react";
import PropTypes from "prop-types";
import { ResearchPageTemplate } from "../../templates/research-page";

const ResearchPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(["data", "main", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  return (
    <ResearchPageTemplate
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      main={{
        heading: entry.getIn(["data", "main", "heading"]),
        description: entry.getIn(["data", "main", "description"]),
        blurbs: blurbs,
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
