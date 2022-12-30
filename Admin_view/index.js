

axios.get("http://localhost:8083/employee")
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then((data) => {
          console.log(data);
        });

export default {
  data() {
    return {
      inputs: [],
      searchInput: "",
    };
  },
  methods: {
    openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    getData() {
      axios
        .get("https://localhost:44380/Home/GetTeam")
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then((data) => {
          this.inputs = data;
        });
    },
    deleteMember(id) {
      console.log(id);
      axios.delete(`https://localhost:44380/Home/DeleteMember?id=${id}`);
      location.reload();
    },
    searchMember() {
      axios
        .get(`https://localhost:44380/Home/FindMember?name=${this.searchInput}`)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .then((data) => {
          this.inputs = data;
        });
    },
    RefactorDate(unixDate) {
      var date = new Date(unixDate * 1000);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var namedMonth;
      if (month == 1) namedMonth = " January ";
      if (month == 2) namedMonth = " February ";
      if (month == 3) namedMonth = " March ";
      if (month == 4) namedMonth = " April ";
      if (month == 5) namedMonth = " May ";
      if (month == 6) namedMonth = " June ";
      if (month == 7) namedMonth = " July ";
      if (month == 8) namedMonth = " August ";
      if (month == 9) namedMonth = " September ";
      if (month == 10) namedMonth = " October ";
      if (month == 11) namedMonth = " November ";
      if (month == 12) namedMonth = " December ";
      return day + namedMonth + year;
    },
  },
  mounted() {
    this.getData();
  },
};