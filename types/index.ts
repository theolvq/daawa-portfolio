import React, { Dispatch, SetStateAction } from 'react';

export interface SectionProps {
  setScrollTarget: Dispatch<SetStateAction<string>>;
  handleSectionChange: (
    inView: boolean,
    entry: IntersectionObserverEntry,
  ) => void;
}
