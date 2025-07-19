# 🧪 Automatización de API - Sección Usuários | [Serverest.dev](https://serverest.dev)

Este proyecto automatiza la validación de los endpoints relacionados con **usuarios** de la API pública [Serverest](https://serverest.dev), utilizando el framework [Karate](https://github.com/karatelabs/karate) para pruebas de servicios REST.

---

## 🚀 Endpoints Automatizados

| Método   | Ruta                    | Descripción                     |
|----------|-------------------------|---------------------------------|
| `GET`    | `/usuarios`             | Lista todos los usuarios        |
| `GET`    | `/usuarios/{id}`        | Obtiene un usuario por ID       |
| `POST`   | `/usuarios`             | Crea un nuevo usuario           |
| `PUT`    | `/usuarios/{id}`        | Actualiza un usuario existente  |
| `DELETE` | `/usuarios/{id}`        | Elimina un usuario por ID       |

---

## 🛠 Tecnologías Usadas

- [Karate DSL](https://github.com/karatelabs/karate) para pruebas REST
- Java 17
- Maven para gestión de dependencias
- Validación de respuestas con JSON Schema
---

## 🔄 Datos de Prueba Dinámicos

- 📧 Correos únicos generados con UUID
- 🔒 Contraseñas aleatorias
- 👤 Nombres reales (faker o generador)
- ✅ Campo `"administrador"` aleatorio: `"true"` o `"false"`

---



