const colors = {
  GET: "bg-blue-800 border-blue-500",
  POST: "bg-green-800 border-green-500",
  PATCH: "bg-yellow-800 border-yellow-500",
  PUT: "bg-orange-800 border-orange-500",
  DELETE: "bg-red-800 border-red-500",
};

export default function Route({ method, children }) {
  return (
    <div className="flex items-center gap-2 my-2">
      <span
        className={`border rounded-full px-3 py-1 text-white text-sm font-medium ${colors[method]}`}
      >
        {method}
      </span>
      <pre>{children}</pre>
    </div>
  );
}
