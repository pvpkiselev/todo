import { useState } from 'react';

const useTabs = <T>(initialValue: T) => {
  const [selectedTab, setSelectedTab] = useState<T>(initialValue);

  const selectTab = (tab: T) => {
    setSelectedTab(tab);
  };

  return { selectedTab, selectTab };
};

export default useTabs;
