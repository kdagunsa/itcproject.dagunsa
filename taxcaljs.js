function calculateTax() {

    const income = parseFloat(document.getElementById("income").value) || 0;
    let tax = 0;

   
    if (income <= 250000) {
        tax = 0; 
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.20;
    } else if (income <= 800000) {
        tax = 30000 + (income - 400000) * 0.25;
    } else if (income <= 2000000) {
        tax = 130000 + (income - 800000) * 0.30;
    } else if (income <= 8000000) {
        tax = 490000 + (income - 2000000) * 0.32;
    } else {
        tax = 2410000 + (income - 8000000) * 0.35;
    }


    document.getElementById("result").textContent = `Your income tax is: ₱${tax.toFixed(2)}`;
}
