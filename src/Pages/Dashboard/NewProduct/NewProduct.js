import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import "./NewProduct.css"

const NewProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    // alert 
    const showAlert = () => {
        swal({
            title: "Succesfully Added!",
            text: "Go to Explore to see your added product now!",
            icon: "success",
            button: "Okey",
        })
    }

    const onSubmit = data => {
        axios.post('https://glacial-sands-61817.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    showAlert();
                    reset();
                }
            })
    }

    return (
        <div className="quality">
            <div className="package-adder shadow p-2 my-5">
                <h3 className="my-4">Add A New Product<span class="badge bg-dark rounded-pill ms-2">New</span></h3>
                <hr />
                <form className="py-5" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Product Title" type="text" {...register("title", { required: true })} />
                    <input placeholder="Image Url" type="text" {...register("img1", { required: true })} />
                    <textarea placeholder="Short Description"  {...register("detailsdes", { required: true })} />
                    <textarea placeholder="Full Description"  {...register("shortdes", { required: true })} />
                    <input placeholder="Price" type="number" {...register("price", { required: true })} />
                    <input placeholder="Brand" type="text" {...register("brand", { required: true })} />
                    <input placeholder="Availability " type="text" {...register("availability", { required: true })} />
                    <input placeholder="Tags " type="text" {...register("Tags", { required: true })} />
                    <input className="btn-dark" type="submit" value="CREATE PACKAGE" />
                </form>
            </div>
        </div>
    );
};

export default NewProduct;