import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const ResearchPageTemplate = ({
  title,
  main,
  content,
  conclusion,
  contentComponent,
  helmet,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <section className="py-12 bg-white">
      {helmet || ""}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center flex flex-col items-center">
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
              {main.heading}
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {main.description}
            </p>
          </div>
          <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto prose prose-indigo text-left">
            <PageContent content={content} />
          </div>
          <div className="mt-8 max-w-2xl text-lg text-gray-700 italic border-l-4 border-indigo-500 pl-4 py-2 text-left">
            {conclusion}
          </div>
        </div>
      </div>
    </section>
  );
};

ResearchPageTemplate.propTypes = {
  title: PropTypes.string,
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  content: PropTypes.string,
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
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
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
