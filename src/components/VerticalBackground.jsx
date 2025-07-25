export default function VerticalBackground() {
    return (
      <div className="fixed inset-0 -z-10">
        {/* Capa de fondo completa */}
        <div className="absolute inset-0 bg-[var(--bon-rojo)]"></div>
  
        {/* Capa vertical que cubre el 50% izquierdo */}
        <div
          className="absolute inset-0 bg-[var(--bon-azul)]"
          style={{
            clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)',
          }}
        ></div>
      </div>
    );
  }
  


