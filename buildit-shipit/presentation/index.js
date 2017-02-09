// Import React
import React from "react";
import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Image,
  Quote,
  S,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  chromePlugin: require('../assets/chrome-plugin.gif'),
  dinerProfile: require("../assets/diner-profile.png"),
  init: require("../assets/init.png"),
  local: require("../assets/local.png"),
  end: require('../assets/end.jpg'),
  ocarch: require('../assets/oc-arch.png'),
  startpage: require('../assets/startpage.png'),
  livedemomeme: require('../assets/live-demo-meme.jpg'),
  logos: require("../assets/logos.png"),
  modularEmails: require("../assets/modular-emails.png"),
  omgHub: require("../assets/omg-hub.png"),
  registryHome: require("../assets/registry-home.png"),
  restProfile: require("../assets/rest-profile.png"),
  ui: require('../assets/ui.gif')
};

preloader(images);

const theme = createTheme({
  red: "#DA3743",
  redText: '#fff',
  primary: "#F3F2F1",
  secondary: "#333333",
  tertiary: "#603636"
}, {
  primary: "Source Sans Pro",
  secondary: "sans-serif"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        controls={false}
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}>

        <Slide bgColor="red">
          <Heading fit lineHeight={1} textColor="redText">
            Build it. Ship it.
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            Building and deploying front-end components
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading caps size={6} textColor="secondary">Agenda</Heading>
          <List ordered="true">
            <ListItem>Live demo</ListItem>
            <Appear><ListItem>Tools</ListItem></Appear>
            <Appear><ListItem>Architectural Overview</ListItem></Appear>
            <Appear><ListItem>OpenComponents @ OpenTable</ListItem></Appear>
            <Appear><ListItem>Future</ListItem></Appear>
          </List>
        </Slide>

         <Slide bgColor="red">
          <Heading  lineHeight={1} textColor="redText">
            @NickBalestra
          </Heading>
          <Appear>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            Global Platform Team
          </Text>
          </Appear>
          <Appear>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
            London
          </Text>
          </Appear>
        </Slide>

        <Slide bgColor="primary">
          <Heading caps size={6} textColor="secondary">Install OpenComponents</Heading>
          <Code>
           $ npm install --global oc
          </Code>
        </Slide>



        <Slide bgColor="primary">
          <Heading caps size={6} textColor="secondary">Create a component</Heading>
          <Code>
           $ oc init meme-generator
          </Code>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          size={1}
          transition={[""]}
          lang="js"
          code={require("./snippets/package.js")}
          ranges={[
            { loc: [1, 5], title: "package.json" },
            { loc: [5, 13], note: "opencomponent config" },
            { loc: [7, 8], note: "data provider" },
            { loc: [8, 12], note: "view provider" }
          ]}/>

          <CodeSlide
          bgColor="secondary"
          size={1}
          transition={[""]}
          lang="js"
          code={require("./snippets/server.js")}
          ranges={[
            { loc: [0, 3], title: "server.js" }
          ]}/>

          <CodeSlide
          bgColor="secondary"
          size={1}
          transition={[""]}
          lang="js"
          code={require("./snippets/server2.js")}
          ranges={[
            { loc: [0, 0], title: "server.js edited" },
            { loc: [0, 1], title: "imports" },
            { loc: [3, 4], title: "query params" },
            { loc: [7, 12], title: "view model" },
            { loc: [10, 11], title: "static path" }
          ]}/>

          <CodeSlide
          bgColor="secondary"
          size={3}
          transition={[""]}
          lang="js"
          code={require("./snippets/template.js")}
          ranges={[
            { loc: [0, 0], title: "template.html" }
          ]}/>

          <CodeSlide
          bgColor="secondary"
          size={1}
          transition={[""]}
          lang="js"
          code={require("./snippets/package2.js")}
          ranges={[
            { loc: [0, 0], title: "package.json edited" },
            { loc: [5, 7], note: "query paramters" },
            { loc: [7, 13], note: "text" },
            { loc: [13, 19], note: "query" },
            { loc: [22, 23], note: "static assets" }
          ]}/>

          <Slide bgColor="primary" bgImage={images.local}>
          <Heading caps size={6} textColor="secondary">Run locally</Heading>
          <Code>
           $ oc dev . 3030
          </Code>
        </Slide>

        <Slide bgColor="primary">
          <Heading caps size={6} textColor="secondary">Add registry</Heading>
          <Code>
           $ oc add registry https://oc-registry.herokuapp.com/
          </Code>
        </Slide>

        <Slide bgColor="primary">
          <Heading caps size={6} textColor="secondary">Publish</Heading>
          <Code>
           $ oc publish meme-generator
          </Code>
        </Slide>

        <Slide bgColor="primary">
          <Heading caps size={6} textColor="secondary">Consuming it</Heading>
          <Code>
           $ curl https://oc-registry.herokuapp.com/meme-generator/1.X.X/
          </Code>
        </Slide>

         <CodeSlide
          bgColor="secondary"
          size={3}
          transition={[""]}
          lang="js"
          code={require("./snippets/integrate.js")}
          ranges={[
            { loc: [0, 2], title: "client side rendering" }
          ]}/>




        <CodeSlide
          bgColor="secondary"
          size={1}
          transition={[""]}
          lang="js"
          code={require("./snippets/nesting.js")}
          ranges={[
            { loc: [0, 15], title: "Components server-side nesting" },
            { loc: [1, 2], note: "renderComponent for nesting" },
            { loc: [2, 3], note: "rework parameters" },
            { loc: [3, 4], note: "headers forwarding" },
            { loc: [6, 7], note: "pass nested to container's view-model" }
          ]}/>


         <Slide bgColor="red">
          <Heading fit lineHeight={1} textColor="redText">
            Tools
          </Heading>
        </Slide>

        <Slide bgColor="primary" bgImage={images.chromePlugin}>

          <Heading caps size={6} textColor="red" bgColor="primary">Chrome Plugin</Heading>

        </Slide>

         <Slide bgColor="red">
          <Heading fit lineHeight={1} textColor="redText">
            Architectural Overview
          </Heading>
        </Slide>

         <Slide bgColor="primary">
          <Image width="100%" src={images.ocarch}/>
        </Slide>

        <Slide bgColor="red">
          <Heading fit lineHeight={1} textColor="redText">
            OpenComponents @OpenTable
          </Heading>
        </Slide>


         <Slide bgColor="primary">
          <Image width="100%" src={images.startpage} />
        </Slide>

        <Slide bgColor="primary" transition={["fade"]}>
          <Heading caps fit size={6} textColor="secondary" bgColor="primary">+2 years in production</Heading>
        <Appear>
          <Heading caps fit size={6} textColor="red" bgColor="primary">+140 components</Heading>
          </Appear>
          <Appear>
          <Heading caps fit size={6} textColor="secondary" bgColor="primary">Owned by +10 teams</Heading>
          </Appear>
          <Appear>
           <Heading caps fit size={6} textColor="red" bgColor="primary">publishing +5 time/day</Heading>
           </Appear>
           <Appear>
           <Heading caps fit size={6} textColor="secondary" bgColor="primary">used in 18 microsites + emails + external widgets</Heading>
           </Appear>
           <Appear>
           <Heading caps fit size={6} textColor="red" bgColor="primary">Handling Milions requests/day</Heading>
           </Appear>
        </Slide>

        <Slide bgColor="red">
          <Heading fit lineHeight={1} textColor="redText">
            Future
          </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading caps fit size={6} textColor="seconday">Thank you!</Heading>
          <Link href="http://gitter.im/opentable/oc">
            <Text bold  textColor="red">gitter.im/opentable/oc</Text>
          </Link>
          <Link href="http://github.com/opentable/oc"><Text bold  textColor="red">github.com/opentable/oc</Text></Link>
          <br /><br />
          <Link href="http://twitter.com/nickbalestra"><Text bold  textColor="red">@nickbalestra</Text></Link>
        </Slide>



      </Deck>
    );
  }
}
