function controle_nom_prenom
{
	var nom=form_adresse.nom.value;
	if (nom=="")
		alert("nom vide");
	alert("nom vide");
}

function continuer
{
	const continuer=document.getElementById("continuer");
	continuer.addEventListener('click' , function(){
		alert("votre cmd est confirmée :)")
	});



}