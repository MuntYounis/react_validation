import { useFormik } from 'formik';
import axios from 'axios';
export default function Register() {

    const formik = useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:''
        },
        onSubmit: RegistrerUser
    });

    async function RegistrerUser(){
        const {data} =  await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,formik.values);
        console.log(data);
    }

return (
    <div>
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit}>
        <div className="form-floating mb-3">
            <input 
            type="text" 
            className="form-control" 
            onChange={formik.handleChange} 
            name="userName" 
            id="name" 
            value={formik.userName} 
            placeholder="" />

            <label htmlFor="floatingInput">User Name</label>
        </div>
        <div className="form-floating mb-3">
            <input 
            type="email" 
            className="form-control"
            onChange={formik.handleChange} 
            name='email'
            id="email" 
            value={formik.email}
            placeholder="" />
            <label htmlFor="floatingInput">User Email</label>
        </div>
        <div className="form-floating mb-3">
            <input 
            type="password" 
            className="form-control" 
            onChange={formik.handleChange}
            name='password'
            id="password" 
            value={formik.password}
            placeholder="" />
            <label htmlFor="floatingInput">User Password</label>
        </div>
        <button type='submit' className='btn btn-outline-info'> Register </button>

        </form>
    </div>
)
}
