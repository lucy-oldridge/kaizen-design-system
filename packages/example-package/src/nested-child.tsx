import * as React from "react"
import { NavbarContext } from "./navbar-context"

const nestedChild = () => {
  return (
    <NavbarContext.Consumer>
      {({ height }) => {
        const offsetStyle = {
          paddingTop: `${height}px`,
        }
        return (
          <>
            <ExampleText />
            <span id="anchor-1" style={offsetStyle} />
            <p>Anchor 1</p>
            <ExampleText />
            <span id="anchor-2" style={offsetStyle}></span>
            <p>Anchor 2</p>
            <ExampleText />
            <span id="anchor-3" style={offsetStyle} />
            <p>Anchor 3</p>
            <ExampleText />
            <span id="anchor-4" style={offsetStyle} />
            <p>Anchor 4</p>
            <ExampleText />
          </>
        )
      }}
    </NavbarContext.Consumer>
  )
}

const ExampleText = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      malesuada at mauris quis tincidunt. Pellentesque lacinia, dui quis
      facilisis fringilla, ipsum odio aliquam dolor, vel dapibus sapien purus
      eget eros. Nam sit amet enim ac libero pretium pretium at vel dui. Morbi
      tincidunt odio ante. Curabitur fringilla sit amet ex non viverra. Integer
      eget elit lacinia, semper orci nec, pharetra felis. Aliquam eleifend velit
      et diam sollicitudin, vitae viverra sapien eleifend.
    </p>
    <p>
      Nam pellentesque malesuada tellus, quis efficitur nulla pretium quis.
      Suspendisse tempus vel risus eget aliquam. Donec velit nulla, mattis vel
      tristique rutrum, laoreet nec nunc. Phasellus faucibus mattis ex, ut
      vestibulum est consequat nec. Ut non massa malesuada, placerat risus ut,
      viverra odio. Sed sit amet erat leo. Sed tempor convallis erat non
      eleifend. Sed consequat tincidunt nisi, ac ullamcorper justo congue eget.
      Vestibulum vel porta mi, id sagittis velit. Aenean nibh orci, convallis
      vitae turpis nec, consequat consectetur ipsum.
    </p>
  </>
)

export default nestedChild
