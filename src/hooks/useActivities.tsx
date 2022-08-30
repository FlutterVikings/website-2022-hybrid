import { useStaticQuery, graphql } from 'gatsby';
import { Activity } from '../models/Activity';

export const useActivities = (): Activity[] => {
  const { items } = useStaticQuery(graphql`
    {
      items: allActivityJson {
        edges {
          node {
            activity_id
            title
            intro
            content
            url
          }
        }
      }
    }
  `);
  return items.edges.map((n: { node: Activity }) => new Activity(n.node));
};
