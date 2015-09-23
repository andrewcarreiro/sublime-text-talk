/****************************************************************************
*                                                                           *
*   This entire presentation exists in GitHub:                              *
*   https://github.com/andrewcarreiro/sublime-text-talk                     *
*   This presentation also expects Sublime Text 3, and will be giving       *
*   OSX hotkeys.                                                            *
*                                                                           *
*   Also, if you want to be able to switch your tabs like in Chrome,        *
*   take the contents of the array and add them to your keymap.             *
*   You can access your keymap by going to ⌘+SHIFT+P, and going to          *
*   "Preferences: Key Bindings - User"                                      *
*                                                                           *
*****************************************************************************/

var inject_into_sublime_keymap = [
    { "keys": ["ctrl+tab"], "command": "next_view" },
    { "keys": ["ctrl+shift+tab"], "command": "prev_view" }
];