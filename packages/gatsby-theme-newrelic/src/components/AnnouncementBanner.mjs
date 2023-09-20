import React, { useState } from 'react';
import Banner from './Banner';
import Icon from './Icon';
import { createLocalStorageStateHook } from 'use-local-storage-state';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { STORAGE_KEYS } from '../utils/constants';
import { parseISO, endOfDay, isBefore, isAfter } from 'date-fns';
import useHasMounted from '../hooks/useHasMounted';

const useLastAnnouncementDismissed = createLocalStorageStateHook(
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
      announcement.fields.slug,
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
    {
      allMdx(
        sort: { frontmatter: { startDate: ASC } }
        filter: {
          internal: { contentFilePath: { regex: "/src/announcements/" } }
        }
      ) {
        nodes {
          fields {
            slug
          }
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

  const [lastAnnouncementDismissed, setLastAnnouncementDismissed] =
    useLastAnnouncementDismissed(null);

  const [visible, setVisible] = useState(
    lastAnnouncementDismissed !== announcementId
  );

  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return announcement && visible ? (
    <Banner
      data-swiftype-index={false}
      visible={visible}
      onClose={() => {
        setVisible(false);
        setLastAnnouncementDismissed(announcementId);
      }}
    >
      <MDXProvider components={components}>
        {announcement.body}
      </MDXProvider>
    </Banner>
  ) : null;
};

export default AnnouncementBanner;
