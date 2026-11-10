
type PatienDetailItemProps = {
    label: string;
    data: string;
}

export default function PatienDetailItem({ label, data }: PatienDetailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">{label}
    <span className="font-normal normal-case text-gray-600">{data}</span>
    </p>
  )
}
