function yellowButton() {
            console.log('Yellow button clicked!');
            document.body.style.backgroundColor = 'yellow';
        }

        // const purple = document.getElementById('purple');
        //     purple.onclick = purpleButton;
        // function purpleButton() {
        //     console.log('Purple button clicked!');
            
        //     document.body.style.backgroundColor = 'purple';
        // }
        

document.getElementById('btnUpdateTitle')
.addEventListener('click', function() {
    document.getElementById('titletxt').innerText = 'New Document Title';
console.log('Title updated to:', document.title);
});



document.getElementById('btnGreen')
        .addEventListener('click', function() {
            console.log('Green button clicked!');
            document.body.style.backgroundColor = 'green';
        });



document.getElementById('btnUpdateName')
        .addEventListener('click', function() {
            const name = document.getElementById('nameInput').value;
            console.log('Name updated to:', name);

            const nameP = document.getElementById('nameLabel');
            nameP.innerText = 'Name: ' + name;
        });


document.getElementById('input-delete')
      .addEventListener('keyup', function(event) {
        const text = event.target.value;
        const btnDelete = document.getElementById('btn-delete');
        if (text === 'delete') {
          console.log('delete typed');
          btnDelete.removeAttribute('disabled');
          const secretTag = document.getElementById('secret-info');
          secretTag.style.display = 'none';
        } else {
          console.log('something else');
          btnDelete.setAttribute('disabled', true);
        }
      });