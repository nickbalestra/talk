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
  TableItem
} from 'spectacle';

const summary = () => (
  <Slide >
    <Heading size={4}  textColor="secondary" fit>
      Why yet another async middleware ?
    </Heading>
    <br /><br />
    <Layout>
      <Table>
        <TableHeader>
          <Appear>
            <TableRow>
              <TableHeaderItem/>
              <TableHeaderItem>!!Reactive</TableHeaderItem>
              <TableHeaderItem>!!Declarative</TableHeaderItem>
            </TableRow>
          </Appear>
        </TableHeader>
        <TableBody>
          <Appear>
            <TableRow>
              <TableItem textAlign="left"># redux-saga</TableItem>
              <TableItem textColor="#FF73FD">False</TableItem>
              <TableItem textColor="#A8FF60">True</TableItem>
            </TableRow>
          </Appear>
          <Appear>
            <TableRow>
              <TableItem textAlign="left"># redux-observable</TableItem>
              <TableItem textColor="#A8FF60">True</TableItem>
              <TableItem textColor="#FF73FD">False</TableItem>
            </TableRow>
          </Appear>
          <Appear>
            <TableRow>
              <TableItem textAlign="left"># redux-cycles</TableItem>
              <TableItem textColor="#A8FF60">True</TableItem>
              <TableItem textColor="#A8FF60">True</TableItem>
            </TableRow>
          </Appear>
        </TableBody>
      </Table>
    </Layout>
  </Slide>
);

export default summary;
