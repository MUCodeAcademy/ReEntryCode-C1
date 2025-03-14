## Time to put some of the SQL Work into Practice!

Go to the [SQL Practice Site](https://www.w3schools.com/sql/trysql.asp?filename=trysql_desc). This site has prebuilt tables that will work out quite nicely for what we want to do.

Rather than have you try to hop back and forth, here's an overview of each of the tables:

| CUSTOMERS  |              |             |         |      |            |         |
| ---------- | ------------ | ----------- | ------- | ---- | ---------- | ------- |
| CustomerID | CustomerName | ContactName | Address | City | PostalCode | Country |

| CATEGORIES |              |             |
| ---------- | ------------ | ----------- |
| CategoryID | CategoryName | Description |

| EMPLOYEES  |          |           |           |       |       |
| ---------- | -------- | --------- | --------- | ----- | ----- |
| EmployeeID | LastName | FirstName | BirthDate | Photo | Notes |

| ORDERDETAILS  |         |           |          |
| ------------- | ------- | --------- | -------- |
| OrderDetailID | OrderID | ProductID | Quantity |

| ORDERS  |            |            |           |           |
| ------- | ---------- | ---------- | --------- | --------- |
| OrderID | CustomerID | EmployeeID | OrderDate | ShipperID |

| PRODUCTS  |             |            |            |      |       |
| --------- | ----------- | ---------- | ---------- | ---- | ----- |
| ProductID | ProductName | SupplierID | CategoryID | Unit | Price |

| SHIPPERS  |             |       |
| --------- | ----------- | ----- |
| ShipperID | ShipperName | Phone |

| SUPPLIERS  |              |         |      |            |         |     |
| ---------- | ------------ | ------- | ---- | ---------- | ------- | --- |
| SupplierID | SupplierName | Address | City | PostalCode | Country |

## Now that we know our Schema, let's do the following (making sure that the table returns all useful data, not just the bare minimum):

1. Find all Customers in the USA or Mexico ordered Alphabetically by Contact Name
```SQL
SELECT * FROM Customers
WHERE Country = 'USA'
OR Country = 'Mexico'
ORDER BY ContactName ASC;
```

2. Find all Products that cost more than 40
```SQL
SELECT * FROM Products
WHERE Price > 40;
```

3. Find all Employees born before 1960.
```SQL
SELECT * FROM Employees
WHERE BirthDate < '1960/01/01';
```

4. Find all Products that are Beverages
```SQL
SELECT * FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID
WHERE Categories.CategoryName = 'Beverages';
```

5. Find all Employees who have ordered something that shipped to Spain
```SQL
SELECT * FROM Employees
JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
WHERE Customers.Country = 'Spain';
```

6. Find all Orders with a total price over 2000 sorted from most expensive to least expensive.
```SQL
SELECT Products.ProductName, SUM(OrderDetails.Quantity * Products.Price) AS Total
FROM Products
JOIN OrderDetails ON OrderDetails.ProductID = Products.ProductID
-- GROUP BY means that it will separate and group rows according to their OrderID
GROUP BY OrderDetails.OrderID
-- HAVING is the exact same as WHERE, but you can't use WHERE with math (aggregate) functions like SUM
HAVING Total > 2000
ORDER BY Total DESC;
```