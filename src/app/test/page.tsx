"use client"

export default function Test() {
  return (
    <>
      <style jsx global>{`
        html { scroll-snap-type: y mandatory; }
      `}</style>
      <div style={{ height: '100vh', scrollSnapAlign: 'start', background: 'red' }}>1</div>
      <div style={{ height: '100vh', scrollSnapAlign: 'start', background: 'blue' }}>2</div>
      <div style={{ height: '100vh', scrollSnapAlign: 'start', background: 'green' }}>3</div>
    </>
  );
}