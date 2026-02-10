(function(){
  // Atualize aqui se quiser trocar cidade/UF e dados do rodapé rapidamente
  const SITE = {
    cityUF: "Goiânia/GO",
    oab: "OAB/GO nº 35.465",
    email: "contato@acostadv.com.br",
    hours: "Seg–Sex, 08h às 18h"
  };

  // Preenche placeholders data-site="cityUF" etc.
  document.querySelectorAll("[data-site]").forEach(el=>{
    const key = el.getAttribute("data-site");
    if(SITE[key]) el.textContent = SITE[key];
  });

  // Ano automático no rodapé
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
})();
