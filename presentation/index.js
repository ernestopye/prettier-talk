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
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
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
      >
        <Slide transition={["zoom"]} bgColor="primary">
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
        <Slide transition={["fade"]} bgColor="tertiary">
          <Appear>
            <Heading size={2}>Sample Code</Heading>
          </Appear>
          <Appear>
            <CodePane lang="javascript" source="function butts() {}" />
          </Appear>
        </Slide>
        <Slide>
          <Heading size={6} textAlign="left">
            Additional Resources
          </Heading>
          <List type="A">
            <ListItem textSize="1em">
              <Link href="https://prettier.io/" target="_blank">
                https://prettier.io/
              </Link>
            </ListItem>
            <ListItem textSize="1em">
              <Link
                href="https://jlongster.com/A-Prettier-Formatter"
                target="_blank"
              >
                A Prettier Formatter (launch announcement)
              </Link>
            </ListItem>
            <ListItem textSize="1em">
              <Link href="https://twitter.com/jlongster" target="_blank">
                @jlongster
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
