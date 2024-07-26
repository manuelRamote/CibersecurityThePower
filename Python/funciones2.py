def carrito_suma(list_prices):
  total = 0
  for price in list_prices:
    total += price
  return total

carrito_price = carrito_suma([5,2,7,8,9,10,15])
print(carrito_price)


def best_restaurant (star_list):
  maximo = star_list[0]
  for star in star_list:
    if star > maximo: 
      maximo = star
  return maximo


restaurant_star = best_restaurant([5,10,40,59,32,51])
print(restaurant_star)
