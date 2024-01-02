import React, { useState } from 'react';
import { TextField, Button, DialogActions, DialogTitle, Dialog } from '@mui/material';
import { observer } from 'mobx-react';
import service from '../../store/service';
const AddNewService = (observer(() => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        imgService: '',
    }, []);
    const handleInputChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.name);
        console.log(formData.description);
        console.log(formData.price);
        console.log(formData.imgService);

        service.addServices(formData);
        setFormData((prevData) => ({
            ...prevData,
            name: '',
            description: '',
            price: '',
            imgService: '../src/assets/images/logo.jpg',
        }));
        handleClose();
    };
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleClickOpen}
                variant="contained"
                color="primary"
                >To add a service
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xs"
                fullWidth
                aria-labelledby="form-dialog-title"
                PaperProps={{ sx: { p: 4 } }}
            >
                <DialogTitle>Add a service</DialogTitle>

                <form onSubmit={handleSubmit} className="form">
                    
                    <TextField
                        id="name_input"
                        label="Service Name"
                        variant="outlined"
                        className="inputs"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="description_input"
                        label="Description"
                        variant="outlined"
                        className="inputs"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="price_input"
                        label="Price"
                        variant="outlined"
                        className="inputs"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        sx={{ mb: 3 }}
                        fullWidth
                        required
                    />
                    <TextField
                        id="outlined-disabled"
                        label="imgService"
                        defaultValue={'../src/assets/images/logo.jpg'}
                        //value='../src/assets/images/logo.jpg'
                        //value={formData.imgService}
                        variant="outlined"
                        className="inputs"
                        fullWidth
                        sx={{ mb: 3, mt: 3 }}
                        disabled
                    />
                   
                    {/* Submit button */}
                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}));

export default AddNewService;