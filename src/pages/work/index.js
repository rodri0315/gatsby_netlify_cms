import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import { Gallery } from "gatsby-theme-gallery";

const Work = (props) => {
  const work = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-work">
      <SEO title="Work" />
      <div className="intro pt-10">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Our Work</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-3">
        <Gallery />
      </div>

    </Layout>
  );
};

export const query = graphql`
  query WorkQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            name
            jobtitle
          }
        }
      }
    }
  }
`;

export default Work;
