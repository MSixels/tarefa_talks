    AOS.init();

    const dataDoEvento = new Date("Sep 16, 2023 12:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaAsHoras = setInterval(function (){
        const agora = new Date();
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
        const diasEmMS = 1000 * 60 * 60 * 24;
        const horaEmMS = 1000 * 60 * 60;
        const minutoEmMs = 1000* 60;
        

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMS);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMS) / horaEmMS);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
        

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

        if(distanciaAteOEvento < 0 ) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = `Evento Expirado`
        }
    }, 1000);