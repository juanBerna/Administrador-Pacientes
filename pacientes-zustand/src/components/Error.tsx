
export default function Error({ children }: { children: React.ReactNode }) {
  return (
      <p className="text-center bg-red-600 text-sm">{children}</p>
  )
}
