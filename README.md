# OlympicGamesStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Installation

### Clone  

 1.Open a terminal or command prompt and navigate to the directory where you want to clone the repository.

Run the following command to clone the repository:

  `git clone  https://github.com/tesfayande/Pr2.git`

 2. Navigate to the cloned repository directory:
   
   `cd Pr2`
   
 3. Install the required dependencies by running the following command:
   `npm install`
 4. Run the Angular app by using the following command:
   `npm start` or `ng serve`

This will start the development server and the app will be available at http://localhost:4200

Note: The steps above assume that you have Node.js and Angular CLI installed on your local machine. To install these dependencies, follow the instructions at https://nodejs.org/ and https://cli.angular.io/.


### Download zip
  
 `download zip file` then extract it.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Where to start

As you can see, an architecture has already been defined for the project. It is just a suggestion, you can choose to use your own. The predefined architecture includes (in addition to the default angular architecture) the following:

- `components` folder: contains every reusable components
- `pages` folder: contains components used for routing
- `core` folder: contains the business logic (`services` and `models` folders)

I suggest you to start by understanding this starter code. Pay an extra attention to the `app-routing.module.ts` and the `olympic.service.ts`.

Once mastered, you should continue by creating the typescript interfaces inside the `models` folder. As you can see I already created two files corresponding to the data included inside the `olympic.json`. With your interfaces, improve the code by replacing every `any` by the corresponding interface.

You're now ready to implement the requested features.

Good luck!
