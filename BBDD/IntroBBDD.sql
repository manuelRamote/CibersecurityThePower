Ejercicio 1 Escribe una consulta que recupere los Vuelos (flights) y su identificador que figuren con status On Time.
SELECT flight_id, flight_no, status
FROM flights
WHERE status= 'On Time'

Ejercicio 2 Escribe una consulta que extraiga todas las columnas de la tabla bookings y refleje todas las reservas que han supuesto una cantidad totSELECTal mayor a 1.000.000 (Unidades monetarias).
SELECT * 
FROM bookings 
WHERE total_amount >= 1000000;

Ejercicio 3 Escribe una consulta que extraiga todas las columnas de los datos de los modelos de aviones disponibles (aircraft_data).
SELECT * 
FROM aircrafts_data

Ejercicio 4 Con el resultado anterior visualizado previamente, escribe una consulta que extraiga los identificadores de vuelo que han volado con un Boeing 737. (Código Modelo Avión = 733)
SELECT flight_id, flight_no
FROM flights
WHERE aircraft_code = '737'

Ejercicio 5  Escribe una consulta que te muestre la información detallada de los tickets que han comprado las personas que se llaman Irina.
SELECT * 
FROM tickets
WHERE passenger_name 
LIKE 'IRINA%';
