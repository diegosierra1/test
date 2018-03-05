// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})



function cargar_listado_formularios(){
	//
var version_actual= '1.022';
var usuario= JSON.parse(localStorage.getItem('usuario'));
var ultima_actualizacion= JSON.parse(localStorage.getItem('ultima_actualizacion')); 
	if(ultima_actualizacion===null || ultima_actualizacion===''){
	ultima_actualizacion=10;	
	}
//
$$('.version').html('Metrica Urbana '+version_actual);	
$$('.usuario_doc').html('<i class="fa fa-user"></i> '+usuario);	
//
var ref=0;
var fx=0;
//var ultimo =0;
//var mensaje='';	
//myApp.alert('A:'+ultima_actualizacion);
$$.post('http://metricaurbana.com/conecta.php',{nuevos_formularios:'si',ultima_actualizacion:ultima_actualizacion},function(data){
//	
//myApp.alert('B:');	
	
	var nuevos = data.split("|");
    // 
    //var nueva_actualizacion=0;
    //var mensaje_resultado='';
	var primero = Number(nuevos[0]);
	//var ultimo = Number(nuevos[1]+2);
	var ultimo=Number(nuevos[1]);
	myApp.alert(ultima_actualizacion+':'+primero+'-'+ultimo);
	//myApp.alert(nuevos[0]+'*'+nuevos[1], 'descargando...');
    while(fx<ultimo){
	fx++;	
	if(fx<primero){
		$$('#lista_formularios_code').val('');
		localStorage.removeItem('formulario'+fx);
	}else{

     
     ref=(fx-primero)+2;
		
		
	var listado=$$('#lista_formularios_code').val();	
	//ref=fx+1;	
		//myApp.alert(ref+': '+nuevos[ref],'formulario '+ref); 
        if(nuevos[ref]!==undefined && nuevos[ref]!=='' && ref>1){
		
            var formx = nuevos[ref].split("~");
            var formx_numero=formx[0];
            var formx_nombre=formx[1];
            var formx_version=formx[2];
            //var formx_actualizado=formx[3];
            var formx_html=formx[4];
            //
			localStorage.setItem('formulario'+formx_numero,JSON.stringify('ok~'+formx_numero+'~'+formx_nombre+'~'+formx_version+'~'+formx_html+'~si'));
			listado=listado+'<tr valign="top"><td><b>' + formx_numero + '</b></td><td><a href="#view-3" class="tab-link" onclick="bd_load(' + formx_numero + ')">' + formx_nombre + '</a></td></tr>';
			$$('#lista_formularios_code').val(listado);
			//bd_listado_formularios();
			$$("#elementsList").html(listado);	
			myApp.alert(formx_nombre,'formulario descargado: '+formx_numero);	
			
        }
	//
	}
	}
	
         });
       //////

	//cargar_listado_programacion();
	//
}



function test(){
myApp.alert('A*');
	

	$$.post('http://metricaurbana.com/conecta',{prueba:'si',dato1:'hola',dato2:'xx'},function(data, status, xhr){
//	
myApp.alert('OK '+data+':'+status+'>'+xhr);	
//var nuevos = data.split("|");
	
         },function(xhr, status){
	myApp.alert('Error '+xhr+':'+status);	
	});
	

	
	/*
	$$.post('http://metricaurbana.com/conecta.php',{prueba:'si',dato1:'hola',dato2:'xx'},function(data){
//	
myApp.alert(data);	
//var nuevos = data.split("|");
	
         },function(){
		myApp.alert('error');
	});
	*/
	
	
myApp.alert('B');	
}

test();
//cargar_listado_formularios();
