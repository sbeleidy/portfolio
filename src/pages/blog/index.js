import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="w-full h-64 md:h-96 flex items-center justify-center bg-cover bg-center mb-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white bg-indigo-600 px-6 py-4 shadow-lg">
            Latest Stories
          </h1>
        </div>
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-8">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
