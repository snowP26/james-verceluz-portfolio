export type Link = {
  label: string;
  href: string;
};

export type Role = {
  /** Machine-sortable start, used for the rail ticks. */
  start: string;
  end: string | null;
  title: string;
  org: string;
  orgHref?: string;
  location?: string;
  summary: string;
  points: string[];
  stack: string[];
};

export type Project = {
  slug: string;
  name: string;
  kind: string;
  role: string;
  start: string;
  end: string | null;
  status: "live" | "building" | "shipped" | "archived";
  summary: string;
  points: string[];
  stack: string[];
  image?: string | null;
  github?: string | null;
  live?: string | null;
  liveLabel?: string | null;
};

export type EarlierProject = {
  name: string;
  blurb: string;
  stack: string[];
  github: string;
  live?: string | null;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Credential = {
  title: string;
  issuer: string;
  detail?: string;
  year?: string;
};

export type Section = {
  id: string;
  index: string;
  label: string;
};
