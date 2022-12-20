 $(document).ready(function(){
	$("#submit").click(function(){
	
	//Recuperiamo tutte le variabili
		var valid = '';
		var isr = ' is required.</p>';
		var name = $("#name").val();
		var mail = $("#mail").val();
		var suggerimento = $("#suggerimento").val();
	//Eseguiamo una serie di controlli
		if (name.length<1) {
			valid += '<p>Valid name'+isr;
		}
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<p>Valid E-mail address'+isr;
		}
		if (suggerimento.length<1) {
			valid += '<p>Valid costume name'+isr;
		}
		
	//Se i controlli non vengono superati, appare il messaggio di errore.
		if (valid!='') {
			$("#risposta").fadeIn("slow");
			$("#risposta").html("<p><b>ERROR:</b></p>"+valid);
			$("#risposta").css("position","absolute");
			$("#risposta").css("background","rgba(255, 0, 0, 0.8);");
			$("#risposta").css("padding","10px");
			$("#risposta").css("z-index","10");			
			$("#risposta").fadeOut(5000);
		}
		
		//Se i controlli vengono superati, compare un messaggio di invio in corso
		else {
			var datastr ='&name=' + name + '&mail=' + mail + '&suggerimento=' + suggerimento;
			$("#risposta").fadeIn("slow");
			$("#risposta").css("position","absolute");
			$("#risposta").css("background","rgba(255, 144, 24, 0.8)");
			$("#risposta").css("padding","10px");
			$("#risposta").css("z-index","10");
			$("#risposta").html("<p>Sending your message, please wait...</p>");
			setTimeout("send('"+datastr+"')", 2000);
		}
		return false;
	});
});


//Creazione della funzione di invio. Si baserà sul nostro file php "mail.php".
function send(datastr){
	$.ajax({	
		type: "POST",
		url: "mail.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#risposta").fadeIn("slow");
		$("#risposta").html(html);
		$("#risposta").css("background","rgba(98, 173, 0, 0.8)");
			$("#risposta").css("position","absolute");
			$("#risposta").css("padding","10px");
			$("#risposta").css("z-index","10");		
		setTimeout('$("#risposta").fadeOut("slow")', 2000);
	}
	});
}
