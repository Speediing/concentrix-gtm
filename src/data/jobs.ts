import type { Artifact, CroJob, SlideCard } from "./types";

export const WORKSHOP_SLIDES: SlideCard[] = [
  {
    n: 1,
    kicker: "Working brief",
    voice: "them",
    title: "Start with one workflow",
    body: "Choose work the delivery team can review from start to finish.",
  },
  {
    n: 2,
    kicker: "Working brief",
    voice: "them",
    title: "Keep the controls clear",
    body: "Name the sources, owners, and approval points before work begins.",
  },
  {
    n: 3,
    kicker: "Suggested next step",
    voice: "us",
    title: "Build the pilot together",
    body: "Use one Concentrix team, one client workflow, and one review checklist.",
  },
];

export const CLIENT_QUESTION_DESK: Extract<
  Artifact,
  { kind: "redlines" }
> = {
  kind: "redlines",
  title: "Client question desk",
  paperTitle: "Questions from the client",
  from: "Client program inbox",
  marks: [
    {
      text: "Which team owns the next review?",
      note: "The delivery lead owns the review. The client owner is copied.",
      take: true,
    },
    {
      text: "Where did this answer come from?",
      note: "The draft links the project plan, approved method, and current client note.",
      take: true,
    },
    {
      text: "Can the agent send the reply?",
      note: "No. The answer stays in draft until a person approves it.",
      take: false,
    },
  ],
  reply: {
    to: "Client program team",
    subject: "Delivery plan questions",
    body: "Hi team,\n\nThe delivery lead owns the next review, with the client owner included. The working answer is based on the current project plan, the approved delivery method, and the latest client note.\n\nThe remaining open item is marked in the brief. Nothing has been sent or changed on your behalf.\n\nBest,",
  },
};

