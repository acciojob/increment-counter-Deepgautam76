//your JS code here. If required.
        let counterElement = document.getElementById("counter");
        let incrementBtn = document.getElementById("incrementBtn");

        incrementBtn.addEventListener("click", function() {
            let currentValue = parseInt(counterElement.innerText);
            alert(currentValue); 
            counterElement.innerText = currentValue + 1;
        });

