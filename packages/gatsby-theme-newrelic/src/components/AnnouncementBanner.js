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
    ({ frontmatter: { startDate, endDate } }) =>
      isAfter(now, parseISO(startDate)) &&
      isBefore(now, endOfDay(parseISO(endDate)))
  );
};

const createContentHash = (announcement) => {
  // Since bota is not available at build time, this will provide a
  // fallback so that this function simply joins the items.
  const btoa = global.btoa || ((arr) => arr);

  return btoa(
    [
      announcement.id,
      announcement.frontmatter.startDate,
      announcement.frontmatter.endDate,
    ].join(':')
  );
};

const components = {
  Icon,
};

const AnnouncementBanner = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___startDate] }
        filter: { fileAbsolutePath: { regex: "/src/announcements/" } }
      ) {
        nodes {
          id
          body
          frontmatter {
            startDate(formatString: "YYYY-MM-DD")
            endDate(formatString: "YYYY-MM-DD")
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
