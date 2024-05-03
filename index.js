const cracklePop = () => {
    
    const fullArray = Array
        .apply(null, Array(100))
        .map((x, i) => {
            let value = i+1
                if ((value % 3) == 0 && (value % 5) == 0){
                    value = 'Crackle Pop!'
                } else if ((value % 5) == 0){
                    value = 'Pop'
                } else if ((value % 3) == 0){
                    value = 'Crackle'
                }
            return value
        })

    const displayValues = (arr) => {
        const container = document.querySelector('.container')
           
        for (let i = 0; i < arr.length; i++){
            const newDiv = document.createElement('div')
            newDiv.setAttribute('class', 'box')    
            newDiv.innerText = arr[i].toString()
            container.appendChild(newDiv)
        }
    }

    displayValues(fullArray)
}

cracklePop()
