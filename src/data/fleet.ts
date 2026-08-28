import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "team",
    name: "Concentrix team",
    blurb: "People stay in control. Their agents keep the surrounding work moving.",
    color: "#E8E8ED",
    mark: "CX",
    seat: true,
  },
  {
    id: "chief",
    name: "Chief agent",
    blurb: "Routes each job, checks progress, and brings work back for review.",
    jobId: "legal-redlines",
    color: "#148C91",
  },
  {
    id: "brief",
    name: "Brief agent",
    blurb: "Turns approved notes and sources into a clear working document.",
    jobId: "attach-engine",
    color: "#5960A8",
  },
];
