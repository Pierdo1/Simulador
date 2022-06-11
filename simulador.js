class Computadora{
    constructor(cpu, gpu, ram, mother) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.mother = mother;
    }
}
  
    const cpu1 = ['Intel Core i7', 'Ryzen 7']
    const gpu1 = ['Nvidia GTX 1080', 'Radeon RX570'];
    const ram1 = ['16GB', '8GB'];
    const mother1 = ['Aorus x470', 'Asus B550'];

function compu(){

        let cpu = prompt('Ingrese el nombre del CPU:', cpu1.join(" o "));
        
        let gpu = prompt('Ingrese el nombre de la GPU: ', gpu1.join(" o "));     
        
        let ram = prompt('Ingrese el nombre de la RAM: ', ram1.join(" o "));  
        
        let mother = prompt('Ingrese el nombre del MOTHER: ', mother1.join(" o "));

    console.log(cpu, gpu, ram, mother);

        if (cpu != '' && gpu != '' && ram != '' && mother != '') {
            alert(' cpu:  '+ cpu +'\n gpu:  '+ gpu +'\n ram:  '+ ram +'\n mother:  '+ mother);
    } else {
        alert('Debe ingresar los componentes');
    } 
}

compu()