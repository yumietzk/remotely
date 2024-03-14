# Remotely

The MVP of this app is live 🚀  
[Remotely](https://remotelyapp.vercel.app/)  

> ⚠️ I’m not expecting the use case for smaller screens, such as mobile devices, so please use this app on your laptop or tablet.

## About the project

A job board platform where you can search for remote Software Engineer jobs and track job applications all in one place.

#### Dashboard

- You can see the summary of your job applications, including the visual application chart.

#### Application Tracker

- You can track and manage all your job applications, categorizing them into the “No Status,” “Applied,” “First Interview,” “Second Interview,” “Final Interview,” or “Offered” stages.

> 💡 If the job is no longer available, you will be asked if you want to keep the application or remove it.

#### Job Search

- You can see all the available remote Software Engineer jobs, jump to the details and save jobs you’re interested in.

- You can also filter jobs by job type and skill and search for jobs by position.

> 💡 If you try to remove the job that you categorized as one other than "No Status” from saved, it is recognized that you have already applied for the job, and you will not be able to remove it.

#### News

- You can read the latest tech news.

#### Profile

- You can update your profile info.

> ☝🏻 In the future, more fields may be added to utilize that information for your job search.

## Tech Stack

- React.js
- React Router
- Tailwind CSS
- Supabase

> 💡 React Query is currently used to fetch and cache data only from the external APIs, but I'll learn more about it to make good use of it in the future.

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

__test__             # tests folder
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
