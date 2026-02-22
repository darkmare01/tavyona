type Props = {
  title: string;
  description: string;
};

export default function ItemCard({ title, description }: Props) {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: 10,
        padding: 16,
        width: 220,
      }}
    >
      <h3 style={{ marginBottom: 6 }}>{title}</h3>
      <p style={{ fontSize: 14, opacity: 0.7 }}>{description}</p>
    </div>
  );
}
