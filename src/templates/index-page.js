import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  image,
  heading,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="flex">
              <PreviewCompatibleImage
                imageInfo={image}
                classes="rounded-full w-36"
              />
              <div className="flex items-center">
                <h2 className="text-2xl p-4 m-2 align-middle">{heading}</h2>
              </div>
            </div>
            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        heading={post.frontmatter.heading}
        content={post.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const IndexPageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        heading
      }
    }
  }
`;
