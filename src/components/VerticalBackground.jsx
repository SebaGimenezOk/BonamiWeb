export default function VerticalBackground() {
    return (
      <div className="fixed inset-0 -z-10">
        {/* Capa de fondo completa */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.7)_100%)]" />

       <div className="bg-[url('/dark2.jpg')] bg-cover bg-center bg-no-repeat min-h-screen" > </div>
       
       
        {/* <div className="absolute inset-0 bg-[var(--bon-negro)]"></div> */}
  
        {/* Capa vertical que cubre el 50% izquierdo */}
        {/* <div
          className="absolute inset-0 bg-[var(--bon-negrosuave)]"
          style={{
            clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)',
          }}
        ></div> */}
      </div>
    );
  }
  


