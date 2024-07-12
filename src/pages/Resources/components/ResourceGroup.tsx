import ResourceCard from "./ResourceCard";
import { ResourceGroupType } from "../data/resourceInfo";
import { makeKey } from "store";
import { Accordion, AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { H3 } from "@/components/Headings/Headings";
import { SyntheticEvent } from "react";

interface ResourceGroupComponentType extends ResourceGroupType {
  toggleExpanded: (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => void;
  expanded: string | boolean;
}

function ResourceGroup({title, bgImage, cards, toggleExpanded, expanded}: ResourceGroupComponentType) {
  return (
    <Accordion
      disableGutters
      onChange={toggleExpanded(title)}
      expanded={expanded === title}
      sx={{
        width: { xs: '100%', sm: 'min(70%, 60rem)' },
        color: 'secondary.main',
        borderRadius: '1.2rem',
        "&::before": {
          display: 'none',
        },
        "&:last-child, &:first-of-type": {
          borderRadius: '1.2rem',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDropDown color="secondary" fontSize="large" />}
        aria-controls={`${title}-group`}
        id={`${title}-header`}
        sx={{
          bgcolor: 'primary.main',
          borderRadius: expanded === title ? '1.2rem 1.2rem 0 0' : '1.2rem',
        }}
      >
        <H3>{title}</H3>
      </AccordionSummary>
      <AccordionDetails sx={{
        border: '2px solid',
        borderColor: 'primary.main',
        borderRadius: '0 0 1.2rem 1.2rem',
      }}>
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          spacing={{ xs: 2.5, md: 5 }}
          p={{ xs: 2.5, md: 5 }}
          useFlexGap
          justifyContent={'center'}
          alignItems={'space-between'}
        >
          {cards.map(card => (
            <ResourceCard
              key={makeKey(card.title)}
              title={card.title}
              link={card.link}
              description={card.description}
              bgImage={bgImage}
            />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}

export default ResourceGroup