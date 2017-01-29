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
  redux: require("../assets/redux.png"),
  futurama: require("../assets/futurama.jpg"),
  logo: require("../assets/formidable-logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#00AAFF"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary" notes={`
            Introduction slide
          `}>
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

          <Slide transition={["slide"]} bgColor="black" notes={`
            redux sounds like threeducks
          `}>
            <Image src={images.duck} margin="0px auto 40px" height="128px"/>
            <Image src={images.duck} margin="0px auto 40px" height="128px"/>
            <Image src={images.duck} margin="0px auto 40px" height="128px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              3 ducks what?
            </Heading>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="white" notes={`
            Ok, let's talk about redux!
            Just to know, how many of you use redux?
          `}>
            <Heading margin="0 0 40px 0" caps fit textColor="#764ABC" size={1}>
              Ok, Let's talk about
             </Heading>
             <Image src={images.reduxLogo.replace("/", "")} margin="0px auto 40px" width="400px"/>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary" notes={`
            Redux is a state management library, evolving the idea of the flux pattern.
            It's agnostic in the sense that it doesn't come with a view provider, nor it does tie to any specific frontend framework. Bindings are available for multiple frameworks, people use it with react, angular, ember.
            Thanks to its completely predictable behavior is possible to implement things like logging, hot reloading, time travel, universal apps, record and replay.
            Because of this characteristics redux make it easer to manage and reason about state in your app. It follow three principles:
            - Single source of truth
            - State is read-only
            - Changes are made with pure functions
            Let's see how we could visually represent it.
          `}>
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

          <Slide transition={["spin", "zoom"]} bgColor="black" notes={`
            Differently then flux, with with redux you have a single store.
            Internally the store have few concepts: state, reducer and middlewares.
            Actions get dispatched through middleares (similar to how requests/responses get passed to express middlewares), before being passed to reducer, that will emit a new state.
            To create a redux store is pretty simple...
          `}>
            <Image width="100%" src={images.redux.replace("/", "")}/>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary"  notes={`
            ...we invoke the createStore factory passing it a reducer, and optionally an initial state and a a store enhancer like for example middlewarea.
            The main API are:
            - getState
            it will return the current state
            - dispatch
            it will invoke the reducer passing it the action (together with the current state) and will emit return a new state
            - subscribe
            we can add a listener to be called every time a new state get generated
          `}>
            <Heading size={1} caps textColor="tertiary">
              API
            </Heading>
            <Appear>
              <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px">
                createStore(reducer, [preloadedState], [enhancer])
             </Text>
            </Appear>
            <Appear>
              <Text bold textColor="tertiary" textSize="1.5em" margin="20px 0px 0px">
                Store.getState()
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>
                Store.dispatch(action)
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>
                Store.subscribe(listener)
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={`
            I mentioned about dispatching actions, let quickly see how they look likes:
            Nothing to fancy, simply POJOs, plain old javasrcipt objects. The only mandatory key that they need to have is 'type'. In this exaple it also carry a payload.
          `}>
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

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes={`
            When we dispacth actions, behind the scene the store simply invoke it's reducer with the current state and the action as arguments.
            Reducers are pure function, normally are implemented as switches to match against action types and reduce the state accordingly.
          `}>
            <Heading size={1} caps textColor="tertiary">
              Reducer
            </Heading>
            <Appear>
              <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>
                (state, action) => state
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary"  notes={`
            Do some of you use elm? (Btw if you don't you should give it a try, its a pure functional language for the browser and is awesome). It's so awesome that many of the idea you see in redux where ported over from elm. For example actions (now called messages in elm) are simply build around union types, (type...) and in elm the switch statement is the only way to unwrap their payload,...
          `}>
            <Heading caps fit>Sounds familiar?</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="primary" bgColor="black" margin={10} padding={10}>
                  checkout elm-lang.org
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="primary" bgImage={images.futurama.replace("/", "")} notes={`
            mmm...yes
          `}>

          <Appear>
          <div>
             <br />
              <Text textColor="tertiary" textSize="2em" caps bold bgColor="black">
                Not sure if it works with async
              </Text>
              <br /><br /><br /><br />
              <Text textSize="2em" textColor="tertiary" caps bold bgColor="black">
                (state, action) => state
              </Text>
              </div>
          </Appear>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="black">
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
                dispatch(action);
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

          <Slide transition={["spin", "zoom"]} bgColor="white">
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

          <Slide transition={["spin", "zoom"]} bgColor="black" bgImage={images.horseduck.replace("/", "")} />

          <Slide transition={["spin", "zoom"]} bgColor="white">
            <Heading margin="0 0 40px 0" caps fit textColor="#51D3D9" size={1}>
              Ok, Let's talk about
            </Heading>
            <Image src={images.cycleLogo} margin="0px auto 40px" height="400px"/>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="white">
            <Heading size={1} caps fit textColor="primary">
              Cleaner Code
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="secondary">
                Agnostic
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="secondary">
                DataFlow
              </Heading>
            </Appear>
          </Slide>


        </Deck>
    );
  }
}
