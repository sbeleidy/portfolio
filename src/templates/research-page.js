import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const ResearchPageTemplate = ({ title, main, content, conclusion }) => {
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
                <div className="p-8 mb-2">
                  <HTMLContent content={content} />
                </div>
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
  }),
  conclusion: PropTypes.string,
};

const ResearchPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ResearchPageTemplate
        title={post.frontmatter.title}
        main={post.frontmatter.main}
        content={post.html}
        conclusion={post.frontmatter.conclusion}
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
      html
      frontmatter {
        title
        main {
          heading
          description
        }
        conclusion
      }
    }
  }
`;
