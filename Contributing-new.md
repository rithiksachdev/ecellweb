### One Time Setup 

Download and configure [Heroku CLI (Command Line Interface)](https://devcenter.heroku.com/articles/heroku-cli#download-and-install), [Node and NPM](https://nodejs.org/en/download/), [GitHub CLI (Command Line Interface)](https://git-scm.com/downloads) and install them. 

After installing all of the above, use this command in terminal window to download the code base of the repository.

```heroku git:clone -a dummy-project-ecell```

This will download all the source files in your directory named *dummy-project-ecell*, and this is where all your collaboration works will take place.

### Making the changes locally:

Making changes is simple. You just need to assess and change the respective source files, so as to make your changes in the website. Familiarity with the code directory will be helpful for you.


### Testing your changes locally:

To test the code files, as they are in your local directory, open a new terminal in the repository and run __any one__ of the given commands: `node app` or `npm start` or `heroku local`

Using any of the given commands will start the local server for the website, which will be served at `localhost:3000`. You can minimise the terminal and open [the same URL](localhost:3000) in any browser. 
To stop the localhost, open the terminal and press `Ctrl-C` key combination, or simply close the terminal.

### Steps for your next commit. (Sending changes from local repository to server)

Once you are ready with your changes, and have tested them to ensure that they are ready to be published,
open a command line or terminal window in the same directory. 
Then, follow the steps mentioned below:

1. `git add .` or `git add -A`
2. `git commit -m <commit_message>`
3. `git pull` or `git pull heroku master`
4. `git push` or `git push heroku master`

Follow these steps in order, and resolve any merge conflicts (if any occur) by manually modifying the conflicting files.

***Happy Contributing!***
