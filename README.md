# Strika-App

First Prototypes for Strika App for CS 5336 Startup Design. Stack React + tailwindCss.

<img width="802" alt="Screen Shot 2021-03-18 at 9 52 55 PM" src="https://user-images.githubusercontent.com/7906289/111720826-0e549300-8835-11eb-8c22-02839e12eb75.png">

## Frontend Development

In the `/frontend` directory, install node dependencies:
```bash
cd frontend
yarn install
```

And there you can run the following scripts:
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Backend development

In the `/backend` directory, install node dependencies:
```bash
cd backend
yarn install
```

### API Specification

**GET `/leaderboard/{event}`**

Get global scores from push-up challenge.

```js
# example response:
[
    {
        name: "jea265",
        score: 40,
        timestamp: 8732465982
    },
    {
        name: "da335",
        score: 20,
        timestamp: 287652394
    }
]
```

**POST `/leaderboard/{event}`**

Register the obtained score in the leaderboard.
```js
# expected body:
{
    name: "jea265",
    score: 40
}
```
```js
# expected response:
{
    name: "jea265",
    score: 40,
    timestamp: 8732465982,
    currentRanking: 1,
}
```
