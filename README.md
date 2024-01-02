# Remotely

A job board platform where you can search for remote Software Engineer jobs and track your job applications.

## Tech Stack

- React.js
- React Router
- Tailwind CSS
- Supabase

### API

- [Remote Jobs Api](https://github.com/remotive-com/remote-jobs-api)
- [NewsData API](https://newsdata.io/)

## Folder Structure

I followed resources below to group folder by features

- [Evolution of a React folder structure](https://profy.dev/article/react-folder-structure)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)
- [React Folder Structure in 5 Steps](https://www.robinwieruch.de/react-folder-structure/)

```sh
src
|
+-- assets           # assets folder containing all the static files
|
+-- components       # shared components used across the entire application
|
+-- contexts         # contexts folder
|
+-- data             # data folder
|
+-- features         # feature based modules
|
+-- hooks            # shared hooks used across the entire application
|
+-- pages            # route components for feature pages
|
+-- routes           # routes configuration
|
+-- services         # shared helper functions for api calling
|
+-- utils            # shared utility functions
```

## Routing

```sh
/dashboard            # Dashboard
/application          # Tracking applications
/search               # Searching jobs
/news                 # News
/profile              # Profile setting
/signin, /signup      # Authentication
```

## Components

I'm following Component best practices from resources below:

- [Tao of React](https://alexkondov.com/tao-of-react/?ref=jonas.io)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- [Best Practices and Design Patterns in React.js for High-Quality Applications](https://medium.com/@obrm770/best-practices-and-design-patterns-in-react-js-for-high-quality-applications-6b203be747fb)
