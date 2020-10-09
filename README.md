# netflix-youtube

![alt text](https://i.ibb.co/F02MG0r/netflix-youtube-netlify-app.png)

see live at `https://netflix-youtube.netlify.app/`

## ReactJS

ReactJS single page application with firebase backend and youtube api.
This app is a netflix clone, with access to youtube,components were build using 'styled-components'.
Only authorized users can access browse page.
tests were done with react-jest located on `src//__test__`

## **Pages**

- **Browse**

  > browse and search tv/series videos

- **BrowseYoutube**

  > browse and search tv/series videos from youtube

- **Home**
  > Landing page for newcomers

* **Signin**

  > Sign in and redirects to Browse.

* **Signup**
  > Sign up and redirects to Browse.

# Router Structure

```


        <Router>
            //if user is logged in redirect to browse
            <Route "/">
                <Home/>
            <Route>

            //if user is logged in redirect to browse
            <Route "/singin">
              <Signin />
            </Route>

            //if user is logged in redirect to browse
            <Route "/singup">
              <Signup />
            </Route>

            // protected redirect to /signin
            <Route "/browse">
              <Browse />
            </Route>

            // protected redirect to /signin
            <Route "/browse/youtube">
              <BrowseYoutube />
            </Route>


        </Router>
}
```

<!-- ## Card Object Description -->

## Available Scripts

In the project directory, you can run:
Please remember to provide a .env file with your own youtube api key.
in this structure:
`REACT_APP_YOUTUBE_API_KEY=YOUR_KEY_HERE`

see '.sample-env' file.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
