export default function VideoCard({ name, id }) {
  return (
    <div className="bg-emerald-50/40 flex flex-col items-center gap-2 p-4 rounded-lg border-green-50 border-2">
      {name}
      <iframe
        src={`https://www.youtube.com/embed/${id}`}>
      </iframe>
    </div>
  )
}
