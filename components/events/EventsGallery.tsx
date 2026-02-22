"use client";

export default function EventsGallery() {
  const images = [
    "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?q=80&w=1200&auto=format&fit=crop", // wedding decor
    "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1200&auto=format&fit=crop", // corporate stage
    "https://images.unsplash.com/photo-1515165562835-c4c1b0c7b1c8?q=80&w=1200&auto=format&fit=crop", // crowd concert
    "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1200&auto=format&fit=crop", // venue setup
    "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1200&auto=format&fit=crop", // drone lights
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop", // decor theme
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop", // stage lights
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop", // fireworks event
  ];

  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "100px 24px 120px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        Our Work in Action
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#bdbdbd",
          marginBottom: 40,
        }}
      >
        A glimpse of events we’ve executed across formats.
      </p>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              height: 220,
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.25)", // white default
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition:
                "border-color .25s ease, transform .25s ease, box-shadow .25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(245,197,24,0.9)"; // gold hover
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 16px 30px rgba(245,197,24,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* subtle overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.4))",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}