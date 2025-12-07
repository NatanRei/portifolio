import { cn } from "@/lib/utils";

export function Paragraph({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <p
      className={cn(
        "bg-[linear-gradient(60deg,#f7f7f7_0%,#ffffff_50%,#fffef5_100%)]",
        "dark:bg-[linear-gradient(60deg,rgba(22,22,22,1)_0%,rgba(34,34,34,1)_50%,rgba(22,22,22,1)_100%)]",
        "shadow-[0.4rem_0.4rem_0.7rem_#d3d3d3,-0.25rem_-0.2rem_0.6rem_#fefef5]",
        "dark:shadow-[0.4rem_0.4rem_0.7rem_#000,-0.25rem_-0.2rem_0.6rem_#1a1a1a]",
        "p-8 rounded-lg text-lg w-[27%] my-12 ml-28 mr-28 h-auto",
        "w-full md:w-[90%] lg:w-[80%] xl:w-[35%]"
      )}
      style={style}
    >
      <span className="prose prose-invert dark:prose-invert max-w-none">
        {children}
      </span>
    </p>
  );
}
