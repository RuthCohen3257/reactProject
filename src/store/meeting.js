import Swal from 'sweetalert2';
import { observable, computed, action, makeObservable, runInAction } from 'mobx';

class Meetings {
    data = [];

    constructor() {
        makeObservable({
            data: observable,
            getMeeting: computed,
            addMeeting: action,
            deleteMeeting: action,
            updateMeeting: action
        })
         this.initMeeting();
    }

   
    initMeeting(){
        fetch('http://localhost:8787/appointments').then(response => response.json()).then(data => {
            this.data = data;
        }); 
    }

    get getMeeting() {
        return this.data;
    }

    addMeeting(meeting) {
        fetch("http://localhost:8787/appointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(meeting),
        })
            .then((response) => {
                if (response.status === 200) {
                    this.data.push(meeting);
                    console.log("Appointment added successfully!");
                    Swal.fire({
                        title: "Meeting scheduled",
                        text: "Your details have been successfully received",
                        icon: "success"
                    });
                } else {
                    console.log("Appointment is not available!");
                   
                        Swal.fire({
                            icon: "error",
                            title: "It is not possible to make an appointment!",
                            text: "Please Make an appointment at another time."
                          });
                }
            })
            .catch((error) => {
                console.error("Error adding appointment:", error);
            });
    }


}
export default new Meetings();

