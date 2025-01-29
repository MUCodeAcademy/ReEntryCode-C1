# Introduction to Git and GitHub

We will need use Git for this course as it is used commonly in the industry. It should already be installed on your computers.

## What is Version Control?

- Utilized to ensure all code is maintained in a centralized location.
- Helps with code being contributed by multiple people.
- Allows for roll-back if any issues arrive.
- Keeps track of all changes done and equally important who changed the code at which stage.

## What is Git?

- Git is a software to allow for better version control
- Can be utilized through the command line, but also through the use of applications such as GitHub Desktop.
- Generally speaking is the go to VCS utility for a majority of tech companies.

## What is GitHub

- Centralized site and hosting for coding projects.
- Allows for remote work and connection to projects with a VCS.
- Helps facilitate open source projects through the use of merge and pull requests.
- Can be utilized via the command line or via built in integration through an IDE. Not all functionality is easily available through built in integration however.

## The Command Line

The main command you will need for this class is:

```
git pull
```

This will get updates from the repository on GitHub and download them to your computer.

If the git pull is telling you to save or stash your changes, follow these four commands:

git add .
git stash save
git pull
git stash apply