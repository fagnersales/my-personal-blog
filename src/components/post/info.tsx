interface PostInfoProps {
  postedAt: string
  views: number
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export function PostInfo(props: PostInfoProps) {
  return (
    <div>
      <h2 className="text-gray-600">{formatDate(props.postedAt)}</h2>
    </div>
  )
}