const PATHS = {
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18" />
      <path d="M8 2.5v4M16 2.5v4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6" />
      <path d="M16 5.2c1.7.4 3 2 3 3.8 0 1.8-1.3 3.4-3 3.8" />
      <path d="M21 20c0-3-1.9-5.2-4.5-5.8" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.3" />
      <circle cx="5" cy="18" r="2.3" />
      <circle cx="19" cy="18" r="2.3" />
      <path d="M10.3 6.6 6.7 16M13.7 6.6l3.6 9.4M7.3 18h9.4" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  package: (
    <>
      <path d="M12 3 21 7.5v9L12 21 3 16.5v-9Z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v9" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6.5h11v9h-11z" />
      <path d="M13.5 10h4l3 3v2.5h-7z" />
      <circle cx="7" cy="18" r="1.7" />
      <circle cx="16.5" cy="18" r="1.7" />
    </>
  ),
  copy: (
    <>
      <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
      <path d="M15.5 8.5V6a2 2 0 0 0-2-2H5.5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2H8" />
    </>
  ),
  check: <path d="M4 12.5 9.5 18 20 6" />,
  phone: (
    <path d="M5.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  whatsapp: (
    <path d="M6 18.5 3.5 20.5 4.5 16A8.4 8.4 0 1 1 8 19Zm-.3-2.3.3.2a6.8 6.8 0 1 0-2.9-3l.2.3-.7 2.5ZM9 7.7c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.7 1.8c.1.2 0 .4-.1.5l-.6.7c-.1.2-.2.3 0 .6.5.9 1.4 1.8 2.3 2.3.3.2.4.1.6 0l.7-.6c.1-.1.3-.2.5-.1l1.8.7c.4.1.4.3.4.5v.5c0 .2 0 .4-.4.6-.5.3-1.3.6-2.1.3a8 8 0 0 1-4.9-4.9c-.3-.8 0-1.6.3-2.1Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
};

export default function Icon({ name, size = 20, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
