import React from 'react';

import {
  Slide,
  Appear,
  Heading,
  Layout,
  Table,
  TableHeaderItem,
  TableHeader,
  TableRow,
  TableBody,
  TableItem,
  List,
  ListItem,
  Text
} from 'spectacle';

const summary = () => (
  <Slide >
    <Heading size={4}  textColor="secondary" fit>
      F&RP to the rescue
    </Heading>

    <List ordered margin="">
    <ListItem>Write future-proof code for an ever-changing platform</ListItem>
    <Appear>
    <Text textSize={"2rem"} textColor={"#C3FF87"}>Input: streams of events from the real world</Text>
    </Appear>
    <Appear>
      <Text textSize={"2rem"} textColor={"#49D3DA"}>=> Pure dataflow: plainly visible, readable and traceable</Text>


    </Appear>

    <br />
    <ListItem>Build complex UIs able to support any kind of interaction.</ListItem>
    <div></div>
    <Appear>
    <Text textSize={"2rem"} textColor={"#C3FF87"}>Ouput: streams of commands to affect the real world</Text>
    </Appear>
    <Appear>
    <Text textSize={"2rem"} textColor={"#C3FF87"}>I/O effects in the external world are managed by drivers</Text>
    </Appear>
    <Appear>
      <Text textSize={"2rem"} textColor={"#49D3DA"}>=> Support any kind of Human-computer interaction</Text>


    </Appear>



    </List>

  </Slide>
);

export default summary;
