import { observable, action, computed, makeObservable } from 'mobx';
import logo from '../assets/images/logo.png'
import CircularJSON from 'circular-json';
class Bussiness {

    data = {
        id: "1",
        name: "M.Cohen properties",
        email: "mc@prop.com",
        address: "Halutzim St. 8 Pet",
        phone: "054-367-6754",
        owner: "M.Cohen",
        logo: logo,
        description: "Want to buy an apartment? rent? to hire? We will provide you with what you want! Property management is our forte! Hurry up to make an appointment!"
    }

    constructor() {
        makeObservable(this, {
            data: observable,
            getBussiness: computed,
            updateBussiness: action,
            createBussiness: action
        });
    }

    get getBussiness() {
        return this.data;
    }

    initialbusinessServices = async () => {

        const response = await fetch("http://localhost:8787/businessData");
        const data = await response.json();
        console.log(data);
       // Object.keys(data).length === 0 ?this.data =this.data:data
        this.data =Object.keys(data).length === 0 ? this.data : data//
    }
    updateBussiness(buss) {
        fetch('http://localhost:8787/businessData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: CircularJSON.stringify(buss)
        })
            .then(response => response.json())
            .then(data => {
                this.data = buss;
            })
            .catch(err => {
                console.log(err);
            });
    };

    createBussiness() {
        fetch('http://localhost:8787/businessData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buss)
        }).then(response => response.json()
        ).then(data => {
            this.data = buss;
        }).catch(err => {
            console.log(err);
        })
        console.log(createBussiness);
    }

};
export default new Bussiness();