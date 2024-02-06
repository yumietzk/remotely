# Remotely

🚧 Work in progress..

## About the project

A job board platform where you can search for remote Software Engineer jobs and track job applications all in one place.  

💡 You’ll get an overview of this app as described below, although there are more functionalities.
I’m working on more details.  

#### Search jobs

You get a list of jobs on a Job Search page. You can jump to the details and save jobs you’re interested in.  

![jobSearch1](https://github.com/yumietzk/remotely/assets/61277579/0deee84a-eadc-4f18-9b1c-02b53779cf9f)  

You can filter the list of jobs and search for jobs by position.  

![jobSearch2](https://github.com/yumietzk/remotely/assets/61277579/0aefcc27-8892-4829-9fd5-7af1d29f46c0)

#### Tracking jobs

You can see the jobs that you save in the “No Status” section on an Application Tracker page.  

![tracker1](https://github.com/yumietzk/remotely/assets/61277579/a6607e92-79f9-48be-a95a-8ed976d461f8)  

You can manage the applications on an Application Tracker page, categorizing them.  

![tracker2](https://github.com/yumietzk/remotely/assets/61277579/8173fac3-c80f-46fc-8b98-24f899ef26f3)

#### Dashboard

Your Dashboard page will look like the below after working on the app.  

![New Note](https://github.com/yumietzk/remotely/assets/61277579/d1ed79e5-396c-48a7-859f-4ba4cb998caf)

## Tech Stack

- React.js
- React Router
- Tailwind CSS
- Supabase

### API

- [Remote Jobs Api](https://github.com/remotive-com/remote-jobs-api)
- [NewsData API](https://newsdata.io/)

## Folder Structure

I followed resources below to group folder by features:

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
