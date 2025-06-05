# CSPredictionBot

### End Goal
User goes to website

Website polls for CS2 matches and displays all the soon upcoming ones(ex: this and next day)

When user clicks on a match, backend fetches info about the match

Backend figures out the percent for teams to win and displays it along with all the other relevant info(players playing, how many maps, what tournament it is for, what are the current odds offered on the match, what our implied odds are, past matchups between the two rosters, etc)

We'll just do moneyline for now, spread is too weird and volatile for CS

We can do player stats later on

### Ideas
We can expand upon it to auto pull matches, etc later on
For now, what we can do is just have the user input a match(ex: a HLTV page) and return the chance of team winning(translate that into money line)

Make sure to backtest along the way, need to use data at that point in time during backtesting(if we're backtesting a 2020 match, bot should only have info up to 2020)

### Infra
Need to scrape data(`Playwright` for dynamic and `BeautifulSoup` for static) or find if there's an API for these things(check out HLTV API below)

Can store data locally with PSQL for now, easily migrate in future if needed

Need a way to train model. Local CPU might be enough for small models, but for larger models might need something dedicated for it(ex: Google Colab Pro, Paperspace, etc)

At the very end, we can setup a frontend w React+Tailwind

### Prediction Model
Input match, output predicted team and chance of winning

#### Things to consider
Players on the team

How long current roster has been together(ex: a stand-in would mean very short time)

Team performance history

History between the two team's matchups

Number of maps(bo1=high variance, bo5=low variance)


### Notes
Forked HLTV API: https://github.com/david-chen0/HLTV
When we make a change to that package and want to pull it down to here, run `npm i <package>`(ex: `npm i hltv` or `npm i --force` if you want to do for all dependences) to refresh it(after pushing to mainline)

Make sanity checks on our model(ex: model should have same prediction for Eternal Fire and Aurora immediately after the switch)

Launch virtual env using `.\venv\Scripts\Activate`(using Powershell)

### Plan
Setup infra for HLTV API. Make sure it works first through CLI, then setup throttling(so we don't get IP banned), then setup full Python access and test

Scrape the HLTV website ourselves in Python so we don't have to do cross-language conversion

Make a CLI input where you give the link of the upcoming match and we return info about the match

Decide which model(s) to use

(IF NEEDED) Setup DB and Dao(could be PSQL, could be something else)



Switch HLTV NodeJS Api to Python communication to Protobuf if JSON takes too long

Host backend w Vercel, which our frontend connects to(can use something like Github Pages, CloudFlare, figure it out later)
