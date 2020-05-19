import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>Superior Products At Fair Prices.</h1>
          <p class="text-lg-left">GV Roofing Renovation LLC has over 17 years of knowledge experience in the roofing.</p>
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>

      <div className="container mt-6 pt-8 pt-md-11">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Services</h2>
          </div>
            <div className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                <h2>Free Estimates</h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                <h2>Residential roofing</h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                <h2>New Roof Installation</h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                <h2>Roof Repairs</h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                <h2>General Roof Repairs</h2>
                </div>
              </div>
            </div>
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/services">
              View All Services
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Our Features</h2>
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
