import { makeKey } from "store"
import ResourceGroup from "./components/ResourceGroup"
import ResourceHero from "./components/ResourceHero"
import { resources } from "./data/resourceInfo"

function Resources() {
  return (
    <>
      <ResourceHero />
      <div className="flex flex-col items-center px-5 py-12 gap-8">
      {resources.map(resource => (
        <ResourceGroup 
          key={makeKey(resource.title)}
          title={resource.title}
          bgImage={resource.bgImage}
          cards={resource.cards}
        />
      ))}
      </div>
    </>
  )
}

Resources.propTypes = {}

export default Resources
