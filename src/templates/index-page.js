import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
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
  helmet,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="py-12 bg-white">
      {helmet || ""}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center mb-8">
            <PreviewCompatibleImage
              imageInfo={image}
              classes="rounded-full w-36 h-36 object-cover shadow-lg"
            />
            <div className="mt-4 sm:mt-0 sm:ml-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center sm:text-left">
                {heading}
              </h2>
            </div>
          </div>
          <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto prose prose-indigo">
            <PageContent className="content" content={content} />
          </div>
          <div className="mt-10 max-w-2xl lg:mx-auto text-center">
             <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-md transition duration-150 ease-in-out"
              >
                Book a Call
              </a>
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
        helmet={
          <Helmet titleTemplate="%s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.heading}`} />
          </Helmet>
        }
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
