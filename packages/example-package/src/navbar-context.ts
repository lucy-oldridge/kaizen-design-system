import * as React from "react"

export interface NavbarContextState {
  height: number
  onUpdateHeight: (height: number) => void
}

export const NavbarContext = React.createContext<NavbarContextState>({
  height: 0, // this the default height
  onUpdateHeight: height => {
    throw new Error("onUpdateHeight() not implemented")
  },
})
