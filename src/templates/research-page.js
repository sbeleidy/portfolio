import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const ResearchPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
}) => {
  return (
    <div className="content">
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image1} />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image2} />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image3} />
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ResearchPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ResearchPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ResearchPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
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
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
