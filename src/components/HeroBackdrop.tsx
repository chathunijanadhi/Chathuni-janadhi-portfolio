export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Background subtle grid pattern */}
      <div className="grid-bg absolute inset-0 opacity-40 dark:opacity-20" />

      {/* Soft Ambient Floating Gradients */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

      {/* Soft Light Purple Aura behind the profile image area on the right */}
      <div className="absolute right-0 top-1/4 h-[30rem] w-[30rem] -translate-y-12 rounded-full bg-gradient-to-br from-accent/20 via-purple-500/12 to-rose-accent/10 blur-[80px]" />

      <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />

      {/* Minimal Delicate Background Rings */}
      <svg
        className="absolute inset-x-0 bottom-6 mx-auto h-52 w-full max-w-5xl opacity-20 dark:opacity-15"
        viewBox="0 0 800 240"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <ellipse cx="400" cy="120" rx="220" ry="50" transform="rotate(8 400 120)" />
          <ellipse cx="400" cy="120" rx="300" ry="70" transform="rotate(-8 400 120)" />
        </g>
      </svg>
    </div>
  )
}
