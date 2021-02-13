<template>
  <div>
    <table>
      <tr>
        <td>编号</td>
        <td>书名</td>
        <td>作者</td>
      </tr>
      <tr v-for="book in books">
        <td>{{book.id}}</td>
        <td>{{book.name}}</td>
        <td>{{book.author}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Book",
  data(){
    return{
      msg: "Vue!",
      books: [
        {
          id: 1,
          name: "abc",
          author: "usher"
        },
        {
          id: 2,
          name: "def",
          author: "lambert"
        },
        {
          id: 1,
          name: "jkl",
          author: "adel"
        }
      ]
    }
  },
  methods: {
    getData: function (){
      let _this = this
      let url = _this.serverURL
      _this.$axios.get(url).then(function (response){
        // console.log(response)
        _this.books = response.data
      })
    }
  },
  created: function () {
    this.getData()
  }
}
</script>

<style scoped>

</style>