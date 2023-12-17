function updateValues(changedField) {
    var scaleFactor = parseFloat(document.getElementById('scaleFactor').value);
    var realValue = parseFloat(document.getElementById('realValue').value);
    var realUnit = document.getElementById('realUnit').value;
    var planValue = parseFloat(document.getElementById('planValue').value);
    var planUnit = document.getElementById('planUnit').value;

    if (changedField === 'scaleFactor') {
        document.getElementById('realValue').value = convertValue(scaleFactor, realValue, realUnit, 'mm').toFixed(2);
        document.getElementById('planValue').value = convertValue(1, planValue, planUnit, realUnit).toFixed(2);
    } else if (changedField === 'realValue' || changedField === 'realUnit') {
        var valueInMM = convertValue(1, realValue, realUnit, 'mm');
        document.getElementById('planValue').value = convertValue(scaleFactor, valueInMM, 'mm', planUnit).toFixed(2);
    } else if (changedField === 'planValue' || changedField === 'planUnit') {
        var valueInMM = convertValue(1, planValue, planUnit, 'mm');
        document.getElementById('realValue').value = convertValue(1, valueInMM, 'mm', realUnit).toFixed(2);
    }
}

function convertValue(fromScale, value, fromUnit, toUnit) {
    var units = {
        'mm': 1,
        'cm': 10,
        'm': 1000,
        'in': 25.4,
        'ft': 304.8,
        'yd': 914.4,
        'km': 1000000,
        'mi': 1609344
    };

    var valueInMM = value * units[fromUnit];
    var convertedValue = valueInMM / (fromScale * units[toUnit]);
    return convertedValue;
}