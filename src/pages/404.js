import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div className="py-12 bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-center mb-4">NOT FOUND</h1>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
