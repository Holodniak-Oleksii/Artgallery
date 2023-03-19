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
            <BlueButton white="true">Contact us</BlueButton>
          </Contact>
          <List>
            <li>Home</li>
            <li>Spaces</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </List>
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
        </Flex>
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
