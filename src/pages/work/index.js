import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Work = (props) => {
  const work = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-work">
      <SEO title="Work" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Our Work</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {work.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="work">
                <div className="work-meta">
                  <h2 className="work-title">{edge.node.frontmatter.title}</h2>
                  <p className="work-name">{edge.node.frontmatter.name}</p>
                  <p className="work-jobtitle">{edge.node.frontmatter.jobtitle}</p>
                </div>
                <div
                  className="work-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
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