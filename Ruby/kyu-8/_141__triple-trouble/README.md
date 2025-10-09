# Triple Trouble

**Rank:** unknown  
**Category:** algorithms  
**URL:** [https://www.codewars.com/kata/52aa64378d8ac51ec8000efb](https://www.codewars.com/kata/52aa64378d8ac51ec8000efb)

---

## 📝 Description

A phone game [Triple Town](https://play.google.com/store/apps/details?id=com.spryfox.tripletown&hl=en) creates higher and higher value pieces whenever three or more identical pieces are clustered. Create a board_and_score_update method for a simple mockup of this game.

The method receives  
- a n x m 2D array representing the pre-move state of the board  
- three integers i, j and value representing the position (0 indexed) and piece value of the current move

The method must return  
-  a message "Game over -- board full" if method is passed a board where no new move is possible (this has priority over the next message)  
- a message "Try again  -- invalid position" if method is passed a move to a square that is already occupied, or that is outside of the board  (this has priority over the next message)  
- a message "Try again  -- invalid piece" if method is passed an invalid piece value (valid values: 1,2,3,4,5)  

Otherwise, return an array containing, in order  
-  a n x m 2D array representing the post-move state of the board  
-  the amount by which to increment the score  
-  the message "Game over -- board full" if the current move finished the game  

Pieces are represented by integers from 1 (lowest value) to 5 (highest value). Free squares are represented by 0. Thus [[0, 0], [0, 0]] represents a blank 2x2 board.   
An update to the board will consist simply of replacing the zero of the appropriate free square to the value of the piece played, unless a cluster is formed. A cluster is a contiguous (up/down/left/right, NOT diagonal) group of 3 or more similar pieces. When a cluster is formed, all of its component pieces disappear from the board; a next higher level piece is placed at the triggering site of play.   
Adding a 1 piece to the board causes the score to increment by 5 points; similarly 2 through 5 give 20, 100, 500 and 1500 points.  

Thus starting with the board
```
|0 0 1|
|0 1 0|
|0 0 0|
```
playing a 1 to 1,2 will result in the board
```
|0 0 0|
|0 0 2|
|0 0 0|
```
and a score of 20. In the notation of this method, `update([[0,0,1],[0,1,0],[0,0,0]],1,2,1)` will return `[[[0,0,0],[0,0,2],[0,0,0]],20]`

The method must also account for cascades -- clustering leading to the formation of a intermediate level piece may lead to the immediate formation of an even higher level piece. Thus starting with
```
|0 0 0|
|0 1 1|
|2 0 2|
```
playing a 1 to 2,1 will result in an intermediate state with three 2's in the bottom row, and finally
```
|0 0 0|
|0 0 0|
|0 3 0|
```
Cascades score all intermediate pieces formed, as well as the final one, so the score increment will be 120 in this case. In the notation of this method, `update([[0,0,0],[0,1,1],[2,0,2]],2,1,1)` will return `[[[0,0,0],[0,0,0],[0,3,0]],120]`

Finally, pieces of the maximum value (5) are simply placed; they cannot cluster to produce a higher level piece.
