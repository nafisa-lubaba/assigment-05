// seat-id-selected
const allBtn = document.getElementsByClassName('seat');
let seat = 0;
for (const btn of allBtn) {
    btn.addEventListener("pointerdown", function (event) {
        if (seat >= 4) {
            alert('you have already selected 4 tickets')
        }
        else {
            if (!btn.classList.contains("selected")) {



                seat++;
                btn.classList.add("selected");
                btn.classList.add("bg-green-500");
                const number = getText("seat-id-selected")
                if (!isNaN(number)) {
                    setInputElement('seat-id-selected', number + 1)

                }
                const seatNum = getText("available-seat")
                console.log(seatNum)
                if (!isNaN(seatNum)) {
                    setInputElement('available-seat', seatNum - 1)
                }
                // console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3].childNodes[3].childNodes[7].innerText)


                const seatOfName = event.target.innerText

                const seatnumberPrice = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3].childNodes[3].childNodes[3].innerText;
                const seatClassName = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[3].childNodes[3].childNodes[7].innerText;

                const seatContainerElement = document.getElementById('seat-container');
                const li = document.createElement("li")
                const p = document.createElement("p")
                p.innerText = seatOfName;
                const p2 = document.createElement("p")
                p2.innerText = seatClassName;
                const p3 = document.createElement("p");
                p3.innerText = seatnumberPrice;

                li.appendChild(p);
                li.appendChild(p2);
                li.appendChild(p3)
                li.classList.add('flex')
                li.classList.add('justify-between');
                seatContainerElement.appendChild(li);
                console.log(seatContainerElement);

                const totalCost = document.getElementById('total-cost').innerText;
                const convertedTotalCost = parseInt(totalCost);

                const sum = convertedTotalCost + parseInt(seatnumberPrice);
                setInputElement('total-cost', sum);


                const grandTotalCost = document.getElementById('grand-total').innerText;
                const convertedGrandTotalCost = parseInt(grandTotalCost)

                const sum2 = convertedGrandTotalCost + parseInt(seatnumberPrice)

                setInputElement('grand-total', sum2);
                if (seat >= 1) {
                    document.getElementById('btn-apply').disabled = false
                    document.getElementById('btn-dis').disabled = false
                }
            }




        }


        console.log('click')

    })

}
document.getElementById('btn-apply').addEventListener('click', function () {
    const coupon = document.getElementById('coupon-code');
    const couponName = coupon.value;
    if (couponName === 'NEW15') {
        const totalPrice = document.getElementById('total-cost').innerText;
        const price = parseFloat(totalPrice);
        const discountPrice = percentage(price, 15);

        const afterDiscountPrice = price - discountPrice;
        const amount = document.getElementById('grand-total');
        amount.innerText = afterDiscountPrice;
        const inputFild = document.getElementById('input-field')
        inputFild.classList.add("hidden")


    }
    else if (couponName === 'Couple 20') {
        const totalPrice = document.getElementById('total-cost').innerText;
        const price = parseFloat(totalPrice);
        const discountPrice = percentage(price, 20);

        const afterDiscountPrice = price - discountPrice;
        const amount = document.getElementById('grand-total');
        amount.innerText = afterDiscountPrice;
        const inputFild = document.getElementById('input-field')
        inputFild.classList.add("hidden")


    }
    else{
        alert("Coupon is wrong")
    }
})
function getText(input) {
    const textEquale = document.getElementById(input);
    // const textEquale2 = textEquale.textContent;
    const text = parseInt(textEquale.textContent)
    return text;
}
function setInputElement(id, value) {
    const inputElement = document.getElementById(id);
    inputElement.innerText = value;




}

function percentage(num, per) {
    return (num / 100) * per;
}

// function addColor(className) {
//     const classElements = document.getElementsByClassName(className);
//     for (const element of classElements) {
//         element.classList.add('bg-green-500');
//     }
// }




