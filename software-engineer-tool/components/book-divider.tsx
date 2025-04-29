export function BookDivider() {
  return (
    <div className="flex items-center my-6">
      <div className="flex-grow h-px bg-[hsl(30,15%,80%)]"></div>
      <div className="mx-4 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: i === 0 ? "hsl(200, 65%, 55%)" : i === 1 ? "hsl(30, 94%, 34%)" : "hsl(12, 60%, 60%)",
            }}
          ></div>
        ))}
      </div>
      <div className="flex-grow h-px bg-[hsl(30,15%,80%)]"></div>
    </div>
  )
}
