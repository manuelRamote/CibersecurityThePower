variable_global = "Soy Global"

def probar_scope():
  variable_local = "Soy local"
  print(variable_local)
  print(variable_global)


probar_scope()
#print(variable_local) -> error