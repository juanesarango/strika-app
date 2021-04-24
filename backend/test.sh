# Test Api

## WITH AUTH
TOKEN=eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOGM3OTdlMDQ5YWFkZWViOWM5M2RiZGU3ZDAwMzJmNjk3NjYwYmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSnVhbmVzIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3N0cmlrYS1hcHAiLCJhdWQiOiJzdHJpa2EtYXBwIiwiYXV0aF90aW1lIjoxNjE3MzQzNjcwLCJ1c2VyX2lkIjoiRGcycDZjcG9ud1h0VGtJdzZoNjhSSlZmazZKMiIsInN1YiI6IkRnMnA2Y3BvbndYdFRrSXc2aDY4UkpWZms2SjIiLCJpYXQiOjE2MTc1MTI0NzIsImV4cCI6MTYxNzUxNjA3MiwiZW1haWwiOiJqdWFuZXNAc3RyaWthLmlvIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImp1YW5lc0BzdHJpa2EuaW8iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XLoq0BEPDfGUnuyknOkZJAPTbcbh0z2TTPN1m2togQgwFELEX6MqtV3LU1lifIXNP47YGsZlIqsUyVBrz4VgQWoFPwT0HeNndaUkHdw7oB3CUrQBgR-T-OFCXvrdqsFPYHoZcGTsXZ9ymnuRF0_SsbK_hUv0AGprs5Do9lgMdLI2wZC8CrZFgaezYKCXZh-1g_kAW1-NN1SggW8mUIENMhO_QSGq93oEi1CpeWKUdixRqQ7KujdGwSBTEj63DE43BdDLNFcQzA0hFAmDkmOgWDaUr2gr7cVuI-3H1qRdKc1nGizYXbN32gFI0zemtSOeEGaj7PGrOLQ-WMt1bdO5Ww
HOST=https://w4wy1yzxmg.execute-api.us-east-1.amazonaws.com/prod

# Post a score
curl \
  -X POST $HOST/scores \
  -H 'authorization: $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"userId": "jea265", "score": 10, "challenge": "pushups"}'

# Get Leaderboard
curl $HOST/scores/pushups \
  -H 'authorization: $TOKEN'


## NO AUTH
HOST=https://w4wy1yzxmg.execute-api.us-east-1.amazonaws.com/prod

# Post a score
curl \
  -X POST $HOST/scores \
  -H 'Content-Type: application/json' \
  -d '{"userId": "jea265", "score": 10, "challenge": "pushups"}'

# Get Leaderboard
curl $HOST/scores/pushups


curl https://w4wy1yzxmg.execute-api.us-east-1.amazonaws.com/prod/scores/pushups
