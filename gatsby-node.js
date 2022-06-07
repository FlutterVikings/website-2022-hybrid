const path = require('path');
const _ = require('lodash');
const config = require('./src/config').default;
const slugify = require('slugify');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
};

exports.createPages = async ({ graphql, actions }) => {};
