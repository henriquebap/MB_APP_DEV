
class IMCCalculator {
    calcular(altura: number, peso: number): number{
        // Converter altura em metros
        const alturaMetros = altura / 100;

        const bmi = peso / (alturaMetros * alturaMetros);

        return parseFloat(bmi.toFixed(2));
    }

    getCategoria(bmi: number): string{
        if (bmi < 18.5){
            return "Abaixo Do pseso";
        }else if (bmi >= 18.5 && bmi < 25){
            return " Peso Ideal ";
        }else if (bmi >= 25&& bmi < 30){
            return "Cuidado! Voce esta acima do peso";
        }else {
            return "Esa Obseso, procure um medico";
        }
    }
}
 export default IMCCalculator;