# My Site

## Running

```ruby
gem install sinatra
ruby app.rb
```

## Pushing to Heroku

The first time:

```bash
cd [whatever]
git clone git@github.com:ilica/personalwebsite.git
cd personalwebsite
[make changes]
git remote add heroku git@heroku.com:ilica-portfolio.git
git add .
git commit -m "[message]"
git push heroku master
```

Each time just:


```bash
git add .
git commit -m "[message]"
git push heroku master
```
