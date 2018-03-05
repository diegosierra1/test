// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});




function comprobar_internet(){
//myApp.alert('revisando conexion...');	
	var conexion='';
if(navigator.onLine){
//myApp.alert('Online');
$$('.internet').css({'color':'green'});
	conexion='on';
} else {
//myApp.alert('Offline')
$$('.internet').css({'color':'#ccc'});
	conexion='off';
}
	localStorage.setItem('conexion',JSON.stringify(conexion));
}

//
setInterval(comprobar_internet,(1000*30));
comprobar_internet();


function test(){
myApp.alert('A*');
	
	
	$$.ajax({
	url: 'http://metricaurbana.com/conecta.php',
        method: 'POST',
	//dataType: 'json',
	//contentType: 'application/json',
	data: {
		prueba:'si',
		dato1:'hola',
		dato2:'xx',
		user: 'usuario',
		pass: '12345'
	},
	success: function(response){
		//myApp.alert(JSON.stringify(response));
		myApp.alert('OK: '+response);
	},
	error: function(xhr, status){
		//myApp.alert('Error: '+JSON.stringify(xhr));
		//myApp.alert('ErrorStatus: '+JSON.stringify(status));
		myApp.alert('Error: '+xhr);
		myApp.alert('ErrorStatus: '+status);
		
	}
});
	
	
//if(navigator.onLine){
	/*
	$$.post('http://metricaurbana.com/conecta.php',{prueba:'si',dato1:'hola',dato2:'xx'},function(data, status, xhr){
//	
myApp.alert('OK '+data+':'+status+'>'+xhr);	
//var nuevos = data.split("|");
	
         },function(xhr, status){
	myApp.alert('Error '+xhr+':'+status);	
	});
	*/

	
myApp.alert('B');	
//}
//
}


function test2(){
myApp.alert('A*');
	
	
	
	
//if(navigator.onLine){
	
	myApp.request.post('http://metricaurbana.com/conecta.php',{prueba:'si',dato1:'hola',dato2:'xx'},function(data, status, xhr){
//	
myApp.alert('OK '+data+':'+status+'>'+xhr);	
//var nuevos = data.split("|");
	
         },function(xhr, status){
	myApp.alert('Error '+xhr+':'+status);	
	});
	/**/

	
myApp.alert('B');	
//}
//
}

function test3(){
myApp.alert('A*');
	
	
	
	
//if(navigator.onLine){
	
	$$.post('http://metricaurbana.com/conecta.php',{prueba:'si',dato1:'hola',dato2:'xx'},function(data, status, xhr){
//	
myApp.alert('OK '+data+':'+status+'>'+xhr);	
//var nuevos = data.split("|");
	
         },function(xhr, status){
	myApp.alert('Error '+xhr+':'+status);	
	});
	/**/

	
myApp.alert('B');	
//}
//
}
//test();
//cargar_listado_formularios();
