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
  Code,
  Markdown,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "../theme";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("../theme/index.css");
require("./base.css");


const images = {
  backtothefuture: require("../assets/backtothefuture.jpg"),
  horseduck: require("../assets/horseduck.jpg"),
  table: require("../assets/table.png"),
  threeDucks:  require("../assets/3ducks.png"),
  love:  require("../assets/love.png"),
  duck: require("../assets/duck.png"),
  quiquoqua: require("../assets/qui-quo-qua.jpg"),
  avatar: require("../assets/avatar.png"),
  reduxLogo: require("../assets/redux-logo.png"),
  cycleLogo: require("../assets/cycle-logo.svg"),
  kat: require("../assets/kat.png"),
  redux: require("../assets/redux.png"),
  futurama: require("../assets/futurama.jpg"),
  logo: require("../assets/formidable-logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#00AAFF",
  secondary: "#222",
  tertiary: "#aaa",
  quartenary: "#00AAFF"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={[ 'slide', 'fade' ]} transitionDuration={500}>

          <Slide transition={["slide", "fade"]} bgColor="white" notes={`
            Introduction slide
          `}>
           <Heading size={1} fit caps textColor="secondary">
      Redux Cycles
    </Heading>
    <Heading size={2} fit textColor="tertiary">
      Composing async actions in Redux using F&RP
    </Heading>

    <br />

    <Link href="http://nick.balestra.ch/talk/3-async-ducks">
      nick.balestra.ch/talk/redux-cycles
    </Link>
          </Slide>


          <Slide transition={["spin", "zoom"]} bgColor="white" notes={`
            Introduction slide
          `}>
          <Image width="100px" src={images.avatar.replace("/", "")} />
           <Heading size={1} textSize="1em" textColor="secondary" margin="10px 0">
      Nick Balestra
    </Heading>
    <Heading size={2} textSize="1em" textColor="tertiary">
      Life is an npm install
    </Heading>
          </Slide>





          <Slide transition={["slide"]} bgColor="white" notes={`
            Ok, let's talk about redux!
            Just to know, how many of you use redux?
          `}>
            <Code>
              npm install redux
             </Code>

          </Slide>

           <Slide transition={["slide"]} bgColor="white" notes={`
            mmm sometime npm install fail, but nope we don't get three ducks
          `}>
            <Image src={images.threeDucks.replace("/", "")} width="300px"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="white" notes={`
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

          <Slide transition={["spin", "zoom"]} bgColor="white" notes={`
            Differently then flux, with with redux you have a single store.
            Internally the store have few concepts: state, reducer and middlewares.
            Actions get dispatched through middleares (similar to how requests/responses get passed to express middlewares), before being passed to reducer, that will emit a new state.
            To create a redux store is pretty simple...
          `}>
            <Image width="100%" src={images.redux.replace("/", "")}/>
          </Slide>

          <Slide transition={["slide"]} bgColor="white"  notes={`
            ...we invoke the createStore factory passing it a reducer, and optionally an initial state and a a store enhancer like for example middlewarea.
            The main API are:
            - getState
            it will return the current state
            - dispatch
            it will invoke the reducer passing it the action (together with the current state) and will emit return a new state
            - subscribe
            we can add a listener to be called every time a new state get generated
          `}>
            <Heading size={1} caps textColor="primary">
              API
            </Heading>
            <List>
            <Appear>
              <ListItem>
                createStore(reducer, [preloadedState], [enhancer])
             </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Store.getState()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Store.dispatch(action)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Store.subscribe(listener)
              </ListItem>
            </Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="white" notes={`
            I mentioned about dispatching actions, let quickly see how they look likes:
            Nothing to fancy, simply POJOs, plain old javasrcipt objects. The only mandatory key that they need to have is 'type'. In this exaple it also carry a payload.
          `}>
            <Heading size={1} caps textColor="primary">
              Action
            </Heading>
            <Appear>
              <div>
                <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                  {"{"} type: 'INCREMENT', payload: 1 {"}"}
                </Text>
              </div>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white" notes={`
            When we dispacth actions, behind the scene the store simply invoke it's reducer with the current state and the action as arguments.
            Reducers are pure function, normally are implemented as switches to match against action types and reduce the state accordingly.
          `}>
            <Heading size={1} caps textColor="primary">
              Reducer
            </Heading>
            <Appear>
              <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                (state, action) => state
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white"  notes={`
            Do some of you use elm? (Btw if you don't you should give it a try, its a pure functional language for the browser and is awesome). It's so awesome that many of the idea you see in redux where ported over from elm. For example actions (now called messages in elm) are simply build around union types, (type...) and in elm the switch statement is the only way to unwrap their payload,...
          `}>
            <Heading caps fit textColor="primary">Looks familiar?</Heading>
            <Layout>
              <Fill>
                <Heading size={4} fit caps textColor="white" bgColor="secondary" margin={10}>
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
              <Text textColor="white" textSize="2em" caps bold bgColor="black">
                Not sure if it works with async
              </Text>
              <br /><br /><br /><br />
              <Text textSize="2em" textColor="white" caps bold bgColor="black">
                (state, action) => state
              </Text>
              </div>
          </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps textColor="primary">
              Problem
            </Heading>
            <Appear>
              <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
               do(async)
              </Text>
            </Appear>
            <Appear>
              <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                .then(dispatch(action));
             </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textSize="1.5em" margin="20px 0px 0px" bold>
                dispatch(action);
              </Text>
            </Appear>
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
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={1} caps textColor="primary">
              Solutions
            </Heading>
            <Appear>
              <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                redux-thunk, redux-promise, redux-async-queue, redux-debounce, redux-async, redux-await, redux-async-connect, redux-loop, redux-saga, redux-observables,..
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading caps fit size={1} textColor="secondary">
              Or... we could just use
            </Heading>
            <Heading caps fit size={1} textColor="primary">
              Cycle.js
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px" Radius="100%"/>
            <Heading size={2} textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>

          <Slide transition={["spin"]} bgColor="black" bgImage={images.horseduck.replace("/", "")} />

          <Slide transition={["spin"]} bgColor="white">
            <Code>
              npm install @cycle/xstream-run
             </Code>
             <br /><br />
             <Appear>
             <Code>
              npm install @cycle/rxjs-run
             </Code>
             </Appear>
             <br /><br />
             <Appear>
             <Code>
              npm install @cycle/most-run
             </Code>
             </Appear>
          </Slide>

          <Slide transition={["spin"]} bgColor="white">
            <Heading size={1} caps fit textColor="primary">
              Predictable Code
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

          <Slide transition={["slide"]} bgColor="white" notes={`
            When we dispacth actions, behind the scene the store simply invoke it's reducer with the current state and the action as arguments.
            Reducers are pure function, normally are implemented as switches to match against action types and reduce the state accordingly.
          `}>
            <Heading size={1} caps fit textColor="primary">
              The anatomy of a cycle app
            </Heading>

              <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                sources => sinks
              </Text>

            <List>
            <Appear>
              <ListItem>
                Pure function
              </ListItem>
            </Appear>
             <Appear>
              <ListItem>
                Input: streams of events from the real world
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Output: streams of commands to be perfomed
              </ListItem>
            </Appear>
            </List>
            <Appear>
            <Text textColor="tertiary">
                 sinks.HTTP: requests, sources.HTTP: responses
              </Text>
               </Appear>

          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="primary" bgImage={images.backtothefuture.replace("/", "")} notes={`
            mmm...yes
          `}>
          </Slide>


          <Slide transition={["slide"]} bgColor="white" notes={`

          `}>
            <Heading size={1} caps textColor="primary">
              Problem
            </Heading>

              <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                dispatch(action);
              </Text>

              <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                do(async)
              </Text>

              <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                .then(dispatch(action));
              </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="white" notes={`
            When we dispacth actions, behind the scene the store simply invoke it's reducer with the current state and the action as arguments.
            Reducers are pure function, normally are implemented as switches to match against action types and reduce the state accordingly.
          `}>
          <Heading size={1} caps textColor="primary">
              Solution
            </Heading>
            <Appear>
            <Text textColor="secondary" textSize="1.5em" margin="20px 0px 0px" bold>
                {"({ ACTION$ }) => ({ ACTION$ })"}
              </Text>
</Appear>
          </Slide>
           <Slide transition={["spin", "zoom"]} bgColor="white" notes={`

          `}>

              <Image width="560px" src={images.love.replace("/", "")}/>

          </Slide>

           <Slide transition={["slide"]} bgColor="white" notes={`
            Ok, let's talk about redux!
            Just to know, how many of you use redux?
          `}>
            <Code>
              npm install redux-cycles
             </Code>

          </Slide>

          <Slide transition={["slide"]} bgColor="white"  notes={`
            ...we invoke the createStore factory passing it a reducer, and optionally an initial state and a a store enhancer like for example middlewarea.
            The main API are:
            - getState
            it will return the current state
            - dispatch
            it will invoke the reducer passing it the action (together with the current state) and will emit return a new state
            - subscribe
            we can add a listener to be called every time a new state get generated
          `}>
            <Heading size={1} caps textColor="primary">
              API
            </Heading>
            <List>
            <Appear>
              <ListItem>
                createCycleMiddleware(mainCycle, drivers)
             </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                combineCycles(cycles)
              </ListItem>
            </Appear>
            </List>
          </Slide>

<Slide transition={["slide"]} bgColor="white"  notes={`

          `}>
            <Heading size={1} caps textColor="primary">
              Trivial example
            </Heading>
            <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/pong.example")}
            margin="20px auto"
          />
          </Slide>


          <Slide transition={["slide"]} bgColor="white"  notes={`

          `}>
            <Heading caps fit textColor="primary">Looks familiar?</Heading>
            <Layout>
            <Appear fid="1">
              <Fill>
                <Heading size={4} fit caps textColor="white" bgColor="secondary" margin={10}>
                  checkout redux-observable.js.org
                </Heading>
              </Fill>
              </Appear>
            </Layout>
            <Layout>
              <Fill>
                <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/redux-cycles.example")}
            margin="20px auto"
          />
              </Fill>
              <Fill></Fill>
              <Appear fid="1">
              <Fill>
                <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/redux-observable.example")}
            margin="20px auto"
          />
              </Fill>
              </Appear>
            </Layout>
          </Slide>


          <Slide transition={["spin", "zoom"]} bgColor="white" notes={`

          `}>
          <Heading caps fit textColor="primary">Why redux-cycles?</Heading>
            <Image width="100%" src={images.table.replace("/", "")}/>
          </Slide>

          <Slide transition={["slide"]} bgColor="white"  notes={`

          `}>
            <Heading size={1} fit caps textColor="primary">
              Less trivial example
            </Heading>
            <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/autocomplete.example")}
            margin="20px auto"
          />
          </Slide>
<Slide bgColor="white" >
          <Heading size={1} fit caps textColor="primary">
              One more thing...
            </Heading>
            <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/ducks.example")}
            margin="20px auto"
          />
          </Slide>

<Slide bgColor="white">
           <Link href="https://github.com/cyclejs-community/redux-cycles">
      github.com/cyclejs-community/redux-cycles
    </Link>
          </Slide>

        </Deck>
    );
  }
}
