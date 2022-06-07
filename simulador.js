class Computadora{
    constructor(cpu, gpu, ram, mother) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.mother = mother;
    }
}

//CPU
const nombrecpu1 = 'Intel Core i7';
const nombrecpu2 = 'Ryzen 7';
//GPU
const nombregpu1 = 'Nvidia GTX 1080';
const nombregpu2 = 'Radeon RX570';
//RAM
const nombreram1 = '16GB';
const nombreram2 = '8GB';
//MOTHER
const nombremother1 = 'Aorus x470';
const nombremother2 = 'Asus B550';

function compu(){
        
        let cpu = prompt('Ingrese el nombre del CPU: \n'+ '1.'+ nombrecpu1 + '\n' +'2.'+ nombrecpu2);
        
        let gpu = prompt('Ingrese el nombre de la GPU: \n'+ '1.'+ nombregpu1 + '\n' +'2.'+ nombregpu2);     
        
        let ram = prompt('Ingrese el nombre de la RAM: \n'+ '1.'+ nombreram1 + '\n' +'2.'+ nombreram2);  
        
        let mother = prompt('Ingrese el nombre del MOTHER: \n'+ '1.'+ nombremother1 + '\n' +'2.'+ nombremother2);

    console.log(cpu, gpu, ram, mother);

        if (cpu != '' && gpu != '' && ram != '' && mother != '') {
    } else {
        alert('Debe ingresar los componentes');
    } 

        if (cpu == '' && gpu == '' && ram == '' && mother == ''){
    }else {
        alert(' cpu:  '+ cpu +'\n gpu:  '+ gpu +'\n ram:  '+ ram +'\n mother:  '+ mother); 
    }
}

compu()