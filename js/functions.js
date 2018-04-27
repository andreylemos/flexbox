$( document ).ready(function(){

	$("[name=eixo]").change(function() {
		var opcao = $("[name=eixo]:checked").val();

		$("#section").removeClass("dir-row");
		$("#section").removeClass("dir-rowr");
		$("#section").removeClass("dir-col");
		$("#section").removeClass("dir-colr");

		if(opcao == 'horizontal'){
			$("#section").addClass("dir-row");
		}
		else if(opcao == 'vertical'){
			$("#section").addClass("dir-col");
		}
		else if(opcao == 'horizontalr'){
			$("#section").addClass("dir-rowr");
		}
		else if(opcao == 'verticalr'){
			$("#section").addClass("dir-colr");
		}

	});	

	$("[name=posicionamento]").change(function() {
		var opcao = $("[name=posicionamento]:checked").val();

		$("#section").removeClass("justify-sb");
		$("#section").removeClass("justify-sa");
		$("#section").removeClass("justify-fs");
		$("#section").removeClass("justify-fe");
		$("#section").removeClass("justify-cnt");

		if(opcao == 'espacoEntre'){
			$("#section").addClass("justify-sb");
		}
		else if(opcao == 'espacoVolta'){
			$("#section").addClass("justify-sa");
		}
		else if(opcao == 'inicio'){
			$("#section").addClass("justify-fs");
		}
		else if(opcao == 'fim'){
			$("#section").addClass("justify-fe");
		}
		else if(opcao == 'centro'){
			$("#section").addClass("justify-cnt");
		}

	});	

	$("[name=alinhamento]").change(function() {
		var opcao = $("[name=alinhamento]:checked").val();

		$("#section").removeClass("al-it-stch");
		$("#section").removeClass("al-it-fs");
		$("#section").removeClass("al-it-fe");
		$("#section").removeClass("al-it-bsl");
		$("#section").removeClass("al-it-cnt");

		if(opcao == 'preencher'){
			$("#section").addClass("al-it-stch");
		}
		else if(opcao == 'conteudo'){
			$("#section").addClass("al-it-bsl");
		}
		else if(opcao == 'inicio'){
			$("#section").addClass("al-it-fs");
		}
		else if(opcao == 'fim'){
			$("#section").addClass("al-it-fe");
		}
		else if(opcao == 'centro'){
			$("#section").addClass("al-it-cnt");
		}

	});	

	$("[name=alinhamentoIndividual]").change(function() {
		var elemento = $("#alIndv").val();
		var opcao = $("[name=alinhamentoIndividual]:checked").val();

		$("#"+elemento).removeClass("al-sf-fs");
		$("#"+elemento).removeClass("al-sf-fe");
		$("#"+elemento).removeClass("al-sf-cnt");
		$("#"+elemento).removeClass("al-sf-stch");

		if(opcao == 'inicio'){
			$("#"+elemento).addClass("al-sf-fs");
		}
		else if(opcao == 'fim'){
			$("#"+elemento).addClass("al-sf-fe");
		}
		else if(opcao == 'centro'){
			$("#"+elemento).addClass("al-sf-cnt");
		}
		else if(opcao == 'preencher'){
			$("#"+elemento).addClass("al-sf-stch");
		}

	});	

	$("[name=tamanhoGrow]").change(function(){
		var elemento = $("#ajTam").val();
		var valor = $("[name=tamanhoGrow]").val();

		$("#"+elemento).removeClass("f-gw-0");
		$("#"+elemento).removeClass("f-gw-1");
		$("#"+elemento).removeClass("f-gw-2");
		$("#"+elemento).removeClass("f-gw-3");

		if(valor == '0'){
			$("#"+elemento).addClass("f-gw-0");
		}
		else if(valor == '1'){
			$("#"+elemento).addClass("f-gw-1");
		}
		else if(valor == '2'){
			$("#"+elemento).addClass("f-gw-2");
		}
		else if(valor == '3'){
			$("#"+elemento).addClass("f-gw-3");
		}
		else{
			alert("Valor definido como flex-grow:3")
			$("#"+elemento).addClass("f-gw-3");
		}

	});

	$("[name=tamanhoShrink]").change(function(){
		var elemento = $("#ajTam").val();
		var valor = $("[name=tamanhoShrink]").val();

		$("#"+elemento).removeClass("f-sk-0");
		$("#"+elemento).removeClass("f-sk-1");

		if(valor == '0'){
			$("#"+elemento).addClass("f-sk-0");
		}
		else if(valor == '1'){
			$("#"+elemento).addClass("f-sk-1");
		}
		else{
			alert("Valor definido como flex-shrink:1")
			$("#"+elemento).addClass("f-sk-1");
		}

	});

	$("[name=tamanhoBasis]").change(function(){
		var elemento = $("#ajTam").val();
		var valor = $("[name=tamanhoBasis]").val();

		$("#"+elemento).removeClass("f-bs-auto");
		$("#"+elemento).removeClass("f-bs-100");
		$("#"+elemento).removeClass("f-bs-0");

		if(valor == '0'){
			$("#"+elemento).addClass("f-bs-0");
		}
		else if(valor == 'auto'){
			$("#"+elemento).addClass("f-bs-auto");
		}
		else{
			alert("Valor definido como flex-basis:100px")
			$("#"+elemento).addClass("f-bs-100");
		}

	});

	$("[name=ordemVal]").change(function(){
		var elemento = $("#ordem").val();
		var valor = $("[name=ordemVal]").val();

		$("#"+elemento).removeClass("order-0");
		$("#"+elemento).removeClass("order-1");
		$("#"+elemento).removeClass("order-2");
		$("#"+elemento).removeClass("order-3");

		if(valor == '1'){
			$("#"+elemento).addClass("order-0");
		}
		else if(valor == '2'){
			$("#"+elemento).addClass("order-1");
		}
		else if(valor == '3'){
			$("#"+elemento).addClass("order-2");
		}
		else if(valor == '4'){
			$("#"+elemento).addClass("order-3");
		}
		else{
			alert("Valor definido como order:0")
			$("#"+elemento).addClass("order-0");
		}

	});


});