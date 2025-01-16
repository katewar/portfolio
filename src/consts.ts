import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Katelyn Warnecke Technical Portfolio",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A portfolio of my experience and projects related to technical writing and software development.",
};

export const BLOG: Metadata = {
  TITLE: "Writing Samples",
  DESCRIPTION: "A collection of my technical writing samples.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/katewar"
  },
  { 
    NAME: "linkedin",
    HREF: "https://linkedin.com/in/katelyn-warnecke",
  }
];
