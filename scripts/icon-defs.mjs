// Source of truth for every icon in the library.
//
// Each entry is:
//   - name: kebab-case icon name (used for the .svg source file and CLI/tag lookups)
//   - tags: search keywords for docs / future icon-picker tooling
//   - svg:  the inner markup of a 24x24 stroke-based icon (no <svg> wrapper,
//           no fill/stroke attributes unless deliberately overriding the
//           inherited `fill="none" stroke="currentColor"` from IconBase)
//
// To add a new icon: append an entry here, then run `npm run generate`.
export const icons = [
  {
    name: "home",
    tags: ["house", "main", "start"],
    svg: `<path d="M3 10.5 12 3l9 7.5" />
<path d="M5 9.5V21h14V9.5" />
<path d="M9 21v-6h6v6" />`,
  },
  {
    name: "search",
    tags: ["find", "magnifier", "lookup"],
    svg: `<circle cx="11" cy="11" r="7" />
<line x1="21" y1="21" x2="16.2" y2="16.2" />`,
  },
  {
    name: "close",
    tags: ["x", "cancel", "dismiss"],
    svg: `<line x1="6" y1="6" x2="18" y2="18" />
<line x1="18" y1="6" x2="6" y2="18" />`,
  },
  {
    name: "menu",
    tags: ["hamburger", "nav", "navigation"],
    svg: `<line x1="4" y1="7" x2="20" y2="7" />
<line x1="4" y1="12" x2="20" y2="12" />
<line x1="4" y1="17" x2="20" y2="17" />`,
  },
  {
    name: "check",
    tags: ["done", "confirm", "success", "tick"],
    svg: `<polyline points="4 12.5 9.5 18 20 6" />`,
  },
  {
    name: "plus",
    tags: ["add", "create", "new"],
    svg: `<line x1="12" y1="4" x2="12" y2="20" />
<line x1="4" y1="12" x2="20" y2="12" />`,
  },
  {
    name: "minus",
    tags: ["remove", "subtract", "collapse"],
    svg: `<line x1="4" y1="12" x2="20" y2="12" />`,
  },
  {
    name: "chevron-left",
    tags: ["back", "previous", "arrow"],
    svg: `<polyline points="15 5 8 12 15 19" />`,
  },
  {
    name: "chevron-right",
    tags: ["forward", "next", "arrow"],
    svg: `<polyline points="9 5 16 12 9 19" />`,
  },
  {
    name: "chevron-up",
    tags: ["collapse", "arrow", "up"],
    svg: `<polyline points="5 15 12 8 19 15" />`,
  },
  {
    name: "chevron-down",
    tags: ["expand", "arrow", "down"],
    svg: `<polyline points="5 9 12 16 19 9" />`,
  },
  {
    name: "arrow-left",
    tags: ["back", "previous"],
    svg: `<line x1="20" y1="12" x2="5" y2="12" />
<polyline points="10 6 4 12 10 18" />`,
  },
  {
    name: "arrow-right",
    tags: ["forward", "next"],
    svg: `<line x1="4" y1="12" x2="19" y2="12" />
<polyline points="14 6 20 12 14 18" />`,
  },
  {
    name: "arrow-up",
    tags: ["up", "increase"],
    svg: `<line x1="12" y1="20" x2="12" y2="5" />
<polyline points="6 10 12 4 18 10" />`,
  },
  {
    name: "arrow-down",
    tags: ["down", "decrease"],
    svg: `<line x1="12" y1="4" x2="12" y2="19" />
<polyline points="6 14 12 20 18 14" />`,
  },
  {
    name: "user",
    tags: ["person", "account", "profile"],
    svg: `<circle cx="12" cy="8" r="3.5" />
<path d="M4.5 20.5c0-4 3.5-6.5 7.5-6.5s7.5 2.5 7.5 6.5" />`,
  },
  {
    name: "settings",
    tags: ["gear", "preferences", "config"],
    svg: `<circle cx="12" cy="12" r="3" />
<path d="M12 3v3M12 18v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5M3 12h3M18 12h3" />`,
  },
  {
    name: "bell",
    tags: ["notification", "alert", "reminder"],
    svg: `<path d="M6 10a6 6 0 0 1 12 0v5l1.5 3h-15L6 15Z" />
<path d="M10 21a2 2 0 0 0 4 0" />`,
  },
  {
    name: "heart",
    tags: ["like", "favorite", "love"],
    svg: `<path d="M12 20.5 4.8 13.4a4.8 4.8 0 0 1 6.8-6.8L12 7l.4-.4a4.8 4.8 0 0 1 6.8 6.8Z" />`,
  },
  {
    name: "star",
    tags: ["favorite", "rating", "bookmark"],
    svg: `<polygon points="12 3 14.6 9.2 21.3 9.8 16.2 14.1 17.8 20.7 12 17.1 6.2 20.7 7.8 14.1 2.7 9.8 9.4 9.2" />`,
  },
  {
    name: "trash",
    tags: ["delete", "remove", "bin"],
    svg: `<path d="M5 7h14" />
<path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
<path d="M7 7l1 13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-13" />
<line x1="10" y1="11" x2="10" y2="17" />
<line x1="14" y1="11" x2="14" y2="17" />`,
  },
  {
    name: "edit",
    tags: ["pencil", "rename", "modify"],
    svg: `<path d="M4 20l1-4.2L16.2 4.6a1.5 1.5 0 0 1 2.1 0l1.1 1.1a1.5 1.5 0 0 1 0 2.1L8.2 19 4 20Z" />
<line x1="14.5" y1="6.3" x2="17.7" y2="9.5" />`,
  },
  {
    name: "download",
    tags: ["save", "import"],
    svg: `<path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
<polyline points="7 10 12 15 17 10" />
<line x1="12" y1="15" x2="12" y2="3" />`,
  },
  {
    name: "upload",
    tags: ["export", "share"],
    svg: `<path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
<polyline points="7 8 12 3 17 8" />
<line x1="12" y1="3" x2="12" y2="15" />`,
  },
  {
    name: "calendar",
    tags: ["date", "schedule", "event"],
    svg: `<rect x="3.5" y="5" width="17" height="15" rx="2" />
<line x1="3.5" y1="10" x2="20.5" y2="10" />
<line x1="8" y1="3" x2="8" y2="7" />
<line x1="16" y1="3" x2="16" y2="7" />`,
  },
  {
    name: "clock",
    tags: ["time", "history", "duration"],
    svg: `<circle cx="12" cy="12" r="8.5" />
<polyline points="12 7.5 12 12 15.5 14" />`,
  },
  {
    name: "mail",
    tags: ["email", "message", "envelope"],
    svg: `<rect x="3" y="5" width="18" height="14" rx="2" />
<polyline points="3.5 6 12 13 20.5 6" />`,
  },
  {
    name: "phone",
    tags: ["call", "contact"],
    svg: `<path d="M6.6 3.5 9.4 8a1 1 0 0 1-.3 1.3l-2 1.4a13 13 0 0 0 6.2 6.2l1.4-2a1 1 0 0 1 1.3-.3l4.5 2.8a1 1 0 0 1 .4 1.3l-1 2.1a2 2 0 0 1-2 1.1A17.5 17.5 0 0 1 3.2 6.4a2 2 0 0 1 1.1-2l2.1-1a1 1 0 0 1 .2.1Z" />`,
  },
  {
    name: "lock",
    tags: ["secure", "private", "locked"],
    svg: `<rect x="4.5" y="11" width="15" height="10" rx="2" />
<path d="M7.5 11V7.5a4.5 4.5 0 0 1 9 0V11" />`,
  },
  {
    name: "unlock",
    tags: ["open", "unlocked"],
    svg: `<rect x="4.5" y="11" width="15" height="10" rx="2" />
<path d="M7.5 11V7.5a4.5 4.5 0 0 1 8.6-1.9" />`,
  },
  {
    name: "eye",
    tags: ["view", "visible", "show"],
    svg: `<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
<circle cx="12" cy="12" r="3" />`,
  },
  {
    name: "eye-off",
    tags: ["hide", "invisible", "hidden"],
    svg: `<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
<circle cx="12" cy="12" r="3" />
<line x1="4" y1="4" x2="20" y2="20" />`,
  },
  {
    name: "info",
    tags: ["information", "help", "details"],
    svg: `<circle cx="12" cy="12" r="9" />
<line x1="12" y1="11" x2="12" y2="16" />
<circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "alert-triangle",
    tags: ["warning", "caution", "error"],
    svg: `<path d="M12 3.5 22 20.5H2Z" />
<line x1="12" y1="10" x2="12" y2="14.5" />
<circle cx="12" cy="17.3" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "external-link",
    tags: ["link", "new-tab", "outbound"],
    svg: `<path d="M18 13.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.5" />
<polyline points="14.5 3 21 3 21 9.5" />
<line x1="10.5" y1="13.5" x2="21" y2="3" />`,
  },
  {
    name: "copy",
    tags: ["duplicate", "clipboard"],
    svg: `<rect x="8.5" y="8.5" width="12" height="12" rx="2" />
<path d="M15.5 8.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.5" />`,
  },
];
