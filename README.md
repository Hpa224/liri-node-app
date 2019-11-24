# liri-node-app

-Liri is programmed to help you find info on: movies, songs and locations for upcoming events performed by bands you search for.

- This app utilizes the: spotify, omdb, and bandsintown APIs. As well as axios for making the appropriate calls to the APIs, and moment
for time formatting

- TO USE THE APP
  - Open the Java script file in VSS Code
  - Open a new terminal 
  - Make sure you've CDed into the directory the files are located in
  - type the following code into the terminal (excluding quotation marks).
  
      node liri.js "type of search" "your search"
      
  - Replace "type of search" with either of these
      "concert-this": Returns upcoming events for a band you search.
      "spotify-this-song": Returns info for a song name you search.
      "movie-this": Return info for a movie title you search.
