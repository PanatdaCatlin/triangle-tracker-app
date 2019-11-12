 # Triangle Tracker

#### By Panatda Catlin
###### Initiated November 12th, 2019.

## Description

A webpage that allows the user to input the lengths of the sides of a triangle, and returns whether these sides form an equilateral, isosceles, or scalene triangle or if the sides cannot make a triangle at all.

## Prerequisites & Installation


Use the Node.js through Homebrew package manager 

OSX Installation Instructions
On OS X systems, install Node.js through Homebrew with the following command in your home directory:

```bash
$ brew install node
```
Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the 

versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):

```bash
$ node -v
v6.2.0
$ npm -v
3.10.5
```
(If you have an older version of Node already installed, upgrade through Homebrew by running $ brew upgrade node.)

[Node website](https://nodejs.org/en/download/) to install Node.



Homebrew Installation
If you do not have Homebrew installed yet, you may install it now by copy and pasting this command:

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

This installs Homebrew on your device.

Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:

```bash
$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
```
Windows / Linux Installation Instructions
To install Node on other systems, go to the Node website, then download and install the appropriate installer for your operating system.

[Homebrew website](https://brew.sh/) to install Homebrew.

## Live demo

[https://panatdacatlin.github.io/triangle-tracker-app/](https://panatdacatlin.github.io/triangle-tracker-app/)

## Download Repo

* Clone this repository [https://github.com/PanatdaCatlin/triangle-tracker-app](https://github.com/PanatdaCatlin/triangle-tracker-app)


## Usage

```javascripts
From root directory

npm install
npm run build
npm run start to run the local server.
Open a web browser and go to http://localhost:8080/.

('Equilateral') # returns 'All sides are equal.'
('Isosceles') # returns 'Exactly 2 sides are equal.'
('Scalene') # returns 'No sides are equal.'
('NOT a triangle') # returns 'The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.'

```

To run tests

```javascripts
From root directory

npm install
npm run build
npm test 
```
## Technologies Used

```
* JavaScript
* jQuery
* Bootstrap
* HTML
* Bootstrap
* ESLint
* Babel
* webpack
* Npm
* Jest
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)