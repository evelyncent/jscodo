



let botn=document.getElementById('botn');
let form=document.querySelector('form');
let usuario=document.getElementById('usuario');
let clave=document.getElementById('clave');
let span=document.getElementById('span');
let p=document.getElementById('p');


let error=false;

form.addEventListener('submit',(formu)=>{
	
	if (clave.value === '' || usuario.value === ''  ) {
		formu.preventDefault();
		
		p.textContent ='Complete todos los campos!!';
		error=true;

	}
	 if ((!(usuario.value).includes("@")) ){
	 	formu.preventDefault();
	 	span.textContent='Se debe ingresar usuario con un @';
	 	error=true;
	 	document.querySelector("form").reset();
	 	
	}else if (error==false){
 	form.submit();

 }
})

