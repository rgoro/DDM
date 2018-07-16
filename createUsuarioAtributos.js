db.createCollection("UsuarioAtributos");
var col = db.UsuarioAtributos;
col.insert({"idUsuario": 1, "atributosAgencia": ["Direccion", "CBU"]});
col.insert({"idUsuario": 2, "atributosAgencia": ["Direccion", "Jefe"]});
col.insert({"idUsuario": 3, "atributosAgencia": []});
col.insert({"idUsuario": 4, "atributosAgencia": ["*"]});