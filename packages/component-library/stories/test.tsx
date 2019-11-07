import * as React from 'react';

export const NavbarContext = React.createContext({
  height: '40px' // this is your default
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }
<Navbar onHeightChange={(newHeight) => }