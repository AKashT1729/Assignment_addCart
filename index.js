document.getElementById('bogo-form').addEventListener('change', function() {
    const unit1Price = 10.00;
    const unit2Price = 18.00;
    const unit3Price = 24.00;
    const unitValue = document.querySelector('input[name="unit"]:checked').value;
    
    let total;
    if (unitValue === '1') {
        total = unit1Price;
    } else if (unitValue === '2') {
        total = unit2Price;
    } else if (unitValue === '3') {
        total = unit3Price;
    }

    document.getElementById('total').innerText = `$${total.toFixed(2)} USD`;
});

document.getElementById('addToCart').addEventListener('click', function() {
    alert('Added to cart!');
});