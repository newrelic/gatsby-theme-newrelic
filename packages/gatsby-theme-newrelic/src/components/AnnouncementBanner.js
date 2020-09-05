import React, { useState } from 'react';
import Banner from './Banner';
import Icon from './Icon';
import createPersistedState from 'use-persisted-state';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { STORAGE_KEYS } from '../utils/constants';
import { parseISO, endOfDay, isBefore, isAfter } from 'date-fns';

const useLastAnnouncementDismissed = createPersistedState(
  STORAGE_KEYS.LAST_ANNOUNCEMENT_DISMISSED
);

const findCurrentAnnouncement = (announcements) => {
  const now = new Date();

  return announcements.find(
    ({ frontmatter: { start, end } }) =>
      isAfter(now, parseISO(start)) && isBefore(now, endOfDay(parseISO(end)))
  );
};

const createContentHash = (announcement) =>
  btoa(
    [
      announcement.id,
      announcement.frontmatter.start,
      announcement.frontmatter.end,
    ].join(':')
  );

const components = {
  Icon,
};

const AnnouncementBanner = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___start] }
        filter: { fileAbsolutePath: { regex: "/src/announcements/" } }
      ) {
        nodes {
          id
          body
          frontmatter {
            start(formatString: "YYYY-MM-DD")
            end(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `);

  const announcement = findCurrentAnnouncement(allMdx.nodes);
  const announcementId = announcement ? createContentHash(announcement) : null;

  const [
    lastAnnouncementDismissed,
    setLastAnnouncementDismissed,
  ] = useLastAnnouncementDismissed(null);

  const [visible, setVisible] = useState(
    lastAnnouncementDismissed !== announcementId
  );

  return announcement ? (
    <Banner
      data-swiftype-index={false}
      visible={visible}
      onClose={() => {
        setVisible(false);
        setLastAnnouncementDismissed(announcementId);
      }}
    >
      <MDXProvider components={components}>
        <MDXRenderer>{announcement.body}</MDXRenderer>
      </MDXProvider>
    </Banner>
  ) : null;
};

export default AnnouncementBanner;
