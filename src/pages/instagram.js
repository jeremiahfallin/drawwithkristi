import React from "react";

import InstagramFeed from "../components/InstagramFeed";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <InstagramFeed />
  </Layout>
);

export default AboutPage;
