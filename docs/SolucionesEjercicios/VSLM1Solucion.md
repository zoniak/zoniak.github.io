# Solución de Subnetting VLSM

Para resolver mediante **VLSM (Variable Length Subnet Mask)**, el proceso fundamental es ordenar las subredes de **mayor a menor** número de hosts necesarios para optimizar el espacio de direcciones.

---

## 1. Metodología de Cálculo

Utilizamos la fórmula:
$$2^n - 2 \ge H$$

Donde:

- **$n$**: Número de bits de host necesarios.
- **$H$**: Número de equipos (hosts) solicitados.

---

## 2. Desglose por Departamento

### 1. Departamento Comercial (60 equipos)

- **Cálculo:** Necesitamos $n=6$ bits, ya que $2^6 - 2 = 62$ (suficiente para 60).
- **Nueva Máscara:** Los bits de red son $32 - 6 = 26$. Por tanto, la máscara es **/26**.
- **Salto de red:** 64.

### 2. Departamento de Administración (28 equipos)

- **Cálculo:** Necesitamos $n=5$ bits, ya que $2^5 - 2 = 30$ (suficiente para 28).
- **Nueva Máscara:** Los bits de red son $32 - 5 = 27$. Por tanto, la máscara es **/27**.
- **Salto de red:** 32.

### 3. Departamento de Dirección (12 equipos)

- **Cálculo:** Necesitamos $n=4$ bits, ya que $2^4 - 2 = 14$ (suficiente para 12).
- **Nueva Máscara:** Los bits de red son $32 - 4 = 28$. Por tanto, la máscara es **/28**.
- **Salto de red:** 16.

### 4. Enlace WAN R1-R2 (2 equipos)

- **Cálculo:** Necesitamos $n=2$ bits, ya que $2^2 - 2 = 2$ (exacto para un enlace punto a punto).
- **Nueva Máscara:** Los bits de red son $32 - 2 = 30$. Por tanto, la máscara es **/30**.
- **Salto de red:** 4.

---

## 3. Tabla de Resultados (Examen)

| Departamento       | Red             | Máscara | 1ª IP Útil      | Última IP Útil  | Broadcast       |
| :----------------- | :-------------- | :------ | :-------------- | :-------------- | :-------------- |
| **Comercial**      | 192.168.100.0   | /26     | 192.168.100.1   | 192.168.100.62  | 192.168.100.63  |
| **Administración** | 192.168.100.64  | /27     | 192.168.100.65  | 192.168.100.94  | 192.168.100.95  |
| **Dirección**      | 192.168.100.96  | /28     | 192.168.100.97  | 192.168.100.110 | 192.168.100.111 |
| **Enlace WAN**     | 192.168.100.112 | /30     | 192.168.100.113 | 192.168.100.114 | 192.168.100.115 |
