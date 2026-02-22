type Props = {
  title: string;
  items: string[];
};

export default function CategoryList({ title, items }: Props) {
  return (
    <section>
      <h2>{title}</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              padding: "10px 14px",
              border: "1px solid #333",
              borderRadius: 6,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
