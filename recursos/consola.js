/* Muestra en la página los mensajes de console sin dejar de enviarlos a la consola del navegador. */
(() => {
  const init = () => {
    const panel = document.getElementById("salida-consola");
    if (!panel) return;
    const original = { log: console.log.bind(console), warn: console.warn.bind(console), error: console.error.bind(console) };
    const stringify = (value) => {
      if (value instanceof Error) return `${value.name}: ${value.message}`;
      if (typeof value === "string") return value;
      try { return JSON.stringify(value, null, 2) ?? String(value); }
      catch { return String(value); }
    };
    for (const type of ["log", "warn", "error"]) {
      console[type] = (...args) => {
        original[type](...args);
        const line = document.createElement("div");
        line.textContent = args.map(stringify).join(" ");
        if (type === "error") line.style.color = "#ffb4a8";
        else if (type === "warn") line.style.color = "#f2d58b";
        panel.appendChild(line);
        panel.scrollTop = panel.scrollHeight;
      };
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
