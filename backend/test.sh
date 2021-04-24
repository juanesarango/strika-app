# Test Api
source backend/.env
HOST=https://w4wy1yzxmg.execute-api.us-east-1.amazonaws.com/prod

## WITH AUTH

# Post a score
curl \
  -X POST $HOST/scores \
  -H 'authorization: ${JWT_TOKEN}' \
  -H 'Content-Type: application/json' \
  -d '{"userId": "jea265", "score": 10, "challenge": "pushups"}'

# Get Leaderboard
curl \
  -H 'authorization: ${JWT_TOKEN}' \
  $HOST/scores/pushups

## WITHOUT AUTH

# Post a score
curl \
  -X POST $HOST/scores \
  -H 'Content-Type: application/json' \
  -d '{"userId": "jea265", "score": 10, "challenge": "pushups"}'

# Get Leaderboard
curl $HOST/scores/pushups

