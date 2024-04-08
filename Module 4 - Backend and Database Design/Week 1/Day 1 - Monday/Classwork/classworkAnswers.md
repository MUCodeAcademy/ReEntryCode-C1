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
WHERE Customers.Country = "USA" OR 
Customers.Country = "Mexico"
ORDER BY Customers.ContactName ASC;

-- This is also an option

SELECT * FROM Customers
WHERE Customers.Country IN ("USA", "Mexico")
ORDER BY Customers.ContactName ASC;
```

2. Find all Products that cost more than 40
```SQL
SELECT * FROM Products
WHERE Products.Price > 40;
```

3. Find all Employees born before 1960.
```SQL
SELECT * FROM Employees
WHERE Employees.BirthDate < "1960-01-01";
```

4. Find all Products that are Beverages
```SQL

-- Combining two or more tables
-- JOIN tableName ON relatedColumn = relatedColumn

SELECT * FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID
WHERE Categories.CategoryName = "Beverages";
```

5. Find all Employees who have ordered something that shipped to Spain
```SQL

-- DISTINCT does not allow duplicate results

SELECT DISTINCT Employees.FirstName FROM Employees
JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
WHERE Customers.Country = "Spain";
```

6. Find all Orders with a total price over 2000 sorted from most expensive to least expensive.
```SQL
SELECT OrderDetails.OrderID, SUM(OrderDetails.Quantity * Products.Price) AS Total
FROM OrderDetails
JOIN Products ON OrderDetails.ProductID = Products.ProductID
-- GROUP BY means that all rows that have the same OrderID will be combined into one group
GROUP BY OrderDetails.OrderID
-- HAVING is the same as WHERE, but you can't use WHERE with functions (like SUM)
HAVING Total > 2000
ORDER BY Total DESC;
```