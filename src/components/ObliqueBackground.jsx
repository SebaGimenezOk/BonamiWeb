export default function ObliqueBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-rose-600"></div>
      <div
        className="absolute inset-0 bg-zinc-900"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)',
        }}
      ></div>
    </div>
  );
}
