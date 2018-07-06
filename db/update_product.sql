UPDATE products
SET product_name = $2, image_url = $3, price =$4
WHERE id = $1