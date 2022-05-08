This project uses Spotify Web Dev tools and Spotify API to get user information and allow user authentication. 

# Login page

For the login page we have to press Login to Spotify to start the user authorization process which is done using spotify API. 

Login Page: 

![Screenshot_1](https://user-images.githubusercontent.com/53473402/167298359-ed462919-bb32-416a-86cd-e8885ee5663b.png)
 
# User Authentication 

When we start the web applicaiton the user is prompted to login. They have the following options to login to the web application. 

![Screenshot_10](https://user-images.githubusercontent.com/53473402/167298840-6c362dae-2b97-499f-8e2a-6c0e44edc0f4.png)

If the user provies the wrong credentials then an error is shown and they can try to login again. 

![Screenshot_11](https://user-images.githubusercontent.com/53473402/167298886-6e394662-c6dd-4a3e-8e44-34ca9e40f98d.png)

Once the user logs in they are set into the authorization page. There are various scopes (permissions) given which can be accessed in this project to only those with permission. 
These scopes are:
-> View Spotify Account
-> View account activity 
-> Access account information

![Screenshot_2](https://user-images.githubusercontent.com/53473402/167299154-5f51645a-747e-4946-8b29-5b6afa68ac35.png)

![Screenshot_3](https://user-images.githubusercontent.com/53473402/167299161-0de91732-452c-481d-9f0f-4b0ce2714226.png)

# Application 

The Home page is the default page that is shown when a user logs in. From there the user is able to view their discover weekly playlist (songs) in the main body section. This is also done using the spotify API. Moreover, the playlists are also updated using this API in realtime. 

![Screenshot_4](https://user-images.githubusercontent.com/53473402/167299893-84ecf9b8-b78d-414c-b497-fcee37a2fc58.png)

![Screenshot_5](https://user-images.githubusercontent.com/53473402/167299898-33c4b3c3-53e3-49b7-a834-8e5ee9fa588a.png)

Information about the user are gathered using the help of tokens and Spotify Web Developer tools. A new app is create in the dashboard of spotify web dev which provides the client id and client secret code. These are used to interact with spotify and the application.  

![Screenshot_9](https://user-images.githubusercontent.com/53473402/167300149-ae9f1b17-df2a-45f4-b661-69feaa1bb448.png)

In the Sidebar, the Playlist contains realtime user playlist information. Whenever the user adds something new to the playlist it is reflected. The user information on the top right corner of the page is fetched using the API and dispatched to the frontend.

![Screenshot_6](https://user-images.githubusercontent.com/53473402/167299917-3cb3b9d4-49bb-451d-a5b8-10ca7c1e66c1.png)

## To run the application: 
Open up a new console and go to the directory where the file exists. In the console, type in: npm start. This will redirect to a localhost link which is where the app will be rendered.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

