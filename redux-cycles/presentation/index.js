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
  forrest: require("../assets/forrest-gump.jpg"),
  forrest2: require("../assets/forrest-choco.jpg"),
  table: require("../assets/table.png"),
  threeDucks: require("../assets/3ducks.png"),
  love: require("../assets/love.png"),
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
      <Deck
        theme={theme}
        transition={[ "slide", "fade" ]}
        transitionDuration={500}
      >
        <Slide
          transition={[ "slide", "fade" ]}
          bgColor="white"
          notes={
            `
            Welcome everybody! In this session I'm going to walk you through yet another way to handle async in redux, hoping that by the end of my talk you understand why I co-autherd this middleware, and when you might want to use it.
          `
          }
        >
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
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="white"
          notes={
            `
            I am a Software Engineer. Co-author of create-cycle-app & redux-cycle. I Writes Node and JS applications @OpenTable currently working on our component publishing and delivery infrastructure.
            <hr>
            You can find me on Twitter: @nickbalestra
            <hr>
            I like to say that Life is like an npm install... you never know what you'r going to get.
          `
          }
        >
          <Image width="100px" src={images.avatar.replace("/", "")} />
          <Heading
            size={1}
            textSize="1em"
            textColor="secondary"
            margin="10px 0"
          >
            @NickBalestra
          </Heading>
          <Heading size={2} textSize="1em" textColor="tertiary">
            Life is an npm install
          </Heading>
        </Slide>
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="primary"
          bgImage={images.forrest.replace("/", "")}
          notes={
            `
            Just to know, how many of you use redux? raiseHand
            For the ones who haven't don't worry, I'll try to go through the basics so that you have a better understanding of what we are talking about.
            <hr>
            So let install redux and see what we get...
          `
          }
        >
          <Text textColor="white" textSize="2em" bgColor="black">
            npm install redux
          </Text>
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            Nope, we don't get "THREE DUCKS"
            <hr>
            But as you will see ducks can be a recurrent theme in the redux ecosystem, so..be prepeared..ducks ahead!
          `
          }
        >
          <Image src={images.threeDucks.replace("/", "")} width="300px" />
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            What we'll get is a state management library, evolving the idea of the flux pattern. State is hard. Redux make it easer to reason about state in your app.
            <hr>
            It follow three principles:
            - Single source of truth
            - State is read-only
            - Changes are made with pure functions
            <hr>
            It's agnostic in the sense that it doesn't come with a view provider, nor it does tie to any specific frontend framework. Bindings are available for multiple frameworks like react, angular, ember.
            <hr>
            and because changes are made with pure functions, its predictable.
            <hr>
            Let's see how we could visually represent it.
          `
          }
        >
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
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="white"
          notes={
            `
            Differently then flux, with redux you have a single store.
            <hr>
            Internally the store have few concepts: state, reducer and middlewares.
            <hr>
            Actions get dispatched through middlewares (similar to how requests/responses get passed to express middlewares), before being passed to the reducer, that will emit a new state.
            <hr>
            We can compose reducers together, so that each handle only a part of our state tree .
            <hr>
            As you could immagine it comes with minimal API, let's quickly go through them
          `
          }
        >
          <Image width="100%" src={images.redux.replace("/", "")} />
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            ...To create a store we invoke the createStore factory passing it a reducer, and optionally an initial state and a a store enhancer like for example middlewares.
            <hr>
            The main API are:
            <hr>
            - getState
            it will return the current state
            <hr>
            - dispatch
            it will invoke the reducer passing it the action (together with the current state) and will emit return a new state
            <hr>
            - subscribe
            we can add a listener to be called every time there is a state change
          `
          }
        >
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
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            I mentioned about dispatching actions, so what an action looks like?
            <hr>
            Nothing too fancy, a simple POJOs (plain old javasrcipt objects). The only requirement is that they come with a type key.
            <hr>
            In this exaple it also carry a payload.
          `
          }
        >
          <Heading size={1} caps textColor="primary">
            Action
          </Heading>
          <div>
            <Text
              textColor="secondary"
              textSize="1.5em"
              margin="20px 0px 0px"
              bold
            >
              {"{"} type: 'INCREMENT', payload: 1 {"}"}
            </Text>
          </div>
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            When we dispacth actions, we are invoking the store reducer with the current state and the action as arguments.
            <hr>
            Reducers are pure function, normally are implemented as switches to match against action types and reduce the state accordingly.
          `
          }
        >
          <Heading size={1} caps textColor="primary">
            Reducer
          </Heading>
          <Text
            textColor="secondary"
            textSize="1.5em"
            margin="20px 0px 0px"
            bold
          >
            (state, action) =&gt; state
          </Text>
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            How many of you have used elm? raiseHand (Btw if you don't you should give it a try, its a pure functional language for the browser and is awesome).
            <hr>
            Many of the ideas you see in redux where ported over from elm. For example actions (now called messages in elm) are simply build around union types, ({type...}), in elm the switch statement is the only way to unwrap their payload,.. and that's how the state update mechanism work in Elm.
            <hr>
            (you don't have the middlewares..)
          `
          }
        >
          <Heading caps fit textColor="primary">Looks familiar?</Heading>
          <Appear>
            <Layout>
              <Fill>
                <Heading
                  size={4}
                  fit
                  caps
                  textColor="white"
                  bgColor="secondary"
                  margin={10}
                >
                  checkout elm-lang.org
                </Heading>
              </Fill>
            </Layout>
          </Appear>
        </Slide>
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="primary"
          bgImage={images.futurama.replace("/", "")}
          notes={
            `
            not sure if it works with async or not...
            <hr>
            ...not really
            <hr>
            In facts reducers need to be sync, so when we dispatch an action to them the state change is syncrounous.
          `
          }
        >
          <Appear>
            <div>
              <br />
              <Text textColor="white" textSize="2em" caps bold bgColor="black">
                Not sure if it works with async
              </Text>
              <br /><br /><br /><br />
              <Text textSize="2em" textColor="white" caps bold bgColor="black">
                (state, action) =&gt; state
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            Let's view quicly view the problem then
            <hr>
            We want to do some async stuff and afterward dispatch our action.
            <hr>
            Or we could think that we dispatch an action carrying information about the async activity to carry out, react to that action by doing some async stuff and afterward dispatching our final action
          `
          }
        >
          <Heading size={1} caps textColor="primary">
            Problem
          </Heading>
          <Appear>
            <Text
              textColor="secondary"
              textSize="1.5em"
              margin="20px 0px 0px"
              bold
            >
              do(async)
            </Text>
          </Appear>
          <Appear>
            <Text
              textColor="secondary"
              textSize="1.5em"
              margin="20px 0px 0px"
              bold
            >
              .then(dispatch(action));
            </Text>
          </Appear>
          <Appear>
            <Text
              textColor="tertiary"
              textSize="1.5em"
              margin="20px 0px 0px"
              bold
            >
              dispatch(asyncAction);
            </Text>
          </Appear>
          <Appear>
            <Text
              textColor="tertiary"
              textSize="1.5em"
              margin="20px 0px 0px"
              bold
            >
              do(async)
            </Text>
          </Appear>
          <Appear>
            <Text
              textColor="tertiary"
              textSize="1.5em"
              margin="20px 0px 0px"
              bold
            >
              .then(dispatch(action));
            </Text>
          </Appear>
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            Its plenty of solutions
            <hr>
          `
          }
        >
          <Heading size={1} caps textColor="primary">
            Solutions
          </Heading>
          <Appear>
            <Text
              textColor="secondary"
              textSize="1.5em"
              margin="20px 0px 0px"
              bold
            >
              redux-thunk, redux-promise, redux-async-queue, redux-debounce, redux-async, redux-await, redux-async-connect, redux-loop, redux-saga, redux-observables,..
            </Text>
          </Appear>
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            Plenty of solutions...
            <hr>
          `
          }
        >
          <Heading caps fit size={1} textColor="secondary">
            Or... we could just use
          </Heading>
          <Heading caps fit size={1} textColor="primary">
            Cycle.js
          </Heading>
        </Slide>
        <Slide transition={[ "slide" ]} bgColor="white">
          <Image
            src={images.kat.replace("/", "")}
            margin="0px auto 40px"
            height="293px"
            Radius="100%"
          />
          <Heading size={2} textColor="primary" textFont="primary">
            Wait what?
          </Heading>
        </Slide>
        <Slide
          transition={[ "spin" ]}
          bgColor="black"
          bgImage={images.horseduck.replace("/", "")}
        />
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="primary"
          bgImage={images.forrest.replace("/", "")}
          notes={
            `
            Ok, let's talk cycle!
            <hr>
            Just to know, how many of you use cycle.js? RaiseHandes
          `
          }
        >
          <Text textColor="white" textSize="2em" bgColor="black">
            npm install @cycle/xstream-run
          </Text>
        </Slide>
        <Slide
          transition={[ "spin" ]}
          bgColor="white"
          notes={
            `
            Cycle.js is a framework for building applications.
            <hr>
            It's agnostic in the sense that is not tied to any view provider like every other js framework that deals with UI. The program is represented as a pure function, which takes in some sources about events in the real world (could be dom events, but not necessary...think of reduc actions), does something with it, and returns sinks, aka streams with commands to be performed.
            <hr>
            Because it's built around FRP primitives its dataflow centric.

          `
          }
        >
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
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            you can see a stream like an asynchronous, always-changing array of values
            <hr>
          `
          }
        >
          <Heading size={1} caps fit textColor="primary">
            The anatomy of a cycle app
          </Heading>
          <Text
            textColor="secondary"
            textSize="1.5em"
            margin="20px 0px 0px"
            bold
          >
            sources =&gt; sinks
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
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="primary"
          bgImage={images.backtothefuture.replace("/", "")}
          notes={
            `
            Back to the problem...
          `
          }
        />
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `

          `
          }
        >
          <Heading size={1} caps textColor="primary">
            Problem
          </Heading>
          <Text
            textColor="secondary"
            textSize="1.5em"
            margin="20px 0px 0px"
            bold
          >
            dispatch(action);
          </Text>
          <Text
            textColor="secondary"
            textSize="1.5em"
            margin="20px 0px 0px"
            bold
          >
            do(async)
          </Text>
          <Text
            textColor="secondary"
            textSize="1.5em"
            margin="20px 0px 0px"
            bold
          >
            .then(dispatch(action));
          </Text>
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            The solution could be then like a function that receive a stream of redux actions, does something with them and return another stream of Actions to be dispatched.
            <hr>
            Actions in, Actions out
          `
          }
        >
          <Heading size={1} caps textColor="primary">
            Solution
          </Heading>
          <Appear>
            <Text
              textColor="secondary"
              textSize="1.5em"
              margin="20px 0px 0px"
              bold
            >
              {"({ ACTION$ }) => ({ ACTION$ })"}
            </Text>
          </Appear>
        </Slide>
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="white"
          notes={
            `
            Yes, thats our logo...
          `
          }
        >
          <Image width="560px" src={images.love.replace("/", "")} />
        </Slide>
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="primary"
          bgImage={images.forrest.replace("/", "")}
          notes={
            `
            Ok, let's install this crazy middleare!
            and let see what we get?
          `
          }
        >
          <Text textColor="white" textSize="2em" bgColor="black">
            npm install redux-cycles
          </Text>
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            The middleware comes with a very small API.
            A method to instantiate our middleware, passing our mainCycle app, and optionally drivers (Our cycles will have access to STATE and ACTIONS drivers by default, any other driver like HTTP need to be installed and registered here)
            <hr>
            combineCycles, is an higher order function that accept any number of cycle app (that are nothing more then pure functions) and return a single function. This allow us to structure our code better.
          `
          }
        >
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
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            Let see a trivial example
            <hr>
            Let's immagine we want dispatch an action of type PING have an action of type PONG to be dispatched as reaction to it.
            <hr>
            What if we want to debounce that action, so that if someone will click the ping button multiple time within 500millisecs we just react with a single pong back?
            <hr>
            We could simply debounce stream of ping actions
          `
          }
        >
          <Heading size={1} caps textColor="primary">
            Trivial example
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/pong.example")}
            margin="20px auto"
          />
          <Appear>
            <CodePane
              lang="jsx"
              source={require("raw-loader!../assets/pong2.example")}
              margin="20px auto"
            />
          </Appear>
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            Does this look familiar?
            How many of you use redux-obserbale? raisHand
            <hr>
            Redux-cycle It was heavily inspired by redux-observable, but instead of epics use cycles with the added benefit that while cycle provide a similar cyclic architecture, push sideeffect further from your code, allowing you to write pure declarative cose instead.
          `
          }
        >
          <Heading caps fit textColor="primary">Looks familiar?</Heading>
          <Layout>
            <Appear fid="1">
              <Fill>
                <Heading
                  size={4}
                  fit
                  caps
                  textColor="white"
                  bgColor="secondary"
                  margin={10}
                >
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
            <Fill />
            <Appear fid="1">
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require(
                    "raw-loader!../assets/redux-observable.example"
                  )}
                  margin="20px auto"
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="white"
          notes={
            `
            Im sure many are screaming for a why...
            <br>
            The intention with redux-cycles was not to worsen the "JavaScript fatigue". Rather it provides a solution that solves several problems attributable to the currently available libraries.
            TODO here: add
            - I already know Redux-thunk
            - I already know Redux-saga
            - I already know Redux-observable
            - Do I have to buy all-in?
          `
          }
        >
          <Heading caps fit textColor="primary">Why redux-cycles?</Heading>
          <Image width="100%" src={images.table.replace("/", "")} />
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            But what about a less trivial example?
            <br>
            we first crate a stream of searchQuery. Note that we complete the stream if a CLEARED_SEARCH_RESULTS action get dispatched
            <hr>
            we map it to a stream of searchQueryRequest (modelling how the request should look like) that we then feed to our http driver
            <hr>
            and we handle the stream of searchQueryResponse we receive by mapping it to receiveUsers actions to be dispatched (carrying the payload we want)
          `
          }
        >
          <Heading size={1} fit caps textColor="primary">
            Less trivial example
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/autocomplete.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide
          transition={[ "slide" ]}
          bgColor="white"
          notes={
            `
            Is anyone in here using ducks for structuring his redux project?
            <hr>
            Ducks are A proposal for bundling reducers, action types and actions when using Redux.
            <hr>
            Rules are
            A module...
            MUST export default a function called reducer()
            MUST export its action creators as functions
            MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
            MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library



          `
          }
        >
           <Heading size={1} fit caps textColor="primary">
            One more thing...
          </Heading><br /><br />
          <Appear>
            <div>
              <Image src={images.threeDucks.replace("/", "")} width="300px" />
              <br />
              <Link href="https://github.com/erikras/ducks-modular-redux">
                ducks-modular-redux
              </Link>
            </div>
          </Appear>
          <Appear>
            <List>
              <ListItem>
                MUST export default a function called reducer()
              </ListItem>
              <ListItem>
                MUST export its action creators as functions
              </ListItem>
              <ListItem>
                MUST have action types: app/reducer/ACTION_TYPE
              </ListItem>
              <ListItem>
                MAY export its action types as UPPER_SNAKE_CASE
              </ListItem>
            </List>
          </Appear>
          <Appear>
            <List>
              <ListItem textColor="primary">
                MAY export its cycle function called cycle()
              </ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide
          transition={[ "spin", "zoom" ]}
          bgColor="primary"
          bgImage={images.forrest2.replace("/", "")}
          notes={
            `
          `
          }
        >
          <Appear>
            <div>
              <Text
                textColor="white"
                textSize="2em"
                bgColor="black"
                href="https://github.com/cyclejs-community/redux-cycles"
              >
                github.com/cyclejs-community/redux-cycles
              </Text><br /><br />
              <Text
                textColor="white"
                textSize="2em"
                bgColor="black"
                href="https://twitter.com/nickbalestra"
              >
                @nickbalestra
              </Text>
            </div>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
