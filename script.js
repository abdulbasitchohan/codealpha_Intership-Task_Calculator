   const led = document.getElementById('led');

        // Add value to display
        function append(value) {
            led.value += value;
        }

        // Clear all
        function clearDisplay() {
            led.value = '';
        }

        // Clear last entry (like CE)
        function clearEntry() {
            led.value = '';
        }

        // Delete last character
        function deleteLast() {
            led.value = led.value.slice(0, -1);
        }

        // Toggle sign
        function toggleSign() {
            if (led.value) {
                if (led.value.startsWith('-')) {
                    led.value = led.value.slice(1);
                } else {
                    led.value = '-' + led.value;
                }
            }
        }

        // Calculate result
        function calculate() {
            try {
                let result = eval(led.value.replace('×', '*').replace('•', '.'));
                if (result === Infinity || isNaN(result)) {
                    led.value = "Error";
                } else {
                    led.value = result;
                }
            } catch (error) {
                led.value = "Error";
            }
        }