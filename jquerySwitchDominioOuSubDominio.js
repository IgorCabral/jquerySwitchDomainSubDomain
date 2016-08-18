/* INICIO - Se estiver em subdomínio, utilizá-lo na URL*/
var subDominio = window.location.pathname.split("/")[1];
var urlGet = "/Home"; //Nome da controller
if (subDominio !== "" && subDominio.toLowerCase() !== "home") { //Se estiver hospedado em um subdomínio, então usá-lo na url, se não, não!
    urlGet = "/" + subDominio + urlGet;
}
/* FIM - Se estiver em subdomínio, utilizá-lo na URL*/
