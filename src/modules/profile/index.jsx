import React from 'react';
import Container from '@/components/containers';
import { Avatar, Banner, User } from './style';
import avatar from '@/assets/images/avatar.png';
import AnimatedBackground from '@/components/ui/backgrounds';
import { CardModel } from '@/components/ui';
import { Grid } from './../spaces/style';

const ProfilePage = ({ data }) => {
  return (
    <Container>
      <Banner>
        <User>
          <Avatar src={avatar} />
          <h2>
            {data.username} <br /> <span>{data.email}</span>
          </h2>
        </User>
        <AnimatedBackground />
      </Banner>
      <Grid>
        {data.arts.map((item) => (
          <CardModel
            data={item}
            key={item._id}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ProfilePage;
