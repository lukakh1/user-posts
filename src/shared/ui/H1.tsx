export default function H1({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <h1 className={`text-3xl font-bold my-4 text-${color}-400`}>{children}</h1>
  );
}
