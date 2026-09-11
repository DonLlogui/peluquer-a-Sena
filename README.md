# peluquer-a-Sena
# Proyecto: Peluquera

**Tecnologías:** Node.js, MySQL y JavaScript

**Fecha:** 05-09-2026

## Requisitos funcionales

El 05-09-2026 se definieron los siguientes requisitos funcionales para el sistema de gestión de peluquería.

### 1. Gestión de trabajadores disponibles

El software debe permitirle al cliente visualizar los trabajadores disponibles.

#### Requisitos

- **A.** Debe existir un usuario **Administrador (Admin)** que pueda crear cuentas de clientes.
- **B.** El cliente debe poder crear su propia cuenta.
- **C.** El cliente debe poder validar su cuenta para comprobar que es un usuario real y, posteriormente, acceder a la lista de trabajadores.
- **D.** Debe existir una vista para que el **Admin** pueda crear trabajadores.
- **E.** Debe existir una vista para validar los trabajadores.

### 2. Gestión de horarios de los trabajadores

El sistema debe permitir gestionar y consultar los horarios de los trabajadores.

#### Requisitos

- **A.** El cliente puede visualizar los horarios de los trabajadores disponibles.
- **B.** El Admin puede visualizar los horarios de los trabajadores disponibles.
- **C.** El trabajador puede visualizar sus propios horarios.
- **D.** El trabajador puede editar sus horarios.
- **E.** El trabajador puede eliminar sus horarios.
- **F.** El Admin puede eliminar los horarios de los trabajadores.

---

## Requisitos funcionales identificados

| ID | Requisito funcional |
|---|---|
| **RF01** | El sistema debe permitir al Admin crear una cuenta para un nuevo cliente. |
| **RF02** | El sistema debe permitir al nuevo cliente crear su propia cuenta. |
| **RF03** | El sistema debe permitir al nuevo cliente iniciar sesión (**LOGIN**). |
| **RF04** | El sistema debe permitir al Admin crear una cuenta para un nuevo trabajador. |
| **RF05** | El sistema debe permitir al nuevo trabajador iniciar sesión. |
| **RF06** | El sistema debe permitir al cliente visualizar los horarios de los trabajadores. |
| **RF07** | El sistema debe permitir al Admin visualizar los horarios de los trabajadores. |
| **RF08** | El sistema debe permitir al trabajador visualizar sus propios horarios. |
| **RF09** | El sistema debe permitir al trabajador editar sus horarios. |
| **RF10** | El sistema debe permitir al trabajador eliminar sus horarios. |
| **RF11** | El sistema debe permitir al Admin editar los horarios de los trabajadores. |
| **RF12** | El sistema debe permitir al Admin eliminar los horarios de los trabajadores. |
| **RF13** | El sistema debe permitir al Admin eliminar un trabajador. |
| **RF14** | El sistema debe permitir al Admin eliminar un cliente. |

## Roles del sistema

El sistema contará inicialmente con tres tipos de usuarios:

1. **Administrador (Admin)**
   - Crear clientes.
   - Crear trabajadores.
   - Visualizar horarios.
   - Editar horarios.
   - Eliminar horarios.
   - Eliminar trabajadores.
   - Eliminar clientes.

2. **Cliente**
   - Crear su propia cuenta.
   - Iniciar sesión.
   - Validar su cuenta.
   - Visualizar trabajadores disponibles.
   - Visualizar horarios de los trabajadores.

3. **Trabajador**
   - Iniciar sesión.
   - Visualizar sus horarios.
   - Editar sus horarios.
   - Eliminar sus horarios.

git remote add origin https://github.com/DonLlogui/peluquer-a-Sena.git
