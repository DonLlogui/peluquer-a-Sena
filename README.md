# Proyecto: Peluquera

**Tecnologías:** Node.js, MySQL y JavaScript<br>
<br>
**Fecha:** 05-09-2026<br>
<br>
## Requisitos funcionales<br>
<br>
El 05-09-2026 se definieron los siguientes requisitos funcionales para el sistema de gestión de peluquería.<br>
<br>
### 1. Gestión de trabajadores disponibles<br>
<br>
El software debe permitirle al cliente visualizar los trabajadores disponibles.<br>
<br>
#### Requisitos<br>
<br>
- **A.** Debe existir un usuario **Administrador (Admin)** que pueda crear cuentas de clientes.<br>
- **B.** El cliente debe poder crear su propia cuenta.<br>
- **C.** El cliente debe poder validar su cuenta para comprobar que es un usuario real y, posteriormente, acceder a la lista de trabajadores.<br>
- **D.** Debe existir una vista para que el **Admin** pueda crear trabajadores.<br>
- **E.** Debe existir una vista para validar los trabajadores.<br>
<br>
### 2. Gestión de horarios de los trabajadores<br>

El sistema debe permitir gestionar y consultar los horarios de los trabajadores.<br>

#### Requisitos<br>

- **A.** El cliente puede visualizar los horarios de los trabajadores disponibles.<br>
- **B.** El Admin puede visualizar los horarios de los trabajadores disponibles.<br>
- **C.** El trabajador puede visualizar sus propios horarios.<br>
- **D.** El trabajador puede editar sus horarios.<br>
- **E.** El trabajador puede eliminar sus horarios.<br>
- **F.** El Admin puede eliminar los horarios de los trabajadores.<br>
<br>
---
<br>
## Requisitos funcionales identificados<br>
<br>
| ID | Requisito funcional |<br>
|---|---|
| **RF01** | El sistema debe permitir al Admin crear una cuenta para un nuevo cliente. |<br>
| **RF02** | El sistema debe permitir al nuevo cliente crear su propia cuenta. |<br>
| **RF03** | El sistema debe permitir al nuevo cliente iniciar sesión (**LOGIN**). |<br>
| **RF04** | El sistema debe permitir al Admin crear una cuenta para un nuevo trabajador. |<br>
| **RF05** | El sistema debe permitir al nuevo trabajador iniciar sesión. |<br>
| **RF06** | El sistema debe permitir al cliente visualizar los horarios de los trabajadores. |<br>
| **RF07** | El sistema debe permitir al Admin visualizar los horarios de los trabajadores. |<br>
| **RF08** | El sistema debe permitir al trabajador visualizar sus propios horarios. |<br>
| **RF09** | El sistema debe permitir al trabajador editar sus horarios. |<br>
| **RF10** | El sistema debe permitir al trabajador eliminar sus horarios. |<br>
| **RF11** | El sistema debe permitir al Admin editar los horarios de los trabajadores. |<br>
| **RF12** | El sistema debe permitir al Admin eliminar los horarios de los trabajadores. |<br>
| **RF13** | El sistema debe permitir al Admin eliminar un trabajador. |<br>
| **RF14** | El sistema debe permitir al Admin eliminar un cliente. |<br>
<br>
Roles del sistema<br>
<br>
El sistema contará inicialmente con tres tipos de usuarios:<br>
<br>
1. **Administrador (Admin)**<br>
   - Crear clientes.<br>
   - Crear trabajadores.<br>
   - Visualizar horarios.<br>
   - Editar horarios.<br>
   - Eliminar horarios.<br>
   - Eliminar trabajadores.<br>
   - Eliminar clientes.<br>
<br>
2. **Cliente**<br>
   - Crear su propia cuenta.<br>
   - Iniciar sesión.<br>
   - Validar su cuenta.<br>
   - Visualizar trabajadores disponibles.<br>
   - Visualizar horarios de los trabajadores.<br>

3. **Trabajador**<br>
   - Iniciar sesión.<br>
   - Visualizar sus horarios.<br>
   - Editar sus horarios.<br>
   - Eliminar sus horarios.<br>
<br>
git remote add origin https://github.com/DonLlogui/peluquer-a-Sena.git
