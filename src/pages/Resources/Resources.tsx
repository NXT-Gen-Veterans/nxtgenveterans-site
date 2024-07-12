import { SyntheticEvent, useState } from "react";
import { makeKey } from "store"
import ResourceGroup from "./components/ResourceGroup"
import ResourceHero from "./components/ResourceHero"
import { resources } from "./data/resourceInfo"
import { Stack } from "@mui/material"

function Resources() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleToggleExpanded = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => setExpanded(newExpanded ? panel : false);

  return (
    <>
      <ResourceHero />
      <Stack component="section" alignItems={'center'} spacing={4} sx={{ px: 2.5, py: 6 }}>
        {resources.map(resource => (
          <ResourceGroup 
            key={makeKey(resource.title)}
            title={resource.title}
            bgImage={resource.bgImage}
            cards={resource.cards}
            expanded={expanded}
            toggleExpanded={handleToggleExpanded}
          />
        ))}
      </Stack>
    </>
  )
}

export default Resources
