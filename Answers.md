# futureskill
1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
* Ans:- Product is the Table of the the database where category_id is the foreign key which is store the id of the parent key which is product_category using this foreign key we can assosite all the fetures or data of the product_category in the product with the help of the foreign key we can use the data which we need to access from the product_category.

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
* Ans:- Ensuring that each product in the "Product" table has a valid category assigned to it involves implementing proper data integrity constraints and validation mechanisms in your database. Here are several approaches to achieve this:

* Foreign Key Constraint:
  - Create a foreign key relationship between the "Product" table and the "Category" table. This ensures that each product references a valid category.
ALTER TABLE Product
ADD CONSTRAINT fk_Product_Category
FOREIGN KEY (category_id) REFERENCES Category(category_id);

* Use Enumerations or Lookup Tables:

- Store valid category values in a separate table or use an enumeration data type. Then, reference this table in the "Product" table.
CREATE TABLE Category (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

ALTER TABLE Product
ADD CONSTRAINT fk_Product_Category
FOREIGN KEY (category_id) REFERENCES Category(category_id);



