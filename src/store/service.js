import { observable, computed, action, makeObservable, runInAction } from 'mobx';
import Swal from 'sweetalert2';
const service = {
    id: '',
    name: '',
    description: '',
    price: '',
    imgService: '',
}
class Service {
    servicesList = []
    
    constructor() {
        makeObservable(this, {
            servicesList: observable,
            getServices: computed,
            addServices: action,
            initialServices:action
        })

        this.initServiceData();
        if(this.servicesList.length===3){
            this.servicesList.map(s => this.addServices(s))
        }
    }

    initServiceData() {
        runInAction(() => {

            this.servicesList = [
                {
                    id: "11",
                    name: "Apartments for rent",
                    description: "Come see how you can save time and money!" +
                        "Design and programming of a marketing website for you that will convert and give you more"
                    ,
                    price: 500,
                    imgService:'../src/assets/images/img3.jpg'
                },
            
                {
                    id: "12",
                    name: "Homes for Sale",
                    description: "Come see how you can save time and money!" ,
                    price: 500,
                    imgService:"../src/assets/images/img2.jpg"
                },
                {
                    id: "13",
                    name: "Apartments for investment",
                    description: "Come see how you can save time and money!" ,
                    price: 500000,
                    imgService:"../src/assets/images/img1.jpg"
                }
            ]
        });
    }

    get getServices() {
        return this.servicesList;
    }


    addServices = async (newServiceDetails) => {
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(newServiceDetails),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            this.servicesList = ([...this.servicesList, newServiceDetails])
        
        Swal.fire({
            title: "Your request has been accepted",
            text: "The service was successfully added!",
            icon: "success"
        });
      }
      
    }
    initialServices = async () => {

        const response = await fetch("http://localhost:8787/services");
        const ser = await response.json();
        console.log(ser);
        //this.data = object.keys(data).length === 0 ? data : this.data;
        this.servicesList=([...ser])
        console.log("businessServices", this.servicesList)}
}
export default new Service()





