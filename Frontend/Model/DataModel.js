
class DataModel{
    constructor(){
        axios.defaults.baseURL="http://127.0.0.1:5500/";
    }

    getData(APIroute, callback){
        axios
            .get(APIroute)
            .then(function (response){
                callback(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
            .finally(function (){
                let itemID = document.getElementById("submit");
                itemID.value = "";
                document.getElementById("submit").value = "Küldés";
            });
    }

    postData(APIroute, data)
    {
        axios
            .post(APIroute, data)
            .then(function (response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
    }

    putData(APIroute, data){
        axios
            .put(`${APIroute}/${data.id}`, data)
            .then(function(response){
                console.log(response);
            })
    }

    deleteData(APIroute, data, refreshCallback){
        axios
            .delete(`${APIroute}/${data.id}`)
            .then(function(response){
                refreshCallback();
            })
            .catch(function (error){
                console.log(error);
            })
    }
}

export default DataModel;