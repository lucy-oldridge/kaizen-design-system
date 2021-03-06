module Kaizen.UserInteractions.Keyboard exposing (Key(..), decoder, subscriptions)

import Elm18Compatible.Keyboard as Keyboard18
import Kaizen.UserInteractions.KeyCodes as KeyCodes


type Key
    = Escape
    | UpArrow
    | DownArrow
    | Enter
    | Backspace
    | Space
    | Other


decoder : Keyboard18.KeyCode -> Key
decoder keyCode =
    if keyCode == KeyCodes.escape then
        Escape

    else if keyCode == KeyCodes.backspace then
        Backspace

    else if keyCode == KeyCodes.upArrow then
        UpArrow

    else if keyCode == KeyCodes.downArrow then
        DownArrow

    else if keyCode == KeyCodes.enter then
        Enter

    else if keyCode == KeyCodes.space then
        Space

    else
        Other


subscriptions : (Key -> msg) -> Sub msg
subscriptions toMsg =
    Keyboard18.downs (decoder >> toMsg)
