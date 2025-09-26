export default function H1({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <h1
      className={`text-6xl font-bold my-3 ${color} text-center tracking-tight font-serif`}
    >
      {children}
    </h1>
  );
}
