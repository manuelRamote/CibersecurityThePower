/*1. Crea una tabla llamada "Productos" con las columnas: "id" (entero, clave primaria), "nombre" (texto) y "precio" (numérico). */
CREATE TABLE productos(
	id SERIAL PRIMARY KEY,
	NOMBRE varchar	(255),
	precio INT
)
/*2. Inserta al menos cinco registros en la tabla "Productos". */
INSERT INTO Productos (id, nombre, precio) 
VALUES (1, 'Camiseta', 15), (2, 'Pantalón', 30), (3, 'Zapatos', 50), (4, 'Gorra', 10), (5, 'Bufanda',5);
/*3. Actualiza el precio de un producto en la tabla "Productos". */
UPDATE productos 
SET precio = 40
WHERE id = 2
/*4. Elimina un producto de la tabla "Productos". */
DELETE FROM productos
WHERE id = 5
/*5. Realiza una consulta que muestre los nombres de los usuarios junto con los nombres de los productos que han comprado (utiliza un INNER JOIN con la tabla "Productos").*/
CREATE TABLE pedidos(
	id_pedido int PRIMARY KEY,
	id_usuario int,
	id_producto int,
	FOREIGN KEY (id_usuario) REFERENCES usuarios,
	FOREIGN KEY (id_producto) REFERENCES productos
)
SELECT usuarios.nombre AS nombre, productos.nombre AS nombre  
FROM usuarios
INNER JOIN pedidos ON usuarios.id = pedidos.id_usuario
INNER JOIN productos ON productos.id = pedidos.id_producto;