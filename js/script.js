function setHeightBarra(heightArray){

    const barras = document.querySelectorAll(".barra")

    barras.forEach((e, i) => {
        
        if(heightArray[i] == 100){
            e.style.background = "hsl(186, 34%, 60%)"
        }
        e.style.height = `${heightArray[i]}%`
    });
}

async function barras(){

    
    const response = await fetch("./json/data.json")
    const data = await response.json()

        let maxNum = data.map(e => parseFloat(e.amount)), height = [];
        maxNum = Math.max(...maxNum)
        data.forEach(element => {height.push(parseInt((element.amount / maxNum)*100))})
        setHeightBarra(height)
    
}


barras()