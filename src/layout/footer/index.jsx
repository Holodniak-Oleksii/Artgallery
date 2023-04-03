import Container from '@/components/containers';
import { BlueButton } from '@/components/ui';
import Image from 'next/image';
import React from 'react';
import Wave from 'react-wavify';

import { Wrapper, Flex, Logo, Address, List, Contact } from './style';

import logo from '@/assets/icons/logo-white.svg';
import { Drop } from '@/modules/home/components/the-best/style';
import {
  IconPinterest,
  IconTwitter,
  IconInstagram,
  IconYouTube,
} from '@/components/icons';
import {
  LittleMobileOff,
  MobileOff,
  MobileOn,
  TabletOff,
  TabletOn,
} from '@/helpers/responsive';

const Footer = () => {
  const color = [
    {
      color: '#9ec2ff',
      amplitude: 20,
      speed: 0.3,
      points: 5,
    },
    { color: '#699df7', amplitude: 18, speed: 0.2, points: 3 },
    { color: '#4788FA', amplitude: 19, speed: 0.3, points: 4 },
  ];
  return (
    <Wrapper>
      <TabletOn>
        <List>
          <li>Home</li>
          <li>Spaces</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </List>
      </TabletOn>
      <Container>
        <Flex>
          <Contact>
            <Logo>
              <Image
                src={logo}
                alt="logo"
              />
              ARTGALLERY
            </Logo>
            <LittleMobileOff>
              <BlueButton white="true">Contact us</BlueButton>
            </LittleMobileOff>
          </Contact>
          <MobileOn>
            <Address>
              <a href="tel:380921822123">+380921822123</a>
              <a href="mailto:support@gmail.com">support@gmail.com</a>
              <span>Los Angeles 232424 USA</span>
            </Address>
          </MobileOn>
          <TabletOff>
            <List>
              <li>Home</li>
              <li>Spaces</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </List>
          </TabletOff>
          <MobileOff>
            <List>
              <li>
                <IconInstagram />
              </li>
              <li>
                <IconTwitter />
              </li>
              <li>
                <IconPinterest />
              </li>
              <li>
                <IconYouTube />
              </li>
            </List>
            <Drop className="drop">
              <Address>
                <a href="tel:380921822123">+380921822123</a>
                <a href="mailto:support@gmail.com">support@gmail.com</a>
                <span>Los Angeles 232424 USA</span>
              </Address>
            </Drop>
          </MobileOff>
        </Flex>
        <MobileOn>
          <List>
            <li>
              <IconInstagram />
            </li>
            <li>
              <IconTwitter />
            </li>
            <li>
              <IconPinterest />
            </li>
            <li>
              <IconYouTube />
            </li>
          </List>
        </MobileOn>
      </Container>
      {color.map((item, i) => (
        <Wave
          key={i}
          className="wave"
          fill={item.color}
          paused={false}
          options={{
            height: 40,
            amplitude: item.amplitude,
            speed: item.speed,
            points: item.points,
          }}
        />
      ))}
    </Wrapper>
  );
};

export default Footer;
