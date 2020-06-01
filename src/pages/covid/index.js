import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Team = (props) => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Team" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Servicios de sanitización COVID-19</h1>
              <p>
                  Nuestros procedimientos de limpieza son elegibles para su uso contra el SARS-CoV-2, 
                  el virus que causa el COVID-19, según la Política de patógenos virales emergentes de la EPA. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {teams.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
              <div className="team card-two">
                <div className="card-header">
                  <div className="card-right">
                    <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                  </div>
                </div>
                <div
                  className="team-content"
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
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/covid/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Team;
