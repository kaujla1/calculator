# calculator

## Planning
1. Create functions that populate the display.
  - USER MUST CLICK A NUMBER FIRST BEFORE OPERATOR 
  - User enters a number > number is stored for num1 > number appears on lower screen
  - User clicks an operator > operator is stored for operator > num1 and operator appear on upper screen (lower blank)
  - USER CANNOT CHOOSE TWO OPERATORS IN A ROW 
  - (loop) User clicks a number > number is stored for num2 > number appears on lower screen >
    - If user clicks equals > then num2 is added to upper screen w/ equal sign > lower screen shows result
    - If users clicks another operator > then upper screen shows results on num1 operator num2 followed by new operator > lower screen is blank > repeat from loop 

Flow: user clicks button > if clear then clear, if del then del, else value is stored in num1, num2, or operator > show value on screen in appropriate manner