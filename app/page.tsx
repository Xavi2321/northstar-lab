'use client';

import { useMemo, useState } from 'react';

const money = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

export default function Home() {
  const [price, setPrice] = useState(3.2);
  const [orders, setOrders] = useState(190);
  const [marketing, setMarketing] = useState(1200);

  const model = useMemo(() => {
    const monthlyOrders = orders * 26;
    const revenue = monthlyOrders * price;
    const variable = monthlyOrders * 1.08;
    const fixed = 8700 + marketing;
    const profit = revenue - variable - fixed;
    const margin = revenue ? (profit / revenue) * 100 : 0;
    const breakEven = Math.ceil(fixed / Math.max(price - 1.08, .01));
    return { revenue, profit, margin, breakEven };
  }, [price, orders, marketing]);

  const applyScenario = (next: [number, number, number]) => {
    setPrice(next[0]); setOrders(next[1]); setMarketing(next[2]);
  };
  const recommendation = model.margin >= 20
    ? 'El negocio supera el objetivo de margen. Prioridad: proteger la experiencia y crear una reserva de caja.'
    : model.profit >= 0
      ? 'La operación es rentable, pero sensible. Prueba elevar el ticket medio antes de aumentar el gasto fijo.'
      : 'El escenario destruye caja. Reduce inversión o aumenta contribución por pedido antes de escalar.';

  return (
    <main>
      <nav className="nav"><a className="brand" href="#top"><span>N</span> NORTHSTAR LAB</a><div className="navlinks"><a href="#simulador">Simulador</a><a href="#metodo">Método</a><a href="#autor">Proyecto</a></div></nav>
      <section id="top" className="hero">
        <div className="eyebrow"><i /> CASO DE NEGOCIO INTERACTIVO · BARCELONA 2026</div>
        <h1>Decidir mejor<br/><em>antes</em> de gastar.</h1>
        <p className="lede">Un laboratorio de estrategia para explorar cómo precio, demanda y marketing cambian la salud financiera de una cafetería urbana.</p>
        <a className="cta" href="#simulador">Abrir el simulador <b>↓</b></a>
        <div className="hero-note"><strong>01</strong><span>MODELO</span><p>Unit economics + escenarios</p></div>
      </section>
      <section id="simulador" className="lab">
        <header className="section-head"><div><span>02 / LABORATORIO</span><h2>Mueve una variable.<br/>Observa el negocio.</h2></div><p>Los resultados se recalculan en tiempo real. Prueba una estrategia conservadora y otra agresiva.</p></header>
        <div className="dashboard">
          <div className="controls">
            <div className="presets" aria-label="Escenarios predefinidos"><button onClick={()=>applyScenario([2.8,145,500])}>Cauto</button><button onClick={()=>applyScenario([3.2,190,1200])}>Base</button><button onClick={()=>applyScenario([4.1,265,3000])}>Expansión</button></div>
            <Slider label="Precio medio" value={price} min={2.2} max={5.2} step={0.1} suffix=" €" onChange={setPrice}/>
            <Slider label="Pedidos diarios" value={orders} min={90} max={350} step={5} onChange={setOrders}/>
            <Slider label="Marketing / mes" value={marketing} min={0} max={5000} step={100} suffix=" €" onChange={setMarketing}/>
            <p className="assumption">Supuestos base: 26 días abiertos, coste variable de 1,08 € por pedido y 8.700 € de costes fijos.</p>
          </div>
          <div className="results">
            <div className="result-main"><span>BENEFICIO MENSUAL ESTIMADO</span><strong className={model.profit < 0 ? 'negative' : ''}>{money.format(model.profit)}</strong><small>{model.profit >= 0 ? 'Escenario rentable' : 'Escenario bajo punto de equilibrio'}</small></div>
            <div className="metrics"><Metric label="Ingresos" value={money.format(model.revenue)}/><Metric label="Margen neto" value={`${model.margin.toFixed(1)}%`}/><Metric label="Punto de equilibrio" value={`${model.breakEven} pedidos`}/></div>
            <div className="bar-wrap"><div className="bar-label"><span>Progreso al objetivo de 20% de margen</span><b>{Math.max(0, Math.min(100, model.margin / 20 * 100)).toFixed(0)}%</b></div><div className="bar"><i style={{width: `${Math.max(0, Math.min(100, model.margin / 20 * 100))}%`}}/></div></div>
            <div className="recommendation"><span>LECTURA DEL ESCENARIO</span><p>{recommendation}</p></div>
          </div>
        </div>
      </section>
      <section className="decisions">
        <div className="decisions-title"><span>03 / DECISIONES</span><h2>No existe<br/>una cifra aislada.</h2></div>
        <div className="decision-grid">
          <article><b>01</b><h3>Precio ≠ margen</h3><p>Subir precios mejora la contribución solo si la demanda resiste. El simulador permite localizar ese equilibrio sin confundir facturación con beneficio.</p></article>
          <article><b>02</b><h3>Crecer consume caja</h3><p>Más marketing no es automáticamente más negocio. La inversión necesita traducirse en pedidos adicionales con una economía unitaria sana.</p></article>
          <article><b>03</b><h3>El contexto manda</h3><p>Este modelo no predice el futuro: hace explícitos los supuestos para discutirlos, medirlos y reemplazarlos por datos reales.</p></article>
        </div>
      </section>
      <section id="metodo" className="method">
        <div className="method-copy"><span>04 / MÉTODO</span><h2>De una pregunta<br/>a una decisión.</h2><p>Northstar Lab aplica <em>unit economics</em> a una pyme ficticia. Convierte tres decisiones controlables en resultados mensuales comparables.</p></div>
        <ol><li><b>01</b><div><strong>Definir</strong><p>Precio, volumen esperado e inversión comercial.</p></div></li><li><b>02</b><div><strong>Calcular</strong><p>Ingresos − costes variables − costes fijos.</p></div></li><li><b>03</b><div><strong>Contrastar</strong><p>Margen, beneficio y punto de equilibrio.</p></div></li><li><b>04</b><div><strong>Decidir</strong><p>Elegir el experimento de menor riesgo.</p></div></li></ol>
      </section>
      <section id="autor" className="about">
        <div className="about-number">05</div><div><span>PROYECTO ACADÉMICO · EMPRESA + TECNOLOGÍA</span><h2>Una herramienta para pensar,<br/>no una respuesta automática.</h2><p>Proyecto de portfolio construido para demostrar modelización financiera, diseño de producto y desarrollo web. Los datos son sintéticos y el código documenta cada supuesto.</p><div className="tags"><i>React</i><i>TypeScript</i><i>Finanzas</i><i>UX</i><i>Estrategia</i></div></div>
      </section>
      <footer><a className="brand" href="#top"><span>N</span> NORTHSTAR LAB</a><p>Diseñado en Barcelona · Caso ficticio · 2026</p><a href="#top">VOLVER ARRIBA ↑</a></footer>
    </main>
  );
}

function Slider({label, value, min, max, step, suffix='', onChange}:{label:string;value:number;min:number;max:number;step:number;suffix?:string;onChange:(n:number)=>void}) {
  return <label className="slider"><span>{label}<b>{value.toLocaleString('es-ES')}{suffix}</b></span><input aria-label={label} type="range" value={value} min={min} max={max} step={step} onChange={e=>onChange(Number(e.target.value))}/><div><i>{min}{suffix}</i><i>{max}{suffix}</i></div></label>;
}
function Metric({label,value}:{label:string;value:string}) { return <div className="metric"><span>{label}</span><b>{value}</b></div>; }
