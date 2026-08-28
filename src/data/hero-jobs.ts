export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS: HeroJob[] = [
  {
    name: "Workshop Notes",
    icon: "follow-up",
    account: "Concentrix client program",
    signal: "Client workshop started",
    work: "I followed the decisions, checked the project plan, and marked the owner and open questions in the shared brief.",
    result: "Working brief ready for review",
    user: "show me the owners and open items",
    bot: "ready. the open access question is still marked.",
  },
  {
    name: "Client Questions",
    icon: "deal-desk",
    account: "Client program inbox",
    signal: "Delivery question received",
    work: "I checked the approved delivery method, current project plan, and latest client note. I left the unresolved item open.",
    result: "Sourced answer ready for review",
    user: "draft the reply and hold the open item",
    bot: "done. nothing has been sent.",
  },
  {
    name: "Delivery Brief",
    icon: "research",
    account: "Concentrix delivery team",
    signal: "New program notes approved",
    work: "I gathered the approved notes, current owners, and next review. Then I updated the brief the team already uses.",
    result: "Delivery brief updated",
    user: "put the changes in one page",
    bot: "ready. the source links are included.",
  },
  {
    name: "Quality Review",
    icon: "competitive",
    account: "Client review queue",
    signal: "Draft ready for source check",
    work: "I checked each claim against its source and marked the sections that still need a person to decide.",
    result: "Review checklist ready",
    user: "show me only what needs attention",
    bot: "ready. the remaining decisions are at the top.",
  },
  {
    name: "Team Handoff",
    icon: "pipeline",
    account: "Concentrix client program",
    signal: "Delivery owner changed",
    work: "I collected the latest brief, open questions, and next actions so the new owner can continue without rebuilding the story.",
    result: "Handoff pack ready",
    user: "share the draft with the new owner",
    bot: "draft prepared. it is waiting for your approval.",
  },
  {
    name: "Knowledge Update",
    icon: "renewal",
    account: "Approved knowledge base",
    signal: "Delivery method changed",
    work: "I found the pages that use the old method, drafted the updates, and kept every change in review.",
    result: "Knowledge changes ready",
    user: "route them to the content owner",
    bot: "routed. the source pages are attached.",
  },
  {
    name: "Pilot Controls",
    icon: "outbound",
    account: "Concentrix joint pilot",
    signal: "Pilot workflow selected",
    work: "I mapped the smallest tool set, the source trail, and every step that must stop for human approval.",
    result: "Pilot controls ready",
    user: "add the controls to the pilot brief",
    bot: "added. sending and final changes stay with people.",
  },
  {
    name: "Program Chief",
    icon: "chief-of-staff",
    account: "Concentrix client program",
    signal: "Open decisions need review",
    work: "I gathered the current work from the specialist agents and prepared the decisions, owners, and next actions for the team.",
    result: "Program review ready",
    user: "bring the team the decisions only",
    bot: "ready. supporting work is linked below each decision.",
  },
];
