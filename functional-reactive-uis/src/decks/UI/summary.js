import React from 'react';

import {
  Slide,
  Heading,
  Appear,
  List,
  ListItem
} from 'spectacle';

const summary = () => (
  <Slide >
    <Heading margin="20px 0" size={1}  textColor="secondary" textAlign="">
      Summary
    </Heading>
     <List ordered margin="40px 0 0 22%">
    <ListItem>UIs are more then GUIs</ListItem>
    <ListItem>UIs are cyclic patterns</ListItem>
    <ListItem>UIs are asynchronous</ListItem>
    <ListItem>UIs are functions</ListItem>
    </List>
  </Slide>
);

export default summary;
