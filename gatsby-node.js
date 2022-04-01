const path = require('path');
const _ = require('lodash');
const config = require('./src/config').default;

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      speakers: allSpeakersJson {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  result.data.speakers.edges.forEach(({ node }) => {
    createPage({
      path: `/speakers/${node.id}`,
      component: path.resolve(`./src/templates/speaker.tsx`),
      context: {
        speakerId: node.id,
        slug: node.id,
      },
    });
  });
};
