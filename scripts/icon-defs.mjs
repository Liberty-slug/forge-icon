
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

  {
    name: "file",
    tags: ["document", "page"],
    svg: `<path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
<polyline points="14 3.5 14 7.5 18 7.5" />`,
  },
  {
    name: "folder",
    tags: ["directory", "files"],
    svg: `<path d="M3.5 6.5a1 1 0 0 1 1-1H10l2 2.5h7.5a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1Z" />`,
  },
  {
    name: "image",
    tags: ["picture", "photo", "gallery"],
    svg: `<rect x="3" y="4" width="18" height="16" rx="2" />
<circle cx="8.5" cy="9.5" r="1.5" />
<path d="M21 15.5 16 10.5 5.5 21" />`,
  },
  {
    name: "paperclip",
    tags: ["attachment", "attach"],
    svg: `<path d="M18 10.5 10.5 18a3.5 3.5 0 0 1-5-5L14.3 4.3a2.5 2.5 0 0 1 3.5 3.5L9.5 16a1 1 0 0 1-1.5-1.5l7-7" />`,
  },
  {
    name: "play",
    tags: ["start", "media", "resume"],
    svg: `<polygon points="6 4 20 12 6 20" />`,
  },
  {
    name: "pause",
    tags: ["media", "hold"],
    svg: `<line x1="8" y1="4" x2="8" y2="20" />
<line x1="16" y1="4" x2="16" y2="20" />`,
  },
  {
    name: "volume",
    tags: ["sound", "audio", "speaker"],
    svg: `<path d="M4 9.5v5h4l5 4v-13l-5 4Z" />
<path d="M16.5 9a5 5 0 0 1 0 6" />
<path d="M19 6.5a9 9 0 0 1 0 11" />`,
  },
  {
    name: "music",
    tags: ["audio", "song", "note"],
    svg: `<path d="M9 18V4.5l10-2V15" />
<circle cx="6.5" cy="18" r="2.5" />
<circle cx="16.5" cy="15" r="2.5" />`,
  },
  {
    name: "camera",
    tags: ["photo", "picture"],
    svg: `<path d="M4 8.5a1 1 0 0 1 1-1h2.3l1.2-2h6l1.2 2H20a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
<circle cx="12" cy="13" r="3.5" />`,
  },

  {
    name: "grid",
    tags: ["layout", "dashboard", "apps"],
    svg: `<rect x="3" y="3" width="8" height="8" rx="1.5" />
<rect x="13" y="3" width="8" height="8" rx="1.5" />
<rect x="3" y="13" width="8" height="8" rx="1.5" />
<rect x="13" y="13" width="8" height="8" rx="1.5" />`,
  },
  {
    name: "list",
    tags: ["items", "bullet", "layout"],
    svg: `<line x1="8" y1="6" x2="21" y2="6" />
<line x1="8" y1="12" x2="21" y2="12" />
<line x1="8" y1="18" x2="21" y2="18" />
<circle cx="4" cy="6" r="0.9" fill="currentColor" stroke="none" />
<circle cx="4" cy="12" r="0.9" fill="currentColor" stroke="none" />
<circle cx="4" cy="18" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "filter",
    tags: ["sort", "refine"],
    svg: `<path d="M3.5 4.5h17L14 12.5V19l-4 2v-8.5Z" />`,
  },
  {
    name: "more-horizontal",
    tags: ["menu", "options", "kebab", "ellipsis"],
    svg: `<circle cx="5" cy="12" r="1.3" fill="currentColor" stroke="none" />
<circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
<circle cx="19" cy="12" r="1.3" fill="currentColor" stroke="none" />`,
  },
  {
    name: "more-vertical",
    tags: ["menu", "options", "kebab"],
    svg: `<circle cx="12" cy="5" r="1.3" fill="currentColor" stroke="none" />
<circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
<circle cx="12" cy="19" r="1.3" fill="currentColor" stroke="none" />`,
  },

  // --- Commerce ---
  {
    name: "shopping-cart",
    tags: ["cart", "checkout", "buy"],
    svg: `<path d="M3 4h2l2.5 12h10l2-8H7" />
<circle cx="9.5" cy="20" r="1.3" />
<circle cx="17" cy="20" r="1.3" />`,
  },
  {
    name: "credit-card",
    tags: ["payment", "billing", "card"],
    svg: `<rect x="2.5" y="5.5" width="19" height="13" rx="2" />
<line x1="2.5" y1="10" x2="21.5" y2="10" />
<line x1="6" y1="15" x2="10" y2="15" />`,
  },
  {
    name: "tag",
    tags: ["price", "label", "category"],
    svg: `<path d="M11.5 3.5H4.5a1 1 0 0 0-1 1v7l9.6 9.6a1 1 0 0 0 1.4 0l6.6-6.6a1 1 0 0 0 0-1.4Z" />
<circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />`,
  },

  // --- Social & communication ---
  {
    name: "message-circle",
    tags: ["chat", "comment", "conversation"],
    svg: `<path d="M4 12a8 8 0 1 1 3.5 6.6L4 20l1.4-3.8A7.9 7.9 0 0 1 4 12Z" />`,
  },
  {
    name: "send",
    tags: ["message", "submit", "paper-plane"],
    svg: `<line x1="21" y1="3" x2="10" y2="14" />
<polygon points="21 3 14.5 21 10 14 3 10" />`,
  },
  {
    name: "thumbs-up",
    tags: ["like", "approve", "upvote"],
    svg: `<path d="M7 21V10.5" />
<path d="M7 10.5 11 3.5a1.8 1.8 0 0 1 3.2 1.6L12.7 9.5H19a2 2 0 0 1 2 2.4l-1.5 7A2 2 0 0 1 17.5 21H10a3 3 0 0 1-3-3Z" />`,
  },
  {
    name: "link",
    tags: ["url", "chain", "hyperlink"],
    svg: `<path d="M9.5 14.5 14.5 9.5" />
<path d="M11 7 13 5a3.5 3.5 0 0 1 5 5l-2 2" />
<path d="M13 17l-2 2a3.5 3.5 0 0 1-5-5l2-2" />`,
  },

  // --- Devices & status ---
  {
    name: "laptop",
    tags: ["computer", "device"],
    svg: `<rect x="4" y="4.5" width="16" height="11" rx="1.5" />
<line x1="2" y1="19.5" x2="22" y2="19.5" />`,
  },
  {
    name: "wifi",
    tags: ["network", "connection", "wireless"],
    svg: `<path d="M2.5 9a15 15 0 0 1 19 0" />
<path d="M5.7 12.7a10.5 10.5 0 0 1 12.6 0" />
<path d="M8.8 16.3a6 6 0 0 1 6.4 0" />
<circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />`,
  },
  {
    name: "refresh",
    tags: ["reload", "sync", "retry"],
    svg: `<path d="M20 11a8 8 0 0 0-14.6-4.6M4 4v5h5" />
<path d="M4 13a8 8 0 0 0 14.6 4.6M20 20v-5h-5" />`,
  },
  {
    name: "log-out",
    tags: ["sign-out", "exit", "leave"],
    svg: `<path d="M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4" />
<line x1="21" y1="12" x2="9.5" y2="12" />
<polyline points="17 7.5 21 12 17 16.5" />`,
  },
  {
    name: "log-in",
    tags: ["sign-in", "enter"],
    svg: `<path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4" />
<line x1="3" y1="12" x2="14.5" y2="12" />
<polyline points="10 7.5 14.5 12 10 16.5" />`,
  },
  {
    name: "help-circle",
    tags: ["question", "support", "faq"],
    svg: `<circle cx="12" cy="12" r="9" />
<path d="M9.2 9.5a2.8 2.8 0 1 1 4.3 2.4c-.9.6-1.5 1.1-1.5 2.1" />
<circle cx="12" cy="17.2" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "check-circle",
    tags: ["done", "success", "confirm"],
    svg: `<circle cx="12" cy="12" r="9" />
<polyline points="8 12.5 11 15.5 16 9" />`,
  },
  {
    name: "x-circle",
    tags: ["cancel", "close", "error"],
    svg: `<circle cx="12" cy="12" r="9" />
<line x1="9" y1="9" x2="15" y2="15" />
<line x1="15" y1="9" x2="9" y2="15" />`,
  },
  {
    name: "alert-circle",
    tags: ["warning", "error", "notice"],
    svg: `<circle cx="12" cy="12" r="9" />
<line x1="12" y1="7.5" x2="12" y2="13" />
<circle cx="12" cy="16.3" r="0.9" fill="currentColor" stroke="none" />`,
  },

  // --- Weather ---
  {
    name: "cloud",
    tags: ["sky", "overcast"],
    svg: `<path d="M6.5 18.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.9A4.5 4.5 0 0 1 17 18.5Z" />`,
  },
  {
    name: "cloud-rain",
    tags: ["weather", "showers", "wet"],
    svg: `<path d="M6.5 18.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.9A4.5 4.5 0 0 1 17 18.5Z" />
<line x1="8" y1="20.5" x2="8" y2="22.5" />
<line x1="12" y1="19.5" x2="12" y2="21.5" />
<line x1="16" y1="20.5" x2="16" y2="22.5" />`,
  },
  {
    name: "cloud-snow",
    tags: ["weather", "snowing", "winter"],
    svg: `<path d="M6.5 18.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.9A4.5 4.5 0 0 1 17 18.5Z" />
<circle cx="8" cy="21" r="0.9" fill="currentColor" stroke="none" />
<circle cx="12" cy="21" r="0.9" fill="currentColor" stroke="none" />
<circle cx="16" cy="21" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "cloud-lightning",
    tags: ["weather", "storm", "thunder"],
    svg: `<path d="M6.5 18.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.9A4.5 4.5 0 0 1 17 18.5Z" />
<polyline points="12.5 19 10 22 13 22 11 23.5" />`,
  },
  {
    name: "cloud-drizzle",
    tags: ["weather", "light-rain"],
    svg: `<path d="M6.5 18.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.9A4.5 4.5 0 0 1 17 18.5Z" />
<line x1="8" y1="20" x2="8" y2="21.5" />
<line x1="12" y1="20" x2="12" y2="21.5" />
<line x1="16" y1="20" x2="16" y2="21.5" />`,
  },
  {
    name: "cloud-fog",
    tags: ["weather", "mist", "haze"],
    svg: `<path d="M6.5 15.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.9A4.5 4.5 0 0 1 17 15.5Z" />
<line x1="4" y1="19" x2="20" y2="19" />
<line x1="6" y1="22" x2="18" y2="22" />`,
  },
  {
    name: "sun",
    tags: ["weather", "sunny", "daytime", "brightness"],
    svg: `<circle cx="12" cy="12" r="4.5" />
<line x1="12" y1="2" x2="12" y2="4.5" />
<line x1="12" y1="19.5" x2="12" y2="22" />
<line x1="4.2" y1="4.2" x2="6" y2="6" />
<line x1="18" y1="18" x2="19.8" y2="19.8" />
<line x1="2" y1="12" x2="4.5" y2="12" />
<line x1="19.5" y1="12" x2="22" y2="12" />
<line x1="4.2" y1="19.8" x2="6" y2="18" />
<line x1="18" y1="6" x2="19.8" y2="4.2" />`,
  },
  {
    name: "moon",
    tags: ["weather", "night", "dark-mode"],
    svg: `<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />`,
  },
  {
    name: "wind",
    tags: ["weather", "breeze", "air"],
    svg: `<path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5" />
<path d="M3 12.5h15a2.5 2.5 0 1 1-2.5 2.5" />
<path d="M3 17h9a2.5 2.5 0 1 1-2.5 2.5" />`,
  },
  {
    name: "umbrella",
    tags: ["weather", "rain", "protection"],
    svg: `<path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z" />
<line x1="12" y1="12" x2="12" y2="19.5" />
<path d="M12 19.5a2 2 0 0 0 4 0" />`,
  },
  {
    name: "thermometer",
    tags: ["temperature", "weather", "fever"],
    svg: `<path d="M12 14.5V4.5a2 2 0 0 0-4 0v10a4 4 0 1 0 4 0Z" />`,
  },
  {
    name: "snowflake",
    tags: ["weather", "winter", "cold"],
    svg: `<line x1="12" y1="2.5" x2="12" y2="21.5" />
<line x1="4.5" y1="7" x2="19.5" y2="17" />
<line x1="19.5" y1="7" x2="4.5" y2="17" />`,
  },
  {
    name: "rainbow",
    tags: ["weather", "colorful", "arc"],
    svg: `<path d="M3 19.5a9 9 0 0 1 18 0" />
<path d="M6.5 19.5a5.5 5.5 0 0 1 11 0" />`,
  },
  {
    name: "sunrise",
    tags: ["weather", "morning", "dawn"],
    svg: `<path d="M3 18h18" />
<path d="M6 18a6 6 0 0 1 12 0" />
<polyline points="9.5 7 12 4 14.5 7" />`,
  },
  {
    name: "sunset",
    tags: ["weather", "evening", "dusk"],
    svg: `<path d="M3 18h18" />
<path d="M6 18a6 6 0 0 1 12 0" />
<polyline points="9.5 4 12 7 14.5 4" />`,
  },

  {
    name: "map",
    tags: ["location", "navigation", "geography"],
    svg: `<path d="M9 4 3 6.5v13L9 17l6 3 6-2.5v-13L15 7Z" />
<line x1="9" y1="4" x2="9" y2="17" />
<line x1="15" y1="7" x2="15" y2="20" />`,
  },
  {
    name: "map-pin",
    tags: ["location", "pin", "place"],
    svg: `<path d="M12 21.5S19 14.6 19 9.5a7 7 0 0 0-14 0c0 5.1 7 12 7 12Z" />
<circle cx="12" cy="9.5" r="2.3" />`,
  },
  {
    name: "compass",
    tags: ["navigation", "direction", "explore"],
    svg: `<circle cx="12" cy="12" r="9" />
<polygon points="15 9 13 13 9 15 11 11" />`,
  },
  {
    name: "navigation",
    tags: ["location", "direction", "arrow"],
    svg: `<polygon points="12 2.5 19 20.5 12 16.5 5 20.5" />`,
  },
  {
    name: "car",
    tags: ["vehicle", "transport", "automobile"],
    svg: `<path d="M4 16.5v-3.8L6 8h12l2 4.7v3.8" />
<line x1="4" y1="16.5" x2="20" y2="16.5" />
<path d="M6 8 7.5 4.5h9L18 8" />
<circle cx="7.5" cy="16.5" r="1.7" />
<circle cx="16.5" cy="16.5" r="1.7" />`,
  },
  {
    name: "taxi",
    tags: ["vehicle", "cab", "transport"],
    svg: `<path d="M4 16.5v-3.8L6 8h12l2 4.7v3.8" />
<line x1="4" y1="16.5" x2="20" y2="16.5" />
<rect x="10" y="5" width="4" height="2.2" rx="0.5" />
<circle cx="7.5" cy="16.5" r="1.7" />
<circle cx="16.5" cy="16.5" r="1.7" />`,
  },
  {
    name: "truck",
    tags: ["vehicle", "delivery", "shipping"],
    svg: `<rect x="2.5" y="8.5" width="11" height="8" rx="1" />
<path d="M13.5 11h4l3 3.2v2.3h-7Z" />
<circle cx="7" cy="18.3" r="1.7" />
<circle cx="17" cy="18.3" r="1.7" />`,
  },
  {
    name: "bus",
    tags: ["vehicle", "transport", "public-transit"],
    svg: `<rect x="3.5" y="5" width="17" height="11" rx="2" />
<line x1="3.5" y1="10.5" x2="20.5" y2="10.5" />
<circle cx="7.5" cy="19" r="1.4" />
<circle cx="16.5" cy="19" r="1.4" />`,
  },
  {
    name: "train",
    tags: ["vehicle", "railway", "transport"],
    svg: `<rect x="6" y="3.5" width="12" height="13" rx="3" />
<line x1="6" y1="10.5" x2="18" y2="10.5" />
<circle cx="9.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
<circle cx="14.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
<path d="M8 16.5 5.5 20.5" />
<path d="M16 16.5 18.5 20.5" />`,
  },
  {
    name: "plane",
    tags: ["airplane", "flight", "travel"],
    svg: `<path d="M12 2.5v8.5" />
<path d="M12 11l8 5v1.8l-8-2.2" />
<path d="M12 11 4 16v1.8l8-2.2" />
<path d="M9.8 16.5 8.2 19h7.6l-1.6-2.5" />`,
  },
  {
    name: "plane-takeoff",
    tags: ["airplane", "departure", "flight"],
    svg: `<path d="M12 2.5v6" />
<path d="M12 8.5l7 4.5v1.8l-7-2.2" />
<path d="M12 8.5 5 13v1.8l7-2.2" />
<path d="M9.8 16 8.2 18h7.6l-1.6-2" />
<line x1="3" y1="21" x2="21" y2="21" />
<line x1="16" y1="6" x2="19" y2="3" />
<polyline points="16.5 3 19 3 19 5.5" />`,
  },
  {
    name: "plane-landing",
    tags: ["airplane", "arrival", "flight"],
    svg: `<path d="M12 2.5v6" />
<path d="M12 8.5l7 4.5v1.8l-7-2.2" />
<path d="M12 8.5 5 13v1.8l7-2.2" />
<path d="M9.8 16 8.2 18h7.6l-1.6-2" />
<line x1="3" y1="21" x2="21" y2="21" />
<line x1="16" y1="3" x2="19" y2="6" />
<polyline points="19 3.5 19 6 16.5 6" />`,
  },
  {
    name: "ship",
    tags: ["boat", "vessel", "travel"],
    svg: `<path d="M4 14.5h16l-2 5.5H6Z" />
<path d="M6 14.5V8h5V4.5h2V8h3v6.5" />
<line x1="3" y1="20" x2="21" y2="20" />`,
  },
  {
    name: "anchor",
    tags: ["nautical", "boat", "marine"],
    svg: `<circle cx="12" cy="5.5" r="2" />
<line x1="12" y1="7.5" x2="12" y2="20.5" />
<path d="M5.5 14a6.5 6.5 0 0 0 13 0" />
<line x1="4" y1="14" x2="7" y2="14" />
<line x1="17" y1="14" x2="20" y2="14" />`,
  },
  {
    name: "bike",
    tags: ["bicycle", "cycling", "transport"],
    svg: `<circle cx="6" cy="17" r="3.3" />
<circle cx="18" cy="17" r="3.3" />
<path d="M6 17 10 9h5l3 8" />
<path d="M10 9 12.5 13H18" />
<line x1="10" y1="9" x2="13" y2="9" />`,
  },
  {
    name: "fuel",
    tags: ["gas", "petrol", "station"],
    svg: `<rect x="3.5" y="4" width="10" height="16" rx="1" />
<line x1="3.5" y1="9" x2="13.5" y2="9" />
<path d="M13.5 9h3l3 3v6a1.5 1.5 0 0 1-3 0v-2.5a1.5 1.5 0 0 0-1.5-1.5h-1.5" />`,
  },
  {
    name: "parking",
    tags: ["car-park", "garage"],
    svg: `<rect x="3.5" y="3.5" width="17" height="17" rx="2" />
<path d="M9 16.5v-9h3.5a3 3 0 0 1 0 6H9" />`,
  },
  {
    name: "luggage",
    tags: ["suitcase", "baggage", "travel"],
    svg: `<rect x="4.5" y="7.5" width="15" height="13" rx="2" />
<path d="M9 7.5V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.5" />
<line x1="12" y1="11" x2="12" y2="16.5" />`,
  },
  {
    name: "passport",
    tags: ["travel", "document", "id"],
    svg: `<rect x="5.5" y="3" width="13" height="18" rx="1.5" />
<circle cx="12" cy="9.5" r="2.3" />
<line x1="9" y1="14.5" x2="15" y2="14.5" />
<line x1="9" y1="17" x2="15" y2="17" />`,
  },
  {
    name: "route",
    tags: ["path", "directions", "waypoint"],
    svg: `<circle cx="6" cy="6" r="2" />
<circle cx="18" cy="18" r="2" />
<line x1="7.8" y1="7.3" x2="16.2" y2="16.7" stroke-dasharray="2 2.4" />`,
  },
  {
    name: "milestone",
    tags: ["marker", "progress", "waypoint"],
    svg: `<path d="M6 21V3" />
<path d="M6 5h11l-3 3.5L17 12H6" />`,
  },
  {
    name: "signpost",
    tags: ["direction", "sign", "wayfinding"],
    svg: `<line x1="12" y1="3" x2="12" y2="21" />
<path d="M12 6h7l-2 2.5 2 2.5h-7" />
<path d="M12 11h-6l2 2.5-2 2.5h6" />`,
  },
  {
    name: "globe",
    tags: ["world", "earth", "international"],
    svg: `<circle cx="12" cy="12" r="9" />
<line x1="3" y1="12" x2="21" y2="12" />
<path d="M12 3a13.5 13.5 0 0 1 0 18" />
<path d="M12 3a13.5 13.5 0 0 0 0 18" />`,
  },

  {
    name: "wallet",
    tags: ["money", "payment", "purse"],
    svg: `<path d="M3.5 7.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1.5H16a3 3 0 0 0 0 6h2.5V17a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2Z" />
<circle cx="16.3" cy="12.3" r="1" fill="currentColor" stroke="none" />`,
  },
  {
    name: "dollar-sign",
    tags: ["currency", "money", "usd"],
    svg: `<line x1="12" y1="2.5" x2="12" y2="21.5" />
<path d="M16.5 6.5a4 3 0 0 0-4-2 4 3 0 0 0 0 6 4 3 0 0 1 0 6 4 3 0 0 1-4-2" />`,
  },
  {
    name: "euro-sign",
    tags: ["currency", "money", "eur"],
    svg: `<path d="M17 5.5a7 7 0 1 0 0 13" />
<line x1="4" y1="10" x2="15" y2="10" />
<line x1="4" y1="14" x2="13.5" y2="14" />`,
  },
  {
    name: "pound-sign",
    tags: ["currency", "money", "gbp"],
    svg: `<path d="M9 21V11a4 4 0 0 1 8-1.5" />
<line x1="5" y1="21" x2="15" y2="21" />
<line x1="5" y1="13.5" x2="12.5" y2="13.5" />`,
  },
  {
    name: "yen-sign",
    tags: ["currency", "money", "jpy"],
    svg: `<path d="M6 4 12 13 18 4" />
<line x1="12" y1="13" x2="12" y2="21" />
<line x1="7.5" y1="15" x2="16.5" y2="15" />
<line x1="7.5" y1="18" x2="16.5" y2="18" />`,
  },
  {
    name: "coins",
    tags: ["money", "currency", "cash"],
    svg: `<circle cx="9" cy="9" r="5.5" />
<circle cx="16" cy="16" r="5.5" />`,
  },
  {
    name: "banknote",
    tags: ["cash", "money", "bill"],
    svg: `<rect x="2.5" y="6.5" width="19" height="11" rx="1.5" />
<circle cx="12" cy="12" r="3" />
<line x1="6" y1="10" x2="6" y2="14" />
<line x1="18" y1="10" x2="18" y2="14" />`,
  },
  {
    name: "piggy-bank",
    tags: ["savings", "money", "finance"],
    svg: `<path d="M4 13a6 5.5 0 0 1 6-5.5h5a4 4 0 0 1 4 4v1l2 1.5-2 1v1.5a1.5 1.5 0 0 1-1.5 1.5H16v2h-2.5v-2H8.5a4.5 4.5 0 0 1-4.5-4.5Z" />
<circle cx="15" cy="12" r="0.9" fill="currentColor" stroke="none" />
<line x1="8" y1="7.8" x2="8" y2="5.5" />`,
  },
  {
    name: "receipt",
    tags: ["invoice", "bill", "purchase"],
    svg: `<path d="M6 3.5h12v17l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5Z" />
<line x1="8.5" y1="8" x2="15.5" y2="8" />
<line x1="8.5" y1="11.5" x2="15.5" y2="11.5" />`,
  },
  {
    name: "invoice",
    tags: ["bill", "document", "finance"],
    svg: `<path d="M7 3.5h10l3 3V21H7Z" />
<line x1="17" y1="3.5" x2="17" y2="6.5" />
<line x1="20" y1="6.5" x2="17" y2="6.5" />
<line x1="9.5" y1="11" x2="15.5" y2="11" />
<line x1="9.5" y1="14.5" x2="15.5" y2="14.5" />
<line x1="9.5" y1="18" x2="13" y2="18" />`,
  },
  {
    name: "bank",
    tags: ["finance", "institution", "building"],
    svg: `<polygon points="12 3 21 8.5 3 8.5" />
<line x1="4" y1="8.5" x2="20" y2="8.5" />
<line x1="5.5" y1="8.5" x2="5.5" y2="18" />
<line x1="10" y1="8.5" x2="10" y2="18" />
<line x1="14" y1="8.5" x2="14" y2="18" />
<line x1="18.5" y1="8.5" x2="18.5" y2="18" />
<line x1="3.5" y1="18" x2="20.5" y2="18" />
<line x1="3" y1="21" x2="21" y2="21" />`,
  },
  {
    name: "percent",
    tags: ["percentage", "discount", "math"],
    svg: `<line x1="19" y1="5" x2="5" y2="19" />
<circle cx="7" cy="7" r="2.3" />
<circle cx="17" cy="17" r="2.3" />`,
  },
  {
    name: "chart-bar",
    tags: ["analytics", "statistics", "graph"],
    svg: `<line x1="4" y1="21" x2="4" y2="10" />
<line x1="10" y1="21" x2="10" y2="4" />
<line x1="16" y1="21" x2="16" y2="14" />
<line x1="21" y1="21" x2="3" y2="21" />`,
  },
  {
    name: "chart-line",
    tags: ["analytics", "statistics", "trend"],
    svg: `<path d="M3 20.5h18" />
<polyline points="4 16 9.5 10.5 13.5 14.5 20.5 6" />`,
  },
  {
    name: "chart-pie",
    tags: ["analytics", "statistics", "proportion"],
    svg: `<path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12Z" />`,
  },
  {
    name: "calculator",
    tags: ["math", "compute", "arithmetic"],
    svg: `<rect x="4.5" y="2.5" width="15" height="19" rx="2" />
<line x1="7" y1="6.5" x2="17" y2="6.5" />
<circle cx="7.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
<circle cx="12" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
<circle cx="16.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
<circle cx="7.5" cy="15.5" r="0.9" fill="currentColor" stroke="none" />
<circle cx="12" cy="15.5" r="0.9" fill="currentColor" stroke="none" />
<circle cx="16.5" cy="15.5" r="0.9" fill="currentColor" stroke="none" />
<circle cx="7.5" cy="19" r="0.9" fill="currentColor" stroke="none" />
<circle cx="12" cy="19" r="0.9" fill="currentColor" stroke="none" />
<circle cx="16.5" cy="19" r="0.9" fill="currentColor" stroke="none" />`,
  },

  {
    name: "code",
    tags: ["development", "programming", "brackets"],
    svg: `<polyline points="8.5 8 4.5 12 8.5 16" />
<polyline points="15.5 8 19.5 12 15.5 16" />
<line x1="13.5" y1="5.5" x2="10.5" y2="18.5" />`,
  },
  {
    name: "terminal",
    tags: ["console", "shell", "command-line"],
    svg: `<rect x="2.5" y="4" width="19" height="16" rx="2" />
<polyline points="6.5 9 10.5 12 6.5 15" />
<line x1="12.5" y1="15" x2="17.5" y2="15" />`,
  },
  {
    name: "git-branch",
    tags: ["version-control", "git", "development"],
    svg: `<circle cx="6" cy="5" r="2" />
<circle cx="6" cy="19" r="2" />
<circle cx="18" cy="15" r="2" />
<line x1="6" y1="7" x2="6" y2="17" />
<path d="M6 10a8 8 0 0 0 8.5 6.2" />`,
  },
  {
    name: "git-commit",
    tags: ["version-control", "git", "development"],
    svg: `<circle cx="12" cy="12" r="3" />
<line x1="2.5" y1="12" x2="9" y2="12" />
<line x1="15" y1="12" x2="21.5" y2="12" />`,
  },
  {
    name: "git-merge",
    tags: ["version-control", "git", "development"],
    svg: `<circle cx="6" cy="6" r="2" />
<circle cx="6" cy="18" r="2" />
<circle cx="18" cy="18" r="2" />
<line x1="6" y1="8" x2="6" y2="16" />
<path d="M18 16a8 8 0 0 0-8-6" />`,
  },
  {
    name: "git-pull-request",
    tags: ["version-control", "git", "development"],
    svg: `<circle cx="6" cy="6" r="2" />
<circle cx="6" cy="18" r="2" />
<circle cx="18" cy="6" r="2" />
<line x1="6" y1="8" x2="6" y2="16" />
<path d="M18 8v4a4 4 0 0 1-4 4h-2" />
<polyline points="14.5 13.5 12 16 14.5 18.5" />`,
  },
  {
    name: "bug",
    tags: ["insect", "debug", "error"],
    svg: `<rect x="7" y="8.5" width="10" height="10" rx="4" />
<line x1="12" y1="5" x2="12" y2="8.5" />
<line x1="4.5" y1="12" x2="7" y2="12" />
<line x1="17" y1="12" x2="19.5" y2="12" />
<line x1="5.5" y1="8" x2="7.5" y2="9.7" />
<line x1="18.5" y1="8" x2="16.5" y2="9.7" />
<line x1="5.5" y1="18.5" x2="7.5" y2="16.8" />
<line x1="18.5" y1="18.5" x2="16.5" y2="16.8" />`,
  },
  {
    name: "database",
    tags: ["storage", "data", "sql"],
    svg: `<path d="M4 5.5c0-1.4 3.6-2.5 8-2.5s8 1.1 8 2.5-3.6 2.5-8 2.5-8-1.1-8-2.5Z" />
<path d="M4 5.5V18c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5.5" />
<path d="M4 11.75c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />`,
  },
  {
    name: "server",
    tags: ["infrastructure", "hosting", "backend"],
    svg: `<rect x="3" y="4" width="18" height="6" rx="1.5" />
<rect x="3" y="14" width="18" height="6" rx="1.5" />
<circle cx="7" cy="7" r="0.9" fill="currentColor" stroke="none" />
<circle cx="7" cy="17" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "cpu",
    tags: ["processor", "chip", "hardware"],
    svg: `<rect x="6.5" y="6.5" width="11" height="11" rx="1.5" />
<rect x="10" y="10" width="4" height="4" />
<line x1="9" y1="2.5" x2="9" y2="6.5" />
<line x1="15" y1="2.5" x2="15" y2="6.5" />
<line x1="9" y1="17.5" x2="9" y2="21.5" />
<line x1="15" y1="17.5" x2="15" y2="21.5" />
<line x1="2.5" y1="9" x2="6.5" y2="9" />
<line x1="2.5" y1="15" x2="6.5" y2="15" />
<line x1="17.5" y1="9" x2="21.5" y2="9" />
<line x1="17.5" y1="15" x2="21.5" y2="15" />`,
  },
  {
    name: "hard-drive",
    tags: ["storage", "disk", "hardware"],
    svg: `<line x1="2.5" y1="12.5" x2="21.5" y2="12.5" />
<path d="M5.5 4.5h13l3 8v6a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-6Z" />
<circle cx="7" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
<circle cx="11" cy="16.5" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "package",
    tags: ["module", "dependency", "npm"],
    svg: `<path d="M12 2.5 21 7.5v9L12 21.5 3 16.5v-9Z" />
<path d="M3 7.5 12 12.5 21 7.5" />
<line x1="12" y1="12.5" x2="12" y2="21.5" />`,
  },
  {
    name: "box",
    tags: ["package", "container", "cube"],
    svg: `<path d="M3.5 7 12 3l8.5 4v10L12 21l-8.5-4Z" />
<line x1="3.5" y1="7" x2="12" y2="11" />
<line x1="20.5" y1="7" x2="12" y2="11" />
<line x1="12" y1="11" x2="12" y2="21" />`,
  },
  {
    name: "command",
    tags: ["keyboard", "shortcut", "mac"],
    svg: `<rect x="6" y="6" width="4" height="4" rx="1.5" />
<rect x="14" y="6" width="4" height="4" rx="1.5" />
<rect x="6" y="14" width="4" height="4" rx="1.5" />
<rect x="14" y="14" width="4" height="4" rx="1.5" />
<line x1="10" y1="8" x2="14" y2="8" />
<line x1="10" y1="16" x2="14" y2="16" />
<line x1="8" y1="10" x2="8" y2="14" />
<line x1="16" y1="10" x2="16" y2="14" />`,
  },
  {
    name: "brackets",
    tags: ["code", "array", "syntax"],
    svg: `<path d="M8 3.5H5.5v17H8" />
<path d="M16 3.5h2.5v17H16" />`,
  },
  {
    name: "braces",
    tags: ["code", "object", "syntax"],
    svg: `<path d="M8 3.5a2.5 2.5 0 0 0-2.5 2.5v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3A2.5 2.5 0 0 0 8 18.5" />
<path d="M16 3.5a2.5 2.5 0 0 1 2.5 2.5v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2.5 2.5 0 0 1-2.5 2.5" />`,
  },
  {
    name: "function-square",
    tags: ["math", "code", "formula"],
    svg: `<rect x="3.5" y="3.5" width="17" height="17" rx="2" />
<path d="M10.5 8.5h-1a1.5 1.5 0 0 0-1.5 1.5v6.5" />
<line x1="7" y1="12.5" x2="10" y2="12.5" />`,
  },
  {
    name: "webhook",
    tags: ["api", "integration", "automation"],
    svg: `<path d="M8 17.5a3.5 3.5 0 1 1-3-5.3L9 6.5" />
<path d="M15.5 6a3.5 3.5 0 0 1 2 6.5l-5.5 3" />
<path d="M11 20.5a3.5 3.5 0 0 0 5.5-2.9c0-.7-.2-1.3-.5-1.9L13 10" />
<circle cx="9" cy="6.5" r="1.3" fill="currentColor" stroke="none" />
<circle cx="17.5" cy="12.5" r="1.3" fill="currentColor" stroke="none" />
<circle cx="12" cy="19.5" r="1.3" fill="currentColor" stroke="none" />`,
  },

  {
    name: "bold",
    tags: ["text", "formatting", "typography"],
    svg: `<path d="M6.5 4h6a4 3.5 0 0 1 0 7h-6Z" />
<path d="M6.5 11h7a4 3.5 0 0 1 0 7h-7Z" />`,
  },
  {
    name: "italic",
    tags: ["text", "formatting", "typography"],
    svg: `<line x1="10" y1="4" x2="18" y2="4" />
<line x1="6" y1="20" x2="14" y2="20" />
<line x1="14" y1="4" x2="10" y2="20" />`,
  },
  {
    name: "underline",
    tags: ["text", "formatting", "typography"],
    svg: `<path d="M6 4v7a6 6 0 0 0 12 0V4" />
<line x1="5" y1="20" x2="19" y2="20" />`,
  },
  {
    name: "strikethrough",
    tags: ["text", "formatting", "typography"],
    svg: `<path d="M6.5 6.5a3.5 3 0 0 1 3.5-2h3a3.5 3 0 0 1 3.3 2.2" />
<path d="M8 17.5a3.5 3 0 0 0 4 2h1a3.5 3 0 0 0 3.8-2.2" />
<line x1="4" y1="12" x2="20" y2="12" />`,
  },
  {
    name: "align-left",
    tags: ["text", "formatting", "layout"],
    svg: `<line x1="4" y1="6" x2="20" y2="6" />
<line x1="4" y1="12" x2="14" y2="12" />
<line x1="4" y1="18" x2="17" y2="18" />`,
  },
  {
    name: "align-center",
    tags: ["text", "formatting", "layout"],
    svg: `<line x1="4" y1="6" x2="20" y2="6" />
<line x1="7" y1="12" x2="17" y2="12" />
<line x1="5.5" y1="18" x2="18.5" y2="18" />`,
  },
  {
    name: "align-right",
    tags: ["text", "formatting", "layout"],
    svg: `<line x1="4" y1="6" x2="20" y2="6" />
<line x1="10" y1="12" x2="20" y2="12" />
<line x1="7" y1="18" x2="20" y2="18" />`,
  },
  {
    name: "align-justify",
    tags: ["text", "formatting", "layout"],
    svg: `<line x1="4" y1="6" x2="20" y2="6" />
<line x1="4" y1="12" x2="20" y2="12" />
<line x1="4" y1="18" x2="20" y2="18" />`,
  },
  {
    name: "list-ordered",
    tags: ["text", "numbered-list", "formatting"],
    svg: `<line x1="9" y1="6" x2="20" y2="6" />
<line x1="9" y1="12" x2="20" y2="12" />
<line x1="9" y1="18" x2="20" y2="18" />
<line x1="4.5" y1="4.5" x2="4.5" y2="7.5" />
<line x1="4.5" y1="10.5" x2="4.5" y2="13.5" />
<line x1="4.5" y1="16.5" x2="4.5" y2="19.5" />`,
  },
  {
    name: "indent",
    tags: ["text", "formatting", "tab"],
    svg: `<line x1="3" y1="6" x2="21" y2="6" />
<line x1="11" y1="12" x2="21" y2="12" />
<line x1="3" y1="18" x2="21" y2="18" />
<polyline points="3 9.5 7 12 3 14.5" />`,
  },
  {
    name: "outdent",
    tags: ["text", "formatting", "tab"],
    svg: `<line x1="3" y1="6" x2="21" y2="6" />
<line x1="11" y1="12" x2="21" y2="12" />
<line x1="3" y1="18" x2="21" y2="18" />
<polyline points="7 9.5 3 12 7 14.5" />`,
  },
  {
    name: "type",
    tags: ["text", "font", "typography"],
    svg: `<polyline points="4 6.5 4 4.5 20 4.5 20 6.5" />
<line x1="12" y1="4.5" x2="12" y2="19.5" />
<line x1="9" y1="19.5" x2="15" y2="19.5" />`,
  },
  {
    name: "heading",
    tags: ["text", "title", "typography"],
    svg: `<line x1="5" y1="4.5" x2="5" y2="19.5" />
<line x1="17" y1="4.5" x2="17" y2="19.5" />
<line x1="5" y1="12" x2="17" y2="12" />`,
  },
  {
    name: "quote",
    tags: ["text", "blockquote", "citation"],
    svg: `<path d="M6 8.5a3 3 0 0 0-3 3V15h4v-4H5a2 2 0 0 1 2-2Z" />
<path d="M16 8.5a3 3 0 0 0-3 3V15h4v-4h-2a2 2 0 0 1 2-2Z" />`,
  },
  {
    name: "hash",
    tags: ["text", "number", "tag"],
    svg: `<line x1="9" y1="3.5" x2="6.5" y2="20.5" />
<line x1="17.5" y1="3.5" x2="15" y2="20.5" />
<line x1="4" y1="9" x2="20" y2="9" />
<line x1="3.3" y1="15" x2="19.3" y2="15" />`,
  },
  {
    name: "pilcrow",
    tags: ["text", "paragraph", "typography"],
    svg: `<path d="M9.5 3.5h7v9a3.5 3.5 0 0 1-7 0Z" />
<line x1="13" y1="3.5" x2="13" y2="20.5" />
<line x1="16.5" y1="3.5" x2="16.5" y2="20.5" />`,
  },

  {
    name: "square",
    tags: ["shape", "geometry"],
    svg: `<rect x="4" y="4" width="16" height="16" rx="1.5" />`,
  },
  {
    name: "triangle",
    tags: ["shape", "geometry"],
    svg: `<path d="M12 4 21 19H3Z" />`,
  },
  {
    name: "hexagon",
    tags: ["shape", "geometry"],
    svg: `<path d="M8 3.5h8L21 12l-5 8.5H8L3 12Z" />`,
  },
  {
    name: "pentagon",
    tags: ["shape", "geometry"],
    svg: `<path d="M12 3 21 9.7 17.5 20.5H6.5L3 9.7Z" />`,
  },
  {
    name: "diamond",
    tags: ["shape", "geometry", "rhombus"],
    svg: `<path d="M12 3 20 12 12 21 4 12Z" />`,
  },
  {
    name: "octagon",
    tags: ["shape", "geometry", "stop"],
    svg: `<path d="M8 3h8l5 5v8l-5 5H8l-5-5V8Z" />`,
  },
  {
    name: "crop",
    tags: ["design", "resize", "image"],
    svg: `<path d="M6 2.5v14a1.5 1.5 0 0 0 1.5 1.5H21.5" />
<path d="M18 21.5v-14a1.5 1.5 0 0 0-1.5-1.5H2.5" />`,
  },
  {
    name: "move",
    tags: ["drag", "position", "arrows"],
    svg: `<line x1="12" y1="3" x2="12" y2="21" />
<line x1="3" y1="12" x2="21" y2="12" />
<polyline points="9 6 12 3 15 6" />
<polyline points="9 18 12 21 15 18" />
<polyline points="6 9 3 12 6 15" />
<polyline points="18 9 21 12 18 15" />`,
  },
  {
    name: "maximize",
    tags: ["expand", "fullscreen", "resize"],
    svg: `<path d="M8 3.5H4v4" />
<path d="M16 3.5h4v4" />
<path d="M8 20.5H4v-4" />
<path d="M16 20.5h4v-4" />`,
  },
  {
    name: "minimize",
    tags: ["collapse", "shrink", "resize"],
    svg: `<path d="M4 9V5h4" />
<path d="M20 9V5h-4" />
<path d="M4 15v4h4" />
<path d="M20 15v4h-4" />`,
  },

  {
    name: "pen-tool",
    tags: ["design", "vector", "draw"],
    svg: `<path d="M12 19 5 12l4.5-4.5L17 15Z" />
<circle cx="7" cy="17" r="2" />
<line x1="15" y1="4" x2="20" y2="9" />`,
  },
  {
    name: "brush",
    tags: ["design", "paint", "draw"],
    svg: `<path d="M15 4 20 9l-7.5 7.5a2.5 2.5 0 0 1-3.5 0l-1-1a2.5 2.5 0 0 1 0-3.5Z" />
<path d="M8 15.5c-1 1-1 2.5-3.5 3.5 1-2.5.5-3.5 1.5-4.5" />`,
  },
  {
    name: "palette",
    tags: ["design", "color", "art"],
    svg: `<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2s-.5-1.5-.5-2.3a1.7 1.7 0 0 1 1.7-1.7H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z" />
<circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
<circle cx="9.5" cy="7" r="1.1" fill="currentColor" stroke="none" />
<circle cx="14.5" cy="7" r="1.1" fill="currentColor" stroke="none" />
<circle cx="16.5" cy="11" r="1.1" fill="currentColor" stroke="none" />`,
  },
  {
    name: "droplet",
    tags: ["water", "color", "ink"],
    svg: `<path d="M12 2.5s7 8 7 12.5a7 7 0 0 1-14 0c0-4.5 7-12.5 7-12.5Z" />`,
  },
  {
    name: "contrast",
    tags: ["design", "brightness", "display"],
    svg: `<circle cx="12" cy="12" r="9" />
<path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" stroke="none" />`,
  },
  {
    name: "eyedropper",
    tags: ["design", "color-picker", "sample"],
    svg: `<path d="M15 5 19 9l-9 9-4.5 1.5L7 15Z" />
<line x1="4" y1="20.5" x2="7" y2="17.5" />
<line x1="13" y1="3" x2="17" y2="7" />`,
  },
  {
    name: "ruler",
    tags: ["design", "measure", "dimensions"],
    svg: `<path d="M3.5 15.5 15.5 3.5l5 5-12 12Z" />
<line x1="7.5" y1="11.5" x2="9.5" y2="13.5" />
<line x1="10.5" y1="8.5" x2="12.5" y2="10.5" />
<line x1="13.5" y1="5.5" x2="15.5" y2="7.5" />`,
  },
  {
    name: "scissors",
    tags: ["cut", "trim", "edit"],
    svg: `<circle cx="6.5" cy="6.5" r="2.2" />
<circle cx="6.5" cy="17.5" r="2.2" />
<line x1="8.2" y1="8" x2="19.5" y2="19" />
<line x1="8.2" y1="16" x2="19.5" y2="5" />`,
  },
  {
    name: "magic-wand",
    tags: ["design", "effects", "sparkle"],
    svg: `<line x1="4.5" y1="19.5" x2="15" y2="9" />
<line x1="17" y1="3" x2="17" y2="6" />
<line x1="21" y1="7" x2="18" y2="7" />
<line x1="19.5" y1="4.5" x2="17.5" y2="6.5" />`,
  },
  {
    name: "swatch",
    tags: ["design", "color", "palette"],
    svg: `<rect x="3.5" y="3.5" width="4.5" height="17" rx="1.5" />
<rect x="10" y="3.5" width="4.5" height="17" rx="1.5" />
<rect x="16.5" y="3.5" width="4.5" height="17" rx="1.5" />`,
  },
  {
    name: "gradient",
    tags: ["design", "color", "blend"],
    svg: `<rect x="3" y="3" width="18" height="18" rx="2" />
<line x1="3" y1="8" x2="21" y2="8" />
<line x1="3" y1="13" x2="21" y2="13" />
<line x1="3" y1="18" x2="21" y2="18" />`,
  },
  {
    name: "stamp",
    tags: ["design", "approve", "mark"],
    svg: `<path d="M8 14.5V11a4 4 0 0 1 8 0v3.5" />
<rect x="4" y="14.5" width="16" height="4" rx="1" />
<line x1="3" y1="21" x2="21" y2="21" />`,
  },

  {
    name: "arrow-up-right",
    tags: ["diagonal", "arrow", "external"],
    svg: `<line x1="6" y1="18" x2="18" y2="6" />
<polyline points="9 6 18 6 18 15" />`,
  },
  {
    name: "arrow-up-left",
    tags: ["diagonal", "arrow"],
    svg: `<line x1="18" y1="18" x2="6" y2="6" />
<polyline points="15 6 6 6 6 15" />`,
  },
  {
    name: "arrow-down-right",
    tags: ["diagonal", "arrow"],
    svg: `<line x1="6" y1="6" x2="18" y2="18" />
<polyline points="18 9 18 18 9 18" />`,
  },
  {
    name: "arrow-down-left",
    tags: ["diagonal", "arrow"],
    svg: `<line x1="18" y1="6" x2="6" y2="18" />
<polyline points="6 9 6 18 15 18" />`,
  },
  {
    name: "chevrons-left",
    tags: ["arrow", "back", "rewind"],
    svg: `<polyline points="16 5 10 12 16 19" />
<polyline points="10 5 4 12 10 19" />`,
  },
  {
    name: "chevrons-right",
    tags: ["arrow", "forward", "fast-forward"],
    svg: `<polyline points="8 5 14 12 8 19" />
<polyline points="14 5 20 12 14 19" />`,
  },
  {
    name: "chevrons-up",
    tags: ["arrow", "collapse"],
    svg: `<polyline points="5 16 12 10 19 16" />
<polyline points="5 10 12 4 19 10" />`,
  },
  {
    name: "chevrons-down",
    tags: ["arrow", "expand"],
    svg: `<polyline points="5 8 12 14 19 8" />
<polyline points="5 14 12 20 19 14" />`,
  },
  {
    name: "corner-up-left",
    tags: ["arrow", "turn", "navigation"],
    svg: `<polyline points="9 14 4 9 9 4" />
<path d="M4 9h11a5 5 0 0 1 5 5v6" />`,
  },
  {
    name: "corner-up-right",
    tags: ["arrow", "turn", "navigation"],
    svg: `<polyline points="15 14 20 9 15 4" />
<path d="M20 9H9a5 5 0 0 0-5 5v6" />`,
  },
  {
    name: "corner-down-left",
    tags: ["arrow", "turn", "navigation"],
    svg: `<polyline points="9 10 4 15 9 20" />
<path d="M4 15h11a5 5 0 0 0 5-5V4" />`,
  },
  {
    name: "corner-down-right",
    tags: ["arrow", "turn", "navigation"],
    svg: `<polyline points="15 10 20 15 15 20" />
<path d="M20 15H9a5 5 0 0 1-5-5V4" />`,
  },
  {
    name: "move-diagonal",
    tags: ["resize", "drag", "arrows"],
    svg: `<polyline points="7 17 17 7" />
<polyline points="10 7 17 7 17 14" />
<polyline points="14 17 7 17 7 10" />`,
  },
  {
    name: "rotate-cw",
    tags: ["refresh", "clockwise", "turn"],
    svg: `<path d="M20 12a8 8 0 1 1-2.7-6" />
<polyline points="20 4 20 9 15 9" />`,
  },
  {
    name: "rotate-ccw",
    tags: ["refresh", "counter-clockwise", "turn"],
    svg: `<path d="M4 12a8 8 0 1 0 2.7-6" />
<polyline points="4 4 4 9 9 9" />`,
  },
  {
    name: "shuffle",
    tags: ["random", "arrows", "mix"],
    svg: `<polyline points="16 3 21 3 21 8" />
<line x1="21" y1="3" x2="3" y2="21" />
<polyline points="16 21 21 21 21 16" />
<line x1="3" y1="3" x2="9" y2="9" />
<line x1="15" y1="15" x2="21" y2="21" />`,
  },

  {
    name: "leaf",
    tags: ["plant", "eco", "nature"],
    svg: `<path d="M4 20c0-9 5-15 15-15 1 8-4 15-15 15Z" />
<path d="M5 19c3-4 6-7 12-11" />`,
  },
  {
    name: "tree",
    tags: ["plant", "nature", "forest"],
    svg: `<path d="M12 3 6 12h3l-4 6h4v4h6v-4h4l-4-6h3Z" />`,
  },
  {
    name: "flower",
    tags: ["plant", "nature", "bloom"],
    svg: `<circle cx="12" cy="12" r="2.3" />
<circle cx="12" cy="6" r="2.5" />
<circle cx="12" cy="18" r="2.5" />
<circle cx="6" cy="12" r="2.5" />
<circle cx="18" cy="12" r="2.5" />
<line x1="12" y1="20.5" x2="12" y2="14.3" />`,
  },
  {
    name: "mountain",
    tags: ["nature", "landscape", "peak"],
    svg: `<path d="M3 20 9 8l4 6 2-3 6 9Z" />`,
  },
  {
    name: "flame",
    tags: ["fire", "hot", "burn"],
    svg: `<path d="M12 2.5s5.5 5 5.5 10a5.5 5.5 0 1 1-11 0c0-1.4.6-2.6 1.3-3.6.2 1 .9 1.6 1.7 1.6.9 0 1.5-1 1-2A6 6 0 0 1 12 2.5Z" />`,
  },
  {
    name: "sprout",
    tags: ["plant", "growth", "eco"],
    svg: `<path d="M7 20a5 5 0 0 1 5-5V9" />
<path d="M12 9c0-3 2-5 6-5 0 3.5-2 5-6 5Z" />
<path d="M12 9c0-2.5-1.7-4-5-4 0 2.8 1.7 4 5 4Z" />
<line x1="7" y1="20" x2="17" y2="20" />`,
  },
  {
    name: "cactus",
    tags: ["plant", "desert", "nature"],
    svg: `<path d="M11 21V9a2 2 0 1 1 4 0v3" />
<path d="M11 12H8a2 2 0 0 1-2-2V7" />
<path d="M15 15h3a2 2 0 0 0 2-2V10" />
<line x1="8" y1="21" x2="18" y2="21" />`,
  },
  {
    name: "wave",
    tags: ["water", "ocean", "nature"],
    svg: `<path d="M2.5 8a3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 1 7 0" />
<path d="M2.5 15a3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 1 7 0" />`,
  },
  {
    name: "seedling",
    tags: ["plant", "growth", "eco"],
    svg: `<path d="M6 20a6 6 0 0 1 6-6" />
<path d="M12 14c0-4 2.5-6.5 7-6.5 0 4-2.5 6.5-7 6.5Z" />
<line x1="6" y1="20" x2="18" y2="20" />`,
  },
  {
    name: "wheat",
    tags: ["grain", "agriculture", "harvest"],
    svg: `<path d="M12 3v18" />
<path d="M12 5c-1.5 0-3 1-3 2.5S10.5 10 12 10" />
<path d="M12 5c1.5 0 3 1 3 2.5S13.5 10 12 10" />
<path d="M12 10c-1.5 0-3 1-3 2.5S10.5 15 12 15" />
<path d="M12 10c1.5 0 3 1 3 2.5S13.5 15 12 15" />
<path d="M12 15c-1.5 0-3 1-3 2.5" />
<path d="M12 15c1.5 0 3 1 3 2.5" />`,
  },

  {
    name: "coffee",
    tags: ["drink", "beverage", "cafe"],
    svg: `<path d="M5 8h11v6a5.5 5.5 0 0 1-5.5 5.5H10A5.5 5.5 0 0 1 4.5 14V8Z" />
<path d="M16 9.5h1.5a2.5 2.5 0 0 1 0 5H16" />
<path d="M7 3c0 1-1 1-1 2" />
<path d="M11 3c0 1-1 1-1 2" />`,
  },
  {
    name: "cup",
    tags: ["drink", "beverage", "takeaway"],
    svg: `<path d="M6 3h9l-1 13a3 3 0 0 1-3 2.7h-1A3 3 0 0 1 7 16Z" />
<line x1="4" y1="3" x2="17" y2="3" />`,
  },
  {
    name: "pizza",
    tags: ["food", "slice", "meal"],
    svg: `<path d="M12 3 3 20h18Z" />
<circle cx="11" cy="12" r="1" fill="currentColor" stroke="none" />
<circle cx="14" cy="16" r="1" fill="currentColor" stroke="none" />
<circle cx="9" cy="16.5" r="1" fill="currentColor" stroke="none" />`,
  },
  {
    name: "apple-fruit",
    tags: ["food", "fruit", "healthy"],
    svg: `<path d="M12 8.5c-3-3-8-1.5-8 4a8 8 0 0 0 8 8 8 8 0 0 0 8-8c0-5.5-5-5.5-8-4Z" />
<path d="M12 8.5V5.5" />
<path d="M12 5.5c0-1.5 1-2 2.5-2" />`,
  },
  {
    name: "utensils",
    tags: ["fork", "knife", "dining"],
    svg: `<path d="M6 2.5v7a2 2 0 0 0 4 0v-7" />
<line x1="8" y1="2.5" x2="8" y2="21.5" />
<path d="M17 2.5c-1.5 0-2.5 2-2.5 5s1 5 2.5 5v9" />`,
  },
  {
    name: "wine-glass",
    tags: ["drink", "alcohol", "beverage"],
    svg: `<path d="M7 3h10l-1 6a4 4 0 0 1-8 0Z" />
<line x1="12" y1="13" x2="12" y2="19" />
<line x1="8" y1="21" x2="16" y2="21" />`,
  },
  {
    name: "cake",
    tags: ["dessert", "birthday", "celebration"],
    svg: `<rect x="3.5" y="11" width="17" height="9" rx="1.5" />
<path d="M3.5 15.5c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
<line x1="8" y1="11" x2="8" y2="7.5" />
<line x1="16" y1="11" x2="16" y2="7.5" />
<line x1="8" y1="7" x2="8" y2="5" />
<line x1="16" y1="7" x2="16" y2="5" />`,
  },
  {
    name: "bag",
    tags: ["shopping", "grocery", "purchase"],
    svg: `<path d="M6 8h12l1 12.5H5Z" />
<path d="M9 8V6a3 3 0 0 1 6 0v2" />`,
  },
  {
    name: "egg",
    tags: ["food", "protein", "breakfast"],
    svg: `<path d="M12 21.5a6.5 5.5 0 0 0 6.5-5.5C18.5 10 15 3 12 3S5.5 10 5.5 16a6.5 5.5 0 0 0 6.5 5.5Z" />`,
  },
  {
    name: "ice-cream",
    tags: ["dessert", "sweet", "summer"],
    svg: `<path d="M6.5 10a5.5 5.5 0 0 1 11 0Z" />
<path d="M6.5 10 12 21.5 17.5 10Z" />`,
  },
  {
    name: "burger",
    tags: ["food", "fast-food", "meal"],
    svg: `<path d="M4 9a8 5 0 0 1 16 0Z" />
<line x1="3.5" y1="12" x2="20.5" y2="12" />
<path d="M4 15h16v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z" />`,
  },
  {
    name: "bottle",
    tags: ["drink", "container", "beverage"],
    svg: `<path d="M10 2.5h4v3.5l1.5 2v12a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 20V8l1.5-2Z" />
<line x1="8.5" y1="11" x2="15.5" y2="11" />`,
  },
  {
    name: "donut",
    tags: ["dessert", "sweet", "food"],
    svg: `<circle cx="12" cy="12" r="8.5" />
<circle cx="12" cy="12" r="3" />`,
  },
  {
    name: "sandwich",
    tags: ["food", "lunch", "meal"],
    svg: `<path d="M3.5 10.5 12 5l8.5 5.5Z" />
<rect x="3.5" y="10.5" width="17" height="4" rx="1" />
<path d="M4.5 14.5 6 19h12l1.5-4.5" />`,
  },

  // --- Health & medical ---
  {
    name: "heart-pulse",
    tags: ["health", "cardiogram", "vitals"],
    svg: `<path d="M12 19.5 4 12.3a5 5 0 0 1 7-7.2L12 6l1-.9a5 5 0 0 1 7 7.2Z" />
<polyline points="7 12 9.5 12 11 9 13 15 14.5 12 17 12" />`,
  },
  {
    name: "pill",
    tags: ["medicine", "capsule", "health"],
    svg: `<path d="M7.5 16.5 16.5 7.5a4 4 0 1 1 5.7 5.7L13.2 22.2a4 4 0 0 1-5.7-5.7Z" />
<line x1="10.5" y1="13.5" x2="14.8" y2="9.2" />`,
  },
  {
    name: "stethoscope",
    tags: ["medical", "doctor", "health"],
    svg: `<path d="M6 3v6a4 4 0 0 0 8 0V3" />
<path d="M14 12v2a5 5 0 0 1-10 0v-2" />
<circle cx="18" cy="15" r="2.5" />
<line x1="14" y1="12" x2="15.7" y2="13.5" />`,
  },
  {
    name: "first-aid",
    tags: ["medical", "emergency", "health"],
    svg: `<rect x="3" y="6" width="18" height="14" rx="2" />
<path d="M9 6V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6" />
<line x1="12" y1="10" x2="12" y2="16" />
<line x1="9" y1="13" x2="15" y2="13" />`,
  },
  {
    name: "syringe",
    tags: ["medical", "injection", "vaccine"],
    svg: `<line x1="20" y1="4" x2="16.5" y2="7.5" />
<path d="M18 6 15 9l-8.5 8.5L4 19l1.5-2.5L14 8Z" />
<line x1="11.5" y1="6.5" x2="14" y2="9" />
<line x1="9" y1="9" x2="11.5" y2="11.5" />
<line x1="4" y1="19" x2="6.5" y2="16.5" />`,
  },
  {
    name: "cross-medical",
    tags: ["medical", "hospital", "health"],
    svg: `<path d="M10 3h4v6h6v4h-6v8h-4v-8H4V9h6Z" />`,
  },
  {
    name: "bandage",
    tags: ["medical", "wound", "first-aid"],
    svg: `<rect x="3" y="9" width="18" height="6" rx="3" />
<line x1="9" y1="9" x2="9" y2="15" />
<line x1="15" y1="9" x2="15" y2="15" />
<circle cx="6" cy="12" r="0.6" fill="currentColor" stroke="none" />
<circle cx="18" cy="12" r="0.6" fill="currentColor" stroke="none" />`,
  },
  {
    name: "brain",
    tags: ["mind", "mental", "health"],
    svg: `<path d="M9 4.5A3.5 3.5 0 0 0 5.5 8 3 3 0 0 0 4 13a3.5 3.5 0 0 0 3 5.4A3 3 0 0 0 12 20V6a3.5 3.5 0 0 0-3-1.5Z" />
<path d="M15 4.5A3.5 3.5 0 0 1 18.5 8 3 3 0 0 1 20 13a3.5 3.5 0 0 1-3 5.4A3 3 0 0 1 12 20V6a3.5 3.5 0 0 1 3-1.5Z" />`,
  },
  {
    name: "tooth",
    tags: ["dental", "health", "medical"],
    svg: `<path d="M12 4c-3 0-5.5 1.7-5.5 5 0 2 .5 3 1 5.5.4 2 .5 4.5 2 4.5s1.5-3 2.5-3 1 3 2.5 3 1.6-2.5 2-4.5c.5-2.5 1-3.5 1-5.5 0-3.3-2.5-5-5.5-5Z" />`,
  },
  {
    name: "activity",
    tags: ["heartbeat", "pulse", "vitals"],
    svg: `<polyline points="3 12 8 12 10 6 14 18 16 12 21 12" />`,
  },
  {
    name: "virus",
    tags: ["germ", "infection", "medical"],
    svg: `<circle cx="12" cy="12" r="3.5" />
<line x1="12" y1="2.5" x2="12" y2="5" />
<line x1="12" y1="19" x2="12" y2="21.5" />
<line x1="2.5" y1="12" x2="5" y2="12" />
<line x1="19" y1="12" x2="21.5" y2="12" />
<line x1="5.5" y1="5.5" x2="7.2" y2="7.2" />
<line x1="16.8" y1="16.8" x2="18.5" y2="18.5" />
<line x1="5.5" y1="18.5" x2="7.2" y2="16.8" />
<line x1="16.8" y1="7.2" x2="18.5" y2="5.5" />`,
  },
  {
    name: "wheelchair",
    tags: ["accessibility", "mobility", "medical"],
    svg: `<circle cx="9" cy="17" r="4.5" />
<circle cx="18" cy="19" r="1.3" fill="currentColor" stroke="none" />
<path d="M9 5.5h2.5" />
<path d="M9 5.5v8h6l3 5.5" />
<line x1="9" y1="9.5" x2="14.5" y2="9.5" />`,
  },

  {
    name: "dumbbell",
    tags: ["fitness", "gym", "weights"],
    svg: `<rect x="2.5" y="10" width="3" height="4" rx="1" />
<rect x="18.5" y="10" width="3" height="4" rx="1" />
<line x1="7" y1="12" x2="17" y2="12" />
<rect x="5.5" y="8" width="2" height="8" rx="1" />
<rect x="16.5" y="8" width="2" height="8" rx="1" />`,
  },
  {
    name: "trophy",
    tags: ["award", "winner", "achievement"],
    svg: `<path d="M7 3.5h10v5a5 5 0 0 1-10 0Z" />
<path d="M7 5H4a3 3 0 0 0 3 6" />
<path d="M17 5h3a3 3 0 0 1-3 6" />
<line x1="12" y1="13.5" x2="12" y2="17.5" />
<line x1="8.5" y1="20.5" x2="15.5" y2="20.5" />
<path d="M9 20.5c0-2 1-3 3-3s3 1 3 3" />`,
  },
  {
    name: "target",
    tags: ["goal", "aim", "bullseye"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="12" cy="12" r="5" />
<circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />`,
  },
  {
    name: "football",
    tags: ["soccer", "sports", "ball"],
    svg: `<circle cx="12" cy="12" r="9" />
<polygon points="12 8 15 10.5 14 14 10 14 9 10.5" />
<line x1="12" y1="8" x2="12" y2="3.5" />
<line x1="15" y1="10.5" x2="19.5" y2="9" />
<line x1="14" y1="14" x2="16" y2="19" />
<line x1="10" y1="14" x2="8" y2="19" />
<line x1="9" y1="10.5" x2="4.5" y2="9" />`,
  },
  {
    name: "basketball",
    tags: ["sports", "ball", "game"],
    svg: `<circle cx="12" cy="12" r="9" />
<path d="M3 12h18" />
<path d="M12 3a14 14 0 0 1 0 18" />
<path d="M12 3a14 14 0 0 0 0 18" />`,
  },
  {
    name: "running",
    tags: ["exercise", "jogging", "fitness"],
    svg: `<circle cx="14.5" cy="4.5" r="1.8" />
<path d="M9 20 12 15l3 2 3-1.5" />
<path d="M12 15 9.5 11l3-2.5 2.5 3 3.5 1" />
<path d="M9.5 11 6 12.5" />
<path d="M9 20 6.5 22" />`,
  },
  {
    name: "medal",
    tags: ["award", "achievement", "prize"],
    svg: `<circle cx="12" cy="15" r="5.5" />
<path d="M9.5 10 7 3.5h3l2 5" />
<path d="M14.5 10 17 3.5h-3l-2 5" />
<path d="M10.5 17 12 13l1.5 4-1.5-1-1.5 1Z" />`,
  },
  {
    name: "whistle",
    tags: ["sports", "referee", "coach"],
    svg: `<path d="M3 9.5h9a4.5 4.5 0 1 1 0 9H9.5A6.5 6.5 0 0 1 3 12Z" />
<circle cx="16.5" cy="14" r="1.3" fill="currentColor" stroke="none" />
<path d="M3 9.5V7h3v2.5" />`,
  },
  {
    name: "flag-checkered",
    tags: ["race", "finish", "sports"],
    svg: `<line x1="5" y1="21" x2="5" y2="3" />
<path d="M5 4h14v10H5Z" />
<rect x="5" y="4" width="3.5" height="3.3" fill="currentColor" stroke="none" />
<rect x="12" y="4" width="3.5" height="3.3" fill="currentColor" stroke="none" />
<rect x="8.5" y="7.3" width="3.5" height="3.3" fill="currentColor" stroke="none" />
<rect x="15.5" y="7.3" width="3.5" height="3.3" fill="currentColor" stroke="none" />
<rect x="5" y="10.6" width="3.5" height="3.3" fill="currentColor" stroke="none" />
<rect x="12" y="10.6" width="3.5" height="3.3" fill="currentColor" stroke="none" />`,
  },
  {
    name: "volleyball",
    tags: ["sports", "ball", "game"],
    svg: `<circle cx="12" cy="12" r="9" />
<path d="M12 3a9 6 0 0 1 6 9" />
<path d="M3 13a9 6 0 0 0 9 6" />
<path d="M6 5.5a9 7 0 0 0 3 12" />`,
  },

  {
    name: "bed",
    tags: ["furniture", "sleep", "bedroom"],
    svg: `<path d="M2.5 19v-8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8" />
<path d="M2.5 15h19" />
<path d="M5.5 12V9a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 11.5 9v3" />
<line x1="2.5" y1="19" x2="2.5" y2="21" />
<line x1="21.5" y1="19" x2="21.5" y2="21" />`,
  },
  {
    name: "sofa",
    tags: ["furniture", "couch", "living-room"],
    svg: `<path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
<path d="M3 12h18v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
<line x1="4" y1="18" x2="4" y2="20.5" />
<line x1="20" y1="18" x2="20" y2="20.5" />`,
  },
  {
    name: "lamp",
    tags: ["furniture", "light", "home"],
    svg: `<path d="M6 3h12l-3 8H9Z" />
<line x1="12" y1="11" x2="12" y2="18" />
<line x1="8" y1="21" x2="16" y2="21" />
<line x1="9" y1="18" x2="15" y2="18" />`,
  },
  {
    name: "door",
    tags: ["entrance", "home", "exit"],
    svg: `<rect x="5" y="2.5" width="14" height="19" rx="1" />
<circle cx="14.5" cy="12" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "key",
    tags: ["unlock", "access", "security"],
    svg: `<circle cx="7" cy="15" r="4" />
<line x1="10" y1="12" x2="20" y2="2" />
<line x1="17" y1="5" x2="19" y2="7" />
<line x1="14.5" y1="7.5" x2="16.5" y2="9.5" />`,
  },
  {
    name: "hammer",
    tags: ["tool", "build", "repair"],
    svg: `<path d="M14 7 18 3l3 3-4 4Z" />
<path d="M15.5 8.5 5.5 18.5a2 2 0 0 1-2.8-2.8L12.7 5.7Z" />`,
  },
  {
    name: "wrench",
    tags: ["tool", "repair", "settings"],
    svg: `<path d="M14.5 3.5a5 5 0 0 0-6.8 6l-6.2 6.2a2 2 0 0 0 2.8 2.8l6.2-6.2a5 5 0 0 0 6-6.8l-3.2 3.2-2.6-.6-.6-2.6Z" />`,
  },
  {
    name: "screwdriver",
    tags: ["tool", "repair", "build"],
    svg: `<line x1="4" y1="20" x2="12.5" y2="11.5" />
<path d="M12.5 11.5 17 7a2.5 2.5 0 0 0-3.5-3.5L9 8" />`,
  },
  {
    name: "paint-roller",
    tags: ["tool", "decorate", "diy"],
    svg: `<rect x="4" y="4" width="14" height="6" rx="1.5" />
<line x1="8" y1="10" x2="8" y2="15" />
<rect x="6" y="15" width="4" height="5" rx="1" />`,
  },
  {
    name: "plug",
    tags: ["electric", "power", "outlet"],
    svg: `<path d="M9 2.5v6" />
<path d="M15 2.5v6" />
<path d="M6.5 8.5h11v3a5.5 5.5 0 0 1-11 0Z" />
<line x1="12" y1="17" x2="12" y2="21.5" />`,
  },
  {
    name: "lightbulb",
    tags: ["idea", "light", "electric"],
    svg: `<path d="M9 18h6" />
<path d="M10 21h4" />
<path d="M12 3a6.5 6.5 0 0 0-4 11.6c.7.6 1 1.2 1 2.4h6c0-1.2.3-1.8 1-2.4A6.5 6.5 0 0 0 12 3Z" />`,
  },
  {
    name: "thermostat",
    tags: ["home", "climate", "temperature"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="12" cy="12" r="3.5" />
<line x1="12" y1="3" x2="12" y2="5.5" />`,
  },
  {
    name: "toolbox",
    tags: ["tools", "repair", "diy"],
    svg: `<rect x="2.5" y="9" width="19" height="10" rx="1.5" />
<path d="M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
<line x1="2.5" y1="13.5" x2="21.5" y2="13.5" />
<line x1="10.5" y1="13.5" x2="10.5" y2="15.5" />
<line x1="13.5" y1="13.5" x2="13.5" y2="15.5" />`,
  },
  {
    name: "faucet",
    tags: ["water", "tap", "plumbing"],
    svg: `<path d="M6 3v6" />
<path d="M6 9h9a3 3 0 0 1 3 3v1" />
<line x1="18" y1="13" x2="18" y2="16" />
<path d="M6 9a4 4 0 0 0-3 3.9V15" />
<line x1="6" y1="15" x2="6" y2="19" />`,
  },

  {
    name: "shield",
    tags: ["security", "protection", "safe"],
    svg: `<path d="M12 3 20 6.5V12c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6.5Z" />`,
  },
  {
    name: "shield-check",
    tags: ["security", "verified", "protection"],
    svg: `<path d="M12 3 20 6.5V12c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6.5Z" />
<polyline points="8.5 12 11 14.5 15.5 9.5" />`,
  },
  {
    name: "shield-alert",
    tags: ["security", "warning", "protection"],
    svg: `<path d="M12 3 20 6.5V12c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6.5Z" />
<line x1="12" y1="8" x2="12" y2="13" />
<circle cx="12" cy="16" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "shield-off",
    tags: ["security", "disabled", "unprotected"],
    svg: `<path d="M12 3 20 6.5V12c0 1.8-.4 3.4-1.1 4.7" />
<path d="M6.5 8.3V12c0 5 3.5 8 5.5 9 1-.4 1.9-1 2.7-1.7" />
<line x1="4" y1="4" x2="20" y2="20" />`,
  },
  {
    name: "fingerprint",
    tags: ["biometric", "security", "identity"],
    svg: `<path d="M12 3.5a8.5 8.5 0 0 0-8.5 8.5c0 2.5.5 4 1.5 6" />
<path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5c0 1.2-.1 2.2-.3 3.2" />
<path d="M12 7.5a4.5 4.5 0 0 0-4.5 4.5c0 4-1 6-2 7.5" />
<path d="M12 7.5a4.5 4.5 0 0 1 4.5 4.5c0 2 .2 3.5.7 4.8" />
<path d="M12 11.5a1 1 0 0 0-1 1c0 3.5-.5 6-2 8" />
<path d="M16 20a13 13 0 0 0 1-4.5" />`,
  },
  {
    name: "scan",
    tags: ["security", "detect", "camera"],
    svg: `<path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8" />
<path d="M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8" />
<path d="M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16" />
<path d="M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
<line x1="4" y1="12" x2="20" y2="12" />`,
  },
  {
    name: "badge",
    tags: ["verified", "id", "credential"],
    svg: `<path d="M12 2.5 14.5 5H18a1.5 1.5 0 0 1 1.5 1.5V10l2 2-2 2v3.5A1.5 1.5 0 0 1 18 19h-3.5L12 21.5 9.5 19H6a1.5 1.5 0 0 1-1.5-1.5V14l-2-2 2-2V5.5A1.5 1.5 0 0 1 6 4h3.5Z" />`,
  },
  {
    name: "badge-check",
    tags: ["verified", "id", "credential"],
    svg: `<path d="M12 2.5 14.5 5H18a1.5 1.5 0 0 1 1.5 1.5V10l2 2-2 2v3.5A1.5 1.5 0 0 1 18 19h-3.5L12 21.5 9.5 19H6a1.5 1.5 0 0 1-1.5-1.5V14l-2-2 2-2V5.5A1.5 1.5 0 0 1 6 4h3.5Z" />
<polyline points="8.5 12 11 14.5 15.5 9.5" />`,
  },

  {
    name: "hourglass",
    tags: ["time", "waiting", "countdown"],
    svg: `<path d="M6 3h12" />
<path d="M6 21h12" />
<path d="M7 3v3.5a5 5 0 0 0 5 5 5 5 0 0 0 5-5V3" />
<path d="M7 21v-3.5a5 5 0 0 1 5-5 5 5 0 0 1 5 5V21" />`,
  },
  {
    name: "timer",
    tags: ["time", "countdown", "clock"],
    svg: `<circle cx="12" cy="13" r="8" />
<line x1="12" y1="13" x2="12" y2="9" />
<line x1="12" y1="13" x2="15" y2="14.5" />
<line x1="9" y1="2" x2="15" y2="2" />
<line x1="12" y1="2" x2="12" y2="5" />`,
  },
  {
    name: "alarm-clock",
    tags: ["time", "alert", "wake-up"],
    svg: `<circle cx="12" cy="13.5" r="8" />
<line x1="12" y1="13.5" x2="12" y2="9.5" />
<line x1="12" y1="13.5" x2="15" y2="15" />
<line x1="4" y1="4" x2="6.5" y2="6.5" />
<line x1="20" y1="4" x2="17.5" y2="6.5" />
<line x1="9" y1="2" x2="15" y2="2" />`,
  },
  {
    name: "stopwatch",
    tags: ["time", "timing", "sports"],
    svg: `<circle cx="12" cy="14" r="8" />
<line x1="12" y1="14" x2="12" y2="10" />
<line x1="10" y1="2" x2="14" y2="2" />
<line x1="12" y1="2" x2="12" y2="6" />
<line x1="18.5" y1="5" x2="20" y2="6.5" />`,
  },
  {
    name: "calendar-check",
    tags: ["schedule", "confirmed", "date"],
    svg: `<rect x="3.5" y="5" width="17" height="15" rx="2" />
<line x1="3.5" y1="10" x2="20.5" y2="10" />
<line x1="8" y1="3" x2="8" y2="7" />
<line x1="16" y1="3" x2="16" y2="7" />
<polyline points="8.5 15 10.5 17 15.5 13" />`,
  },
  {
    name: "calendar-plus",
    tags: ["schedule", "add-event", "date"],
    svg: `<rect x="3.5" y="5" width="17" height="15" rx="2" />
<line x1="3.5" y1="10" x2="20.5" y2="10" />
<line x1="8" y1="3" x2="8" y2="7" />
<line x1="16" y1="3" x2="16" y2="7" />
<line x1="12" y1="13" x2="12" y2="18" />
<line x1="9.5" y1="15.5" x2="14.5" y2="15.5" />`,
  },
  {
    name: "calendar-x",
    tags: ["schedule", "cancelled", "date"],
    svg: `<rect x="3.5" y="5" width="17" height="15" rx="2" />
<line x1="3.5" y1="10" x2="20.5" y2="10" />
<line x1="8" y1="3" x2="8" y2="7" />
<line x1="16" y1="3" x2="16" y2="7" />
<line x1="9.5" y1="13.5" x2="14.5" y2="17.5" />
<line x1="14.5" y1="13.5" x2="9.5" y2="17.5" />`,
  },
  {
    name: "calendar-days",
    tags: ["schedule", "date", "month"],
    svg: `<rect x="3.5" y="5" width="17" height="15" rx="2" />
<line x1="3.5" y1="10" x2="20.5" y2="10" />
<line x1="8" y1="3" x2="8" y2="7" />
<line x1="16" y1="3" x2="16" y2="7" />
<circle cx="8" cy="14" r="0.9" fill="currentColor" stroke="none" />
<circle cx="12" cy="14" r="0.9" fill="currentColor" stroke="none" />
<circle cx="16" cy="14" r="0.9" fill="currentColor" stroke="none" />
<circle cx="8" cy="17.5" r="0.9" fill="currentColor" stroke="none" />
<circle cx="12" cy="17.5" r="0.9" fill="currentColor" stroke="none" />`,
  },

  {
    name: "infinity",
    tags: ["math", "unlimited", "symbol"],
    svg: `<path d="M7 15a4 4 0 1 1 0-6c2.5 0 3.5 2 5 3s2.5 3 5 3a4 4 0 1 0 0-6c-2.5 0-3.5 2-5 3s-2.5 3-5 3Z" />`,
  },
  {
    name: "plus-circle",
    tags: ["add", "math", "increment"],
    svg: `<circle cx="12" cy="12" r="9" />
<line x1="12" y1="8" x2="12" y2="16" />
<line x1="8" y1="12" x2="16" y2="12" />`,
  },
  {
    name: "minus-circle",
    tags: ["subtract", "math", "decrement"],
    svg: `<circle cx="12" cy="12" r="9" />
<line x1="8" y1="12" x2="16" y2="12" />`,
  },
  {
    name: "divide",
    tags: ["math", "division", "symbol"],
    svg: `<circle cx="12" cy="6.5" r="1.3" fill="currentColor" stroke="none" />
<line x1="5" y1="12" x2="19" y2="12" />
<circle cx="12" cy="17.5" r="1.3" fill="currentColor" stroke="none" />`,
  },
  {
    name: "equal",
    tags: ["math", "equals", "symbol"],
    svg: `<line x1="5" y1="9" x2="19" y2="9" />
<line x1="5" y1="15" x2="19" y2="15" />`,
  },
  {
    name: "asterisk",
    tags: ["math", "footnote", "symbol"],
    svg: `<line x1="12" y1="4" x2="12" y2="20" />
<line x1="5" y1="7.5" x2="19" y2="16.5" />
<line x1="19" y1="7.5" x2="5" y2="16.5" />`,
  },
  {
    name: "pi",
    tags: ["math", "symbol", "constant"],
    svg: `<line x1="4" y1="6" x2="20" y2="6" />
<path d="M8 6v11a3 3 0 0 0 3 3" />
<path d="M16 6v11a3 3 0 0 1-3 3" />`,
  },
  {
    name: "sigma",
    tags: ["math", "sum", "symbol"],
    svg: `<path d="M17 4H6l6 8-6 8h11" />`,
  },
  {
    name: "square-root",
    tags: ["math", "radical", "symbol"],
    svg: `<path d="M3 13 6 16 10 4" />
<line x1="10" y1="4" x2="21" y2="4" />`,
  },
  {
    name: "not-equal",
    tags: ["math", "inequality", "symbol"],
    svg: `<line x1="5" y1="9" x2="19" y2="9" />
<line x1="5" y1="15" x2="19" y2="15" />
<line x1="16" y1="4" x2="8" y2="20" />`,
  },

  {
    name: "accessibility",
    tags: ["a11y", "inclusive", "disability"],
    svg: `<circle cx="12" cy="4.5" r="1.8" />
<path d="M4 8.5 12 10l8-1.5" />
<line x1="12" y1="10" x2="12" y2="14" />
<path d="M8 21l3-6.5" />
<path d="M16 21l-3-6.5" />
<path d="M9 13h6" />`,
  },
  {
    name: "ear",
    tags: ["hearing", "sound", "a11y"],
    svg: `<path d="M8 13a5 5 0 0 1 5-8.5A6.5 6.5 0 0 1 19 11c0 3-2 4-2 6.5a2.5 2.5 0 0 1-5 0v-2a2 2 0 0 0-4 0" />`,
  },
  {
    name: "hand",
    tags: ["gesture", "palm", "stop"],
    svg: `<path d="M9 12.5V5a1.5 1.5 0 0 1 3 0v6" />
<path d="M12 11V4a1.5 1.5 0 0 1 3 0v7" />
<path d="M15 11.5V6a1.5 1.5 0 0 1 3 0v8" />
<path d="M6 12v-2a1.5 1.5 0 0 1 3 0v3" />
<path d="M6 13c0 5 2.5 8 7 8s6-3 6-6.5v-2" />`,
  },
  {
    name: "hand-raised",
    tags: ["gesture", "vote", "participate"],
    svg: `<path d="M9 11V5a1.5 1.5 0 0 1 3 0v6" />
<path d="M12 10.5V4a1.5 1.5 0 0 1 3 0v7" />
<path d="M15 11V6.5a1.5 1.5 0 0 1 3 0v7.5" />
<path d="M6 13v-1.5a1.5 1.5 0 0 1 3 0V13" />
<path d="M6 13.5c0 4.5 2.5 7 7 7s6-2.5 6-6v-3" />`,
  },
  {
    name: "sign-language",
    tags: ["a11y", "deaf", "communication"],
    svg: `<path d="M8 12V5a1.3 1.3 0 0 1 2.6 0v5" />
<path d="M10.6 10V4a1.3 1.3 0 0 1 2.6 0v6.5" />
<path d="M13.2 10.5V6a1.3 1.3 0 0 1 2.6 0v6" />
<path d="M5.5 14c0-1 .5-2 2-3" />
<path d="M5.5 14c0 4.5 2.5 7.5 7 7.5s6.5-3 6.5-6.5v-3" />`,
  },
  {
    name: "closed-captioning",
    tags: ["subtitles", "a11y", "video"],
    svg: `<rect x="2.5" y="5" width="19" height="14" rx="2" />
<path d="M9.5 10.5a2 2 0 0 0-3.5 1.3v0.4a2 2 0 0 0 3.5 1.3" />
<path d="M17.5 10.5a2 2 0 0 0-3.5 1.3v0.4a2 2 0 0 0 3.5 1.3" />`,
  },

  {
    name: "gamepad",
    tags: ["controller", "game", "play"],
    svg: `<path d="M7 8h10a4 4 0 0 1 4 4.5l-.5 3A2.5 2.5 0 0 1 18 17.5c-1 0-1.5-.5-2.5-1.5l-1-1h-5l-1 1c-1 1-1.5 1.5-2.5 1.5a2.5 2.5 0 0 1-2.5-2L3 12.5A4 4 0 0 1 7 8Z" />
<line x1="7.5" y1="12" x2="10.5" y2="12" />
<line x1="9" y1="10.5" x2="9" y2="13.5" />
<circle cx="15" cy="11" r="0.8" fill="currentColor" stroke="none" />
<circle cx="17" cy="13" r="0.8" fill="currentColor" stroke="none" />`,
  },
  {
    name: "dice",
    tags: ["game", "random", "chance"],
    svg: `<rect x="3.5" y="3.5" width="17" height="17" rx="3" />
<circle cx="8" cy="8" r="1.1" fill="currentColor" stroke="none" />
<circle cx="16" cy="8" r="1.1" fill="currentColor" stroke="none" />
<circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
<circle cx="8" cy="16" r="1.1" fill="currentColor" stroke="none" />
<circle cx="16" cy="16" r="1.1" fill="currentColor" stroke="none" />`,
  },
  {
    name: "puzzle",
    tags: ["jigsaw", "piece", "game"],
    svg: `<path d="M4 8h4V6a2 2 0 0 1 4 0v2h4a1 1 0 0 1 1 1v4h2a2 2 0 0 1 0 4h-2v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a2 2 0 0 0 0-4V9a1 1 0 0 1 1-1Z" />`,
  },
  {
    name: "joystick",
    tags: ["arcade", "controller", "game"],
    svg: `<circle cx="12" cy="7" r="3.5" />
<line x1="12" y1="10.5" x2="12" y2="16" />
<path d="M6 16h12l-1.5 4h-9Z" />`,
  },
  {
    name: "chess-pawn",
    tags: ["game", "strategy", "chess"],
    svg: `<circle cx="12" cy="6" r="2.5" />
<path d="M9.5 10.5h5l1 3h-7Z" />
<path d="M8 20 9.5 13.5h5L16 20Z" />
<line x1="6" y1="20" x2="18" y2="20" />`,
  },
  {
    name: "cards",
    tags: ["playing-cards", "game", "poker"],
    svg: `<rect x="3" y="7" width="11" height="15" rx="1.5" />
<rect x="10" y="2" width="11" height="15" rx="1.5" />`,
  },

  {
    name: "atom",
    tags: ["science", "physics", "chemistry"],
    svg: `<circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
<path d="M3 12a9 3.5 0 1 0 18 0 9 3.5 0 1 0 -18 0" />
<path d="M3 12a9 3.5 60 1 0 18 0 9 3.5 60 1 0 -18 0" />
<path d="M3 12a9 3.5 120 1 0 18 0 9 3.5 120 1 0 -18 0" />`,
  },
  {
    name: "flask",
    tags: ["science", "chemistry", "lab"],
    svg: `<path d="M9 2.5h6" />
<path d="M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2.5h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9.5V3" />
<line x1="8" y1="15" x2="16" y2="15" />`,
  },
  {
    name: "microscope",
    tags: ["science", "lab", "research"],
    svg: `<path d="M9 20.5h7" />
<path d="M11 20.5V17" />
<path d="M7.5 17h7a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1" />
<circle cx="10" cy="9.5" r="3.5" />
<path d="M8 6.5 6.5 3.5" />
<line x1="4.5" y1="4.5" x2="8.5" y2="2.5" />
<line x1="4" y1="20.5" x2="14" y2="20.5" />`,
  },
  {
    name: "dna",
    tags: ["science", "biology", "genetics"],
    svg: `<path d="M6 3c0 6 12 6 12 12" />
<path d="M18 21c0-6-12-6-12-12" />
<line x1="7.5" y1="6" x2="16.5" y2="6" />
<line x1="6.5" y1="10" x2="17.5" y2="10" />
<line x1="6.5" y1="14" x2="17.5" y2="14" />
<line x1="7.5" y1="18" x2="16.5" y2="18" />`,
  },
  {
    name: "telescope",
    tags: ["science", "astronomy", "space"],
    svg: `<line x1="4" y1="20.5" x2="8" y2="14" />
<path d="M3 12.5 17 6l1.5 3-14 6.5Z" />
<line x1="17.5" y1="4" x2="20.5" y2="9.5" />
<line x1="10" y1="9" x2="12" y2="13" />`,
  },
  {
    name: "magnet",
    tags: ["science", "physics", "attraction"],
    svg: `<path d="M6 3.5 3 6.5v5a9 9 0 0 0 18 0v-5l-3-3" />
<line x1="3" y1="10" x2="8" y2="10" />
<line x1="16" y1="10" x2="21" y2="10" />`,
  },
  {
    name: "orbit",
    tags: ["science", "space", "astronomy"],
    svg: `<circle cx="19" cy="5" r="1.6" />
<path d="M19 5a9.5 4 -20 1 1-14 8" />`,
  },
  {
    name: "radar",
    tags: ["science", "scan", "detection"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="12" cy="12" r="5.5" />
<circle cx="12" cy="12" r="2" />
<line x1="12" y1="12" x2="19" y2="6" />`,
  },

  {
    name: "file-plus",
    tags: ["document", "add", "new-file"],
    svg: `<path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
<polyline points="14 3.5 14 7.5 18 7.5" />
<line x1="12" y1="12" x2="12" y2="17" />
<line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />`,
  },
  {
    name: "file-minus",
    tags: ["document", "remove", "file"],
    svg: `<path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
<polyline points="14 3.5 14 7.5 18 7.5" />
<line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />`,
  },
  {
    name: "file-check",
    tags: ["document", "approved", "file"],
    svg: `<path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
<polyline points="14 3.5 14 7.5 18 7.5" />
<polyline points="9.5 14.5 11.3 16.3 14.5 12.7" />`,
  },
  {
    name: "file-x",
    tags: ["document", "delete", "file"],
    svg: `<path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
<polyline points="14 3.5 14 7.5 18 7.5" />
<line x1="10" y1="12.5" x2="14" y2="16.5" />
<line x1="14" y1="12.5" x2="10" y2="16.5" />`,
  },
  {
    name: "files",
    tags: ["documents", "multiple", "stack"],
    svg: `<path d="M9 6.5h7l3 3V20a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1Z" />
<path d="M6 3.5h7l3 3" />
<path d="M6 3.5a1 1 0 0 0-1 1V17" />`,
  },
  {
    name: "clipboard",
    tags: ["copy", "paste", "task"],
    svg: `<rect x="4.5" y="4.5" width="15" height="17" rx="2" />
<rect x="8.5" y="2.5" width="7" height="3" rx="1" />`,
  },
  {
    name: "clipboard-check",
    tags: ["task", "done", "approved"],
    svg: `<rect x="4.5" y="4.5" width="15" height="17" rx="2" />
<rect x="8.5" y="2.5" width="7" height="3" rx="1" />
<polyline points="8.5 13.5 10.7 15.7 15.5 10.9" />`,
  },
  {
    name: "clipboard-list",
    tags: ["task", "checklist", "todo"],
    svg: `<rect x="4.5" y="4.5" width="15" height="17" rx="2" />
<rect x="8.5" y="2.5" width="7" height="3" rx="1" />
<line x1="8.5" y1="12" x2="15.5" y2="12" />
<line x1="8.5" y1="16" x2="15.5" y2="16" />
<circle cx="7" cy="12" r="0.6" fill="currentColor" stroke="none" />
<circle cx="7" cy="16" r="0.6" fill="currentColor" stroke="none" />`,
  },
  {
    name: "archive",
    tags: ["storage", "box", "backup"],
    svg: `<rect x="2.5" y="3.5" width="19" height="5" rx="1.5" />
<path d="M4.5 8.5V19a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V8.5" />
<line x1="10" y1="12.5" x2="14" y2="12.5" />`,
  },
  {
    name: "inbox",
    tags: ["mail", "messages", "tray"],
    svg: `<path d="M3 12h5l2 3h4l2-3h5" />
<path d="M5.5 4.5h13L21 12v6a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18v-6Z" />`,
  },
  {
    name: "notebook",
    tags: ["notes", "journal", "book"],
    svg: `<rect x="4.5" y="3" width="15" height="18" rx="1.5" />
<line x1="8.5" y1="3" x2="8.5" y2="21" />
<line x1="3" y1="7" x2="4.5" y2="7" />
<line x1="3" y1="11" x2="4.5" y2="11" />
<line x1="3" y1="15" x2="4.5" y2="15" />`,
  },
  {
    name: "sticky-note",
    tags: ["note", "reminder", "memo"],
    svg: `<path d="M4.5 4.5h15v10.5L14.5 19.5H4.5Z" />
<path d="M14.5 19.5V15.5a1 1 0 0 1 1-1H19" />`,
  },

  {
    name: "rss",
    tags: ["feed", "subscribe", "blog"],
    svg: `<circle cx="6" cy="18" r="1.8" fill="currentColor" stroke="none" />
<path d="M4 11a9 9 0 0 1 9 9" />
<path d="M4 5a15 15 0 0 1 15 15" />`,
  },
  {
    name: "share",
    tags: ["distribute", "connect", "network"],
    svg: `<circle cx="6" cy="12" r="2.3" />
<circle cx="18" cy="6" r="2.3" />
<circle cx="18" cy="18" r="2.3" />
<line x1="8" y1="10.8" x2="16" y2="7.2" />
<line x1="8" y1="13.2" x2="16" y2="16.8" />`,
  },
  {
    name: "mic",
    tags: ["microphone", "audio", "record"],
    svg: `<rect x="9" y="2.5" width="6" height="11" rx="3" />
<path d="M5.5 11v1a6.5 6.5 0 0 0 13 0v-1" />
<line x1="12" y1="18" x2="12" y2="21.5" />
<line x1="8.5" y1="21.5" x2="15.5" y2="21.5" />`,
  },
  {
    name: "mic-off",
    tags: ["microphone", "muted", "audio"],
    svg: `<rect x="9" y="2.5" width="6" height="11" rx="3" />
<path d="M5.5 11v1a6.5 6.5 0 0 0 9.5 5.8" />
<path d="M18.5 12v-1" />
<line x1="12" y1="18" x2="12" y2="21.5" />
<line x1="8.5" y1="21.5" x2="15.5" y2="21.5" />
<line x1="3.5" y1="2.5" x2="20.5" y2="21.5" />`,
  },
  {
    name: "headphones",
    tags: ["audio", "listen", "music"],
    svg: `<path d="M4 15v-3a8 8 0 0 1 16 0v3" />
<rect x="2.5" y="14" width="4" height="6" rx="1.5" />
<rect x="17.5" y="14" width="4" height="6" rx="1.5" />`,
  },
  {
    name: "phone-call",
    tags: ["call", "ringing", "contact"],
    svg: `<path d="M6.6 3.5 9.4 8a1 1 0 0 1-.3 1.3l-2 1.4a13 13 0 0 0 6.2 6.2l1.4-2a1 1 0 0 1 1.3-.3l4.5 2.8a1 1 0 0 1 .4 1.3l-1 2.1a2 2 0 0 1-2 1.1A17.5 17.5 0 0 1 3.2 6.4a2 2 0 0 1 1.1-2l2.1-1a1 1 0 0 1 .2.1Z" />
<path d="M15 6a3 3 0 0 1 3 3" />
<path d="M15 2.5a6.5 6.5 0 0 1 6.5 6.5" />`,
  },
  {
    name: "phone-off",
    tags: ["call", "declined", "hang-up"],
    svg: `<path d="M10.5 5 9.4 8a1 1 0 0 1-.3 1.3l-2 1.4a13 13 0 0 0 6.2 6.2l1.4-2a1 1 0 0 1 1.3-.3l4.5 2.8a1 1 0 0 1 .4 1.3l-1 2.1a2 2 0 0 1-2 1.1 17.4 17.4 0 0 1-7.8-3.3" />
<path d="M3.5 6.4a2 2 0 0 1 1.1-2L6.6 3.5" />
<line x1="3" y1="3" x2="21" y2="21" />`,
  },
  {
    name: "voicemail",
    tags: ["message", "phone", "audio"],
    svg: `<circle cx="6" cy="14" r="4" />
<circle cx="18" cy="14" r="4" />
<line x1="6" y1="14" x2="18" y2="14" />`,
  },
  {
    name: "video-off",
    tags: ["camera", "disabled", "call"],
    svg: `<path d="M16 10.5 21 7v10l-5-3.5" />
<rect x="3" y="6" width="13" height="12" rx="2" />
<line x1="3" y1="3" x2="21" y2="21" />`,
  },
  {
    name: "forward",
    tags: ["reply", "share", "message"],
    svg: `<path d="M4 8.5h9a5 5 0 0 1 5 5V17" />
<polyline points="9 4 13 8.5 9 13" />`,
  },

  {
    name: "toggle-left",
    tags: ["switch", "off", "settings"],
    svg: `<rect x="2.5" y="7" width="19" height="10" rx="5" />
<circle cx="8" cy="12" r="3.2" fill="currentColor" stroke="none" />`,
  },
  {
    name: "toggle-right",
    tags: ["switch", "on", "settings"],
    svg: `<rect x="2.5" y="7" width="19" height="10" rx="5" />
<circle cx="16" cy="12" r="3.2" fill="currentColor" stroke="none" />`,
  },
  {
    name: "sidebar",
    tags: ["layout", "panel", "navigation"],
    svg: `<rect x="3" y="4" width="18" height="16" rx="2" />
<line x1="9" y1="4" x2="9" y2="20" />`,
  },
  {
    name: "layout",
    tags: ["ui", "template", "structure"],
    svg: `<rect x="3" y="3" width="18" height="18" rx="2" />
<line x1="3" y1="9" x2="21" y2="9" />
<line x1="9" y1="9" x2="9" y2="21" />`,
  },
  {
    name: "columns",
    tags: ["layout", "grid", "ui"],
    svg: `<rect x="3" y="4" width="18" height="16" rx="2" />
<line x1="9" y1="4" x2="9" y2="20" />
<line x1="15" y1="4" x2="15" y2="20" />`,
  },
  {
    name: "rows",
    tags: ["layout", "grid", "ui"],
    svg: `<rect x="3" y="4" width="18" height="16" rx="2" />
<line x1="3" y1="10" x2="21" y2="10" />
<line x1="3" y1="16" x2="21" y2="16" />`,
  },
  {
    name: "crosshair",
    tags: ["target", "aim", "focus"],
    svg: `<circle cx="12" cy="12" r="8" />
<line x1="12" y1="2" x2="12" y2="6" />
<line x1="12" y1="18" x2="12" y2="22" />
<line x1="2" y1="12" x2="6" y2="12" />
<line x1="18" y1="12" x2="22" y2="12" />`,
  },
  {
    name: "expand",
    tags: ["fullscreen", "enlarge", "ui"],
    svg: `<polyline points="15 4 20 4 20 9" />
<polyline points="9 20 4 20 4 15" />
<line x1="20" y1="4" x2="14" y2="10" />
<line x1="4" y1="20" x2="10" y2="14" />`,
  },
  {
    name: "collapse",
    tags: ["shrink", "minimize", "ui"],
    svg: `<polyline points="4 9 4 4 9 4" />
<polyline points="20 15 20 20 15 20" />
<line x1="4" y1="4" x2="10" y2="10" />
<line x1="20" y1="20" x2="14" y2="14" />`,
  },
  {
    name: "panel-left",
    tags: ["layout", "sidebar", "ui"],
    svg: `<rect x="3" y="4" width="18" height="16" rx="2" />
<rect x="3" y="4" width="6.5" height="16" fill="currentColor" stroke="none" />`,
  },
  {
    name: "panel-right",
    tags: ["layout", "sidebar", "ui"],
    svg: `<rect x="3" y="4" width="18" height="16" rx="2" />
<rect x="14.5" y="4" width="6.5" height="16" fill="currentColor" stroke="none" />`,
  },
  {
    name: "split",
    tags: ["layout", "divide", "ui"],
    svg: `<rect x="3" y="4" width="18" height="16" rx="2" />
<line x1="12" y1="4" x2="12" y2="20" stroke-dasharray="2.5 2.5" />`,
  },
  {
    name: "table",
    tags: ["grid", "data", "spreadsheet"],
    svg: `<rect x="3" y="4" width="18" height="16" rx="2" />
<line x1="3" y1="9.5" x2="21" y2="9.5" />
<line x1="3" y1="15" x2="21" y2="15" />
<line x1="9.5" y1="4" x2="9.5" y2="20" />
<line x1="15" y1="4" x2="15" y2="20" />`,
  },
  {
    name: "kanban",
    tags: ["board", "task", "workflow"],
    svg: `<rect x="3" y="4" width="18" height="16" rx="2" />
<line x1="9.5" y1="4" x2="9.5" y2="20" />
<line x1="15" y1="4" x2="15" y2="20" />
<line x1="5.5" y1="8" x2="7.5" y2="8" />
<line x1="5.5" y1="11" x2="7.5" y2="11" />
<line x1="12" y1="8" x2="13" y2="8" />`,
  },

  {
    name: "monitor",
    tags: ["screen", "display", "desktop"],
    svg: `<rect x="2.5" y="3.5" width="19" height="13" rx="1.5" />
<line x1="8" y1="20.5" x2="16" y2="20.5" />
<line x1="12" y1="16.5" x2="12" y2="20.5" />`,
  },
  {
    name: "tablet",
    tags: ["device", "ipad", "screen"],
    svg: `<rect x="5" y="2.5" width="14" height="19" rx="2" />
<line x1="10.5" y1="19" x2="13.5" y2="19" />`,
  },
  {
    name: "watch",
    tags: ["device", "wearable", "time"],
    svg: `<circle cx="12" cy="12" r="6.5" />
<line x1="12" y1="8.5" x2="12" y2="12" />
<line x1="12" y1="12" x2="14.5" y2="13.5" />
<path d="M9 5.5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.5" />
<path d="M9 18.5V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.5" />`,
  },
  {
    name: "printer",
    tags: ["device", "print", "office"],
    svg: `<path d="M6 8.5V3.5h12v5" />
<rect x="2.5" y="8.5" width="19" height="9" rx="1.5" />
<path d="M6 14h12v7H6Z" />`,
  },
  {
    name: "keyboard",
    tags: ["device", "typing", "input"],
    svg: `<rect x="2.5" y="5.5" width="19" height="13" rx="1.5" />
<line x1="6" y1="9.5" x2="8" y2="9.5" />
<line x1="11" y1="9.5" x2="13" y2="9.5" />
<line x1="16" y1="9.5" x2="18" y2="9.5" />
<line x1="6" y1="13.5" x2="18" y2="13.5" />`,
  },
  {
    name: "mouse",
    tags: ["device", "pointer", "input"],
    svg: `<rect x="7" y="2.5" width="10" height="19" rx="5" />
<line x1="12" y1="2.5" x2="12" y2="9" />`,
  },
  {
    name: "battery",
    tags: ["power", "charge", "device"],
    svg: `<rect x="2.5" y="8" width="17" height="8" rx="1.5" />
<line x1="21.5" y1="10.5" x2="21.5" y2="13.5" />
<rect x="5" y="10.2" width="4" height="3.6" fill="currentColor" stroke="none" />`,
  },
  {
    name: "battery-charging",
    tags: ["power", "charging", "device"],
    svg: `<rect x="2.5" y="8" width="17" height="8" rx="1.5" />
<line x1="21.5" y1="10.5" x2="21.5" y2="13.5" />
<polyline points="11.5 9.5 8.5 12.5 11 12.5 9.5 15" />`,
  },
  {
    name: "power",
    tags: ["on-off", "shutdown", "device"],
    svg: `<line x1="12" y1="3" x2="12" y2="11" />
<path d="M7 6a7.5 7.5 0 1 0 10 0" />`,
  },
  {
    name: "usb",
    tags: ["connector", "device", "port"],
    svg: `<circle cx="7" cy="17" r="2" />
<circle cx="17" cy="7" r="2" />
<circle cx="17" cy="17" r="2" />
<line x1="7" y1="15" x2="7" y2="7" />
<line x1="7" y1="7" x2="15" y2="7" />
<line x1="9" y1="17" x2="15" y2="17" />
<line x1="7" y1="10" x2="10" y2="10" />`,
  },
  {
    name: "bluetooth",
    tags: ["wireless", "connection", "device"],
    svg: `<path d="M7 7 17 15l-5 4V5l5 4L7 17" />`,
  },
  {
    name: "cast",
    tags: ["chromecast", "airplay", "stream"],
    svg: `<path d="M2.5 8h16a2 2 0 0 1 2 2v9" />
<path d="M2.5 12.5a6.5 6.5 0 0 1 6.5 6.5" />
<circle cx="3.5" cy="19" r="1.3" fill="currentColor" stroke="none" />`,
  },
  {
    name: "tv",
    tags: ["television", "screen", "device"],
    svg: `<rect x="2.5" y="5.5" width="19" height="13" rx="2" />
<line x1="8" y1="21.5" x2="16" y2="21.5" />
<line x1="9" y1="2.5" x2="6" y2="5.5" />
<line x1="15" y1="2.5" x2="18" y2="5.5" />`,
  },
  {
    name: "router",
    tags: ["network", "wifi", "device"],
    svg: `<rect x="2.5" y="12" width="19" height="7" rx="1.5" />
<circle cx="7" cy="15.5" r="0.8" fill="currentColor" stroke="none" />
<circle cx="10" cy="15.5" r="0.8" fill="currentColor" stroke="none" />
<line x1="9" y1="12" x2="9" y2="7" />
<line x1="15" y1="12" x2="15" y2="7" />
<path d="M7 7a3 3 0 0 1 3-3" />
<path d="M17 7a3 3 0 0 0-3-3" />`,
  },

  {
    name: "paw",
    tags: ["pet", "animal", "footprint"],
    svg: `<circle cx="12" cy="16" r="4" />
<circle cx="6" cy="10" r="2" />
<circle cx="18" cy="10" r="2" />
<circle cx="9" cy="6" r="1.8" />
<circle cx="15" cy="6" r="1.8" />`,
  },
  {
    name: "feather",
    tags: ["bird", "quill", "light"],
    svg: `<path d="M20.5 3.5c-6 0-14 4-16 12-1 4 1.5 6 5 5 8-2 12-10 12-16Z" />
<line x1="4.5" y1="20.5" x2="14.5" y2="10.5" />
<line x1="9" y1="14" x2="12.5" y2="17.5" />`,
  },
  {
    name: "bird",
    tags: ["animal", "flying", "nature"],
    svg: `<path d="M4 15c1-5 5-8 10-8 3 0 6 1.5 7 3.5-2-.5-3 0-3 1.5 0 5-5 9-11 9-2 0-3.5-.5-4.5-1.5 1.5 0 3-.5 3.5-1.5-1 0-1.7-.5-2-3Z" />
<circle cx="16.5" cy="9" r="0.7" fill="currentColor" stroke="none" />`,
  },
  {
    name: "fish",
    tags: ["animal", "aquatic", "seafood"],
    svg: `<path d="M3 12c3-4 8-6 12-4 2 1 4 3 6 4-2 1-4 3-6 4-4 2-9 0-12-4Z" />
<circle cx="15" cy="10.5" r="0.7" fill="currentColor" stroke="none" />
<path d="M3 12 1 9m2 3-2 3" />`,
  },
  {
    name: "turtle",
    tags: ["animal", "reptile", "slow"],
    svg: `<path d="M8 9a4 4 0 0 1 8 0c2.5 0 4.5 1.8 4.5 4.5S18.5 18 16 18H8c-2.5 0-4.5-1.8-4.5-4.5S5.5 9 8 9Z" />
<circle cx="12" cy="12.5" r="2.3" />
<path d="M4 12 1.5 10.5" />
<path d="M4 15 1.5 16.5" />
<path d="M20 12l2.5-1.5" />
<path d="M20 15l2.5 1.5" />
<path d="M10.5 18 9.5 21.5" />
<path d="M13.5 18 14.5 21.5" />`,
  },
  {
    name: "cat",
    tags: ["animal", "pet", "feline"],
    svg: `<path d="M5 9 3 4l4.5 2.5H16L20.5 4 18.5 9" />
<path d="M5 9a7 6.5 0 0 0 14 0v1a7 6.5 0 0 1-14 0Z" />
<circle cx="9" cy="10.5" r="0.7" fill="currentColor" stroke="none" />
<circle cx="15" cy="10.5" r="0.7" fill="currentColor" stroke="none" />
<path d="M11 13h2" />`,
  },
  {
    name: "dog",
    tags: ["animal", "pet", "canine"],
    svg: `<path d="M4 9c0-2.5 1.5-4.5 3.5-4.5S10 6 10 8" />
<path d="M20 9c0-2.5-1.5-4.5-3.5-4.5S13 6 13 8" />
<path d="M5 10a7 6.5 0 0 0 14 0v1.5a7 6.5 0 0 1-14 0Z" />
<circle cx="9.5" cy="11.5" r="0.7" fill="currentColor" stroke="none" />
<circle cx="14.5" cy="11.5" r="0.7" fill="currentColor" stroke="none" />
<path d="M11 14.5h2" />`,
  },
  {
    name: "rabbit",
    tags: ["animal", "bunny", "pet"],
    svg: `<path d="M9 9V4a1.5 1.5 0 0 1 3 0v5" />
<path d="M12 9V4a1.5 1.5 0 0 1 3 0v5" />
<path d="M6 12a6 6 0 0 1 12 0v2a6 6 0 0 1-12 0Z" />
<circle cx="10" cy="12.5" r="0.7" fill="currentColor" stroke="none" />
<circle cx="14" cy="12.5" r="0.7" fill="currentColor" stroke="none" />`,
  },
  {
    name: "butterfly",
    tags: ["animal", "insect", "nature"],
    svg: `<path d="M12 5v14" />
<path d="M12 8c0-3 2.5-5 5.5-5s3.5 2.5 1.5 4.5S13 9 12 8Z" />
<path d="M12 8c0-3-2.5-5-5.5-5S3 5.5 5 7.5 11 9 12 8Z" />
<path d="M12 13c0-2.5 2.5-4 5-4s3 2 1.5 3.8S13 14 12 13Z" />
<path d="M12 13c0-2.5-2.5-4-5-4S4 11 5.5 12.8 11 14 12 13Z" />`,
  },
  {
    name: "squirrel",
    tags: ["animal", "wildlife", "nature"],
    svg: `<path d="M5 20c-1.5-4 0-9 4-11 3-1.5 6.5 0 7 3.5.3 2-1 3-2.5 2.5" />
<circle cx="9.5" cy="9" r="0.6" fill="currentColor" stroke="none" />
<path d="M16 12.5c3-1 5 1.5 4.5 4.5-.3 2-2 3-4 2.5" />
<path d="M5 20a3 3 0 0 1 3-3.5" />`,
  },

  {
    name: "store",
    tags: ["shop", "retail", "storefront"],
    svg: `<path d="M3 9 4.5 4h15L21 9" />
<path d="M3 9v11h18V9" />
<path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
<line x1="9" y1="14" x2="9" y2="20" />
<line x1="15" y1="14" x2="15" y2="20" />
<line x1="9" y1="14" x2="15" y2="14" />`,
  },
  {
    name: "barcode",
    tags: ["scan", "product", "retail"],
    svg: `<line x1="3.5" y1="4" x2="3.5" y2="20" />
<line x1="6.5" y1="4" x2="6.5" y2="20" />
<line x1="9" y1="4" x2="9" y2="20" />
<line x1="12" y1="4" x2="12" y2="20" />
<line x1="14.5" y1="4" x2="14.5" y2="20" />
<line x1="17.5" y1="4" x2="17.5" y2="20" />
<line x1="20.5" y1="4" x2="20.5" y2="20" />`,
  },
  {
    name: "qrcode",
    tags: ["scan", "code", "mobile"],
    svg: `<rect x="3" y="3" width="7" height="7" rx="1" />
<rect x="14" y="3" width="7" height="7" rx="1" />
<rect x="3" y="14" width="7" height="7" rx="1" />
<rect x="14.5" y="14.5" width="2.5" height="2.5" fill="currentColor" stroke="none" />
<rect x="18" y="14.5" width="2.5" height="2.5" fill="currentColor" stroke="none" />
<rect x="14.5" y="18" width="2.5" height="2.5" fill="currentColor" stroke="none" />
<rect x="18" y="18" width="2.5" height="2.5" fill="currentColor" stroke="none" />`,
  },
  {
    name: "ticket",
    tags: ["pass", "event", "admission"],
    svg: `<path d="M3 9a2 2 0 0 1 0-4h18a2 2 0 0 1 0 4 2 2 0 0 0 0 6 2 2 0 0 1 0 4H3a2 2 0 0 1 0-4 2 2 0 0 0 0-6Z" />
<line x1="14" y1="6" x2="14" y2="18" stroke-dasharray="2 2" />`,
  },
  {
    name: "package-check",
    tags: ["delivery", "confirmed", "shipping"],
    svg: `<path d="M3.5 7 12 3l8.5 4v10L12 21l-8.5-4Z" />
<line x1="3.5" y1="7" x2="12" y2="11" />
<line x1="20.5" y1="7" x2="12" y2="11" />
<line x1="12" y1="11" x2="12" y2="21" />
<polyline points="15.5 13.5 17 15 20 11.5" />`,
  },
  {
    name: "gift",
    tags: ["present", "birthday", "surprise"],
    svg: `<rect x="3.5" y="8.5" width="17" height="12" rx="1" />
<line x1="3.5" y1="13" x2="20.5" y2="13" />
<line x1="12" y1="8.5" x2="12" y2="20.5" />
<path d="M12 8.5c-1-2.5-2.5-4-4-4-1.2 0-2 1-1.3 2.3.6 1.1 2.3 1.7 5.3 1.7Z" />
<path d="M12 8.5c1-2.5 2.5-4 4-4 1.2 0 2 1 1.3 2.3-.6 1.1-2.3 1.7-5.3 1.7Z" />`,
  },
  {
    name: "bookmark",
    tags: ["save", "favorite", "reading"],
    svg: `<path d="M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-4-6.5 4V4.5a1 1 0 0 1 1-1Z" />`,
  },
  {
    name: "bookmark-check",
    tags: ["saved", "confirmed", "reading"],
    svg: `<path d="M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-4-6.5 4V4.5a1 1 0 0 1 1-1Z" />
<polyline points="9 9.5 11 11.5 15 7.5" />`,
  },
  {
    name: "cart-plus",
    tags: ["shopping", "add-to-cart", "ecommerce"],
    svg: `<path d="M3 4h2l2.5 12h10l2-8H7" />
<circle cx="9.5" cy="20" r="1.3" />
<circle cx="17" cy="20" r="1.3" />
<line x1="17" y1="2" x2="17" y2="7" />
<line x1="14.5" y1="4.5" x2="19.5" y2="4.5" />`,
  },
  {
    name: "badge-percent",
    tags: ["discount", "sale", "promo"],
    svg: `<path d="M12 2.5 14.5 5H18a1.5 1.5 0 0 1 1.5 1.5V10l2 2-2 2v3.5A1.5 1.5 0 0 1 18 19h-3.5L12 21.5 9.5 19H6a1.5 1.5 0 0 1-1.5-1.5V14l-2-2 2-2V5.5A1.5 1.5 0 0 1 6 4h3.5Z" />
<line x1="15" y1="9" x2="9" y2="15" />
<circle cx="9.7" cy="9.7" r="1" fill="currentColor" stroke="none" />
<circle cx="14.3" cy="14.3" r="1" fill="currentColor" stroke="none" />`,
  },

  {
    name: "fridge",
    tags: ["kitchen", "appliance", "refrigerator"],
    svg: `<rect x="5" y="2.5" width="14" height="19" rx="1.5" />
<line x1="5" y1="9.5" x2="19" y2="9.5" />
<line x1="8" y1="5" x2="8" y2="7" />
<line x1="8" y1="12" x2="8" y2="14" />`,
  },
  {
    name: "oven",
    tags: ["kitchen", "appliance", "bake"],
    svg: `<rect x="3" y="3.5" width="18" height="17" rx="1.5" />
<circle cx="12" cy="14" r="4" />
<line x1="6" y1="7" x2="9" y2="7" />
<line x1="11" y1="7" x2="14" y2="7" />
<line x1="16" y1="7" x2="18" y2="7" />`,
  },
  {
    name: "microwave",
    tags: ["kitchen", "appliance", "cook"],
    svg: `<rect x="2.5" y="5.5" width="19" height="13" rx="1.5" />
<rect x="5" y="8" width="9" height="7.5" rx="1" />
<circle cx="18" cy="9.5" r="0.8" fill="currentColor" stroke="none" />
<line x1="16.5" y1="12.5" x2="19.5" y2="12.5" />`,
  },
  {
    name: "blender",
    tags: ["kitchen", "appliance", "smoothie"],
    svg: `<path d="M8 3.5h8l-1 8H9Z" />
<path d="M7 11.5h10l-1 8a1.5 1.5 0 0 1-1.5 1.3h-6A1.5 1.5 0 0 1 7 19.5Z" />
<line x1="10" y1="6" x2="14" y2="6" />`,
  },
  {
    name: "kettle",
    tags: ["kitchen", "tea", "hot-water"],
    svg: `<path d="M5 12a7 6 0 0 1 14 0v3a5 4 0 0 1-5 4h-4a5 4 0 0 1-5-4Z" />
<path d="M5 12H2.5" />
<path d="M19 10h2.5" />
<line x1="12" y1="4.5" x2="12" y2="2" />
<circle cx="12" cy="2" r="0.9" fill="currentColor" stroke="none" />`,
  },
  {
    name: "chef-hat",
    tags: ["cooking", "kitchen", "chef"],
    svg: `<path d="M7 21V13.5" />
<path d="M17 21V13.5" />
<path d="M6.5 21h11" />
<path d="M6 14a4 4 0 0 1-1.5-7.7A4 4 0 0 1 12 4a4 4 0 0 1 7.5 2.3A4 4 0 0 1 18 14Z" />`,
  },
  {
    name: "plate",
    tags: ["dish", "kitchen", "dining"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="12" cy="12" r="4.5" />`,
  },
  {
    name: "spoon",
    tags: ["cutlery", "kitchen", "dining"],
    svg: `<path d="M9 3.5a4 5 0 1 0 0 10 4 5 0 0 0 0-10Z" />
<line x1="9" y1="13.5" x2="9" y2="21" />`,
  },
  {
    name: "knife",
    tags: ["cutlery", "kitchen", "cutting"],
    svg: `<line x1="3.5" y1="20.5" x2="13" y2="11" />
<path d="M13 11 18.5 5.5a2.2 2.2 0 0 1 3 3.2L16 14" />`,
  },
  {
    name: "cutting-board",
    tags: ["kitchen", "chopping", "prep"],
    svg: `<rect x="3" y="4" width="18" height="14" rx="2" />
<circle cx="18" cy="19" r="1.3" />
<line x1="7" y1="8" x2="12" y2="8" />
<line x1="7" y1="12" x2="10" y2="12" />`,
  },

  {
    name: "shirt",
    tags: ["clothing", "apparel", "wear"],
    svg: `<path d="M8 3.5 3 6.5l2 3.5 3-1.5V21h8V8.5l3 1.5 2-3.5-5-3a3 3 0 0 1-6 0Z" />`,
  },
  {
    name: "shoe",
    tags: ["footwear", "sneaker", "clothing"],
    svg: `<path d="M3 18.5v-4l6-3 4 1.5 5-1 3 2.5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
<line x1="9" y1="11.5" x2="9" y2="15" />`,
  },
  {
    name: "glasses",
    tags: ["eyewear", "spectacles", "vision"],
    svg: `<circle cx="6.5" cy="14.5" r="3.5" />
<circle cx="17.5" cy="14.5" r="3.5" />
<path d="M10 14.5h4" />
<path d="M3 14.5 2 9" />
<path d="M21 14.5 22 9" />`,
  },
  {
    name: "hat",
    tags: ["clothing", "cap", "headwear"],
    svg: `<path d="M4 15 12 4l8 11Z" />
<path d="M2 15h20l-1.5 3h-17Z" />`,
  },
  {
    name: "ring",
    tags: ["jewelry", "engagement", "accessory"],
    svg: `<circle cx="12" cy="15" r="6" />
<path d="M9 9 12 3l3 6" />
<circle cx="12" cy="9" r="1.3" fill="currentColor" stroke="none" />`,
  },
  {
    name: "backpack",
    tags: ["bag", "school", "travel"],
    svg: `<path d="M7 8V6a5 5 0 0 1 10 0v2" />
<path d="M5 8h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
<rect x="9" y="12" width="6" height="4" rx="1" />
<line x1="9" y1="8" x2="9" y2="10" />
<line x1="15" y1="8" x2="15" y2="10" />`,
  },
  {
    name: "socks",
    tags: ["clothing", "apparel", "feet"],
    svg: `<path d="M8 2.5h6V13l4 4a3 3 0 0 1-3 4.5H9a3 3 0 0 1-3-3V2.5Z" />
<line x1="8" y1="7.5" x2="14" y2="7.5" />`,
  },
  {
    name: "necktie",
    tags: ["clothing", "formal", "business"],
    svg: `<path d="M9.5 3.5h5l-1 4-1.5 1-1.5-1Z" />
<path d="M10.5 8.5 8 18l4 3 4-3-2.5-9.5Z" />`,
  },

  {
    name: "baby",
    tags: ["infant", "child", "family"],
    svg: `<circle cx="12" cy="7" r="3.5" />
<path d="M6 20a6 5 0 0 1 12 0" />
<line x1="9" y1="6.5" x2="9" y2="7" />
<line x1="15" y1="6.5" x2="15" y2="7" />
<path d="M10 8.5a2 1.3 0 0 0 4 0" />`,
  },
  {
    name: "users",
    tags: ["group", "people", "team"],
    svg: `<circle cx="9" cy="8" r="3.3" />
<path d="M3.5 20a5.5 5 0 0 1 11 0" />
<path d="M15.5 6a3.3 3.3 0 0 1 0 6.4" />
<path d="M16 14a5.5 5 0 0 1 4.5 5.7" />`,
  },
  {
    name: "user-plus",
    tags: ["add-user", "invite", "people"],
    svg: `<circle cx="9" cy="8" r="4" />
<path d="M2.5 20a6.5 5.5 0 0 1 13 0" />
<line x1="18" y1="6" x2="18" y2="12" />
<line x1="15" y1="9" x2="21" y2="9" />`,
  },
  {
    name: "user-minus",
    tags: ["remove-user", "people"],
    svg: `<circle cx="9" cy="8" r="4" />
<path d="M2.5 20a6.5 5.5 0 0 1 13 0" />
<line x1="15" y1="9" x2="21" y2="9" />`,
  },
  {
    name: "user-check",
    tags: ["verified-user", "people", "approved"],
    svg: `<circle cx="9" cy="8" r="4" />
<path d="M2.5 20a6.5 5.5 0 0 1 13 0" />
<polyline points="15.5 10 17.5 12 21 7.5" />`,
  },
  {
    name: "user-x",
    tags: ["remove-user", "block", "people"],
    svg: `<circle cx="9" cy="8" r="4" />
<path d="M2.5 20a6.5 5.5 0 0 1 13 0" />
<line x1="15.5" y1="6.5" x2="20.5" y2="11.5" />
<line x1="20.5" y1="6.5" x2="15.5" y2="11.5" />`,
  },

  {
    name: "book",
    tags: ["reading", "education", "library"],
    svg: `<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v17H5.5A1.5 1.5 0 0 1 4 18.5Z" />
<line x1="8" y1="3" x2="8" y2="20" />`,
  },
  {
    name: "book-open",
    tags: ["reading", "education", "textbook"],
    svg: `<path d="M12 6.5c-1.5-1.5-4-2-8-2v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2V4.5c-4 0-6.5.5-8 2Z" />
<line x1="12" y1="6.5" x2="12" y2="19.5" />`,
  },
  {
    name: "graduation-cap",
    tags: ["education", "degree", "school"],
    svg: `<path d="M2 9 12 4l10 5-10 5Z" />
<path d="M6 11.5V17c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" />
<path d="M22 9v6" />`,
  },
  {
    name: "pencil",
    tags: ["write", "draw", "edit"],
    svg: `<path d="M4 20 5 15.5 15.5 5a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 1 0 2.8L8.5 19Z" />
<line x1="13.5" y1="7" x2="17" y2="10.5" />`,
  },
  {
    name: "school",
    tags: ["education", "building", "institution"],
    svg: `<path d="M12 3 22 8.5 12 14 2 8.5Z" />
<path d="M6 11v6c0 1.5 2.7 3 6 3s6-1.5 6-3v-6" />
<line x1="22" y1="8.5" x2="22" y2="16" />`,
  },
  {
    name: "certificate",
    tags: ["diploma", "award", "education"],
    svg: `<circle cx="12" cy="9" r="6.5" />
<polyline points="8.8 9 10.7 11 15.2 6.5" />
<path d="M8.5 14.5 7 21l5-2.5 5 2.5-1.5-6.5" />`,
  },
  {
    name: "chalkboard",
    tags: ["education", "teaching", "classroom"],
    svg: `<rect x="2.5" y="3.5" width="19" height="12" rx="1.5" />
<line x1="9" y1="19.5" x2="15" y2="19.5" />
<line x1="12" y1="15.5" x2="12" y2="19.5" />
<path d="M6.5 12 10 8l2.5 2.5L17 6" />`,
  },
  {
    name: "abacus",
    tags: ["math", "counting", "education"],
    svg: `<rect x="3" y="3.5" width="18" height="17" rx="1.5" />
<line x1="6.5" y1="3.5" x2="6.5" y2="20.5" />
<line x1="6.5" y1="8" x2="10.5" y2="8" />
<line x1="6.5" y1="12" x2="9" y2="12" />
<line x1="6.5" y1="16" x2="11" y2="16" />
<circle cx="9" cy="8" r="1" fill="currentColor" stroke="none" />
<circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" />
<circle cx="10" cy="16" r="1" fill="currentColor" stroke="none" />`,
  },
  {
    name: "ruler-triangle",
    tags: ["math", "geometry", "education"],
    svg: `<path d="M3.5 20.5 20.5 20.5 3.5 3.5Z" />
<line x1="7" y1="20.5" x2="7" y2="18" />
<line x1="10.5" y1="20.5" x2="10.5" y2="18" />
<line x1="14" y1="20.5" x2="14" y2="18" />`,
  },
  {
    name: "protractor",
    tags: ["math", "geometry", "measure"],
    svg: `<path d="M4 12a8 8 0 0 1 16 0Z" />
<line x1="4" y1="12" x2="20" y2="12" />
<line x1="12" y1="12" x2="12" y2="5" />
<line x1="12" y1="12" x2="17" y2="7.5" />`,
  },

  {
    name: "planet",
    tags: ["space", "astronomy", "saturn"],
    svg: `<circle cx="12" cy="12" r="5.5" />
<path d="M2.5 14a20 6 -15 1 0 19-8" />`,
  },
  {
    name: "satellite",
    tags: ["space", "communication", "orbit"],
    svg: `<rect x="9.5" y="9.5" width="5" height="5" rx="1" />
<line x1="7" y1="7" x2="9.5" y2="9.5" />
<line x1="17" y1="17" x2="14.5" y2="14.5" />
<path d="M2.5 4.5 7 9" />
<path d="M21.5 19.5 17 15" />
<line x1="14.5" y1="9.5" x2="19" y2="5" />
<line x1="4" y1="20" x2="9.5" y2="14.5" />`,
  },
  {
    name: "rocket",
    tags: ["space", "launch", "startup"],
    svg: `<path d="M12 2.5c3 2 4.5 6 4.5 10l-4.5 4-4.5-4c0-4 1.5-8 4.5-10Z" />
<circle cx="12" cy="10" r="1.7" />
<path d="M9 15l-3 1 1-3" />
<path d="M15 15l3 1-1-3" />
<path d="M10.5 19 9 22" />
<path d="M13.5 19 15 22" />`,
  },
  {
    name: "comet",
    tags: ["space", "astronomy", "meteor"],
    svg: `<circle cx="16" cy="8" r="3" />
<path d="M14 10 4 20" />
<path d="M12.5 11.5 6 18" />
<path d="M15 13 9.5 18.5" />`,
  },
  {
    name: "meteor",
    tags: ["space", "asteroid", "falling-star"],
    svg: `<circle cx="15" cy="9" r="4" />
<line x1="11" y1="13" x2="4" y2="20" />
<line x1="9" y1="10.5" x2="5.5" y2="14" />`,
  },
  {
    name: "eclipse",
    tags: ["space", "astronomy", "moon"],
    svg: `<circle cx="9.5" cy="12" r="7" />
<circle cx="14.5" cy="12" r="7" fill="currentColor" stroke="none" />`,
  },

  {
    name: "smile",
    tags: ["emoji", "happy", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
<circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
<path d="M8 14.5a4.5 4 0 0 0 8 0" />`,
  },
  {
    name: "frown",
    tags: ["emoji", "sad", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
<circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
<path d="M8 16a4.5 4 0 0 1 8 0" />`,
  },
  {
    name: "meh",
    tags: ["emoji", "neutral", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
<circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
<line x1="8" y1="15.5" x2="16" y2="15.5" />`,
  },
  {
    name: "laugh",
    tags: ["emoji", "lol", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
<circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
<path d="M7.5 14a4.5 4 0 0 0 9 0" />
<line x1="8.5" y1="15.5" x2="15.5" y2="15.5" />`,
  },
  {
    name: "angry",
    tags: ["emoji", "mad", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<line x1="8" y1="9" x2="10.5" y2="10.5" />
<line x1="16" y1="9" x2="13.5" y2="10.5" />
<path d="M8 16.5a4.5 4 0 0 1 8 0" />`,
  },
  {
    name: "surprised",
    tags: ["emoji", "shocked", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="9" cy="10" r="1.2" />
<circle cx="15" cy="10" r="1.2" />
<circle cx="12" cy="16" r="1.8" />`,
  },
  {
    name: "wink",
    tags: ["emoji", "flirty", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
<line x1="14" y1="10" x2="16" y2="10" />
<path d="M8 14.5a4.5 4 0 0 0 8 0" />`,
  },
  {
    name: "confused",
    tags: ["emoji", "puzzled", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
<circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
<path d="M8 15.5q2-1.5 4 0t4 0" />`,
  },
  {
    name: "sleepy",
    tags: ["emoji", "tired", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<path d="M7.5 10q1.5-1 3 0" />
<path d="M13.5 10q1.5-1 3 0" />
<line x1="9" y1="15.5" x2="15" y2="15.5" />
<path d="M17 5h2.5l-2 2h2.5" />`,
  },
  {
    name: "cool",
    tags: ["emoji", "sunglasses", "face"],
    svg: `<circle cx="12" cy="12" r="9" />
<rect x="6.5" y="9" width="4.5" height="2.5" rx="0.8" fill="currentColor" stroke="none" />
<rect x="13" y="9" width="4.5" height="2.5" rx="0.8" fill="currentColor" stroke="none" />
<line x1="11" y1="10" x2="13" y2="10" />
<path d="M8 15.5a4.5 4 0 0 0 8 0" />`,
  },

  {
    name: "briefcase",
    tags: ["work", "business", "job"],
    svg: `<rect x="2.5" y="7.5" width="19" height="12" rx="2" />
<path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
<line x1="2.5" y1="13" x2="21.5" y2="13" />`,
  },
  {
    name: "presentation",
    tags: ["business", "chart", "meeting"],
    svg: `<rect x="2.5" y="3.5" width="19" height="12" rx="1.5" />
<line x1="12" y1="15.5" x2="12" y2="20.5" />
<line x1="7" y1="20.5" x2="17" y2="20.5" />
<polyline points="6.5 12 10 8 13 10.5 17.5 6" />`,
  },
  {
    name: "whiteboard",
    tags: ["business", "meeting", "office"],
    svg: `<rect x="2.5" y="3.5" width="19" height="14" rx="1.5" />
<line x1="9" y1="21" x2="15" y2="21" />
<line x1="12" y1="17.5" x2="12" y2="21" />
<line x1="6" y1="9" x2="12" y2="9" />
<line x1="6" y1="12.5" x2="10" y2="12.5" />`,
  },
  {
    name: "handshake",
    tags: ["deal", "partnership", "agreement"],
    svg: `<path d="M2.5 12 6 8.5l3 2.5" />
<path d="M21.5 12 18 8.5l-3 2.5" />
<path d="M9 11 12 13.5 15 11" />
<path d="M6 8.5l3.5 3a1.5 1.5 0 0 0 2 0l.5-.5a1.5 1.5 0 0 1 2 0l.5.5a1.5 1.5 0 0 0 2 0l3.5-3" />`,
  },
  {
    name: "building",
    tags: ["office", "company", "architecture"],
    svg: `<rect x="5" y="3" width="14" height="18" rx="1" />
<line x1="8" y1="7" x2="10" y2="7" />
<line x1="14" y1="7" x2="16" y2="7" />
<line x1="8" y1="11" x2="10" y2="11" />
<line x1="14" y1="11" x2="16" y2="11" />
<line x1="8" y1="15" x2="10" y2="15" />
<line x1="14" y1="15" x2="16" y2="15" />
<line x1="10" y1="21" x2="10" y2="18" />
<line x1="14" y1="21" x2="14" y2="18" />`,
  },
  {
    name: "building-2",
    tags: ["office", "tower", "skyline"],
    svg: `<rect x="3" y="9" width="8" height="12" rx="1" />
<rect x="12" y="3" width="9" height="18" rx="1" />
<line x1="5.5" y1="12.5" x2="7" y2="12.5" />
<line x1="5.5" y1="16" x2="7" y2="16" />
<line x1="15" y1="7" x2="16.5" y2="7" />
<line x1="18" y1="7" x2="19" y2="7" />
<line x1="15" y1="11" x2="16.5" y2="11" />
<line x1="18" y1="11" x2="19" y2="11" />`,
  },
  {
    name: "factory",
    tags: ["industry", "manufacturing", "building"],
    svg: `<path d="M3 20.5V11l5 3.5V11l5 3.5V11l5 3.5V6h2.5v14.5Z" />
<line x1="3" y1="20.5" x2="21" y2="20.5" />`,
  },
  {
    name: "warehouse",
    tags: ["storage", "distribution", "building"],
    svg: `<path d="M3 10 12 4l9 6v10.5H3Z" />
<rect x="9.5" y="14" width="5" height="6.5" />`,
  },
  {
    name: "contract",
    tags: ["agreement", "legal", "document"],
    svg: `<path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
<polyline points="14 3.5 14 7.5 18 7.5" />
<line x1="9" y1="12" x2="15" y2="12" />
<line x1="9" y1="15" x2="13" y2="15" />
<path d="M9 18q1-1 2 0t2 0" />`,
  },
  {
    name: "signature",
    tags: ["sign", "autograph", "document"],
    svg: `<path d="M3 18q2-6 4-2t3-4 3 3 3-5 3 4 2-1" />
<line x1="3" y1="21" x2="21" y2="21" />`,
  },
  {
    name: "office-chair",
    tags: ["furniture", "office", "seat"],
    svg: `<rect x="7" y="3.5" width="10" height="7" rx="1.5" />
<path d="M7 10.5 5 15h14l-2-4.5" />
<line x1="12" y1="15" x2="12" y2="19" />
<line x1="8" y1="21.5" x2="16" y2="21.5" />
<line x1="12" y1="19" x2="12" y2="21.5" />`,
  },
  {
    name: "stapler",
    tags: ["office", "supplies", "staple"],
    svg: `<path d="M2.5 16.5 20 12l1.5 4.5L4 21Z" />
<path d="M4 21 2.5 16.5" />
<line x1="8" y1="14.5" x2="9" y2="18.5" />`,
  },
  {
    name: "eraser",
    tags: ["office", "supplies", "delete"],
    svg: `<path d="M8 20.5H4.5L2.5 18l11-11 6.5 6.5-8 8Z" />
<line x1="8" y1="20.5" x2="14" y2="14.5" />`,
  },
  {
    name: "highlighter",
    tags: ["office", "supplies", "marker"],
    svg: `<path d="M15 3.5 20.5 9 10 19.5 4.5 21 6 15.5Z" />
<line x1="12.5" y1="6" x2="18" y2="11.5" />`,
  },

  {
    name: "tornado",
    tags: ["weather", "storm", "wind"],
    svg: `<line x1="4" y1="4" x2="20" y2="4" />
<line x1="6" y1="8.5" x2="18" y2="8.5" />
<line x1="8" y1="13" x2="16" y2="13" />
<line x1="10" y1="17.5" x2="14" y2="17.5" />
<line x1="11" y1="21" x2="13" y2="21" />`,
  },
  {
    name: "hurricane",
    tags: ["weather", "storm", "cyclone"],
    svg: `<circle cx="12" cy="12" r="9" />
<path d="M12 3a9 5 0 0 1 6 8" />
<path d="M12 21a9 5 0 0 1-6-8" />
<circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />`,
  },
  {
    name: "volcano",
    tags: ["nature", "eruption", "mountain"],
    svg: `<path d="M4 20.5 9 7l3 4 3-4 5 13.5Z" />
<path d="M9 7c0-2 1-3.5 3-4.5" />
<circle cx="12.5" cy="2" r="0.8" fill="currentColor" stroke="none" />
<line x1="8" y1="16" x2="16" y2="16" />`,
  },
  {
    name: "iceberg",
    tags: ["nature", "ice", "arctic"],
    svg: `<path d="M4 15.5 9 5l3 5 2-3 6 8.5Z" />
<line x1="2" y1="15.5" x2="22" y2="15.5" />
<path d="M9 5 6.5 12" stroke-dasharray="1.5 1.5" />`,
  },
  {
    name: "desert",
    tags: ["nature", "sand", "dunes"],
    svg: `<path d="M2 20 6.5 10a2 2 0 0 1 3.6 0L12 14l1-2a2 2 0 0 1 3.6 0L20 20Z" />
<circle cx="18.5" cy="5.5" r="2.3" />`,
  },
  {
    name: "forest",
    tags: ["nature", "trees", "woods"],
    svg: `<path d="M7 3 3 11h2.5l-3 5h3v4h3v-4h3l-3-5h2.5Z" />
<path d="M16 6 12.5 13h2l-2.5 4.5h2v3.5h3v-3.5h2L17 13h2Z" />`,
  },
  {
    name: "river",
    tags: ["nature", "water", "stream"],
    svg: `<path d="M3 6c3 0 3 3 6 3s3-3 6-3 3 3 6 3" />
<path d="M3 12c3 0 3 3 6 3s3-3 6-3 3 3 6 3" />
<path d="M3 18c3 0 3 3 6 3s3-3 6-3 3 3 6 3" />`,
  },
  {
    name: "waterfall",
    tags: ["nature", "water", "cascade"],
    svg: `<path d="M4 3v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V3" />
<line x1="8" y1="13" x2="8" y2="21" />
<line x1="12" y1="13" x2="12" y2="21" />
<line x1="16" y1="13" x2="16" y2="21" />`,
  },
  {
    name: "cave",
    tags: ["nature", "cavern", "geology"],
    svg: `<path d="M2 20.5a20 10 0 0 1 20 0" />
<path d="M7 20.5a10 6 0 0 1 10 0" />`,
  },
  {
    name: "hail",
    tags: ["weather", "storm", "ice"],
    svg: `<path d="M6.5 12.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.9A4.5 4.5 0 0 1 17 12.5Z" />
<circle cx="8.5" cy="17" r="1" />
<circle cx="12" cy="19" r="1" />
<circle cx="15.5" cy="17" r="1" />`,
  },

  {
    name: "ornament",
    tags: ["christmas", "holiday", "decoration"],
    svg: `<circle cx="12" cy="14" r="7" />
<path d="M10 4h4l-1 3h-2Z" />
<line x1="12" y1="7" x2="12" y2="9" />`,
  },
  {
    name: "snowman",
    tags: ["winter", "holiday", "snow"],
    svg: `<circle cx="12" cy="17" r="5" />
<circle cx="12" cy="8" r="3.5" />
<circle cx="10.5" cy="7.5" r="0.5" fill="currentColor" stroke="none" />
<circle cx="13.5" cy="7.5" r="0.5" fill="currentColor" stroke="none" />
<circle cx="12" cy="16" r="0.6" fill="currentColor" stroke="none" />
<circle cx="12" cy="18.5" r="0.6" fill="currentColor" stroke="none" />
<path d="M9 4.5h6l-3-2Z" />`,
  },
  {
    name: "pumpkin",
    tags: ["halloween", "autumn", "holiday"],
    svg: `<path d="M4.5 13.5a7.5 6 0 0 1 15 0 7.5 6 0 0 1-15 0Z" />
<line x1="8" y1="8.5" x2="8" y2="18.5" />
<line x1="12" y1="7.7" x2="12" y2="19.3" />
<line x1="16" y1="8.5" x2="16" y2="18.5" />
<path d="M12 7.7V4.5" />
<path d="M12 4.5c0-1 1-1.5 2-1.5" />`,
  },
  {
    name: "firework",
    tags: ["celebration", "festival", "sparkle"],
    svg: `<line x1="12" y1="3" x2="12" y2="8" />
<line x1="12" y1="16" x2="12" y2="21" />
<line x1="3" y1="12" x2="8" y2="12" />
<line x1="16" y1="12" x2="21" y2="12" />
<line x1="5.5" y1="5.5" x2="9" y2="9" />
<line x1="18.5" y1="5.5" x2="15" y2="9" />
<line x1="5.5" y1="18.5" x2="9" y2="15" />
<line x1="18.5" y1="18.5" x2="15" y2="15" />
<circle cx="12" cy="12" r="2" />`,
  },
  {
    name: "balloon",
    tags: ["party", "celebration", "birthday"],
    svg: `<path d="M12 3a6 7 0 0 1 6 7c0 4-3 6.5-4.5 7.5L15 19h-6l1.5-1.5C9 16.5 6 14 6 10a6 7 0 0 1 6-7Z" />
<path d="M11 19q1 1.5 0 2.5" />`,
  },
  {
    name: "party-popper",
    tags: ["celebration", "confetti", "party"],
    svg: `<path d="M4 20 14 10" />
<path d="M14 4v3" />
<path d="M20 10h-3" />
<path d="M18 5.5 16 7.5" />
<circle cx="9" cy="15" r="0.8" fill="currentColor" stroke="none" />
<circle cx="6" cy="12" r="0.6" fill="currentColor" stroke="none" />
<circle cx="12" cy="18" r="0.6" fill="currentColor" stroke="none" />`,
  },
  {
    name: "confetti",
    tags: ["celebration", "party", "festive"],
    svg: `<rect x="4" y="4" width="2.5" height="2.5" />
<circle cx="18" cy="5" r="1.3" />
<rect x="16" y="14" width="2.5" height="2.5" />
<circle cx="6" cy="16" r="1.3" />
<rect x="11" y="9" width="2.5" height="2.5" />
<circle cx="10" cy="19" r="1.3" />`,
  },
  {
    name: "candle",
    tags: ["light", "celebration", "flame"],
    svg: `<rect x="9.5" y="9" width="5" height="12" rx="1" />
<path d="M12 9c-1.5-1.5-1.5-3 0-5 1.5 2 1.5 3.5 0 5Z" />
<line x1="12" y1="9" x2="12" y2="7" />`,
  },
  {
    name: "mask",
    tags: ["theater", "drama", "costume"],
    svg: `<path d="M3 6c3-2 15-2 18 0-1 6-4 10-9 10S4 12 3 6Z" />
<circle cx="8.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
<circle cx="15.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
<path d="M9 13q3 2 6 0" />`,
  },
  {
    name: "ribbon",
    tags: ["award", "decoration", "prize"],
    svg: `<circle cx="12" cy="7" r="4.5" />
<path d="M8.5 10.5 5.5 21l6.5-4 6.5 4-3-10.5" />`,
  },

  {
    name: "undo",
    tags: ["arrow", "history", "revert"],
    svg: `<path d="M9 14 4 9l5-5" />
<path d="M4 9h10a6 6 0 0 1 0 12h-3" />`,
  },
  {
    name: "redo",
    tags: ["arrow", "history", "repeat"],
    svg: `<path d="M15 14 20 9l-5-5" />
<path d="M20 9H10a6 6 0 0 0 0 12h3" />`,
  },
  {
    name: "repeat",
    tags: ["loop", "cycle", "arrows"],
    svg: `<path d="M17 2.5 21 6.5 17 10.5" />
<path d="M3 11.5v-2a3 3 0 0 1 3-3h15" />
<path d="M7 21.5 3 17.5 7 13.5" />
<path d="M21 12.5v2a3 3 0 0 1-3 3H3" />`,
  },
  {
    name: "replace",
    tags: ["swap", "substitute", "arrows"],
    svg: `<rect x="3" y="3" width="9" height="9" rx="1.5" />
<rect x="12" y="12" width="9" height="9" rx="1.5" />
<path d="M12 8h4a2 2 0 0 1 2 2v2" />
<path d="M12 16H8a2 2 0 0 1-2-2v-2" />`,
  },
  {
    name: "pin",
    tags: ["location", "attach", "fixed"],
    svg: `<path d="M12 2.5a5.5 5.5 0 0 0-5.5 5.5c0 3 2 4.5 3.5 6l2 6 2-6c1.5-1.5 3.5-3 3.5-6A5.5 5.5 0 0 0 12 2.5Z" />
<circle cx="12" cy="8" r="2" />`,
  },
  {
    name: "unpin",
    tags: ["location", "detach", "remove"],
    svg: `<path d="M12 2.5a5.5 5.5 0 0 0-5.5 5.5c0 3 2 4.5 3.5 6l2 6 2-6c1.5-1.5 3.5-3 3.5-6A5.5 5.5 0 0 0 12 2.5Z" />
<line x1="3" y1="3" x2="21" y2="21" />`,
  },
  {
    name: "zoom-in",
    tags: ["magnify", "search", "increase"],
    svg: `<circle cx="10.5" cy="10.5" r="7" />
<line x1="20" y1="20" x2="15.5" y2="15.5" />
<line x1="7.5" y1="10.5" x2="13.5" y2="10.5" />
<line x1="10.5" y1="7.5" x2="10.5" y2="13.5" />`,
  },
  {
    name: "zoom-out",
    tags: ["magnify", "search", "decrease"],
    svg: `<circle cx="10.5" cy="10.5" r="7" />
<line x1="20" y1="20" x2="15.5" y2="15.5" />
<line x1="7.5" y1="10.5" x2="13.5" y2="10.5" />`,
  },
  {
    name: "focus",
    tags: ["camera", "target", "center"],
    svg: `<line x1="12" y1="2.5" x2="12" y2="6" />
<line x1="12" y1="18" x2="12" y2="21.5" />
<line x1="2.5" y1="12" x2="6" y2="12" />
<line x1="18" y1="12" x2="21.5" y2="12" />
<circle cx="12" cy="12" r="4" />`,
  },
  {
    name: "layers",
    tags: ["stack", "design", "z-index"],
    svg: `<polygon points="12 3.5 21 8.5 12 13.5 3 8.5" />
<polyline points="3 13.5 12 18.5 21 13.5" />`,
  },
  {
    name: "boxes",
    tags: ["inventory", "storage", "3d"],
    svg: `<path d="M12 2.5 18 6v6l-6 3.5L6 12V6Z" />
<path d="M3 15l4-2.3 4 2.3v5l-4 2.3-4-2.3Z" />
<path d="M13 15l4-2.3 4 2.3v5l-4 2.3-4-2.3Z" />`,
  },
  {
    name: "sliders",
    tags: ["settings", "adjust", "controls"],
    svg: `<line x1="5" y1="4" x2="5" y2="20" />
<line x1="12" y1="4" x2="12" y2="20" />
<line x1="19" y1="4" x2="19" y2="20" />
<circle cx="5" cy="9" r="2" fill="currentColor" stroke="none" />
<circle cx="12" cy="15" r="2" fill="currentColor" stroke="none" />
<circle cx="19" cy="7" r="2" fill="currentColor" stroke="none" />`,
  },
  {
    name: "filter-x",
    tags: ["clear-filter", "remove", "reset"],
    svg: `<path d="M3.5 4.5h13L11.5 11v8l-3 1.5v-9.2Z" />
<line x1="16" y1="6" x2="21" y2="11" />
<line x1="21" y1="6" x2="16" y2="11" />`,
  },
  {
    name: "align-vertical",
    tags: ["layout", "distribute", "alignment"],
    svg: `<line x1="4" y1="12" x2="20" y2="12" />
<rect x="9" y="4" width="6" height="5" rx="1" />
<rect x="9" y="15" width="6" height="5" rx="1" />`,
  },

  {
    name: "grape",
    tags: ["fruit", "food", "wine"],
    svg: `<circle cx="9" cy="9" r="2.2" />
<circle cx="13" cy="9" r="2.2" />
<circle cx="7" cy="13" r="2.2" />
<circle cx="11" cy="13" r="2.2" />
<circle cx="15" cy="13" r="2.2" />
<circle cx="9" cy="17" r="2.2" />
<circle cx="13" cy="17" r="2.2" />
<path d="M11 4.5v2.5" />
<path d="M11 4.5c0-1 1-1.5 2-1.5" />`,
  },
  {
    name: "banana",
    tags: ["fruit", "food", "healthy"],
    svg: `<path d="M5 4c-1 6 0 13 6 15.5 5 2 9-.5 10-5" />
<path d="M19 3.5c1 1.5 1.5 3 .5 5" />`,
  },
  {
    name: "watermelon",
    tags: ["fruit", "food", "summer"],
    svg: `<path d="M3 12a9 9 0 0 1 18 0Z" />
<path d="M6 12a6 6 0 0 1 12 0Z" />
<circle cx="9.5" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
<circle cx="12" cy="8.5" r="0.6" fill="currentColor" stroke="none" />
<circle cx="14.5" cy="9.5" r="0.6" fill="currentColor" stroke="none" />`,
  },
  {
    name: "carrot",
    tags: ["vegetable", "food", "healthy"],
    svg: `<path d="M9.5 14.5 19 5a2.1 2.1 0 0 1 3 3l-9.5 9.5Z" />
<path d="M4 20l4.5-4.5" />
<path d="M17.5 4.5c.5-1 1.5-1.5 2.5-1.5" />
<path d="M4 20c1-3 2-4 4-4.5" />
<path d="M4 20c3-1 4-2 4.5-4" />`,
  },
  {
    name: "corn",
    tags: ["vegetable", "food", "grain"],
    svg: `<path d="M8 3.5c6 0 8 5 8 10s-3.5 7-8 7-4-6-4-10 1.5-7 4-7Z" />
<line x1="8" y1="6.5" x2="11.5" y2="7" />
<line x1="7" y1="9.5" x2="11" y2="10" />
<line x1="6.7" y1="12.5" x2="11" y2="13" />
<line x1="7" y1="15.5" x2="10.5" y2="16" />
<path d="M8 3.5c1-1.5 2.5-2 4-1.5" />`,
  },
  {
    name: "cheese",
    tags: ["dairy", "food", "wedge"],
    svg: `<path d="M2.5 18.5 12 5l9.5 13.5Z" />
<circle cx="14" cy="14.5" r="0.8" fill="currentColor" stroke="none" />
<circle cx="10" cy="15.5" r="0.8" fill="currentColor" stroke="none" />
<circle cx="12.5" cy="17.5" r="0.8" fill="currentColor" stroke="none" />`,
  },
  {
    name: "honey",
    tags: ["food", "sweet", "jar"],
    svg: `<path d="M8 3.5h8v3l-2 2v4l2 2v3l-2 2H10l-2-2v-3l2-2v-4l-2-2Z" />
<line x1="8" y1="9" x2="16" y2="9" />
<line x1="8" y1="15" x2="16" y2="15" />`,
  },
  {
    name: "milk",
    tags: ["dairy", "drink", "beverage"],
    svg: `<path d="M9 2.5h6v3.5l1.5 2.5V20a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 20V8.5L9 6Z" />
<line x1="7.5" y1="12" x2="16.5" y2="12" />`,
  },
  {
    name: "salad",
    tags: ["food", "healthy", "vegetables"],
    svg: `<path d="M3.5 12.5a8.5 6 0 0 0 17 0Z" />
<path d="M8 12.5c0-3 1-5.5 2.5-6.5" />
<path d="M15 12.5c0-2.5-.5-4.5-1.5-6" />
<path d="M11.5 12.5c0-4 1-6.5 3-8" />`,
  },
  {
    name: "soup",
    tags: ["food", "bowl", "meal"],
    svg: `<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z" />
<path d="M4 12a2 2 0 0 1 0-4" />
<path d="M20 12a2 2 0 0 0 0-4" />
<path d="M9 8c0-2-1-2.5-1-4" />
<path d="M13 8c0-2-1-2.5-1-4" />`,
  },

  {
    name: "satellite-dish",
    tags: ["space", "signal", "communication"],
    svg: `<path d="M4 15 15 4l6 6-11 11a8.5 8.5 0 0 1-6-6Z" />
<circle cx="4" cy="20" r="1.3" />
<line x1="15" y1="4" x2="15" y2="1.5" />`,
  },
  {
    name: "circuit",
    tags: ["electronics", "tech", "chip"],
    svg: `<circle cx="6" cy="6" r="2" />
<circle cx="18" cy="6" r="2" />
<circle cx="6" cy="18" r="2" />
<circle cx="18" cy="18" r="2" />
<circle cx="12" cy="12" r="2" />
<line x1="8" y1="6" x2="16" y2="6" />
<line x1="6" y1="8" x2="6" y2="16" />
<line x1="18" y1="8" x2="18" y2="16" />
<line x1="8" y1="18" x2="16" y2="18" />
<line x1="10" y1="10.5" x2="7.5" y2="7.5" />
<line x1="14" y1="10.5" x2="16.5" y2="7.5" />
<line x1="10" y1="13.5" x2="7.5" y2="16.5" />
<line x1="14" y1="13.5" x2="16.5" y2="16.5" />`,
  },
  {
    name: "battery-low",
    tags: ["power", "charge", "low"],
    svg: `<rect x="2.5" y="8" width="17" height="8" rx="1.5" />
<line x1="21.5" y1="10.5" x2="21.5" y2="13.5" />
<rect x="5" y="10.2" width="2" height="3.6" fill="currentColor" stroke="none" />`,
  },
  {
    name: "signal",
    tags: ["network", "cellular", "strength"],
    svg: `<line x1="4" y1="19" x2="4" y2="15" />
<line x1="9" y1="19" x2="9" y2="11" />
<line x1="14" y1="19" x2="14" y2="7" />
<line x1="19" y1="19" x2="19" y2="3" />`,
  },
  {
    name: "antenna",
    tags: ["signal", "broadcast", "wireless"],
    svg: `<line x1="12" y1="2.5" x2="12" y2="21.5" />
<path d="M6 8a8.5 8.5 0 0 1 12 0" />
<path d="M3.5 5a12 12 0 0 1 17 0" />
<circle cx="12" cy="2.5" r="1" fill="currentColor" stroke="none" />`,
  },
  {
    name: "radiation",
    tags: ["hazard", "nuclear", "warning"],
    svg: `<circle cx="12" cy="12" r="2" />
<path d="M12 12 15.5 6a7 7 0 0 1 3.5 6Z" />
<path d="M12 12 8.5 6a7 7 0 0 0-3.5 6Z" />
<path d="M12 12 12 19a7 7 0 0 0 6.5-4.5Z" />
<path d="M12 12 12 19a7 7 0 0 1-6.5-4.5Z" />`,
  },
  {
    name: "biohazard",
    tags: ["hazard", "warning", "danger"],
    svg: `<circle cx="12" cy="12" r="1.7" />
<circle cx="12" cy="5.5" r="2.3" />
<circle cx="6.8" cy="15.2" r="2.3" />
<circle cx="17.2" cy="15.2" r="2.3" />
<path d="M12 9v3l-2.5 1.5" />
<path d="M12 12l2.5 1.5" />
<path d="M9.5 13.5 8 12" />`,
  },
  {
    name: "cog",
    tags: ["gear", "settings", "mechanism"],
    svg: `<circle cx="12" cy="12" r="3" />
<path d="M12 3v3M12 18v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5M3 12h3M18 12h3" />`,
  },
  {
    name: "gauge",
    tags: ["speedometer", "meter", "performance"],
    svg: `<path d="M4 16a8 8 0 1 1 16 0" />
<line x1="12" y1="16" x2="16" y2="10" />
<circle cx="12" cy="16" r="1.3" fill="currentColor" stroke="none" />`,
  },
  {
    name: "vault",
    tags: ["safe", "security", "storage"],
    svg: `<rect x="3" y="3" width="18" height="18" rx="2" />
<circle cx="12" cy="12" r="5" />
<circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
<line x1="12" y1="7" x2="12" y2="8.5" />
<circle cx="18" cy="7" r="0.8" fill="currentColor" stroke="none" />`,
  },

  {
    name: "location-arrow",
    tags: ["navigation", "gps", "direction"],
    svg: `<path d="M4 4 20 11 12.5 13.5 10 21Z" />`,
  },
  {
    name: "pin-off",
    tags: ["location", "disabled", "remove"],
    svg: `<path d="M12 2.5a5.5 5.5 0 0 0-5.5 5.5c0 1.5.5 2.7 1.3 3.8" />
<path d="M9.5 14.7c.7.7 1.3 1.4 1.7 2.3l.8 3 1.5-4.5c1.5-1.5 3.5-3 3.5-6a5.5 5.5 0 0 0-2.2-4.4" />
<line x1="3" y1="3" x2="21" y2="21" />`,
  },
  {
    name: "directions",
    tags: ["navigation", "route", "map"],
    svg: `<path d="M12 2.5 20 12l-8 9.5L4 12Z" />
<line x1="8" y1="12" x2="16" y2="12" />
<polyline points="13 9 16 12 13 15" />`,
  },
  {
    name: "road",
    tags: ["street", "highway", "travel"],
    svg: `<path d="M9 3 4 21" />
<path d="M15 3 20 21" />
<line x1="12" y1="4" x2="12" y2="7" />
<line x1="12" y1="10.5" x2="12" y2="13.5" />
<line x1="12" y1="17" x2="12" y2="20" />`,
  },
  {
    name: "bridge",
    tags: ["structure", "crossing", "travel"],
    svg: `<path d="M2 15c2-6 6-9 10-9s8 3 10 9" />
<line x1="4" y1="15" x2="4" y2="20" />
<line x1="20" y1="15" x2="20" y2="20" />
<line x1="2" y1="20" x2="22" y2="20" />
<line x1="8" y1="10.5" x2="8" y2="20" />
<line x1="16" y1="10.5" x2="16" y2="20" />`,
  },
  {
    name: "lighthouse",
    tags: ["coastal", "beacon", "navigation"],
    svg: `<path d="M10 22 8 9h8l-2 13Z" />
<path d="M9 9 10 3h4l1 6" />
<line x1="7" y1="14" x2="17" y2="14" />
<line x1="4" y1="6" x2="7" y2="7.5" />
<line x1="20" y1="6" x2="17" y2="7.5" />`,
  },
  {
    name: "exchange",
    tags: ["swap", "transfer", "currency"],
    svg: `<path d="M4 7h13" />
<polyline points="14 3.5 17 7 14 10.5" />
<path d="M20 17H7" />
<polyline points="10 13.5 7 17 10 20.5" />`,
  },
  {
    name: "scale",
    tags: ["balance", "justice", "weight"],
    svg: `<line x1="12" y1="3" x2="12" y2="21" />
<line x1="6" y1="7" x2="18" y2="7" />
<path d="M6 7 3 13a3 3 0 0 0 6 0Z" />
<path d="M18 7 15 13a3 3 0 0 0 6 0Z" />
<line x1="8" y1="21" x2="16" y2="21" />`,
  },

  {
    name: "megaphone",
    tags: ["announcement", "marketing", "broadcast"],
    svg: `<path d="M3 10.5v3a1.5 1.5 0 0 0 1.5 1.5H6l1.5 4.5h2L8 15h2.5L18 18.5V5.5L10.5 9H4.5A1.5 1.5 0 0 0 3 10.5Z" />
<path d="M20 8.5a4 4 0 0 1 0 7" />`,
  },
  {
    name: "siren",
    tags: ["emergency", "alarm", "police"],
    svg: `<path d="M12 4a5 5 0 0 1 5 5v6H7V9a5 5 0 0 1 5-5Z" />
<line x1="12" y1="4" x2="12" y2="2" />
<line x1="5" y1="15" x2="19" y2="15" />
<line x1="4" y1="19.5" x2="20" y2="19.5" />
<line x1="6" y1="15" x2="6" y2="19.5" />
<line x1="18" y1="15" x2="18" y2="19.5" />`,
  },
  {
    name: "sparkles",
    tags: ["magic", "shiny", "new"],
    svg: `<path d="M11 2 12.3 8.7 19 10 12.3 11.3 11 18 9.7 11.3 3 10 9.7 8.7Z" />
<circle cx="18.5" cy="4.5" r="1" fill="currentColor" stroke="none" />
<circle cx="19" cy="17" r="1.2" fill="currentColor" stroke="none" />`,
  },
  {
    name: "award",
    tags: ["achievement", "prize", "recognition"],
    svg: `<circle cx="12" cy="9" r="6.5" />
<path d="M8.5 14.5 7 21l5-2.5 5 2.5-1.5-6.5" />`,
  },
  {
    name: "crown",
    tags: ["royal", "king", "premium"],
    svg: `<path d="M3 8 7 12 12 5 17 12 21 8 19 18H5Z" />
<line x1="5" y1="18" x2="19" y2="18" />`,
  },
  {
    name: "gem",
    tags: ["diamond", "jewel", "precious"],
    svg: `<path d="M6 3h12l3 6-9 12L3 9Z" />
<path d="M3 9h18" />
<path d="M9 3 12 9l-3.5 12" />
<path d="M15 3 12 9l3.5 12" />`,
  },
  {
    name: "flag",
    tags: ["marker", "report", "milestone"],
    svg: `<path d="M5 21V4" />
<path d="M5 4h13l-3 4.5L18 13H5Z" />`,
  },
  {
    name: "bell-off",
    tags: ["notification", "muted", "silent"],
    svg: `<path d="M9.5 5.5A6 6 0 0 1 18 11v5l1.5 3H8" />
<path d="M6 10a6 6 0 0 0-1.5 4l-1.5 3h4" />
<path d="M10 21a2 2 0 0 0 4 0" />
<line x1="3" y1="3" x2="21" y2="21" />`,
  },
  {
    name: "bell-ring",
    tags: ["notification", "alert", "active"],
    svg: `<path d="M6 10a6 6 0 0 1 12 0v5l1.5 3h-15L6 15Z" />
<path d="M10 21a2 2 0 0 0 4 0" />
<path d="M3 8a10 10 0 0 1 2.5-4" />
<path d="M21 8a10 10 0 0 0-2.5-4" />`,
  },
  {
    name: "spark",
    tags: ["plus", "new", "accent"],
    svg: `<path d="M12 2v6" />
<path d="M12 16v6" />
<path d="M4.5 12h6" />
<path d="M13.5 12h6" />`,
  },

  {
    name: "scooter",
    tags: ["vehicle", "transport", "micromobility"],
    svg: `<circle cx="5.5" cy="18" r="2.3" />
<circle cx="18" cy="18" r="2.3" />
<path d="M5.5 18 9 8h3" />
<path d="M9 8h6.5" />
<path d="M15.5 8v4.5h2.5l1 5.5" />
<line x1="6" y1="4" x2="10.5" y2="4" />
<line x1="8.5" y1="4" x2="9" y2="8" />`,
  },
  {
    name: "helicopter",
    tags: ["vehicle", "aircraft", "flight"],
    svg: `<line x1="4" y1="4" x2="20" y2="4" />
<line x1="12" y1="4" x2="12" y2="6.5" />
<path d="M6 15a6 4.5 0 0 1 12 0Z" />
<line x1="18" y1="15" x2="22" y2="14" />
<line x1="6" y1="19" x2="18" y2="19" />`,
  },
  {
    name: "tractor",
    tags: ["vehicle", "farming", "agriculture"],
    svg: `<circle cx="7" cy="18" r="3" />
<circle cx="18" cy="18" r="2.3" />
<path d="M4 18V9h6l4 4h3a2 2 0 0 1 2 2v3" />
<line x1="10" y1="9" x2="10" y2="5" />
<line x1="10" y1="5" x2="7" y2="5" />`,
  },
  {
    name: "forklift",
    tags: ["vehicle", "warehouse", "industrial"],
    svg: `<rect x="2.5" y="12" width="7" height="6" rx="1" />
<circle cx="5" cy="19.5" r="1.5" />
<line x1="10" y1="8" x2="10" y2="18" />
<line x1="10" y1="8" x2="17" y2="8" />
<line x1="17" y1="8" x2="17" y2="14" />
<rect x="15" y="12" width="4" height="6" rx="1" />
<circle cx="18" cy="19.5" r="1.5" />`,
  },
  {
    name: "ambulance",
    tags: ["vehicle", "emergency", "medical"],
    svg: `<rect x="2.5" y="9" width="13" height="8" rx="1" />
<path d="M15.5 12h3l3 2.5v2.5h-6Z" />
<circle cx="7" cy="18.5" r="1.7" />
<circle cx="17" cy="18.5" r="1.7" />
<line x1="7" y1="11" x2="7" y2="15" />
<line x1="5" y1="13" x2="9" y2="13" />`,
  },
  {
    name: "fire-truck",
    tags: ["vehicle", "emergency", "firefighting"],
    svg: `<rect x="2.5" y="8" width="14" height="9" rx="1" />
<path d="M16.5 11h3l2.5 2.5v3.5h-5.5Z" />
<circle cx="7" cy="19.5" r="1.7" />
<circle cx="17.5" cy="19.5" r="1.7" />
<line x1="6" y1="4.5" x2="10" y2="4.5" />
<line x1="8" y1="4.5" x2="8" y2="8" />`,
  },
  {
    name: "motorcycle",
    tags: ["vehicle", "transport", "bike"],
    svg: `<circle cx="5.5" cy="17.5" r="3" />
<circle cx="18" cy="17.5" r="3" />
<path d="M5.5 17.5 9 10h5l4 7.5" />
<path d="M9 10 7 6.5h3" />
<line x1="14" y1="10" x2="14" y2="7" />`,
  },
  {
    name: "submarine",
    tags: ["vehicle", "underwater", "navy"],
    svg: `<path d="M3 14a9 4.5 0 0 1 18 0 9 4.5 0 0 1-18 0Z" />
<line x1="12" y1="9.5" x2="12" y2="6" />
<circle cx="12" cy="5" r="1" />
<circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
<circle cx="12" cy="14" r="1" fill="currentColor" stroke="none" />
<circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />`,
  },

  {
    name: "footprints",
    tags: ["walking", "steps", "trail"],
    svg: `<path d="M5 4a2 2.5 0 1 0 0 5 2 2.5 0 0 0 0-5Z" />
<path d="M5 11a2 3 0 1 0 0 6 2 3 0 0 0 0-6Z" />
<path d="M17 8a2 2.5 0 1 0 0 5 2 2.5 0 0 0 0-5Z" />
<path d="M17 15a2 3 0 1 0 0 6 2 3 0 0 0 0-6Z" />`,
  },
  {
    name: "yoga",
    tags: ["exercise", "fitness", "wellness"],
    svg: `<circle cx="12" cy="4.5" r="1.8" />
<path d="M12 6.5v6" />
<path d="M12 8 6 13" />
<path d="M12 8 18 13" />
<path d="M12 12.5 8 20" />
<path d="M12 12.5 16 20" />`,
  },
  {
    name: "meditation",
    tags: ["mindfulness", "calm", "wellness"],
    svg: `<circle cx="12" cy="5.5" r="1.8" />
<path d="M12 7.5v4" />
<path d="M12 8.5 7 12a3 3 0 0 0 0 4" />
<path d="M12 8.5 17 12a3 3 0 0 1 0 4" />
<path d="M7 16h10" />
<path d="M9 16c0 2-1.5 3-3 3.5" />
<path d="M15 16c0 2 1.5 3 3 3.5" />`,
  },
  {
    name: "stretching",
    tags: ["exercise", "fitness", "wellness"],
    svg: `<circle cx="17" cy="4.5" r="1.8" />
<path d="M17 6.5 12 9l-5-3" />
<path d="M12 9v6" />
<path d="M12 10.5 17 13" />
<path d="M12 15 9 21" />
<path d="M12 15 15 21" />`,
  },
  {
    name: "lungs",
    tags: ["health", "breathing", "medical"],
    svg: `<path d="M12 3v9" />
<path d="M12 12c-1-3-3-4-5-4-2.5 0-3.5 2-3 5 .5 3 2 6.5 4.5 6.5 2 0 3-1.5 3.5-3.5" />
<path d="M12 12c1-3 3-4 5-4 2.5 0 3.5 2 3 5-.5 3-2 6.5-4.5 6.5-2 0-3-1.5-3.5-3.5" />`,
  },
  {
    name: "muscle",
    tags: ["fitness", "strength", "bicep"],
    svg: `<path d="M4 14c0-4 2-8 6-9 1 2-1 3-1 5 3-1 6 0 7 3 1 2.5 0 5-2 6.5-2.5 2-6 2-8.5.5" />
<path d="M4 14c0 3 2 5 5 5" />`,
  },

  {
    name: "rock",
    tags: ["stone", "nature", "geology"],
    svg: `<path d="M3 17 6 9l4-2 5 1 4 4-1 5Z" />`,
  },
  {
    name: "island",
    tags: ["nature", "vacation", "tropical"],
    svg: `<path d="M4 18a20 5 0 0 0 16 0" />
<path d="M9 18 11 8l2 4 2-3 2 9" />
<path d="M11 8c0-2 1-3 2.5-3.5" />`,
  },
  {
    name: "coral",
    tags: ["ocean", "nature", "reef"],
    svg: `<path d="M12 21v-6" />
<path d="M12 15c0-3 2-4 2-7s-1-4-1-4" />
<path d="M12 15c0-4-2.5-5-2.5-8.5 0-1.5.5-2.5 1-3" />
<path d="M12 15c1.5-2 4-2 4-5" />
<path d="M12 15c-1.5-2-4-2-4-5" />`,
  },
  {
    name: "shell",
    tags: ["ocean", "beach", "nature"],
    svg: `<path d="M4 18a8 8 0 0 1 16 0Z" />
<path d="M12 10v8" />
<path d="M8.5 12.5 9.5 18" />
<path d="M15.5 12.5 14.5 18" />
<path d="M12 10c0-3 1.5-5 4-6" />`,
  },
  {
    name: "moon-star",
    tags: ["night", "astronomy", "dark-mode"],
    svg: `<path d="M14.5 3.5A8 8 0 1 0 18.5 17a8.5 8.5 0 0 1-4-13.5Z" />
<path d="M19 3 19.8 5 22 5.8 19.8 6.6 19 8.5 18.2 6.6 16 5.8 18.2 5Z" />`,
  },
  {
    name: "cloud-sun",
    tags: ["weather", "partly-cloudy", "forecast"],
    svg: `<circle cx="8" cy="7.5" r="3" />
<line x1="8" y1="2" x2="8" y2="3.3" />
<line x1="3" y1="7.5" x2="4.3" y2="7.5" />
<line x1="4" y1="3.5" x2="4.9" y2="4.4" />
<path d="M9 19a4.5 4.5 0 0 1-.3-9 6 6 0 0 1 11.6-1.5A4.5 4.5 0 0 1 19.5 19Z" />`,
  },

  {
    name: "tape",
    tags: ["office", "supplies", "adhesive"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="12" cy="12" r="3.5" />`,
  },
  {
    name: "binder",
    tags: ["office", "supplies", "organize"],
    svg: `<rect x="4.5" y="3" width="15" height="18" rx="1.5" />
<line x1="4.5" y1="3" x2="4.5" y2="21" />
<circle cx="4.5" cy="7" r="1" fill="currentColor" stroke="none" />
<circle cx="4.5" cy="12" r="1" fill="currentColor" stroke="none" />
<circle cx="4.5" cy="17" r="1" fill="currentColor" stroke="none" />`,
  },
  {
    name: "folder-open",
    tags: ["directory", "files", "open"],
    svg: `<path d="M3.5 8V6.5a1 1 0 0 1 1-1H10l2 2h7a1 1 0 0 1 1 1v1" />
<path d="M2.7 9.5h17.6a1 1 0 0 1 1 1.2l-1.4 7A1 1 0 0 1 19 18.5H4a1 1 0 0 1-1-.8l-1.3-7a1 1 0 0 1 1-1.2Z" />`,
  },
  {
    name: "push-pin",
    tags: ["office", "supplies", "attach"],
    svg: `<line x1="12" y1="17" x2="12" y2="22" />
<path d="M8 3.5h8l-1 6 3 3H6l3-3Z" />`,
  },

  {
    name: "at-sign",
    tags: ["email", "mention", "symbol"],
    svg: `<circle cx="12" cy="12" r="4" />
<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-4 7.5" />`,
  },
  {
    name: "ampersand",
    tags: ["and", "symbol", "text"],
    svg: `<path d="M18 20 8 8a3 3 0 1 1 5-3c0 2-1 3-3 4-3 1.5-4 3-4 5a4 4 0 0 0 7 2.5l2-2.5" />
<line x1="15" y1="14" x2="18" y2="17" />`,
  },
  {
    name: "exclamation",
    tags: ["alert", "important", "symbol"],
    svg: `<line x1="12" y1="4" x2="12" y2="14" />
<circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none" />`,
  },
  {
    name: "question-mark",
    tags: ["help", "unknown", "symbol"],
    svg: `<path d="M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.1-1.5 2.4" />
<circle cx="12" cy="18.5" r="1.2" fill="currentColor" stroke="none" />`,
  },
  {
    name: "slash",
    tags: ["symbol", "divide", "line"],
    svg: `<line x1="18" y1="4" x2="6" y2="20" />`,
  },
  {
    name: "backslash",
    tags: ["symbol", "line", "code"],
    svg: `<line x1="6" y1="4" x2="18" y2="20" />`,
  },
  {
    name: "pipe",
    tags: ["symbol", "line", "code"],
    svg: `<line x1="12" y1="3" x2="12" y2="21" />`,
  },
  {
    name: "tilde",
    tags: ["symbol", "approximate", "text"],
    svg: `<path d="M3 13c2-3 4-3 6-1s4 2 6-1 4-3 6-1" />`,
  },

  // --- Shapes (extended) ---
  {
    name: "blob",
    tags: ["shape", "organic", "design"],
    svg: `<path d="M12 3c4 0 8 2 8 6.5 0 3.5-2.5 5-2.5 8-.5 3-3 4.5-6 4.5s-6-2-7-5-1-6 .5-8.5S8 3 12 3Z" />`,
  },
  {
    name: "parallelogram",
    tags: ["shape", "geometry"],
    svg: `<path d="M8 5h13l-4 14H4Z" />`,
  },
  {
    name: "trapezoid",
    tags: ["shape", "geometry"],
    svg: `<path d="M7 4h10l4 16H3Z" />`,
  },
  {
    name: "semicircle",
    tags: ["shape", "geometry"],
    svg: `<path d="M3 16a9 9 0 0 1 18 0Z" />`,
  },
  {
    name: "arrow-shape",
    tags: ["shape", "arrow", "geometry"],
    svg: `<path d="M2 12 12 4v5h10v6H12v5Z" />`,
  },
  {
    name: "cross-shape",
    tags: ["shape", "plus", "geometry"],
    svg: `<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z" />`,
  },

  // --- Device & tech extras ---
  {
    name: "sim-card",
    tags: ["mobile", "phone", "hardware"],
    svg: `<path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
<rect x="9" y="10" width="6" height="6" rx="1" />
<line x1="9" y1="13" x2="15" y2="13" />`,
  },
  {
    name: "memory-card",
    tags: ["storage", "sd-card", "hardware"],
    svg: `<path d="M6 3.5h9l3 3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
<line x1="8" y1="3.5" x2="8" y2="8" />
<line x1="11" y1="3.5" x2="11" y2="8" />
<line x1="14" y1="6.5" x2="14" y2="8" />
<line x1="7" y1="8" x2="17" y2="8" />`,
  },
  {
    name: "floppy-disk",
    tags: ["save", "storage", "retro"],
    svg: `<path d="M4.5 3.5h13l3 3V19.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
<rect x="7" y="3.5" width="8" height="6" />
<rect x="7" y="14" width="10" height="6.5" />`,
  },
  {
    name: "disc",
    tags: ["cd", "dvd", "media"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="12" cy="12" r="2.5" />
<circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />`,
  },
  {
    name: "webcam",
    tags: ["camera", "video", "device"],
    svg: `<circle cx="12" cy="9" r="5.5" />
<circle cx="12" cy="9" r="2" fill="currentColor" stroke="none" />
<line x1="8" y1="20.5" x2="16" y2="20.5" />
<line x1="12" y1="14.5" x2="12" y2="20.5" />`,
  },
  {
    name: "projector",
    tags: ["presentation", "display", "device"],
    svg: `<rect x="2.5" y="7" width="14" height="9" rx="2" />
<circle cx="7" cy="11.5" r="2.3" />
<circle cx="14" cy="9.5" r="1" fill="currentColor" stroke="none" />
<path d="M16.5 11.5 21.5 8.5v6Z" />`,
  },
  {
    name: "speaker",
    tags: ["audio", "sound", "device"],
    svg: `<rect x="5" y="2.5" width="14" height="19" rx="2" />
<circle cx="12" cy="8" r="2.5" />
<circle cx="12" cy="16" r="3.5" />
<circle cx="12" cy="16" r="1.3" fill="currentColor" stroke="none" />`,
  },

  // --- Nature & weather extras ---
  {
    name: "zap",
    tags: ["lightning", "bolt", "energy"],
    svg: `<polygon points="13 2 4 14 11 14 10 22 20 9 13 9" />`,
  },
  {
    name: "whirlpool",
    tags: ["water", "spiral", "vortex"],
    svg: `<path d="M12 3a9 9 0 1 0 9 9" />
<path d="M12 7a5 5 0 1 0 5 5" />
<path d="M12 11a1 1 0 1 0 1 1" />`,
  },
  {
    name: "ripple",
    tags: ["water", "waves", "signal"],
    svg: `<circle cx="12" cy="12" r="2" />
<circle cx="12" cy="12" r="6" />
<circle cx="12" cy="12" r="10" />`,
  },

  // --- Verbs & actions ---
  {
    name: "save",
    tags: ["disk", "store", "persist"],
    svg: `<path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
<polyline points="8 11 11 14 16 7" />`,
  },
  {
    name: "upload-cloud",
    tags: ["cloud", "upload", "backup"],
    svg: `<path d="M6.5 18.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.9A4.5 4.5 0 0 1 17 18.5H14" />
<polyline points="9.5 14 12 11.5 14.5 14" />
<line x1="12" y1="11.5" x2="12" y2="20" />`,
  },
  {
    name: "download-cloud",
    tags: ["cloud", "download", "sync"],
    svg: `<path d="M6.5 15.5a4.5 4.5 0 0 1-.4-9 6 6 0 0 1 11.6-1.9A4.5 4.5 0 0 1 17 15.5H14" />
<polyline points="9.5 18 12 20.5 14.5 18" />
<line x1="12" y1="12" x2="12" y2="20.5" />`,
  },
  {
    name: "sync",
    tags: ["refresh", "update", "cloud"],
    svg: `<path d="M4 12a8 8 0 0 1 14.5-4.6" />
<polyline points="18.5 3 18.5 7.5 14 7.5" />
<path d="M20 12a8 8 0 0 1-14.5 4.6" />
<polyline points="5.5 21 5.5 16.5 10 16.5" />`,
  },
  {
    name: "export",
    tags: ["send", "share", "output"],
    svg: `<rect x="3" y="5" width="12" height="14" rx="1.5" />
<polyline points="15 9 20 12 15 15" />
<line x1="20" y1="12" x2="9" y2="12" />`,
  },
  {
    name: "import",
    tags: ["receive", "input", "load"],
    svg: `<rect x="9" y="5" width="12" height="14" rx="1.5" />
<polyline points="9 9 4 12 9 15" />
<line x1="4" y1="12" x2="15" y2="12" />`,
  },
  {
    name: "share-2",
    tags: ["send", "distribute", "export"],
    svg: `<path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
<polyline points="16 6 12 2 8 6" />
<line x1="12" y1="2" x2="12" y2="15" />`,
  },
  {
    name: "clone",
    tags: ["duplicate", "copy", "instance"],
    svg: `<rect x="3" y="7" width="12" height="14" rx="2" />
<path d="M9 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" />`,
  },

  // --- Additional common icons ---
  {
    name: "thumbs-down",
    tags: ["dislike", "disapprove", "downvote"],
    svg: `<path d="M17 3v10.5" />
<path d="M17 13.5 13 20.5a1.8 1.8 0 0 1-3.2-1.6l1.5-4.4H5a2 2 0 0 1-2-2.4l1.5-7A2 2 0 0 1 6.5 3H17Z" />`,
  },
  {
    name: "star-half",
    tags: ["rating", "favorite", "half"],
    svg: `<path d="M12 3 14.6 9.2 21.3 9.8 16.2 14.1 17.8 20.7 12 17.1Z" fill="currentColor" stroke="currentColor" />
<path d="M12 3 9.4 9.2 2.7 9.8 7.8 14.1 6.2 20.7 12 17.1Z" />`,
  },
  {
    name: "check-square",
    tags: ["checkbox", "confirmed", "done"],
    svg: `<rect x="3.5" y="3.5" width="17" height="17" rx="2" />
<polyline points="8 12.5 11 15.5 16 9" />`,
  },
  {
    name: "x-square",
    tags: ["checkbox", "cancel", "close"],
    svg: `<rect x="3.5" y="3.5" width="17" height="17" rx="2" />
<line x1="9" y1="9" x2="15" y2="15" />
<line x1="15" y1="9" x2="9" y2="15" />`,
  },
  {
    name: "plus-square",
    tags: ["add", "checkbox", "new"],
    svg: `<rect x="3.5" y="3.5" width="17" height="17" rx="2" />
<line x1="12" y1="8" x2="12" y2="16" />
<line x1="8" y1="12" x2="16" y2="12" />`,
  },
  {
    name: "minus-square",
    tags: ["remove", "checkbox", "subtract"],
    svg: `<rect x="3.5" y="3.5" width="17" height="17" rx="2" />
<line x1="8" y1="12" x2="16" y2="12" />`,
  },
  {
    name: "circle-dot",
    tags: ["radio", "selected", "target"],
    svg: `<circle cx="12" cy="12" r="9" />
<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />`,
  },
  {
    name: "circle-slash",
    tags: ["forbidden", "disabled", "blocked"],
    svg: `<circle cx="12" cy="12" r="9" />
<line x1="5.5" y1="18.5" x2="18.5" y2="5.5" />`,
  },
];
