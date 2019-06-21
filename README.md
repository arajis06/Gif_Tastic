# Gif_Tastic
#### Creator: Alexis Rajis
#### Type of Project: API

#### Theme: TV Show GIFs

#### LINK:
 https://arajis06.github.io/Gif_Tastic/
 
![sreenshot](https://user-images.githubusercontent.com/49252572/59931700-9533cc00-9413-11e9-9750-5a23bec5d988.png)


## Description of Application
GIFTastic is a responsive website that displays GIF images from the GIPHY website using an API. The application works as follows:

Page comes preloaded with a set of buttons with popluar TV shows 
User can click on any button, which will load & display 10 GIFS on the page along with the rating and title information
Page will alert the user if no information is avilable on the topic selected
User can add additional TV Show buttons by typing in the title  in the input in the form
Application will alert the user if an existing TV Show exist

### Technologies Used:
- HTML
- CSS
- Bootstrap
- Javascript
- JQuery
- GitHub
- API (GIPHY API Used)
- Javascript File

#### The game has manin 3 functions 

  ##### Main Functions are:
    - displayGifs - for making a call to the API and retrieving and displaying information to the user
    - renderButtons - for displaying buttons
    - playGifs - for animating Gifs aka displaying either the static or animated GIF url
    
  ##### The other functions/event listeners are:
    - on("click")callBack -prevents rendering of already extisting buttons on click
    - When user clicks on a TV show button
    - When user clicks on a GIF image 
