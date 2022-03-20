 // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var closeBtn = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      closeBtn.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      var errors = document.getElementById("errorMessage");
      var users = [
        {
          id: "123456789",
          createdDate: "2021-01-06T00:00:00.000Z",
          status: "En validation",
          firstName: "Mohamed",
          lastName: "Taha",
          userName: "mtaha",
          registrationNumber: "2584",
        },
        {
          id: "987654321",
          createdDate: "2021-07-25T00:00:00.000Z",
          status: "Validé",
          firstName: "Hamid",
          lastName: "Orrich",
          userName: "horrich",
          registrationNumber: "1594",
        },
        {
          id: "852963741",
          createdDate: "2021-09-15T00:00:00.000Z",
          status: "Rejeté",
          firstName: "Rachid",
          lastName: "Mahidi",
          userName: "rmahidi",
          registrationNumber: "3576",
        },
      ];

      function generateRandomId(length) {
        let result = "";
        const characters = "0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i += 1) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }

      function add() {
        errors.innerHTML = "";
        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let status = document.getElementById("status");
        let userNames = document.getElementById("userName");
        let date = document.getElementById("date");
        let registrationNumber = document.getElementById("registrationNumber");
        if (!firstName.value || !lastName.value || !registrationNumber.value || !status.value || !userName.value || !date.value) {
          errors.innerHTML = "tous les champs sont obligatoires";
          return;
        }
        users.push({
          id: generateRandomId(9),
          createdDate: date.value,
          status: status.value,
          firstName: firstName.value,
          lastName: lastName.value,
          userName: userNames.value,
          registrationNumber: registrationNumber.value,
        });

        buildTable(users);
        firstName.value = "";
        lastName.value = "";
        registrationNumber.value = "";
        status.value = "";
        date.value = "";
        userNames.value = "";
        modal.style.display = "none";
      }

      function deletes(id) {
        users = users.filter((x) => x.id != id);
        buildTable(users);
      }
      buildTable(users);

      function buildTable(data) {
        console.log(data);
        var table = document.getElementById("myTable");

        table.innerHTML = "";
        for (var i = 0; i < data.length; i++) {
          var row = `<tr>
            	<td>${data[i].id}</td>
            	<td>${data[i].createdDate.split("T")[0]}</td>
                     ${
                      data[i].status == "Validé"
                        ? `<td ><span class='valide'>${data[i].status}</span></td> `
                        : data[i].status == "En validation"
                        ? `<td ><span class='on-validation'>${data[i].status}</span></td> `
                        : `<td><span class='rejected'>${data[i].status}</span></td>`
                    }
                    
                     <td>${data[i].firstName}</td>
            	<td>${data[i].lastName}</td>
                      <td>${data[i].userName}</td>
            	<td>${data[i].registrationNumber}</td>
                    <td><i onClick='deletes(${
                      data[i].id
                    })' style="font-size:24px" class="fa">&#xf014;</i></td>
             </tr>`;

          table.innerHTML += row;
        }
      }