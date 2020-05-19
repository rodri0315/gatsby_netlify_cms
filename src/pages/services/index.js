import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Services = (props) => {
  const services = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-services">
      <SEO title="Services" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Services</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6 services-info">
        <div className="column white">
          <h2>We offer free estimates to all our clients</h2>
          <h3>We are your trusted choice for:</h3>
          <h5>Residential roofing, storm and hail damage repair.</h5>
          <h5>New roof installation</h5>
          <h5>Roof repairs</h5>
          <h5>Partial roof installation</h5>
          <h5>General roof repair</h5>
          <h5>and more!</h5>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Services;
