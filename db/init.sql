CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL,
    image_url TEXT, 
    price DECIMAL
); 

INSERT INTO products
(product_name, image_url, price)
VALUES 
('Buzz Lightyear','https://upload.wikimedia.org/wikipedia/en/b/b4/Buzz_Lightyear.png', 5.24);