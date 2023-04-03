import React from 'react';
import MediaQuery from 'react-responsive';
import dynamic from 'next/dynamic';

const MobileOnRes = (props) => (
  <MediaQuery
    {...props}
    maxWidth={767}
  />
);
const MobileOffRes = (props) => (
  <MediaQuery
    {...props}
    minWidth={768}
  />
);
const LittleMobileOnRes = (props) => (
  <MediaQuery
    {...props}
    maxWidth={540}
  />
);
const LittleMobileOffRes = (props) => (
  <MediaQuery
    {...props}
    minWidth={541}
  />
);
const DesktopOnRes = (props) => (
  <MediaQuery
    {...props}
    maxWidth={1440}
  />
);
const DesktopOffRes = (props) => (
  <MediaQuery
    {...props}
    minWidth={1441}
  />
);
const LittleDesktopOnRes = (props) => (
  <MediaQuery
    {...props}
    maxWidth={1280}
  />
);
const LittleDesktopOffRes = (props) => (
  <MediaQuery
    {...props}
    minWidth={1281}
  />
);
const TabletOffRes = (props) => (
  <MediaQuery
    {...props}
    minWidth={1025}
  />
);
const TabletOnRes = (props) => (
  <MediaQuery
    {...props}
    maxWidth={1024}
  />
);
export const TabletOff = dynamic(() => Promise.resolve(TabletOffRes), {
  ssr: false,
});
export const MobileOn = dynamic(() => Promise.resolve(MobileOnRes), {
  ssr: false,
});
export const MobileOff = dynamic(() => Promise.resolve(MobileOffRes), {
  ssr: false,
});
export const LittleMobileOn = dynamic(
  () => Promise.resolve(LittleMobileOnRes),
  {
    ssr: false,
  }
);
export const LittleMobileOff = dynamic(
  () => Promise.resolve(LittleMobileOffRes),
  {
    ssr: false,
  }
);
export const DesktopOn = dynamic(() => Promise.resolve(DesktopOnRes), {
  ssr: false,
});
export const DesktopOff = dynamic(() => Promise.resolve(DesktopOffRes), {
  ssr: false,
});
export const LittleDesktopOn = dynamic(
  () => Promise.resolve(LittleDesktopOnRes),
  {
    ssr: false,
  }
);
export const LittleDesktopOff = dynamic(
  () => Promise.resolve(LittleDesktopOffRes),
  {
    ssr: false,
  }
);
export const TabletOn = dynamic(() => Promise.resolve(TabletOnRes), {
  ssr: false,
});
