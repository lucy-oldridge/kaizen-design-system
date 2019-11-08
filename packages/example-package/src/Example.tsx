import {
  Link,
  Menu,
  NavigationBar,
} from "@cultureamp/kaizen-component-library/components/NavigationBar"
import * as React from "react"
import { NavbarContext, NavbarContextState } from "./navbar-context"
import NestedChild from "./nested-child"

interface AppState {
  height: number
}

class App extends React.Component<{}, AppState> {
  readonly state = {
    height: 0,
  }

  updateHeight = (newHeight: number) => {
    this.setState(() => ({
      height: newHeight,
    }))
  }

  render() {
    return (
      <NavbarContext.Provider
        value={{
          height: this.state.height,
          onUpdateHeight: this.updateHeight,
        }}
      >
        <NavigationBar onHeightChange={this.updateHeight} colorScheme="kaizen">
          <Link text="Home" href="#anchor-1" active />
          <Link text="Guidelines" href="#anchor-2" />
          <Link text="Components" href="#anchor-3" />
          <Link text="Status" href="#anchor-4" />
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
        <NestedChild />
      </NavbarContext.Provider>
    )
  }
}

export default App
