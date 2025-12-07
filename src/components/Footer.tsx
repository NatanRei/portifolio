import { Heart } from "phosphor-react";

export function Footer() {
  return (
    <footer className="w-full h-14 flex items-center justify-center z-200 bg-background gap-1 text-primary">
      2025 &copy; Desenvolvido com{" "}
      <Heart className="mx-0 my-1.5 text-primary dark:text-neutral-100" /> por NTN
    </footer>
  );
}
