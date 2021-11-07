# Intention Timer


## Table of Contents   
  - [Abstract](#abstract)   
  - [Project Specs](#project-specs)   
  - [Install & Setup](#set-up)
  - [Website](#website)
  - [Contributors](#contributors)   
  - [Tech Stack](#tech-stack)   

## Abstract  
This is an application that allows users to set timed goals for their productivity and health. Users can select a category (study, meditate, and exercise), set the amount of time they want to spend on that activity, then start the timer. The application will log their chosen activity,  keeping track of how they have spent their time.  

## Project Specs  
1. When an activity category is clicked on (Exercise, Meditate, or Study), the associated border and icon should change colors to give a visual indication that it has been selected.  
![giphy](https://user-images.githubusercontent.com/42048868/140633987-4ae818b5-e27e-4ffb-be5f-aed45044fe39.gif)  


2. User types in what would they like to accomplish during this time, and for how long. User can either use the up/down buttons to select an amount of time or type in a value (number only).  
![giphy-1](https://user-images.githubusercontent.com/42048868/140634064-0245d57d-98a3-4c75-b820-a24d50b57b51.gif)  


3. User cannot select negative numbers.  
![giphy-2](https://user-images.githubusercontent.com/42048868/140634090-caa09a92-a6fe-430e-be8e-b4e38c2c67a2.gif)  


4. User clicks start activity button to show the timer. The timer button border color reflects the type of activity selected.  
![giphy-3](https://user-images.githubusercontent.com/42048868/140634124-32be2ea9-3950-4314-87c1-8221a9654725.gif)  


5. User clicks big start button to begin the timer.  
![giphy-4](https://user-images.githubusercontent.com/42048868/140634163-2d58a00f-8482-4ed7-b416-0284047bc40d.gif)  


6. When timer completes, user will be congratulated.  
![giphy-5](https://user-images.githubusercontent.com/42048868/140634180-9412a94e-a84e-4589-8813-75fa85dd65df.gif)  


7. User can now log their activity by clicking the log activity button. When this button is clicked, a card will display on the right side of the screen describing the activity they just completed. It will be marked with the corresponding color associated with the type of activity selected.  
![giphy-6](https://user-images.githubusercontent.com/42048868/140634222-bf3b29be-b8e4-498f-9917-35cdaa5a3efd.gif)


8. User now clicks on the create a new activity button. This will take them back to the original form where they can continue to create activities.  
![giphy-7](https://user-images.githubusercontent.com/42048868/140634246-bff6432f-b9e2-42d9-bba7-0b400fb001da.gif)  


9. User can scroll through all their past activity cards.  
![giphy-9](https://user-images.githubusercontent.com/42048868/140634301-46c7aa48-e801-41d9-881c-1346509c5195.gif)  

10. Past activity cards are still saved when the page is refreshed.  
![giphy-10](https://user-images.githubusercontent.com/42048868/140634501-28146c0f-5e1a-4b6f-8c45-48921201b17d.gif)  


11. Error handling - Careful User - Ensure you select a category and all input fields have a value.  
![giphy-8](https://user-images.githubusercontent.com/42048868/140634278-5e541626-0674-4863-af30-39db05afb151.gif)  


## How to Install and Use   
in your terminal run:
```   
git clone git@github.com:GraceGardner/intention-timer.git
cd intention-timer    
open index.html      
```

## Website
https://gracegardner.github.io/intention-timer/


## Contributors  
Repository Contributors :      
- [Lexy Newby](https://github.com/anewb87)
- [Christine Rowland](https://github.com/Fordo29)
- [Grace Gardner](https://github.com/GraceGardner)  

Code Review:
- [Evan Wheeler](https://github.com/anon0mys)

Boilerplate Code Credits :     
- [Jeremiah Black](https://github.com/jeremiahblackol)     
- [Original Spec Comp Found Here](https://frontend.turing.edu/projects/module-1/intention-timer-group.html)     



## Tech Stack  
CSS  
HTML  
JavaScript  
