import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gong"
  | "sfdc-account"
  | "sfdc-opp"
  | "sheets"
  | "gmail"
  | "slack"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const docs = { id: "docs", host: "docs.google.com", label: "Docs" };
const concentrix = {
  id: "concentrix",
  host: "www.concentrix.com",
  label: "Concentrix",
};

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "standardize-room": {
    m1: {
      pill: "Following the workshop in Granola",
      host: "granola.app",
      path: "/notes/client-program-workshop",
      title: "Client program workshop",
      site: "granola",
      tabs: [granola, docs, figma, gmail],
    },
    m2: {
      pill: "Checking the workshop record",
      host: "granola.app",
      path: "/notes/client-program-workshop",
      title: "Client program workshop",
      site: "granola",
      tabs: [granola, docs, figma, gmail],
    },
    m3: {
      pill: "Marking the owner and open item",
      host: "docs.google.com",
      path: "/document/d/client-program-brief",
      title: "Client program brief",
      site: "gdoc",
      tabs: [granola, docs, figma, gmail],
    },
    m4: {
      pill: "Updating the shared brief",
      host: "figma.com",
      path: "/file/concentrix-working-brief",
      title: "Concentrix working brief",
      site: "figma",
      tabs: [granola, docs, figma, gmail],
    },
    m5: {
      pill: "Saving a follow-up draft",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [granola, docs, figma, gmail],
    },
  },
  "legal-redlines": {
    m1: {
      pill: "Reading the client question",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Client program inbox",
      site: "gmail",
      tabs: [gmail, docs],
    },
    m2: {
      pill: "Checking the approved sources",
      host: "docs.google.com",
      path: "/document/d/delivery-plan",
      title: "Delivery plan",
      site: "gdoc",
      tabs: [gmail, docs],
    },
    m3: {
      pill: "Writing the source check",
      host: "docs.google.com",
      path: "/document/d/source-check",
      title: "Source check",
      site: "gdoc",
      tabs: [gmail, docs],
    },
    m4: {
      pill: "Drafting in Gmail",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, docs],
    },
    m5: {
      pill: "Draft parked for review",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, docs],
    },
  },
  "attach-engine": {
    m1: {
      pill: "Reviewing the current program",
      host: "www.concentrix.com",
      path: "/services-solutions/",
      title: "Concentrix services and solutions",
      site: "research",
      tabs: [concentrix, docs],
    },
    m2: {
      pill: "Mapping the workflow",
      host: "www.concentrix.com",
      path: "/services-solutions/",
      title: "Current delivery workflow",
      site: "research",
      tabs: [concentrix, docs],
    },
    m3: {
      pill: "Adding access and approval points",
      host: "docs.google.com",
      path: "/document/d/joint-pilot",
      title: "Joint pilot",
      site: "gdoc",
      tabs: [concentrix, docs],
    },
    m4: {
      pill: "Writing the pilot controls",
      host: "docs.google.com",
      path: "/document/d/pilot-controls",
      title: "Pilot controls",
      site: "page",
      tabs: [concentrix, docs],
    },
    m5: {
      pill: "Preparing the pilot brief",
      host: "docs.google.com",
      path: "/document/d/first-joint-pilot",
      title: "First joint pilot",
      site: "gdoc",
      tabs: [concentrix, docs],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
