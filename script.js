function convertUnits() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result = 0;

    if (fromUnit === 'cm' && toUnit === 'm') {
        result = value / 100;
    } else if (fromUnit === 'cm' && toUnit === 'km') {
        result = value / 100000;
    } else if (fromUnit === 'm' && toUnit === 'cm') {
        result = value * 100;
    } else if (fromUnit === 'm' && toUnit === 'km') {
        result = value / 1000;
    } else if (fromUnit === 'km' && toUnit === 'cm') {
        result = value * 100000;
    } else if (fromUnit === 'km' && toUnit === 'm') {
        result = value * 1000;
    } else {
        result = value;
    }

    document.getElementById('result').textContent = `Resultado: ${result} ${toUnit}`;
}
