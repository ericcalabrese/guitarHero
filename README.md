Jammin with Jimi

A Guitar Hero clone made with React.js. This started as a create-react-app and transformed into Guitar Hero with the song Fire by Jimi Hendrix. This game utilizes various changes to the state including seconds, score, gameScreen and songArr. 

This game runs based off of an array in the form of a JSON file with the correct color values( true and false) which acts as an index to the this.state.second that increases by 1 moving through each color value. I have a set Interval which resets every 192 miliseconds to change every eighth note for the song. 

I was able to figure out the bpm of Fire by Jimi Hendrix then convert that to miliseconds to get the quarter note values then multiplied by 2 so it represents eighth notes.  

Each gameScreen is changed by event Listeners that change the state based on the user inputs. You can download this repo and npm start to play or visit the site below to try yourself:

http://jamminwithjimi.surge.sh/
