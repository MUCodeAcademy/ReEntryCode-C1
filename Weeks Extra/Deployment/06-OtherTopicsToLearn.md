# Other Topics You Should Learn

## ORMs Such as GraphQL

ORMs take schemas from databases and build queries for easier scaffolding of APIs. They're going out of favor in some places, but they are still used a lot especially in smaller companies where they might not have the overhead to build out fully-fledged APIs. One of the biggest libraries is [GraphQL](https://graphql.org/code/#javascript). It has support for multiple different languages. An example from the docs for express is:

```javascript
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => "Hello world!" };

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
```

Basically you're building a Query schema and then accessing it via the `/graphql` route. You can set up multiple queries this way, and depending on how it is connected to a database, it can make customization of queries based off supplied params much easier.

## PWAs (Progressive Web Apps)

One of the big topics nowadays is the implementation of PWAs. They allow users to still have some sort of functionality offline and, when done properly, allow for users to get notifications pushed to them via their browser. There are a lot of factors that go into them and you can go into a super deep dive, but for a good introduction, take a look at [Google's Docs](https://web.dev/progressive-web-apps/).

## Service Workers

In the same vein of PWAs, you can use service workers to implement some form of functionality that runs in your browser, but isn't actually the webpage itself. It can be used for notifications, updating information, or really anything. Much like the other examples here, google has a [fantastic guide](https://developer.chrome.com/docs/workbox/service-worker-overview/)

## SEO

Search engine optimization has become incredibly important for web sites. There are entire skill sets and jobs dedicated to increasing how much search engine coverage you can get and how to improve your web presence. If you want to implement the best possible settings, you can go straight to one of the sources... [Google](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=en&visit_id=637908297184991114-3532700250&rd=1).

## Cron Jobs

Cron Jobs allow your backed to run tasks on some form of schedule. One of the biggest libraries used is [cron](https://www.npmjs.com/package/cron). By implementing this package you can do things like log data at set intervals, or whatever else you want.

## Algorithms

One of the most important and commonly misunderstood topics in CS are Data Structures and Algorithms. By understanding different data structures and different algorithms, it will allow you to write code that is much more efficient. Also, simple questions about these topics are commonly asked in interviews. Universities have entire courses on this stuff, but I would encourage you to look into them more [here](https://www.w3schools.com/dsa/dsa_intro.php).
