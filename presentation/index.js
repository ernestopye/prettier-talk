// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  Code,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#011321",
    secondary: "#1B7AC3",
    tertiary: "#7EC0F3",
    quarternary: "#B7D4EA",
    pentanary: "#5399CE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        bgColor="primary"
      >
        <Slide transition={["zoom"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Prettier
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            An opinionated approach to code formatting
          </Text>
        </Slide>
        {/* 
        #. What is it?
        #. What problem does it fix?
          - Compare vs linters
        #. How does it work?
        #. Support
          - Languages
          - Editors
          - Git Commit Hooks
        #. Editor Support
        #. Demo
          - ES6 Sample
          - VS Code Sample
          - Git Commit Hook Sample
          - Configuration
        #. Additional Resources
         */}
        <Slide>
          <Heading size={2} fit>
            What does prettier do?
          </Heading>
          <Text textColor="tertiary">
            Prettier parses your JavaScript code, generates an AST (Abstract
            Syntax Tree), and then reprints your code in a specific format.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              By far the biggest reason for adopting Prettier is to stop all the
              on-going debates over styles.
            </Quote>
            <Cite>
              <Link
                href="https://prettier.io/docs/en/why-prettier.html"
                target="_blank"
                textColor="primary"
              >
                Prettier Docs
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            Why Prettier?
          </Heading>
          <List>
            <ListItem>Put an end to syntax bikeshedding</ListItem>
            <ListItem>Help newcomers</ListItem>
            <ListItem>Quit wasting time formatting code</ListItem>
            <ListItem>Easy to adopt</ListItem>
            <ListItem>Easy to run against existing repositories</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            How is it different to a linter?
          </Heading>
          <Text textColor="tertiary">
            A linter will complain about your code. Prettier will clean it up
            for you.
          </Text>
          <Text textColor="tertiary">
            Don't break up with your linter though!
          </Text>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            What languages are supported?
          </Heading>
          <List textColor="pentanary">
            <ListItem>ES2017, JSX, Flow, TypeScript, Vue, JSON</ListItem>
            <ListItem>CSS3+, Less, SCSS, ...</ListItem>
            <ListItem>GraphQL Schemas</ListItem>
            <ListItem>...and more!</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            What about editors?
          </Heading>
          <List textColor="pentanary" fit>
            <ListItem>VS Code, Atom, Sublime Text, and others</ListItem>
            <ListItem>
              ...even vim, although it won't help you exit. 🤔
            </ListItem>
            <ListItem>Git hooks (formatting on commit)</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
            🎊 Demo time! 🎉
          </Heading>
          <Text>Setup, samples and configuration.</Text>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            Additional Resources
          </Heading>
          <List textColor="pentanary">
            <ListItem>
              <Link
                href="https://prettier.io/"
                target="_blank"
                textColor="pentanary"
              >
                https://prettier.io/
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://jlongster.com/A-Prettier-Formatter"
                target="_blank"
                textColor="pentanary"
              >
                A Prettier Formatter (announcement)
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://twitter.com/jlongster"
                target="_blank"
                textColor="pentanary"
              >
                @jlongster (James Long)
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
