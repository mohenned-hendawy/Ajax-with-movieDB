// export let inputs = document.getElementsByTagName("input");


    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let ageInput = document.getElementById("ageInput");
    let phoneInput = document.getElementById("phoneInput");
    let passInput = document.getElementById("passInput");
    let repassInput = document.getElementById("repassInput");


    function inputsValidation(regexparam, inputelem, inputSelector)
    {
        if (regexparam.test(inputelem.value) == true)
        {
            inputelem.classList.add("is-valid");
            inputelem.classList.remove("is-invalid");
            $(`#${inputSelector}`).next().addClass("d-none").removeClass("d-block");

            
        }
        else
        {
            inputelem.classList.add("is-invalid");
            inputelem.classList.remove("is-valid");
            $(`#${inputSelector}`).next().addClass("d-block").removeClass("d-none");
            return false
        }
    }
    function repassValidation()
    {
        if ( repassInput.value == passInput.value )
        {
            repassInput.classList.add("is-valid");
            repassInput.classList.remove("is-invalid");
            $("#repassInput").next().addClass("d-none").removeClass("d-block");
            return true
        }
        else
        {
            repassInput.classList.add("is-invalid");
            repassInput.classList.remove("is-valid");
            $("#repassInput").next().addClass("d-block").removeClass("d-none");
            return false
        }
    }
    export
    {
        nameInput, emailInput, ageInput, phoneInput, passInput, repassInput, inputsValidation, repassValidation 
    }