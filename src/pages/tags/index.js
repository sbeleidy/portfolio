import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="py-12 bg-white">
      <Helmet title={`Tags | ${title}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center flex flex-col items-center">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-center mb-8">Tags</h1>
            <ul className="flex flex-wrap justify-center gap-4">
              {group.map((tag) => (
                <li key={tag.fieldValue}>
                  <Link
                    to={`/tags/${kebabCase(tag.fieldValue)}/`}
                    className="inline-flex items-center px-4 py-2 rounded-full text-md font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200 shadow-sm"
                  >
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
