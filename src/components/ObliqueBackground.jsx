export default function ObliqueBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[var(--bon-naranja)]"></div>
      <div
        className="absolute inset-0 bg-[var(--bon-beige)]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 100%)',
        }}
      ></div>

    </div>
  );
}

