import {
  Link,
  Menu,
  NavigationBar,
} from "@cultureamp/kaizen-component-library/components/NavigationBar"
import * as React from "react"
import { NavbarContext } from "./navbar-context"

const styles = require("./styles.scss")

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navHeight: "40px",
    }
  }

  onUpdateHeight = newValue => {
    this.setState(() => ({
      navHeight: newValue,
    }))
  }

  render() {
    return (
      <>
        <NavigationBar
          onHeightChange={this.onUpdateHeight}
          colorScheme="kaizen"
        >
          <Link text="Home" href="#" active />
          <Link text="Guidelines" href="#" />
          <Link text="Components" href="#" />
          <Link text="Status" href="#" />
          <Menu
            heading="Custom menu..."
            items={[
              {
                label: "About Culture Amp",
                url: "https://www.cultureamp.com/",
              },
              {
                label: "Contribute to this guide",
                url:
                  "https://github.com/cultureamp/cultureamp-style-guide/tree/master/guide",
              },
            ]}
          />
        </NavigationBar>
        <div className={styles.spacer}></div>
        <p>Example text</p>
        <div className={styles.spacer}></div>
        <p>Example text</p>
        <div className={styles.spacer}></div>
        <p>Example text</p>
        <div className={styles.spacer}></div>
        <p>Example text</p>
        <div className={styles.spacer}></div>
        <p>Example text</p>
      </>
    )
  }
}

export default App
