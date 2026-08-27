# Metodología y decisiones del modelo

## Pregunta de negocio

¿Qué combinación de precio, demanda e inversión comercial permite a una cafetería urbana operar de forma rentable sin crecer a costa de su caja?

## Variables controlables

| Variable | Rango | Razón |
|---|---:|---|
| Precio medio | 2,20–5,20 € | Incluye bebidas y ventas complementarias |
| Pedidos diarios | 90–350 | Permite simular desde baja ocupación hasta alta rotación |
| Marketing mensual | 0–5.000 € | Representa captación local, promociones y acuerdos |

## Supuestos constantes

- 26 días de operación al mes.
- 1,08 € de coste variable medio por pedido.
- 8.700 € mensuales de alquiler, personal, suministros y otros costes fijos.
- Capacidad suficiente para atender el volumen seleccionado.
- Sin impuestos, deuda, amortizaciones ni estacionalidad.

## Interpretación

El punto de equilibrio indica cuántos pedidos mensuales cubren los costes. El margen neto aproxima cuánto queda por cada euro facturado después de los costes modelados. Un margen alto no garantiza liquidez: el modelo no incorpora calendario de cobros y pagos.

## Limitaciones

La demanda se introduce manualmente y no cambia automáticamente cuando varía el precio o el marketing. Esta decisión hace el modelo transparente, pero obliga a quien lo usa a construir escenarios razonables. Una siguiente versión debería estimar elasticidad con datos históricos y mostrar intervalos, no una cifra única.

## Cómo validaría el modelo

1. Entrevistar a tres negocios comparables para contrastar estructura de costes.
2. Recoger ventas por hora, ticket medio, merma y canal durante 8–12 semanas.
3. Separar clientes nuevos y recurrentes para atribuir marketing.
4. Calibrar elasticidad y estacionalidad.
5. Comparar las predicciones con cuatro semanas no utilizadas en el ajuste.
