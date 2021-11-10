import React, { Dispatch } from 'react';

export interface SectionProps {
  setScrollTarget: Dispatch<React.SetStateAction<string>>;
  handleSectionChange: (
    inView: boolean,
    entry: IntersectionObserverEntry,
  ) => void;
}
