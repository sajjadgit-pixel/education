document.addEventListener("alpine:init", () => {
  Alpine.data("usersData", function () {
    return {
      mainUsers: [],
      users: [],
      pageUsers: [],
      isload: false,
      addshowmodal: false,
      addshowshop: false,
      addsearch: false,
      pageCount: 1,
      itemsCount: 4,
      currentPage: 1,
      searchChar: "",
      newaddusers: {
        name: "",
        username: "",
        email: "",
      },
      getUsers() {
        this.isload = true;
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            console.log(res);
            this.mainUsers = res.data;
            this.users = res.data;
            this.pagination();
          })
          .finally(() => {
            this.isload = false;
          });
      },
      pagination() {
        this.pageCount = Math.ceil(this.users.length / this.itemsCount); //10/4=3
        let start = this.currentPage * this.itemsCount - this.itemsCount; //0
        let end = this.currentPage * this.itemsCount; //4
        this.pageUsers = this.users.slice(start, end);
        // console.log(this.pageUsers);
      },
      nextpage() {
        this.currentPage++;
        if (this.currentPage > this.pageCount)
          this.currentPage = this.pageCount;
        this.pagination();
      },
      backpage() {
        this.currentPage--;
        if (this.currentPage < 1) this.currentPage = 1;
        this.pagination();
      },
      handelChengItemCount(value) {
        this.currentPage = 1;
        if (value < 1) this.itemsCount = 1;
        if (value > this.users.length) this.itemsCount = this.users.length;
      },
      handleSearch(value) {
        this.users = this.mainUsers.filter(
          (user) => user.username.includes(value) || user.email.includes(value)
        );
        this.currentPage = 1;
        this.pagination();
      },
      handleSubmit() {
        this.isload = true;
        axios
          .post("https://jsonplaceholder.typicode.com/users", this.newaddusers)
          .then((res) => {
            console.log(res);
            if ((res.status = 201)) {
              this.mainUsers.push(res.data);
              this.addshowmodal = false;
              this.handleResetForm();
              this.pagination();
              M.toast({ html: "Users Created Succussfuly!", classes: "green" });
            }
          })
          .finally(() => {
            this.isload = false;
          });
      },
      handleResetForm() {
        this.newaddusers = {
          name: "",
          username: "",
          email: "",
        };
      },
      handleDeleteUsers(userid) {
        var toastHTML =
          "<span>Are you Sure?(" +
          userid +
          ')</span><button class="btn-flat toast-action "x-on:click="handleConfigurDelete(' +
          userid +
          ')">delete</button>';
        M.toast({ html: toastHTML, classes: "red" });
      },
      handleConfigurDelete(userid) {
        this.isload = true;
        axios
          .delete("https://jsonplaceholder.typicode.com/users" / +userid)
          .then((res) => {
            if ((res.status = 200)) {
              this.mainUsers = this.mainUsers.filter(
                (user) => user.id != userid
              );
              this.users = this.users.filter((user) => user.id != userid);
              this.pagination();
              M.toast({ html: "Users Delete Succussfuly!!", classes: "green" });
            }
          })
          .finally(() => {
            this.isload = false;
          });
      },
    };
  });
});
