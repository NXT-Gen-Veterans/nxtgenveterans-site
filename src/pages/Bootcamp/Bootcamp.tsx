import { makeKey } from "store"
import { youtubeVideos } from "./data/LearningVideos"
import YoutubeEmbed from "./components/YoutubeEmbed"
import StayTuned from "./components/StayTuned"
import ThankYou from "./components/ThankYou"

function Bootcamp() {
  return (
    <>
    <StayTuned />
    <div className="flex flex-col items-center gap-12 px-5 py-10 lg:p-24">
        <h2 className="text-center max-lg:text-3xl">A few videos to get you started</h2>
        <div className="w-full lg:w-[min(100%,60rem)] flex flex-col gap-12 md:gap-20 lg:gap-28">
          {youtubeVideos.map(video => (
            <div key={makeKey(video.title)} className="flex flex-col gap-3">
              <h3 className="max-lg:text-lg">{video.title}</h3>
              <p className="lg:body-btn">{video.description}</p>
              <YoutubeEmbed embedId={video.embedUrl} />
            </div>
          ))}
        </div>
    </div>
    <ThankYou />
    </>
  )
}

Bootcamp.propTypes = {}

export default Bootcamp
