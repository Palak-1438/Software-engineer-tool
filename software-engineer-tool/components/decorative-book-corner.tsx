export function DecorativeBookCorner() {
  return (
    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
      <div
        className="absolute top-0 right-0 w-20 h-20 bg-[hsl(30,80%,60%)]"
        style={{
          transform: "rotate(45deg) translate(10px, -30px)",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-16 h-16 bg-[hsl(30,50%,90%)]"
        style={{
          transform: "rotate(45deg) translate(10px, -25px)",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  )
}
