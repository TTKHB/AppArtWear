import React, {createContext, useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
const ScrollerContext = createContext();

const ScrollContext = ({children}) => {
  const [ScrollingWithId, setScrollingWithId] = useState(0);
  const [RequestRefresing, setRequestRefresing] = useState(false);
  return (
    <ScrollerContext.Provider
      value={{
        ScrollingWithId,
        setScrollingWithId,
        RequestRefresing,
        setRequestRefresing,
      }}>
      {children}
    </ScrollerContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollerContext);

export default ScrollContext;
