# Ejercicio de Enrutamiento: Configuración de Router 1 y Router 2

Este documento detalla la configuración de las interfaces y el enrutamiento estático para interconectar las subredes calculadas mediante VLSM.

---

## 1. Esquema de Direccionamiento (Referencia)

| Red                | Interfaz    | Dirección IP    | Máscara               |
| :----------------- | :---------- | :-------------- | :-------------------- |
| **Comercial**      | R1 (G0/0)   | 192.168.100.1   | 255.255.255.192 (/26) |
| **Administración** | R1 (G0/1)   | 192.168.100.65  | 255.255.255.224 (/27) |
| **Enlace WAN**     | R1 (S0/0/0) | 192.168.100.113 | 255.255.255.252 (/30) |
| **Enlace WAN**     | R2 (S0/0/0) | 192.168.100.114 | 255.255.255.252 (/30) |
| **Dirección**      | R2 (G0/0)   | 192.168.100.97  | 255.255.255.240 (/28) |

---

## 2. Configuración de Router 1 (R1)

R1 necesita conocer las redes que no tiene directamente conectadas (en este caso, la red de Dirección).

### Configuración de Interfaces e IP Route

```bash
Router> enable
Router# configure terminal

# Interfaz LAN Comercial
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.100.1 255.255.255.192
Router(config-if)# no shutdown

# Interfaz LAN Administración
Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 192.168.100.65 255.255.255.224
Router(config-if)# no shutdown

# Interfaz WAN (Hacia R2)
Router(config)# interface Serial0/0/0
Router(config-if)# ip address 192.168.100.113 255.255.255.252
Router(config-if)# no shutdown

# Ruta Estática hacia la red de Dirección (a través de R2)
Router(config)# ip route 192.168.100.96 255.255.255.240 192.168.100.114
```
