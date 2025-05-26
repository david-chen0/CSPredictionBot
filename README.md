# CSPredictionBot

### Ideas
We can expand upon it to auto pull matches, etc later on
For now, what we can do is just have the user input a match(ex: a HLTV page) and return the chance of team winning(translate that into money line)

### Infra
Need to scrape data(`Playwright` for dynamic and `BeautifulSoup` for static) or find if there's an API for these things(check out HLTV API below)

Can store data locally with PSQL for now, easily migrate in future if needed

Need a way to train model. Local CPU might be enough for small models, but for larger models might need something dedicated for it(ex: Google Colab Pro, Paperspace, etc)

At the very end, we can setup a frontend w React+Tailwind

### Prediction Model
Input match, output predicted team and chance of winning



### Notes
Check out a HLTV API someone made: https://hltv-api.vercel.app/

Make sanity checks on our model(ex: model should have same prediction for Eternal Fire and Aurora immediately after the switch)
