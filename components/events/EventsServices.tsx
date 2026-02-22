"use client";

export default function EventsServices() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "80px 24px 120px",
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
        What We Do
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#bdbdbd",
          marginBottom: 40,
        }}
      >
        Premium event experiences, tailored to your vision.
      </p>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        <ServiceCard
          title="Private Events"
          desc="Weddings, birthdays, house parties"
          img="https://static.vecteezy.com/system/resources/thumbnails/010/223/234/small_2x/flower-arrangement-for-summer-wedding-made-of-roses-and-green-branches-on-a-dinner-table-in-the-restaurant-glass-and-plates-in-the-restaurant-outside-on-a-windy-day-with-film-grain-effect-free-photo.jpg"
          icon="🎉"
        />

        <ServiceCard
          title="Corporate Events"
          desc="Product launches, office events"
          img="https://wallpapers.com/images/high/corporate-event-1920-x-1080-wallpaper-3aofpuvo59f02ca4.webp"
          icon="🏢"
        />

        <ServiceCard
          title="Public & Brand Events"
          desc="Exhibitions, promotions, shows"
          img="https://www.wordstream.com/wp-content/uploads/2021/07/event-marketing-ideas.jpg"
          icon="🎤"
        />

        <ServiceCard
          title="Drone Shows"
          desc="Aerial light shows & cinematic visuals"
          img="https://t4.ftcdn.net/jpg/05/81/72/89/360_F_581728951_Q3NtzLPjALQt7OkpJi4LBnFiYBzARfTy.jpg"
          icon="🚁"
        />
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  img,
  icon,
}: {
  title: string;
  desc: string;
  img: string;
  icon: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        height: 280,
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.25)", // white default
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        transition:
          "border-color .25s ease, transform .25s ease, box-shadow .25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(245,197,24,0.9)"; // gold hover
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 18px 40px rgba(245,197,24,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.6)";
      }}
    >
      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.85))",
        }}
      />

      {/* content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          padding: 20,
        }}
      >
        <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
        <h3 style={{ fontSize: 20, marginBottom: 4 }}>{title}</h3>
        <p style={{ color: "#d0d0d0", fontSize: 14 }}>{desc}</p>
      </div>
    </div>
  );
}