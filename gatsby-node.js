const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const slugify = require('slugify');
const config = require('./src/config').default;

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
};

exports.createPages = async ({ page, graphql, actions }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allRestApiApiV28Wk2U51QViewAll {
          nodes {
            speakers {
              bio
              firstName
              fullName
              id
              isTopSpeaker
              lastName
              links {
                title
                url
                linkType
              }
              profilePicture
              sessions
              tagLine
            }
            sessions {
              categoryItems
              description
              endsAt
              id
              isPlenumSession
              isServiceSession
              roomId
              speakers
              startsAt
              title
            }
            rooms {
              id
              name
              sort
            }
            categories {
              id
              items {
                id
                name
                sort
              }
              sort
              title
              type
            }
          }
        }
      }
    `,
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const sessions = result.data.allRestApiApiV28Wk2U51QViewAll.nodes[0].sessions;
  const talkTemplate = path.resolve(`src/templates/talk.tsx`);
  const talkPreviewTemplate = path.resolve(`src/templates/talk_preview.tsx`);
  const cacheTalkFile = path.join('./.cache/talks.txt');
  fs.writeFileSync(cacheTalkFile, '');
  sessions
    .filter((s) => !s.isServiceSession)
    .forEach((session) => {
      const slug = slugify(session.title, { lower: true, trim: true, strict: true });
      createPage({
        path: slug,
        component: talkTemplate,
        context: {
          session: session,
          pagePath: slug,
          slug: slug,
          socialImage: `${config.siteUrl}/assets/${slug}.png`,
        },
      });
      if (process.env.gatsby_executing_command.includes('develop')) {
        fs.appendFileSync(cacheTalkFile, slug + '|');
        createPage({
          path: slug + '/preview',
          component: talkPreviewTemplate,
          context: {
            session: session,
            pagePath: slug,
          },
        });
      }
    });
};