export const PILOT_BRIEF: Extract<Artifact, { kind: "forecast" }> = {
  kind: "forecast",
  title: "First joint pilot",
  status: "Ready for review",
  account: "Concentrix",
  body: "Begin with one repeatable client workflow. Let a small fleet prepare the work, show its sources, and stop at each approval point.",
  gaps: [
    {
      label: "Workflow",
      body: "Pick work with a clear start, finish, and owner.",
    },
    {
      label: "Access",
      body: "Connect only the tools this pilot needs.",
    },
    {
      label: "Approval",
      body: "Keep sending and final changes with a person.",
    },
  ],
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Turn a workshop into a working brief",
    trigger: "a client workshop starts",
    backgroundAction: "following decisions and updating the open brief",
    problem:
      "Good decisions often leave the room as notes. Someone still has to sort the owners, open questions, and next steps.",
    botJob:
      "The chief agent follows the workshop. A notes agent checks the record, and a brief agent updates the shared draft while the team is still together.",
    storyboard: [
      {
        when: "The workshop starts",
        label: "The chief agent opens a shared channel for the job.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Client program workshop",
          people: [
            { initials: "CX", name: "Concentrix" },
            { initials: "CL", name: "Client team" },
            { initials: "GB", name: "Grok Bot" },
          ],
        },
      },
      {
        when: "A decision is made",
        label: "The notes agent marks the owner and the open question.",
        scene: "notes",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Workshop notes", answer: "Decision and owner" },
            { name: "Project plan", answer: "Current next step" },
            { name: "Client brief", answer: "Open question" },
          ],
          status: "Sources linked",
        },
      },
      {
        when: "Before the workshop ends",
        label: "The brief agent updates the open document for review.",
        scene: "deck",
        visual: {
          kind: "deck-update",
          eyebrow: "Working brief",
          headline: "One workflow, one owner",
          product: "Controls and next step included",
          status: "Draft updated",
        },
      },
      {
        when: "The artifact",
        label: "A reviewable brief is ready before the team leaves.",
        scene: "deck",
        slides: WORKSHOP_SLIDES,
      },
    ],
    unlock:
      "The team leaves with a draft they can correct, not another set of notes to process.",
    outcome:
      "The workshop becomes a working brief while the context is still fresh.",
    clips: [],
    demo: {
      title: "Workshop channel",
      subtitle: "Chief, Notes, and Brief working together",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "chief",
          name: "Chief",
          role: "bot",
          persona: "Keeps the work moving and brings decisions back to the team",
          color: "#148C91",
        },
        {
          id: "notes",
          name: "Notes",
          role: "bot",
          persona: "Checks the record and marks owners",
          color: "#5960A8",
        },
        {
          id: "brief",
          name: "Brief",
          role: "bot",
          persona: "Turns approved notes into a clear document",
          color: "#E9738C",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "chief",
          kind: "routine",
          body: "Workshop started. I am following decisions, owners, and open questions.",
        },
        {
          id: "m2",
          from: "chief",
          kind: "handoff",
          body: "Notes, check the workshop record against the project plan. Brief, keep the shared draft current.",
        },
        {
          id: "m3",
          from: "notes",
          kind: "text",
          body: "The delivery lead owns the next review. One access question is still open, so I marked it instead of filling it in.",
        },
        {
          id: "m4",
          from: "brief",
          kind: "text",
          body: "The working brief is updated with the decision, owner, and open item.",
          artifact: {
            kind: "slides",
            title: "Concentrix working brief",
            cards: WORKSHOP_SLIDES,
          },
        },
        {
          id: "m5",
          from: "chief",
          kind: "draft",
          draftLabel: "Follow-up note",
          body: "The workshop brief is ready for review. It includes the owner, the next step, and the one item that still needs an answer.",
          artifact: {
            kind: "gmail",
            title: "Workshop follow-up",
            to: "Client program team",
            subject: "Working brief for review",
            body: "The working brief is ready. Please review the owner, next step, and open access item before anything moves forward.",
          },
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Answer a client question with the sources attached",
    trigger: "a client question reaches the program inbox",
    backgroundAction: "checking approved sources and drafting an answer",
    problem:
      "A simple client question can turn into a long internal chase. The answer is often spread across the project plan, delivery method, and recent notes.",
    botJob:
      "The answer agent checks the approved sources. A delivery agent marks anything unresolved. The chief returns one draft for a person to review.",
    storyboard: [
      {
        when: "The question arrives",
        label: "The answer agent reads it and opens the approved sources.",
        scene: "inspect",
        visual: {
          kind: "procurement-email",
          sender: "Client program inbox",
          subject: "Question about the delivery plan",
          questions: 3,
        },
      },
      {
        when: "The sources are checked",
        label: "Each answer is tied to the place it came from.",
        scene: "map",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Project plan", answer: "Current owner" },
            { name: "Approved method", answer: "Delivery step" },
            { name: "Client notes", answer: "Open item held" },
          ],
          status: "Checked",
        },
      },
      {
        when: "A draft is ready",
        label: "The open item stays open. Nothing is guessed.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "Client program team",
          subject: "Delivery plan questions",
          status: "Ready for review",
        },
      },
      {
        when: "The artifact",
        label: "The team gets one sourced answer and a clear hold.",
        scene: "deck",
        artifact: CLIENT_QUESTION_DESK,
      },
    ],
    unlock:
      "The team can review the answer and its sources in one place. Missing information stays visible.",
    outcome:
      "A client question becomes a sourced draft without an internal reply chain.",
    clips: [],
    demo: {
      title: "Client question desk",
      subtitle: "Chief, Answer, and Delivery working together",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "chief",
          name: "Chief",
          role: "bot",
          persona: "Routes the question and returns the review",
          color: "#148C91",
        },
        {
          id: "answer",
          name: "Answer",
          role: "bot",
          persona: "Checks approved sources",
          color: "#5960A8",
        },
        {
          id: "delivery",
          name: "Delivery",
          role: "bot",
          persona: "Marks owners and unresolved items",
          color: "#E9738C",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "answer",
          kind: "routine",
          body: "A new client question arrived. I am checking the project plan, approved method, and current notes.",
        },
        {
          id: "m2",
          from: "answer",
          kind: "handoff",
          body: "Delivery, confirm the review owner and keep the access item open.",
        },
        {
          id: "m3",
          from: "delivery",
          kind: "text",
          body: "Owner confirmed. The access item has no approved answer yet, so it stays marked for review.",
          artifact: {
            kind: "packet",
            title: "Source check",
            fields: [
              { label: "Owner", value: "Delivery lead" },
              { label: "Method", value: "Approved delivery plan" },
              { label: "Open item", value: "Access approval" },
            ],
          },
        },
        {
          id: "m4",
          from: "chief",
          kind: "draft",
          draftLabel: "Client reply",
          artifact: {
            kind: "gmail",
            title: "Delivery plan reply",
            to: CLIENT_QUESTION_DESK.reply.to,
            subject: CLIENT_QUESTION_DESK.reply.subject,
            body: CLIENT_QUESTION_DESK.reply.body,
          },
        },
        {
          id: "m5",
          from: "chief",
          kind: "system",
          body: "Draft saved. Nothing sent.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Shape one joint pilot around real work",
    trigger: "a pilot candidate is added to the list",
    backgroundAction: "mapping the workflow, sources, and approval points",
    problem:
      "A broad agent idea is hard to review. A first pilot needs one job, a small set of tools, and a clear place for people to stay in control.",
    botJob:
      "The research agent maps the current work. A controls agent marks access and approvals. A brief agent turns both into a pilot the team can review.",
    storyboard: [
      {
        when: "A workflow is selected",
        label: "The research agent opens the current brief and process.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Concentrix client program",
          sources: ["Program brief", "Delivery method", "Client tools"],
          signal: "Repeatable follow-up",
        },
      },
      {
        when: "The work is mapped",
        label: "The team defines the job, the reason to start, and the owner.",
        scene: "map",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why this job", answer: "It repeats and ends in a review" },
            { label: "Why now", answer: "The current process is already known" },
            { label: "Why this team", answer: "Concentrix owns the delivery step" },
          ],
        },
      },
      {
        when: "The controls are added",
        label: "Tools and approval points are named before the pilot starts.",
        scene: "launch",
        visual: {
          kind: "outreach-ready",
          person: "Concentrix delivery lead",
          channels: ["Pilot brief", "Access list", "Review checklist"],
          status: "Drafts ready. Nothing sent.",
        },
      },
      {
        when: "The artifact",
        label: "The result is a pilot brief the joint team can edit.",
        scene: "deck",
        artifact: PILOT_BRIEF,
      },
    ],
    unlock:
      "The first conversation is about one real workflow and its controls, not a broad product tour.",
    outcome:
      "One candidate workflow becomes a joint pilot brief with clear boundaries.",
    clips: [],
    demo: {
      title: "Pilot workshop",
      subtitle: "Chief, Research, Controls, and Brief working together",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "chief",
          name: "Chief",
          role: "bot",
          persona: "Keeps the pilot narrow and reviewable",
          color: "#148C91",
        },
        {
          id: "research",
          name: "Research",
          role: "bot",
          persona: "Maps the current workflow and tools",
          color: "#5960A8",
        },
        {
          id: "controls",
          name: "Controls",
          role: "bot",
          persona: "Marks access and human approval",
          color: "#E9738C",
        },
        {
          id: "brief",
          name: "Brief",
          role: "bot",
          persona: "Builds the shared pilot document",
          color: "#D99B44",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "research",
          kind: "routine",
          body: "Pilot candidate added. I am mapping the current workflow, its owner, and the tools already in use.",
        },
        {
          id: "m2",
          from: "research",
          kind: "text",
          body: "The follow-up job has a clear start, a reviewable finish, and a known delivery owner.",
        },
        {
          id: "m3",
          from: "chief",
          kind: "handoff",
          body: "Controls, mark the smallest access set and every point that needs a person. Brief, put both into the pilot draft.",
        },
        {
          id: "m4",
          from: "controls",
          kind: "text",
          body: "Start with the program brief, approved delivery method, and client notes. Keep sending and final changes behind approval.",
          artifact: {
            kind: "one-pager",
            title: "Pilot controls",
            sections: [
              {
                heading: "Access",
                body: "Only the three sources needed for this workflow.",
              },
              {
                heading: "Approval",
                body: "A person approves sending and final changes.",
              },
              {
                heading: "Review",
                body: "The joint team checks the artifact and source trail.",
              },
            ],
          },
        },
        {
          id: "m5",
          from: "brief",
          kind: "draft",
          draftLabel: "Pilot brief",
          artifact: PILOT_BRIEF,
        },
      ],
    },
  },
];
