import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const ResearchPageTemplate = ({ title, main, conclusion }) => {
  return (
    <div className="content">
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="mb-4">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
                {main.blurbs.map((blurb) => (
                  <div className="p-8 mb-2">
                    <h3>{blurb.heading}</h3>
                    <p>{blurb.description}</p>
                  </div>
                ))}
                <div className="mb-2">{conclusion}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ResearchPageTemplate.propTypes = {
  title: PropTypes.string,
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  conclusion: PropTypes.string,
};

const ResearchPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ResearchPageTemplate
        title={frontmatter.title}
        main={frontmatter.main}
        conclusion={frontmatter.conclusion}
      />
    </Layout>
  );
};

ResearchPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ResearchPage;

export const researchPageQuery = graphql`
  query ResearchPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        main {
          heading
          description
          blurbs {
            heading
            description
          }
        }
        conclusion
      }
    }
  }
`;
