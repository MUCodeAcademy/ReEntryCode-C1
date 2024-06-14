# 1

This question is from this article: https://carloarg02.medium.com/my-favorite-coding-question-to-give-candidates-17ea4758880c

Let’s say we have a website and we keep track of what pages customers are viewing, for things like business metrics.

Every time somebody comes to the website, we write a record to a log file consisting of Timestamp, PageId, CustomerId. At the end of the day we have a big log file with many entries in that format. And for every day we have a new file.

Now, given two log files (log file from day 1 and log file from day 2) we want to generate a list of 'loyal customers' that meet the criteria of: (a) they came on both days, and (b) they visited at least two unique pages.

Let's say these are the log files:

```js
const logDay1 = [
  { timestamp: "2023-06-01T12:00:00Z", pageId: "home", customerId: "123" },
  { timestamp: "2023-06-01T12:10:00Z", pageId: "products", customerId: "123" },
  { timestamp: "2023-06-01T12:20:00Z", pageId: "about", customerId: "124" },
  { timestamp: "2023-06-01T12:30:00Z", pageId: "contact", customerId: "125" }
];

const logDay2 = [
  { timestamp: "2023-06-02T12:00:00Z", pageId: "home", customerId: "123" },
  { timestamp: "2023-06-02T12:10:00Z", pageId: "products", customerId: "123" },
  { timestamp: "2023-06-02T12:20:00Z", pageId: "services", customerId: "124" },
  { timestamp: "2023-06-02T12:30:00Z", pageId: "contact", customerId: "126" }
];
```