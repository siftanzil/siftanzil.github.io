// event listener
let options = document.querySelector('.dropdown-menu');
options.addEventListener('click', showPrompt);

// function
function showPrompt(e) {

    let type = e.target.value;
    let input = prompt('Write your query please');

    // alert for empty box
    if (input === '' || input === null) {
        alert('Write something for validating!!')
    } 
    //switch for matching
    else {
        switch (type) {
            
            case 'name':
                var re = /^[a-z ,.'-]+$/i;
                if (re.test(input) != true) {
                    alert('Invalid name!!')

                } else {
                    alert('valid name!')
                };

                break;

            case 'email':
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (re.test(input) != true) {
                    alert('Invalid email!!')

                } else {
                    alert('valid eamil address!')
                };

                break;

            case 'mobile':
                var re = /01[0-9]{9}/;
                if (re.test(input) != true) {
                    alert('Invalid mobile number!!')

                } else {
                    alert('valid mobile number!')
                };

                break;


            case 'post':
                var re = /^\d{4}$/;
                if (re.test(input) != true) {
                    alert('Invalid post code!!')

                } else {
                    alert('valid post code!')
                };

                break;


            case 'date':
                var re = /[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{4}$/;
                if (re.test(input) != true) {
                    alert('Invalid date!!')

                } else {
                    alert('valid date!')
                };

                break;


            default:
                break;
        }
    }
}
