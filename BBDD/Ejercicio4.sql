/*Ejercicio 4 Nivel de dificultad: Experto */
/*1. Crea una tabla llamada "Pedidos" con las columnas: "id" (entero, clave primaria), "id_usuario" (entero, clave foránea de la tabla "Usuarios") y "id_producto" (entero, clave foránea de la tabla "Productos").*/
CREATE TABLE pedidos(
	id_pedido int PRIMARY KEY,
	id_usuario int,
	id_producto int,
	FOREIGN KEY (id_usuario) REFERENCES usuarios,
	FOREIGN KEY (id_producto) REFERENCES productos
)
/* 2. Inserta al menos tres registros en la tabla "Pedidos" que relacionen usuarios con productos. */
INSERT INTO Pedidos (id, id_usuario, id_producto)
VALUES (1, 1, 1), (2, 1, 2),  (3, 2, 3); 
/*3. Realiza una consulta que muestre los nombres de los usuarios y los nombres de los productos que han comprado, incluidos aquellos que no han realizado ningún pedido (utiliza LEFT JOIN y COALESCE). */
SELECT usuarios.nombre AS nombre,
COALESCE (productos.nombre, 'Ningun pedido')
FROM usuarios
LEFT JOIN pedidos ON usuarios.id = pedidos.id_usuario
LEFT JOIN productos ON productos.id = pedidos.id_producto;
/*4. Realiza una consulta que muestre los nombres de los usuarios que han realizado un pedido, pero también los que no han realizado ningún pedido (utiliza LEFT JOIN). */
SELECT usuarios.nombre AS nombre
FROM usuarios
LEFT JOIN pedidos ON usuarios.id = pedidos.id_usuario
LEFT JOIN productos ON productos.id = pedidos.id_producto;
/*5. Agrega una nueva columna llamada "cantidad" a la tabla "Pedidos" y actualiza los registros existentes con un valor (utiliza ALTER TABLE y UPDATE)*/
ALTER TABLE pedidos
ADD COLUMN cantidad int 

UPDATE Pedidos
SET cantidad = 1