let result = document.getElementById("result")
let preview = document.getElementById("preview")
let nums = [undefined, undefined]
let operator, results

const calculate = (input) => {
    if(input == "clear"){
        preview.innerHTML = result.innerText = ""
        nums[0] = nums[1] = 0
        operator = undefined
    }else if(input == "*" || input == "/" || input == "+" || input == "-"){
        if(nums[1] != undefined){
            switch(operator){
                case "*":
                    results = nums[0] * nums[1]
                    break
                case "/":
                    results = nums[0] / nums[1]
                    break
                case "+":
                    results = nums[0] + nums[1]
                    break
                case "-":
                    results = nums[0] - nums[1]
                    break
            }
            nums[0] = results
            operator = input
            preview.innerHTML = nums[0] + " " + operator
        }else{
            operator = input
            preview.innerHTML = nums[0] + " " + operator
        }
    }else if(input == "="){
        if(operator != null){
            switch(operator){
                case "*":
                    results = nums[0] * nums[1]
                    break
                case "/":
                    results = nums[0] / nums[1]
                    break
                case "+":
                    results = nums[0] + nums[1]
                    break
                case "-":
                    results = nums[0] - nums[1]
                    break
            }
            nums[1] = undefined
            nums[0] = results
            preview.innerHTML = nums[0] + " " + operator
            result.innerText = results
            operator = undefined
        }
    }else{
        if(operator != null){
            preview.innerHTML = nums[0] + " " + operator
            nums[1] = parseInt(input)
            result.innerText = input
        }else{
            preview.innerText = result.innerText = input
            nums[0] = parseInt(input)
        }
    }
}