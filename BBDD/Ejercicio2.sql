/*1. Crea una base de datos llamada "MiBaseDeDatos". */
CREATE DATABASE MiBaseDeDatos;
/*2. Crea una tabla llamada "Usuarios" con las columnas: "id" (entero, clave primaria), "nombre" (texto) y "edad" (entero).*/
CREATE TABLE Usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    edad INT
);
/* 3. Inserta dos registros en la tabla "Usuarios". */
INSERT INTO Usuarios (id, nombre, edad)
VALUES (1, 'Juan', 30), (2, 'María', 25);
/*4. Actualiza la edad de un usuario en la tabla "Usuarios". */
UPDATE Usuarios
SET edad = 32
WHERE id = 1;
/*5. Elimina un usuario de la tabla "Usuarios". */
DELETE FROM Usuarios
WHERE id = 2;
/*Nivel de dificultad: Moderado*/
/*1. Crea una tabla llamada "Ciudades" con las columnas: "id" (entero, clave primaria), "nombre" (texto) y "pais" (texto). */
CREATE TABLE Ciudades (
    id INT PRIMARY KEY,
    nombre VARCHAR(255),
    pais VARCHAR(255)
);
/*2. Inserta al menos tres registros en la tabla "Ciudades". */
INSERT INTO Ciudades (id, nombre, pais)
 VALUES(1, 'Madrid', 'España'), (2, 'Berlin', 'Alemania'),(3, 'París', 'Francia');
/*3. Crea una foreign key en la tabla "Usuarios" que se relacione con la columna "id" de la tabla "Ciudades".*/
ALTER TABLE Usuarios
ADD COLUMN id_ciudad INT,
ADD CONSTRAINT FK_id_ciudad
FOREIGN KEY (id_ciudad) REFERENCES Ciudades(id)
/*4. Realiza una consulta que muestre los nombres de los usuarios junto con el nombre de su ciudad y país (utiliza un LEFT JOIN). */
SELECT Usuarios.nombre AS nombre_usuario, Ciudades.nombre AS nombre_ciudad, Ciudades.pais
FROM Usuarios
LEFT JOIN Ciudades 
ON Usuarios.id_ciudad = Ciudades.id;
/*5. Realiza una consulta que muestre solo los usuarios que tienen una ciudad asociada (utiliza un INNER JOIN).*/
SELECT Usuarios.nombre AS nombre_usuario, Ciudades.nombre AS nombre_ciudad, Ciudades.pais
FROM Usuarios
INNER JOIN Ciudades 
ON Usuarios.id_ciudad = Ciudades.id;