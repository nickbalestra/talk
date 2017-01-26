// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  duck: require("../assets/duck.png"),
  bigDuck: 'http://i.imgur.com/lFeTr.jpg',
  redux: require("../assets/redux.png"),
  futurama: 'http://cdn.pcwallart.com/images/futurama-fry-gif-wallpaper-4.jpg',
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  standards: require("../assets/standards.png")
};

preloader(images);

const theme = createTheme({
  primary: "#00AAFF"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps>
              Dealing with async
            </Heading>
            <Heading size={1} fit caps >
              actions in Redux
            </Heading>
            <Heading size={1} fit caps textColor="black">
              using Functional Reactive Programming
            </Heading>

          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.duck} margin="0px auto 40px" height="128px"/>
            <Image src={images.duck} margin="0px auto 40px" height="128px"/>
            <Image src={images.duck} margin="0px auto 40px" height="128px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              3 ducks what?
            </Heading>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary" >

              <Heading size={1} caps fit textColor="primary">
                State management
              </Heading>

            <Appear fid="1">
              <Heading size={1} caps fit textColor="secondary">
                Agnostic
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="secondary">
                and predictable
              </Heading>
            </Appear>
          </Slide>


           <Slide transition={["spin", "zoom"]} bgColor="black">
           <Heading size={1} caps fit textColor="tertiary">
                action => state
              </Heading>
            <Image width="100%" src={images.redux}/>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
             <Heading size={1} caps textColor="tertiary">
                API
              </Heading>
               <Appear>
            <Text textColor="tertiary"  textSize="1.5em" margin="20px 0px 0px">
              createStore(reducer, [preloadedState], [enhancer])
             </Text>
</Appear>




              <Appear>
                <Text bold textColor="tertiary"  textSize="1.5em" margin="20px 0px 0px">
              Store.getState()
             </Text>
              </Appear>
              <Appear><Text textColor="tertiary"  textSize="1.5em" margin="20px 0px 0px" bold>Store.dispatch(action)</Text></Appear>
              <Appear><Text textColor="tertiary"  textSize="1.5em" margin="20px 0px 0px" bold>Store.subscribe(listener)</Text></Appear>

          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" >
          <Heading size={1} caps textColor="tertiary">
                Action
              </Heading>
              <Appear><div>
           <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>
              {"{"} type: 'INCREMENT', payload: 1 {"}"}
             </Text></div>
             </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" >
          <Heading size={1} caps textColor="tertiary">
                Reducer
              </Heading>
               <Appear>
            <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>
              (state, action) => state
             </Text>
              </Appear>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Sounds familiar?</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" bgColor="black" margin={10} padding={10}>
                  checkout elm-lang.org
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="primary" bgImage={images.futurama} bgDarken={0.55}>
          <Heading size={1} caps textColor="tertiary">
                wait!
              </Heading>
              <Appear>
              <Heading size={1} caps textColor="tertiary">
                What about async?
              </Heading>
               </Appear>
          </Slide>
          <Slide transition={["spin","zoom"]} bgColor="black">
             <Heading size={1} caps textColor="primary">
                Problem
              </Heading>
              <Appear>
               <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>do(async)
             </Text>
             </Appear>
                           <Appear>
               <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>.then(dispatch(action));
             </Text>
             </Appear>
             <Appear>
             <Text textColor="primary" textSize="1.5em" margin="20px 0px 0px" bold>dispatch(asyncAtion);
             </Text>
             </Appear>
             <Appear>
             <Text textColor="primary" textSize="1.5em" margin="20px 0px 0px" bold>do(async)
             </Text>
             </Appear>
             <Appear>
             <Text textColor="primary" textSize="1.5em" margin="20px 0px 0px" bold>.then(dispatch(action));
             </Text>
             </Appear>
          </Slide>

          <Slide transition={["spin","zoom"]} bgColor="white">
             <Heading size={1} caps textColor="primary">
                Solution(s)
              </Heading>
              <Appear>
               <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>redux-thunk, redux-promise, redux-async-queue, redux-debounce, redux-async, redux-await, redux-async-connect, redux-loop, redux-loop,...
             </Text>
             </Appear>
          </Slide>

           <Slide transition={["fade"]} bgColor="white">
             <Image width="60%" src={images.standards}/>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="secondary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
