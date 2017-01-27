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
  horseduck: require("../assets/horseduck.jpg"),
  duck: require("../assets/duck.png"),
  reduxLogo: require("../assets/redux-logo.png"),
  cycleLogo: require("../assets/cycle-logo.svg"),
  kat: require("../assets/kat.png"),
  bigDuck: 'http://i.imgur.com/lFeTr.jpg',
  redux: require("../assets/redux.png"),
  futurama: 'http://cdn.pcwallart.com/images/futurama-fry-gif-wallpaper-4.jpg',
  logo: require("../assets/formidable-logo.svg"),
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

          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.duck} margin="0px auto 40px" height="128px"/>
            <Image src={images.duck} margin="0px auto 40px" height="128px"/>
            <Image src={images.duck} margin="0px auto 40px" height="128px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              3 ducks what?
            </Heading>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="white">
            <Heading margin="0 0 40px 0" caps fit textColor="#764ABC" size={1}>
              Let's talk about
             </Heading>
             <Image src={images.reduxLogo} margin="0px auto 40px" width="400px"/>
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
            <Image width="100%" src={images.redux}/>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
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
            <Appear>
              <Text textColor="tertiary"  textSize="1.5em" margin="20px 0px 0px" bold>
                Store.dispatch(action)
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary"  textSize="1.5em" margin="20px 0px 0px" bold>
                Store.subscribe(listener)
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" >
            <Heading size={1} caps textColor="tertiary">
              Action
            </Heading>
            <Appear>
              <div>
                <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>
                  {"{"} type: 'INCREMENT', payload: 1 {"}"}
                </Text>
              </div>
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

          <Slide transition={["spin", "zoom"]} bgColor="primary" bgImage={images.futurama}>
            <Layout>
              <Appear>
                <Fill>
                  <Heading size={4} caps textColor="black" bgColor="white" margin={10} padding={10}>
                    (state, action) => state
                  </Heading>
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["spin","zoom"]} bgColor="black">
            <Heading size={1} caps textColor="primary">
              Problem
            </Heading>
            <Appear>
              <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>
               do(async)
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>
                .then(dispatch(action));
             </Text>
            </Appear>
            <Appear>
              <Text textColor="primary" textSize="1.5em" margin="20px 0px 0px" bold>
                dispatch(asyncAtion);
              </Text>
            </Appear>
            <Appear>
              <Text textColor="primary" textSize="1.5em" margin="20px 0px 0px" bold>
                do(async)
              </Text>
            </Appear>
            <Appear>
              <Text textColor="primary" textSize="1.5em" margin="20px 0px 0px" bold>
                .then(dispatch(action));
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["spin","zoom"]} bgColor="white">
            <Heading size={1} caps textColor="primary">
              Solutions
            </Heading>
            <Appear>
              <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                redux-thunk, redux-promise, redux-async-queue, redux-debounce, redux-async, redux-await, redux-async-connect, redux-loop, redux-loop, redux-observables,..
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="secondary">
              Or, we could just use
            </Heading>
            <Heading caps fit size={1} textColor="tertiary">
              Cycle.js
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px" Radius="100%"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="black" bgImage={images.horseduck}></Slide>

          <Slide transition={["spin", "zoom"]} bgColor="white">
            <Heading margin="0 0 40px 0" caps fit textColor="#51D3D9" size={1}>
              Let's talk about
            </Heading>
            <Image src={images.cycleLogo} margin="0px auto 40px" height="400px"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
