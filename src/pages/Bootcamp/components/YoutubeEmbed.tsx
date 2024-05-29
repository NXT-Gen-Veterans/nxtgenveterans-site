
interface YoutubeEmbedProps {
    embedId: string;
}

function YoutubeEmbed({embedId}: YoutubeEmbedProps) {
  return (
    <div className="p-1 md:p-5 flex justify-center items-center border-2 border-black">
        <div className="relative aspect-video w-full">
            <iframe
                width={560}
                height={315}
                src={`https://www.youtube.com/embed/${embedId}`}
                className="absolute top-0 left-0 bg-black w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    </div>
  )
}

export default YoutubeEmbed