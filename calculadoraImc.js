//Definindo a altura com o prompt
altura = prompt("Qual a sua altura ?");
//Definindo o peso com o prompt
peso = prompt("Qual o seu peso ?");
//Calculando o IMC
imc = (peso/(altura * altura));

// Fazendo a função dizer a sua situação com base no IMC calculado antes
function calculoImc(altura,peso,imc)
{
   if(imc >= 40)
   {
      console.log("Obesidade morbida");
   }
    else if(imc >= 35)
   {
      console.log("Obesidade severa");
   }
  else if(imc >= 30)
   {
      console.log("Obesidade");
   }
   else if(imc >= 25)
   {
      console.log("Acima do peso");
   }
   else if(imc >= 18)
   {
      console.log(" Peso normal");
   }
   else if(imc >= 17)
   {
      console.log("Abaixo do peso");
   }
   else if(imc < 17)
   {
      console.log("Muito abaixo do peso");
   }

}
//Chamando a função 
calculoImc(altura,peso,imc);