export const className = `font-semibold text-2xl font-Montserrat bg-background p-2 rounded-md border-primary border-2 hover:translate-y-[-0.25em] hover:translate-x-[-0.25em] block active:bg-secondary active:translate-x-[-0.18em]
active:translate-y-[-0.18em] hover:bg-secondary transition-all duration-300 shadow-sm shadow-primary`;
export function Button({ children }: { children: string }) {
  return (
    <button
      className={className}
    >
      {children}
    </button>
  );
}
