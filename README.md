# demo-minesweeper


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project was implemented using React Hooks and React Context.
## Dependencies
* Bootstrap
* Axios
* React timer hook for time tracking

# How to play

1. Enter a username
    If the username already exists, the user information si returned. Otherwise a new user is created.

2. Game options
    If 'New Game' is selected, a form is shown to selecte the number of rows, columns and mines. 
    If 'Continue' is selected, a table is shown with the list of games in progress.

3. Game
    The number of flags and the timer is show above the board
    In the board, a cell could have a mine, a flag or be empty.
    When an empty cell is clicked, the number of neighboors mines is shown.
    To put a flag in a cell, you should right click.

#Next Steps
* Add unit testing with Jest
* Improve UI
* Add authentication to generate a token when a user logs in
