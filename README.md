# Strika-App

First Prototypes for Strika App for CS 5336 Startup Design. Stack React + tailwindCss.

<img width="802" alt="Screen Shot 2021-03-18 at 9 52 55 PM" src="https://user-images.githubusercontent.com/7906289/111720826-0e549300-8835-11eb-8c22-02839e12eb75.png">

## Frontend

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

## Backend

### Development

In the `/backend` directory, install node dependencies:
```bash
cd backend
yarn install
```

### Deployment

Using serverless:
```bash
# Test locally
serverless offline start

# Deploy to production
serverless deploy
```

### API Specification

**GET `/scores/{challenge}`**

Get leaderboard global scores from push-up challenge.

```js
# example response:
[
    {
        userId: "jea265",
        score: 40,
        timestamp: 8732465982
    },
    {
        userId: "da335",
        score: 20,
        timestamp: 287652394,
    }
]
```

**POST `/scores`**

Register the obtained score in the leaderboard.
```js
# expected body:
{
    userId: "jea265",
    score: 40,
    challenge: "PushUp",
}
```
```js
# expected response:
{
    userId: "jea265",
    score: 40,
    challenge: "PushUp",
    timestamp: 8732465982,
}
```

## Live demo
Backend tests response:

```bash
# With no auth
curl https://hs0w3cqnse.execute-api.us-east-1.amazonaws.com/dev/scores/pushups
```

```bash
# With JWT token
curl 'https://hs0w3cqnse.execute-api.us-east-1.amazonaws.com/dev/scores/pushups' \
  -H 'authorization: eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOGM3OTdlMDQ5YWFkZWViOWM5M2RiZGU3ZDAwMzJmNjk3NjYwYmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSnVhbmVzIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3N0cmlrYS1hcHAiLCJhdWQiOiJzdHJpa2EtYXBwIiwiYXV0aF90aW1lIjoxNjE3MzQzNjcwLCJ1c2VyX2lkIjoiRGcycDZjcG9ud1h0VGtJdzZoNjhSSlZmazZKMiIsInN1YiI6IkRnMnA2Y3BvbndYdFRrSXc2aDY4UkpWZms2SjIiLCJpYXQiOjE2MTc1MTI0NzIsImV4cCI6MTYxNzUxNjA3MiwiZW1haWwiOiJqdWFuZXNAc3RyaWthLmlvIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImp1YW5lc0BzdHJpa2EuaW8iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XLoq0BEPDfGUnuyknOkZJAPTbcbh0z2TTPN1m2togQgwFELEX6MqtV3LU1lifIXNP47YGsZlIqsUyVBrz4VgQWoFPwT0HeNndaUkHdw7oB3CUrQBgR-T-OFCXvrdqsFPYHoZcGTsXZ9ymnuRF0_SsbK_hUv0AGprs5Do9lgMdLI2wZC8CrZFgaezYKCXZh-1g_kAW1-NN1SggW8mUIENMhO_QSGq93oEi1CpeWKUdixRqQ7KujdGwSBTEj63DE43BdDLNFcQzA0hFAmDkmOgWDaUr2gr7cVuI-3H1qRdKc1nGizYXbN32gFI0zemtSOeEGaj7PGrOLQ-WMt1bdO5Ww'
```

Try at: https://juanes.link

![Pushup Screenshot](https://user-images.githubusercontent.com/7906289/113386289-ee09f580-9357-11eb-927a-775da95225b5.png)


