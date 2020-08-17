let salarios = []
        
        function salvar(){
            var salario = []
            var a = document.getElementById('hrs').value
            var b = document.getElementById('hrsp').value
            var f = document.getElementById('nome').value
            var c = a*b
            console.log(a,b,c)
            salario.push(a,b,f)
            

            document.getElementById("result2").value = c
            if(c<22847.76){
                document.getElementById("result1").value = c
            
            }else{
                if(c<33919.80){
                    let d = c*0.925
                    document.getElementById("result1").value = d
                    
                }
                if(c>33919.80 || c<45012.6){
                    let e = c*0.85
                    document.getElementById("result1").value = e
                    
                }if(c>45012.6 || c<55976.16){
                    let w = c*0.775
                    document.getElementById("result1").value = w
                   
                }else{
                    let r = c* 0.725
                    document.getElementById("result1").value = r
                 
                }
            }
         salarios.push(salario)

        }
       function salvarb () {
           var len = salarios.length
    for(var i = 0; i < len; ++i) {
      document.getElementById("div").innerHTML = ("Salarios : " + salarios[i]);
    }}