# Rock the Quote
A simple motivation app to practice working with external APIs in React and Express.

|[![Linda Lai](public/contributors-linda-lai-70x70.jpg)](https://github.com/linda-lai) |
|-----------|
| Linda Lai |

## Background
Using the [Unsplash](https://unsplash.com/developers) and [Positive Quotes](http://positive-quotes.herokuapp.com/v1/) APIs, Rock the Quote is a simple motivation app built in React and Express.

![Rock the Quote](/public/rock-the-quote.png)

## Challenge
Using [these examples](https://www.google.com/search?biw=840&bih=848&tbm=isch&sa=1&ei=WJkyXLKeO9DT-Qaq-aPgCA&q=inspirational+quotes&oq=inspirational+quotes&gs_l=img.3..0i67j0l9.2201.5428..5537...0.0..0.252.1410.0j4j3......0....1..gws-wiz-img.byTmQqeBhuY) as inspiration for the application. We eventually want to have a nice picture as the background and an inspirational quote, but let's just start with making it work.

- Create a `create-react-app` project
- Pull data from [this API](https://app.swaggerhub.com/apis/Ren/positive-quotes-api/1.0.0)

The base URL is `http://positive-quotes.herokuapp.com/v1/`.
* All quotes: http://positive-quotes.herokuapp.com/v1/quotes/
* Single quote: http://positive-quotes.herokuapp.com/v1/quotes/:id
* Random quote: http://positive-quotes.herokuapp.com/v1/quotes/random